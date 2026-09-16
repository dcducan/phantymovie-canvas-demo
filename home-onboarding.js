/* Homepage-only tour. Observes the existing UI; never creates or edits project data. */
(() => {
  const storageKey = "phanty-home-onboarding-v1";
  const home = document.getElementById("home-view");
  const createModal = document.getElementById("create-modal");
  const modeModal = document.getElementById("project-mode-modal");
  const startButton = home?.querySelector(".home-entry-start:not(:disabled)");
  if (!home || !createModal || !modeModal || !startButton) return;

  let dismissed = false;
  try { dismissed = Boolean(localStorage.getItem(storageKey)); } catch (_) { /* Private browsing. */ }
  let active = !dismissed;
  let step = 0;
  let frame = 0;
  let highlighted = null;
  let guideShell = null;
  const card = document.createElement("aside");
  card.className = "home-tour-card";
  card.setAttribute("aria-label", "产品首页新手引导");
  card.setAttribute("aria-live", "polite");
  card.hidden = true;
  document.body.append(card);
  const spotlight = document.createElement("div");
  spotlight.className = "home-tour-spotlight";
  spotlight.hidden = true;
  spotlight.setAttribute("aria-hidden", "true");
  document.body.append(spotlight);
  const replay = document.createElement("button");
  replay.type = "button";
  replay.className = "home-tour-replay";
  replay.textContent = "新手引导";
  replay.setAttribute("aria-label", "重新查看产品首页新手引导");
  home.querySelector(".home-heading").append(replay);

  const copy = {
    1: ["创建你的第一个项目", "点击「开始」，为你的影视创作建立一个项目。", "点击高亮按钮继续"],
    2: ["设置项目信息", "填写项目名称，选择画面比例和视觉风格，然后点击「创建项目」。", "创建成功后进入下一步"],
    3: ["选择你的创作方式", "工作流：按剧本、资产、关键帧和视频逐步制作。无限画布：通过节点自由组织创作。全自动 AI 生成即将开放。", "工作流与无限画布可在项目内切换，共享项目资产。"],
  };
  const isOpen = (modal) => modal.classList.contains("is-open");
  const homeVisible = () => !home.classList.contains("is-hidden") && home.getClientRects().length > 0;
  function clearHighlight() {
    highlighted?.classList.remove("home-tour-target");
    guideShell?.classList.remove("home-tour-shell");
    highlighted = guideShell = null;
    spotlight.hidden = true;
  }
  function hide() {
    clearHighlight();
    card.hidden = true;
    step = 0;
  }
  function finish(status) {
    active = false;
    try { localStorage.setItem(storageKey, status); } catch (_) { /* Tour still works without storage. */ }
    hide();
  }
  function position() {
    if (step !== 1 || card.hidden) return;
    const bounds = startButton.getBoundingClientRect();
    const padding = 7;
    Object.assign(spotlight.style, {
      left: `${bounds.left - padding}px`, top: `${bounds.top - padding}px`,
      width: `${bounds.width + padding * 2}px`, height: `${bounds.height + padding * 2}px`,
    });
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    const left = Math.max(12, Math.min(innerWidth - width - 12, bounds.left));
    const below = bounds.bottom + 20;
    const top = below + height < innerHeight - 12 ? below : Math.max(12, bounds.top - height - 20);
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  }
  function show(next) {
    if (step === next) { position(); return; }
    clearHighlight();
    step = next;
    const [title, description, hint] = copy[next];
    card.innerHTML = `<div class="home-tour-top"><span>新手引导 · ${next} / 3</span><button type="button" class="home-tour-skip">跳过引导</button></div><h3>${title}</h3><p>${description}</p><div class="home-tour-bottom"><span class="home-tour-dots" aria-hidden="true">${[1, 2, 3].map(n => `<i class="${n <= next ? "is-active" : ""}"></i>`).join("")}</span><small>${hint}</small></div>`;
    card.querySelector("button").addEventListener("click", () => {
      finish("skipped");
      if (next === 1) replay.focus({ preventScroll: true });
      else (next === 2 ? document.getElementById("project-name-input") : modeModal.querySelector("[data-project-mode]:not(:disabled)")).focus({ preventScroll: true });
    });
    card.hidden = false;
    card.classList.toggle("is-floating", next === 1);
    card.style.left = card.style.top = "";
    if (next === 1) {
      document.body.append(card);
      spotlight.hidden = false;
      startButton.scrollIntoView({ block: "center", behavior: "instant" });
      position();
    } else {
      const modal = next === 2 ? createModal : modeModal;
      guideShell = modal.querySelector(".modal-shell");
      guideShell.classList.add("home-tour-shell");
      guideShell.querySelector(".modal-header").after(card);
      highlighted = modal.querySelector(next === 2 ? ".confirm-footer-pill" : ".project-mode-grid");
      highlighted.classList.add("home-tour-target");
    }
  }
  function sync() {
    frame = 0;
    replay.hidden = !homeVisible();
    if (!active) return;
    if (step === 3 && !isOpen(modeModal)) {
      // Leaving mode selection ends this introduction, without touching navigation.
      finish("seen");
      return;
    }
    const otherModal = [...document.querySelectorAll(".modal-backdrop.is-open")].some(el => el !== createModal && el !== modeModal && el.getClientRects().length > 0);
    if (otherModal) { hide(); return; }
    if (isOpen(modeModal) && (step === 2 || step === 3)) { show(3); return; }
    if (!homeVisible()) { hide(); return; }
    if (isOpen(createModal) && document.getElementById("create-title").textContent === "创建新项目") { show(2); return; }
    if (isOpen(modeModal)) { hide(); return; }
    show(1);
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(sync);
  }
  // Observe only existing view/modal visibility, not the tour's own DOM changes.
  const observer = new MutationObserver(schedule);
  [home, ...document.querySelectorAll(".modal-backdrop")].forEach(el => observer.observe(el, { attributes: true, attributeFilter: ["class"] }));
  replay.addEventListener("click", () => { active = true; hide(); sync(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && active && step) finish("skipped");
  });
  window.addEventListener("resize", position);
  document.addEventListener("scroll", position, true);
  window.addEventListener("hashchange", schedule);
  sync();
})();
