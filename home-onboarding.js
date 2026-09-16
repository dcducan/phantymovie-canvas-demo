/* Driver.js 1.8.0. Tour UI only; existing project creation/navigation stays untouched. */
(() => {
  const home = document.getElementById("home-view");
  const createModal = document.getElementById("create-modal");
  const modeModal = document.getElementById("project-mode-modal");
  const startButton = home?.querySelector(".home-entry-start:not(:disabled)");
  if (!startButton || !window.driver?.js?.driver) return;
  const storageKey = "phanty-home-onboarding-v1";
  let active = true;
  try { active = !localStorage.getItem(storageKey); } catch (_) { /* Optional persistence. */ }
  let step = 0;
  let frame = 0;
  const replay = document.createElement("button");
  replay.type = "button";
  replay.className = "home-tour-replay";
  replay.textContent = "新手引导";
  replay.setAttribute("aria-label", "重新查看产品首页新手引导");
  document.body.append(replay);
  const steps = [null,
    { element: startButton, title: "创建你的第一个项目", text: "点击高亮的「开始」，为你的影视创作建立一个项目。", side: "bottom" },
    { element: "#project-name-input", title: "给项目起个名字", text: "填写项目名称，方便之后在项目管理中找到它。", next: "设置画面比例" },
    { element: "#ratio-section", title: "选择画面比例", text: "根据作品的展示方式，选择横屏、竖屏或正方形。", next: "选择视觉风格" },
    { element: "#style-section", title: "选择视觉风格", text: "选择适合这部作品的视觉风格，例如写实主义、动漫风格或电影感。", next: "准备创建" },
    { element: "#confirm-create-trigger", title: "创建项目", text: "设置完成后，点击高亮的「创建项目」。接下来选择创作模式。", side: "top" },
    { element: "#project-mode-modal .project-mode-grid", title: "选择你的创作模式", text: "根据你的创作需求，选择合适的模式开始创作。三种模式共享项目资产，后续可随时切换。", side: "bottom" },
  ];
  const tour = window.driver.js.driver({
    animate: !matchMedia("(prefers-reduced-motion: reduce)").matches,
    duration: 280, overlayColor: "#000000", overlayOpacity: 0.68,
    stagePadding: 7, stageRadius: 12, popoverOffset: 16,
    popoverClass: "home-tour-popover", allowKeyboardControl: false,
    overlayClickBehavior: () => {},
    onDestroyStarted: () => finish("skipped"),
    onPopoverRender: (popover) => {
      popover.wrapper.setAttribute("aria-label", "产品首页新手引导");
      popover.closeButton.textContent = "跳过";
      popover.closeButton.setAttribute("aria-label", "跳过引导");
    },
  });
  const isOpen = modal => modal.classList.contains("is-open");
  const homeVisible = () => !home.classList.contains("is-hidden") && home.getClientRects().length > 0;
  function hide() { step = 0; tour.destroy(); }
  function finish(status) {
    active = false;
    try { localStorage.setItem(storageKey, status); } catch (_) { /* Optional persistence. */ }
    hide();
    sync();
  }
  function show(next) {
    if (step === next && tour.isActive()) return;
    step = next;
    const item = steps[next];
    const total = steps.length - 1;
    const progress = `<div class="home-tour-progress" role="status" aria-label="第 ${next} 步，共 ${total} 步">${String(next).padStart(2, "0")}/${String(total).padStart(2, "0")}</div>`;
    tour.highlight({ element: item.element, popover: {
      title: item.title,
      description: `${progress}${item.text}`,
      side: item.side || "right", align: "center",
      showButtons: ["close", ...(next > 2 && next < 6 ? ["previous"] : []), ...(item.next ? ["next"] : [])],
      nextBtnText: item.next || "下一步", prevBtnText: "上一步",
      onNextClick: () => show(next + 1), onPrevClick: () => show(next - 1),
      onCloseClick: () => finish("skipped"),
    }});
    replay.hidden = true;
  }
  function sync() {
    frame = 0;
    replay.hidden = !homeVisible() || (active && step > 0) || isOpen(createModal) || isOpen(modeModal);
    if (!active) return;
    if (step === 6 && !isOpen(modeModal)) { finish("seen"); return; }
    const otherModal = [...document.querySelectorAll(".modal-backdrop.is-open")].some(el => el !== createModal && el !== modeModal && el.getClientRects().length > 0);
    if (otherModal) { hide(); return; }
    if (isOpen(modeModal) && step >= 2) { show(6); return; }
    if (!homeVisible()) { hide(); return; }
    if (isOpen(createModal) && document.getElementById("create-title").textContent === "创建新项目") {
      if (step < 2 || step > 5) show(2);
      return;
    }
    if (isOpen(modeModal)) { hide(); return; }
    show(1);
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(sync); }
  const observer = new MutationObserver(schedule);
  [home, ...document.querySelectorAll(".modal-backdrop")].forEach(el => observer.observe(el, { attributes: true, attributeFilter: ["class"] }));
  replay.addEventListener("click", () => { active = true; sync(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && active && step) finish("skipped"); });
  window.addEventListener("hashchange", schedule);
  sync();
})();
