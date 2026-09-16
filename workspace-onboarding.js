/* Additional tours observe existing UI only and reuse the approved homepage theme. */
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
  const key = kind => `phanty-${kind}-onboarding-v1`;
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
    const node = session.nodeId ? [...canvasStage.querySelectorAll('.canvas-image-node')].find(el => el.dataset.nodeId === session.nodeId) : null;
    const steps = [
      { target: canvasStage.querySelector('[data-canvas-action="toggle-add-panel"]'), title: '添加你的第一个节点', text: '点击高亮的「添加节点」，选择要放入画布的内容。', side: 'right', interactive: true },
      { target: canvasStage.querySelector('[data-canvas-action="create-image-node"]'), title: '先添加一个图片节点', text: '点击「图片」添加一个节点。这里也支持文本、视频、音频以及上传已有资源。', side: 'right', interactive: true },
      { target: node?.querySelector('.canvas-node-titlebar'), title: '认识画布节点', text: '节点承载你的创作内容。拖动标题可以调整位置，节点两侧的「＋」可以添加相邻节点。接下来试试通过工具自动串联节点。', side: 'top', next: '试试串联', interactive: false },
      { target: node?.querySelector('[data-toolbar-action="panorama"]'), title: '从当前节点继续创作', text: '点击「全景」，由这张图片创建全景节点。系统会自动连接来源图片与新节点，保留它们的关联。', side: 'top', interactive: true },
      { target: canvasStage.querySelector('.canvas-bottom-dock'), title: '节点已串联', text: '图片节点与全景节点之间已自动建立连线。点击「−」缩小画布，可以查看两个节点及连线；后续可从全景节点继续截图，扩展创作。', side: 'top', next: '完成', interactive: true },
    ];
    return { ...steps[session.index], total: steps.length };
  }
  function start(kind) {
    if (!kind || session || document.body.classList.contains('driver-active') || modalOpen()) return;
    session = { kind, index: 0, route: location.hash, initialNodes: new Set([...canvasStage.querySelectorAll('.canvas-image-node')].map(el => el.dataset.nodeId)), initialLinks: new Set([...canvasStage.querySelectorAll('[data-connection-id]')].map(el => el.dataset.connectionId)), nodeId: null };
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
    if (session.index === (session.kind === 'workflow' ? 5 : 4)) { finish('complete'); return; }
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
      if (session.index === 1) {
        const newNode = [...canvasStage.querySelectorAll('.canvas-image-node')].find(el => !session.initialNodes.has(el.dataset.nodeId));
        if (newNode) { session.nodeId = newNode.dataset.nodeId; session.index = 2; }
        else if (!visible(canvasStage.querySelector('.canvas-add-panel'))) session.index = 0;
      }
      if (session.index === 3 && [...canvasStage.querySelectorAll('[data-connection-id]')].some(el => !session.initialLinks.has(el.dataset.connectionId))) session.index = 4;
      if (session.index >= 2 && session.index <= 3 && !currentStep()?.target) {
        // If the source node disappears, restart at the existing add entrance.
        session.index = 0;
        session.initialNodes = new Set([...canvasStage.querySelectorAll('.canvas-image-node')].map(el => el.dataset.nodeId));
      }
    }
    show();
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(sync); }
  const observer = new MutationObserver(schedule);
  [workflow, canvasView, document.body, ...document.querySelectorAll('.modal-backdrop')].forEach(el => observer.observe(el, { attributes: true, attributeFilter: ['class'] }));
  observer.observe(canvasStage, { childList: true, subtree: true });
  replay.addEventListener('click', () => start(scene()));
  window.addEventListener('hashchange', schedule);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && session) finish('skipped'); });
  schedule();
})();
