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
  const key = kind => `phanty-${kind}-onboarding-${kind === 'canvas' ? 'v3' : 'v1'}`;
  const isSeen = kind => {
    if (seen.has(kind)) return true;
    try { return Boolean(localStorage.getItem(key(kind))); } catch (_) { return false; }
  };
  const visible = el => Boolean(el && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
  const scene = () => visible(workflow) ? 'workflow' : visible(canvasView) && !canvasView.classList.contains('is-share-view') ? 'canvas' : null;
  const modalOpen = () => [...document.querySelectorAll('.modal-backdrop.is-open, .canvas-action-modal, .canvas-history-modal')].some(visible);
  const replay = document.createElement('button');
  replay.type = 'button';
  replay.className = 'topbar-tour-trigger';
  replay.hidden = true;
  document.getElementById('recharge-center-trigger').before(replay);

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
    const node = canvasStage.querySelector(`.canvas-image-node[data-node-id="${session.nodeId}"]`);
    const steps = [
      { target: canvasStage.querySelector('[data-canvas-action="toggle-add-panel"]'), title: '认识画布中的节点', text: '节点是画布中的创作单元。点击「添加节点」，看看可以放入哪些内容。', side: 'right', interactive: true },
      { target: canvasStage.querySelector('.canvas-add-panel'), title: '选择适合的节点', text: '文本节点用来写脚本和描述，图片节点承载画面，视频节点承载动态内容，音频节点承载音乐与配音。也可以上传已有素材。', side: 'right', next: '添加一个图片节点', interactive: false },
      { target: canvasStage.querySelector('[data-canvas-action="create-image-node"]'), title: '先添加一个图片节点', text: '点击「图片」，我们用一个图片节点来认识画布的操作区域。', side: 'right', interactive: true },
      { target: node?.querySelector('.canvas-floating-toolbar'), title: '上方是工具栏', text: '选中节点后，上方会显示相关工具，例如反推、全景、洗图和工具箱。可以从这里对当前图片继续处理和创作。', side: 'top', next: '下一步', interactive: false },
      { target: node?.querySelector('.canvas-node-image-frame'), title: '中间是图片区域', text: '这里展示当前节点的图片，方便查看画面内容。节点标题在图片上方，拖动标题可以调整节点在画布中的位置。', side: 'right', next: '下一步', interactive: false },
      { target: node?.querySelector('.canvas-node-textarea'), title: '下方填写提示词', text: '在这里描述你想要的画面，例如主体、场景、构图和风格。可以先试着修改这段文字，再继续了解参数区域。', side: 'right', next: '下一步', interactive: true },
      { target: node?.querySelector('.canvas-node-footer-row'), title: '底部是参数区域', text: '这里集中展示模型、画面比例、分辨率和生成数量，右侧的摄像机入口可调整镜头参数。接下来，我们添加一个文本节点，看看节点如何连在一起。', side: 'right', next: '看看节点连线', interactive: false },
      { target: document.getElementById('canvas-board'), title: '节点之间可以连线', text: '已自动添加一个文本节点，并将它连接到图片节点。连线用来表达内容之间的关联，例如这段文字是图片的创作描述。你可以用这样的方式组织自己的创作流程。', side: 'bottom', next: '完成', interactive: false },
    ];
    return { ...steps[session.index], total: steps.length };
  }
  function start(kind) {
    if (!kind || session || document.body.classList.contains('driver-active') || modalOpen()) return;
    seen.add(kind);
    try { localStorage.setItem(key(kind), 'started'); } catch (_) { /* Optional persistence. */ }
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
    if (session.index === currentStep().total - 1) { finish('complete'); return; }
    if (session.kind === 'canvas' && session.index === 6 && !addConnectedText()) return;
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
    canvasStage.querySelectorAll('.canvas-text-node[data-node-id^="onboarding-overview-text-"] .canvas-text-node-label').forEach(label => {
      if (label.textContent !== '创作描述') label.textContent = '创作描述';
    });
    const kind = scene();
    if (session && (kind !== session.kind || location.hash !== session.route)) stop();
    const blocked = modalOpen();
    replay.hidden = !kind || Boolean(session) || blocked || document.body.classList.contains('driver-active');
    replay.textContent = '新手引导';
    replay.setAttribute('aria-label', '新手引导');
    if (!session) {
      if (kind && !isSeen(kind) && !blocked) start(kind);
      return;
    }
    if (blocked) { stop(); return; }
    if (session.kind === 'canvas') {
      if (session.index === 0 && visible(canvasStage.querySelector('.canvas-add-panel'))) session.index = 1;
      if ((session.index === 1 || session.index === 2) && !visible(canvasStage.querySelector('.canvas-add-panel'))) session.index = 0;
      if (session.index >= 3 && !currentStep()?.target) session.index = 0;
    }
    show();
  }
  function addConnectedText() {
    const canvas = currentCanvas();
    const image = canvas?.nodes.find(node => node.id === session.nodeId);
    const board = document.getElementById('canvas-board');
    if (!image || !board) return false;
    const text = createTextNode({ id: `onboarding-overview-text-${Date.now()}`, name: '创作描述 · 连线示例', text: image.prompt,
      x: image.x - 730, y: image.y });
    canvas.nodes.push(text);
    canvas.connections.push({ id: `onboarding-link-${Date.now()}`, from: text.id, to: image.id });
    session.outputId = text.id;
    // Fit both demo nodes, reserving space below them for the final bubble.
    canvas.viewport.scale = Math.min(0.75, (board.clientWidth - 160) / 1380, (board.clientHeight - 320) / 640);
    canvas.viewport.scale = Math.max(0.15, canvas.viewport.scale);
    canvas.viewport.x = board.clientWidth / 2 - (text.x + 690) * canvas.viewport.scale;
    canvas.viewport.y = 100 - (image.y - 70) * canvas.viewport.scale;
    renderCanvasDetail();
    saveProjectsState();
    return true;
  }
  // Only the guided image action is intercepted; other canvas actions remain unchanged.
  canvasStage.addEventListener('click', event => {
    if (scene() !== 'canvas' || session?.kind !== 'canvas' || session.index !== 2) return;
    const button = event.target.closest('[data-canvas-action="create-image-node"]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const canvas = currentCanvas();
    const board = document.getElementById('canvas-board');
    if (!canvas || !board) return;
    const node = createImageNode({ name: '图片节点 · 引导示例',
      image: './assets/images/project-neon-tokyo.jpg',
      prompt: '水墨风格的山间远景，一位旅人行走在小径上。远处群山隐入薄雾，黑白灰色调，留白构图，安静而辽阔。',
      x: (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale - 240,
      y: (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale - 180 });
    canvas.nodes.push(node);
    canvas.selectedNodeId = node.id;
    session.nodeId = node.id;
    session.index = 3;
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
