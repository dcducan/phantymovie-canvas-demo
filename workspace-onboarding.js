/* Tours reuse the approved homepage theme; demo actions are limited to onboarding nodes. */
(() => {
  if (!window.driver?.js?.driver) return;
  const workflow = document.getElementById('workflow-home-view');
  const canvasView = document.getElementById('canvas-detail-view');
  const canvasStage = document.getElementById('canvas-stage');
  let session = null;
  let frame = 0;
  let renderedTarget = null;
  let renderedStep = -1;
  const seen = new Set();
  const key = kind => `phanty-${kind}-onboarding-${kind === 'canvas' ? 'v2' : 'v1'}`;
  const isSeen = kind => {
    if (seen.has(kind)) return true;
    try { return Boolean(localStorage.getItem(key(kind))); } catch (_) { return false; }
  };
  const visible = el => Boolean(el && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
  const scene = () => visible(workflow) ? 'workflow' : visible(canvasView) && !canvasView.classList.contains('is-share-view') ? 'canvas' : null;
  const modalOpen = () => [...document.querySelectorAll('.modal-backdrop.is-open, .canvas-action-modal, .canvas-history-modal')].some(visible);
  const replay = document.createElement('button');
  replay.type = 'button';
  replay.className = 'home-tour-replay';
  replay.hidden = true;
  document.body.append(replay);

  const workflowSteps = [
    ['quick', '快捷创作', '第一次创作，可以从这里开始。按剧本分析、准备项目资产、生成整场多宫格关键帧、进入视频制作四步推进，并随时查看进度。'],
    ['script', '剧本分析', '在这里查看整理后的剧本、资产清单和分镜脚本，并准备分镜提示词，把故事拆解为可制作的镜头。'],
    ['assets', '项目资产库', '这里用于集中承接角色、服装、场景和道具等项目资产，为后续镜头制作提供参考。'],
    ['studio', '拍摄台', '按集、场和镜头进行关键帧生成、视频制作与配音配乐，并在时间线中组织片段。'],
    ['model-chat', '模型对话广场', '通过对话进行文本创作、图片或视频生成。也可以上传素材作为参考，辅助你的创作。'],
    ['recycle', '生成历史', '在这里查找之前生成的图片、视频和音频，进行预览和下载。现在可以从快捷创作开始。'],
  ];
  const tour = window.driver.js.driver({
    animate: !matchMedia('(prefers-reduced-motion: reduce)').matches,
    duration: 280, overlayColor: '#000000', overlayOpacity: .68,
    stagePadding: 7, stageRadius: 12, popoverOffset: 16,
    popoverClass: 'home-tour-popover', allowKeyboardControl: false,
    overlayClickBehavior: () => {}, onDestroyStarted: () => finish('skipped'),
    onPopoverRender(popover) {
      const item = currentStep();
      popover.arrow.style.pointerEvents = 'none';
      popover.wrapper.setAttribute('aria-label', session?.kind === 'workflow' ? '工作流新手引导' : '画布新手引导');
      const meta = document.createElement('div');
      meta.className = 'home-tour-footer-meta';
      const progress = popover.description.querySelector('.home-tour-progress');
      if (progress) meta.append(progress);
      popover.footer.prepend(meta);
      popover.footer.style.display = 'flex';
      popover.previousButton.style.display = session?.kind === 'workflow' && session.index > 0 ? 'block' : 'none';
      popover.nextButton.style.display = item?.next ? 'block' : 'none';
      popover.closeButton.textContent = '跳过';
      popover.closeButton.setAttribute('aria-label', '跳过引导');
    },
  });
  function currentStep() {
    if (!session) return null;
    if (session.kind === 'workflow') {
      const [id, title, text] = workflowSteps[session.index];
      return { target: workflow.querySelector(`[data-workflow-page="${id}"]`), title, text, next: session.index === 5 ? '开始创作' : '下一步', total: 6, side: 'right', interactive: false };
    }
    const source = canvasStage.querySelector(`[data-node-id="${session.nodeId}"]`);
    const output = canvasStage.querySelector(`.canvas-image-node[data-node-id="${session.outputId}"]`);
    const steps = [
      { target: canvasStage.querySelector('[data-canvas-action="toggle-add-panel"]'), title: '从一句描述开始', text: '一起完成「文本 → 图片」的创作过程。点击「添加节点」，先放入一个文本节点。', side: 'right', interactive: true },
      { target: canvasStage.querySelector('[data-canvas-action="create-node"]'), title: '添加文本节点', text: '点击「文本」，我们会自动填入一段水墨山行的关键帧描述，你也可以继续修改。', side: 'right', interactive: true },
      { target: source?.querySelector('.canvas-text-node-editor'), title: '写下你的关键帧', text: '描述已经填好了：人物、场景、构图和画面风格，都是创作的起点。可以修改文字，再将它连接到图片节点。', side: 'right', next: '连接图片节点', interactive: true },
      { target: source?.querySelector('.canvas-node-side-anchor.is-right'), title: '把描述连接到图片', text: '点击右侧「＋」。本次引导会添加一个图片节点、自动建立连线，并带入你的文字描述。', side: 'right', interactive: true },
      { target: output?.querySelector('.canvas-node-prompt-card'), title: '生成示例关键帧', text: '描述已经传入图片节点。点击右下角发送按钮，查看水墨山行示例。当前为演示预览，未调用真实模型，修改描述不会改变示例图片。', side: 'left', interactive: true },
      { target: output?.querySelector('.canvas-node-image-frame'), title: '你的创作链路已连通', text: '文本描述 → 连线 → 图片，你已经完成一次关键帧创作演练。这里展示的是预置示例；完成后可缩小画布，查看两个节点之间的关联。', side: 'left', next: '完成', interactive: true },
    ];
    return { ...steps[session.index], total: steps.length };
  }
  function start(kind) {
    if (!kind || session || document.body.classList.contains('driver-active') || modalOpen()) return;
    session = { kind, index: 0, route: location.hash, nodeId: null, outputId: null };
    show();
  }
  function stop() {
    session = null;
    renderedTarget = null;
    renderedStep = -1;
    tour.destroy();
  }
  function finish(status) {
    if (!session) return;
    seen.add(session.kind);
    try { localStorage.setItem(key(session.kind), status); } catch (_) { /* Optional persistence. */ }
    stop();
    schedule();
  }
  function next() {
    if (!session) return;
    if (session.index === 5) { finish('complete'); return; }
    session.index++;
    show();
  }
  function show() {
    const item = currentStep();
    if (!item || !visible(item.target)) return;
    if (renderedTarget === item.target && renderedStep === session.index && tour.isActive()) return;
    renderedTarget = item.target;
    renderedStep = session.index;
    const number = session.index + 1;
    const previous = session.kind === 'workflow' && session.index > 0;
    tour.highlight({ element: item.target, disableActiveInteraction: !item.interactive, popover: {
      title: `<span class="home-tour-title-content"><span class="home-tour-title-icon" aria-hidden="true"></span><span>${item.title}</span></span>`,
      description: `<div class="home-tour-progress" role="status" aria-label="第 ${number} 步，共 ${item.total} 步">${String(number).padStart(2, '0')}/${String(item.total).padStart(2, '0')}</div>${item.text}`,
      side: item.side, align: 'center', showButtons: ['close', ...(previous ? ['previous'] : []), ...(item.next ? ['next'] : [])],
      nextBtnText: item.next || '下一步', prevBtnText: '上一步',
      onNextClick: next, onPrevClick: () => { if (session && session.index > 0) { session.index--; show(); } }, onCloseClick: () => finish('skipped'),
    }});
    replay.hidden = true;
  }
  function sync() {
    frame = 0;
    decorateDemoNodes();
    const kind = scene();
    if (session && (kind !== session.kind || location.hash !== session.route)) stop();
    const blocked = modalOpen();
    replay.hidden = !kind || Boolean(session) || blocked || document.body.classList.contains('driver-active');
    replay.textContent = kind === 'workflow' ? '工作流引导' : '画布引导';
    replay.setAttribute('aria-label', kind === 'workflow' ? '重新查看工作流引导' : '重新查看画布引导');
    if (!session) {
      if (kind && !isSeen(kind) && !blocked) start(kind);
      return;
    }
    if (blocked) { stop(); return; }
    if (session.kind === 'canvas') {
      if (session.index === 0 && visible(canvasStage.querySelector('.canvas-add-panel'))) session.index = 1;
      if (session.index === 1 && !visible(canvasStage.querySelector('.canvas-add-panel'))) session.index = 0;
      if (session.index >= 2 && !currentStep()?.target) session.index = 0;
    }
    show();
  }
  const examplePrompt = '水墨电影关键帧，远景。一位身着深色衣服的旅人独自行走在山间斜坡小径上，远处层叠山峦隐入薄雾，松树点缀山间。黑白灰水墨质感，大面积留白，画面左上方有写意书法墨迹，安静而辽阔，16:9 横向构图。';
  const demoPrefix = 'onboarding-keyframe-';
  function decorateDemoNodes() {
    canvasStage.querySelectorAll('.canvas-canvas-node').forEach(el => {
      if (!el.dataset.nodeId?.startsWith(demoPrefix)) return;
      const label = el.querySelector('.canvas-text-node-label');
      if (label && label.textContent !== '关键帧描述 · 引导示例') label.textContent = '关键帧描述 · 引导示例';
      const send = el.querySelector('.canvas-node-send-button');
      if (send) {
        send.setAttribute('aria-label', '生成示例关键帧');
        send.title = '展示预置示例（未调用真实模型）';
      }
    });
  }
  // Capture only the guided actions; ordinary canvas nodes retain their existing behavior.
  canvasStage.addEventListener('click', event => {
    if (scene() !== 'canvas') return;
    const button = event.target.closest('button');
    if (!button) return;
    const guided = session?.kind === 'canvas';
    const addText = guided && session.index === 1 && button.dataset.canvasAction === 'create-node';
    const connect = guided && session.index === 3 && button.dataset.nodeId === session.nodeId && button.dataset.nodeAction === 'add-near' && button.dataset.nodeSide === 'right';
    const generate = button.classList.contains('canvas-node-send-button') && button.dataset.nodeId?.startsWith(demoPrefix);
    if (!addText && !connect && !generate) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const canvas = currentCanvas();
    const board = document.getElementById('canvas-board');
    if (!canvas || !board) return;
    let node;
    if (addText) {
      node = createTextNode({ id: `${demoPrefix}text-${Date.now()}`, name: '关键帧描述 · 引导示例', text: examplePrompt,
        x: (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale - 240,
        y: (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale - 180 });
      canvas.nodes.push(node);
      session.nodeId = node.id;
      session.index = 2;
    } else if (connect) {
      const source = canvas.nodes.find(item => item.id === session.nodeId);
      if (!source) return;
      node = createImageNode({ id: `${demoPrefix}image-${Date.now()}`, name: '关键帧 · 待生成示例', prompt: source.text,
        image: './assets/images/onboarding-keyframe-placeholder.svg', x: source.x + 730, y: source.y });
      node.model = '引导演示';
      node.outputCount = '1张';
      node.likes = 0;
      node.resolution = '待生成示例';
      canvas.nodes.push(node);
      canvas.connections.push({ id: `onboarding-link-${Date.now()}`, from: source.id, to: node.id });
      session.outputId = node.id;
      session.index = 4;
    } else {
      node = canvas.nodes.find(item => item.id === button.dataset.nodeId);
      if (!node) return;
      node.image = './assets/images/project-neon-tokyo.jpg';
      node.name = '关键帧 · 预置示例（非实时生成）';
      node.resolution = '775 × 432';
      if (guided && session.index === 4 && session.outputId === node.id) session.index = 5;
    }
    canvas.selectedNodeId = node.id;
    closeCanvasPopups();
    renderCanvasDetail();
    centerViewportOnNode(node.id);
    saveProjectsState();
    schedule();
  }, true);
  function schedule() { if (!frame) frame = requestAnimationFrame(sync); }
  const observer = new MutationObserver(schedule);
  [workflow, canvasView, document.body, ...document.querySelectorAll('.modal-backdrop')].forEach(el => observer.observe(el, { attributes: true, attributeFilter: ['class'] }));
  observer.observe(canvasStage, { childList: true, subtree: true });
  replay.addEventListener('click', () => start(scene()));
  window.addEventListener('hashchange', schedule);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && session) finish('skipped'); });
  schedule();
})();
