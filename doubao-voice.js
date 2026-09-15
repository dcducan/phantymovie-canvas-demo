/* Workflow Doubao prototype. Training, billing and server permissions require an API. */
const currentProvider = element => element.dataset.voiceId?.startsWith("minimax-clone-") ? "minimax" : element.dataset.voiceId?.startsWith("doubao-clone-") ? "doubao" : null;
const DoubaoVoice = {
  model: "豆包语音合成大模型 2.0", open: false, page: "library", tab: "mine", scope: "personal", query: "", index: 1,
  provider: "doubao", banks: { doubao: [], minimax: [] }, cloneEffect: "标准版", noiseReduction: false, normalize: false,
  // Mainland China pay-as-you-go list price. Doubao amount is an explicitly unverified product mock.
  pricing: { minimax: { clone: 9.9, verified: true, source: "https://platform.minimaxi.com/docs/guides/pricing-paygo" }, doubao: { clone: 100, verified: false, source: "https://www.volcengine.com/docs/6561/1167803" } },
  minimaxCloneNote: "当前音色为临时音色，您需7 天内使用本音色进行至少一次语音合成，否则临时音色失效，首次使用后音色永久保留。首次使用音色时，平台需收取一次性克隆费 ¥9.90 / 音色，后续使用不收取克隆费。",
  doubaoCloneNote: "当前音色为临时音色，您需7 天内使用本音色进行至少一次语音合成，否则临时音色失效，首次使用后音色永久保留。首次使用音色时，平台需收取一次性克隆费 ¥100.00 / 音色，后续使用不收取克隆费。",
  priceNote() { return this.provider === "minimax" ? this.minimaxCloneNote : this.doubaoCloneNote; },
  lifecycleNote() { return this.priceNote(); },
  quote(text, model = state.workflowTtsModel) {
    if (this.provider !== "minimax") return null;
    const count = [...text].reduce((sum, character) => sum + (/\p{Script=Han}/u.test(character) ? 2 : 1), 0);
    const rate = /turbo/i.test(model) ? 2 : 3.5;
    return { count, rate, amount: count * rate / 10000 };
  },
  money(amount) { return `¥${(Math.round((amount + Number.EPSILON) * 10000) / 10000).toFixed(4)}`; },
  diamonds(amount) { return `${Number((amount * 100).toFixed(8))} 星钻`; },
  toast(message) {
    document.querySelector(".voice-system-toast")?.remove();
    const toast = document.createElement("div"); toast.className = "voice-system-toast"; toast.setAttribute("role", "alert"); toast.textContent = message; document.body.append(toast);
    setTimeout(() => toast.remove(), 6000);
  },
  async confirmGeneration() {
    if (this.busy) return;
    const provider = this.provider, target = this.target, request = {...this.lastRequest};
    const scene = this.generationScene || currentWorkflowStudioSelection().scene;
    const voice = this.banks[provider].find(v => v.id === target);
    this.busy = true; this.refresh();
    try {
      await new Promise(resolve => setTimeout(resolve, 700));
      if (!voice || (!voice.active && voice.createdAt + 7 * 86400000 <= Date.now()) || !request.text?.trim()) throw new Error("Invalid generation");
      const seconds = Math.max(2, Math.ceil(request.text.length / (4.5 * (request.speed || 1))));
      const result = { id: `audio-${crypto.randomUUID()}`, title: this.generationName || `${voice.name} · 配音`, mode: "文生音频", model: request.model, duration: `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`, status: "已完成", mock: true, prompt: request.text, params: {...request, audioName: this.generationName}, createdAt: Date.now() };
      workflowSceneAudioResults(scene).unshift(result);
      voice.active = true; this.save(); this.open = false; this.error = ""; this.notice = "";
      state.workflowResultView = "audios";
    } catch {
      this.open = false;
      this.toast("生成失败，仍为临时音色，原到期时间不变；本次未扣费，可重试。");
    } finally { this.busy = false; this.refresh(); }
  },
  validateSample(sample) {
    if (!sample || !Number.isFinite(sample.duration) || !Number.isFinite(sample.size)) return "请先添加有效的声音样本。";
    const mini = this.provider === "minimax";
    if (sample.duration < (mini ? 10 : 5) || (mini && sample.duration > 300)) return mini ? "MiniMax 样本需为 10 秒–5 分钟。" : "当前原型至少需要 5 秒，建议 14–30 秒；豆包 2.0 硬限制待官方接口核实。";
    if (sample.size > (mini ? 20 : 10) * 1024 * 1024) return mini ? "MiniMax 样本不能超过 20 MB。" : "超过当前原型 10 MB 限制；豆包 2.0 硬限制待官方接口核实。";
    return "";
  },
  get voices() { return this.banks[this.provider]; },
  set voices(value) { this.banks[this.provider] = value; },
  get label() { return this.provider === "minimax" ? "MiniMax Voice Clone" : "豆包声音复刻 2.0"; },
  method: "record", passage: 0, sample: null, consent: false, name: "", error: "", busy: false, recording: false,
  initialized: false, target: null, returnPage: "library", preview: null, notice: "", modelSettings: {},
  passages: ["清晨的阳光穿过窗帘，今天又是充满期待的一天。愿每一次表达，都能准确传递故事中的情绪。", "夜色渐深，城市的灯光依次亮起。远处传来轻柔的音乐，人们带着一天的回忆慢慢走回家。", "雨停以后，空气变得格外清新。我们沿着安静的小路向前走，也期待下一段故事在前方发生。"],
  audition: "您好，我的声音已经准备好了。接下来，让我们一起为故事中的角色配音吧，祝您制作顺利。",
  presets: ["沉稳男声", "青涩青年", "清新女声", "温柔小雅", "油腻大叔", "活力青年", "高冷御姐", "邪魅女王", "幽默大爷", "天才童声", "和蔼奶奶", "萌丫头", "魅力女友", "霸道总裁", "妩媚可人", "机甲智能"],
  save() { try { localStorage.setItem(`workflow-${this.provider}-voices-v1`, JSON.stringify(this.voices)); } catch { this.error = "本地存储空间不足，本次变更无法在刷新后保留。"; } },
  sync() {
    if (!this.initialized) {
      this.initialized = true;
      for (const provider of ["doubao", "minimax"]) {
        try { const saved = JSON.parse(localStorage.getItem(`workflow-${provider}-voices-v1`) || "[]"); this.banks[provider] = Array.isArray(saved) ? saved.filter(v => v && typeof v.id === "string" && typeof v.name === "string" && Number.isFinite(v.createdAt)) : []; } catch { this.banks[provider] = []; }
      }
    }
    for (const provider of ["doubao", "minimax"]) {
      const keep = this.banks[provider].filter(v => v.active || v.createdAt + 7 * 86400000 > Date.now());
      if (keep.length !== this.banks[provider].length) {
        this.banks[provider] = keep;
        try { localStorage.setItem(`workflow-${provider}-voices-v1`, JSON.stringify(keep)); } catch { this.error = "到期状态保存失败，请检查浏览器存储。"; }
      }
    }
    const official = this.presets.map((name, i) => ({ id: `doubao-preset-${i}`, name, model: this.model, group: "official", meta: "豆包 · 预置音色" }));
    state.workflowTtsVoices = [...state.workflowTtsVoices.filter(v => !v.id.startsWith("doubao-") && !v.id.startsWith("minimax-clone-")), ...official, ...["doubao", "minimax"].flatMap(provider => this.banks[provider].filter(v => v.scope === this.scope && (v.active || v.createdAt + 7 * 86400000 > Date.now())).map(v => ({ ...v, model: provider === "doubao" ? this.model : "MiniMax", group: "mine", meta: `${provider === "doubao" ? "豆包" : "MiniMax"} · ${v.effect || "克隆音色"}${v.active ? "" : " · 临时音色"}` })))];
    const selected = state.workflowTtsVoices.find(v => v.id === state.workflowTtsVoiceId);
    if (state.workflowTtsModel === this.model && selected?.model !== this.model) state.workflowTtsVoiceId = official[0].id;
    if (state.workflowTtsModel !== this.model && (!selected || selected.model === this.model)) state.workflowTtsVoiceId = "voice-linxi";
  },
  refresh() { renderWorkflowStudio(); },
  switchModel(model) {
    const keys = ["workflowTtsVoiceId", "workflowTtsSpeed", "workflowTtsPitch", "workflowTtsVolume", "workflowTtsLanguage"];
    this.modelSettings[state.workflowTtsModel] = Object.fromEntries(keys.map(key => [key, state[key]]));
    state.workflowTtsModel = model;
    Object.assign(state, this.modelSettings[model] || { workflowTtsVoiceId: model === this.model ? "doubao-preset-0" : "voice-linxi", workflowTtsSpeed: 1, workflowTtsPitch: 0, workflowTtsVolume: 100, workflowTtsLanguage: "自动检测" });
    this.sync();
  },
  button(action, label, primary = false, disabled = false) { return `<button type="button" data-db-action="${action}" class="${primary ? "primary" : ["official", "mine"].includes(action) && this.tab === action ? "active" : ""}" ${disabled ? "disabled" : ""}>${label}</button>`; },
  badge(v) {
    if (v.active) return "";
    const hours = Math.max(1, Math.ceil((v.createdAt + 7 * 86400000 - Date.now()) / 3600000));
    return `<span class="db-badge ${hours < 24 ? "urgent" : ""}" title="有效期至 ${new Date(v.createdAt + 7 * 86400000).toLocaleString("zh-CN")}；到期前需使用本音色完成至少一次语音合成，成功后转为永久音色，否则临时音色失效">临时音色 · 剩 ${hours >= 24 ? `${Math.ceil(hours / 24)} 天` : `${hours} 小时`}</span>`;
  },
  resetSample() { if (this.sample?.url) URL.revokeObjectURL(this.sample.url); this.sample = null; },
  stop() { this.preview?.pause(); this.preview = null; },
  close() { this.stop(); this.open = false; this.error = ""; this.refresh(); },
  render() {
    this.sync();
    const e = escapeHtml, b = this.button.bind(this), v = this.voices.find(v => v.id === this.target);
    let title = "克隆音色", subtitle = this.label, body = "", footer = "";
    if (this.page === "model") {
      title = "克隆音色"; subtitle = "选择创建音色使用的模型";
      body = `<div class="db-model-card"><div><strong>MiniMax Voice Clone</strong><p>10 秒–5 分钟样本 · 降噪 · 音量归一化</p>${b("choose-minimax", "使用 MiniMax", true)}</div></div><div class="db-model-card"><div><strong>豆包声音复刻 2.0</strong><p>标准版 / 表现力增强版 · 录音或上传样本</p>${b("choose-model", "使用豆包", true)}</div></div>`;
      footer = b("close", "取消");
    } else if (this.page === "library") {
      title = "选择音色"; subtitle = this.label;
      const all = this.tab === "official" ? state.workflowTtsVoices.filter(v => (this.provider === "doubao" ? v.model === this.model : v.model !== this.model) && v.group === "official") : this.voices.filter(v => v.scope === this.scope).sort((a, b) => b.createdAt - a.createdAt);
      const filtered = all.filter(v => `${v.name} ${v.creator || ""}`.toLowerCase().includes(this.query.toLowerCase()));
      const pages = Math.max(1, Math.ceil(filtered.length / 6)); this.index = Math.min(this.index, pages);
      body = `<div class="db-toolbar"><div class="workflow-tts-voice-tabs">${b("official", "预置音色")}${b("mine", "克隆音色")}</div>${b("new", "＋ 克隆新音色", true)}</div><div class="db-library-filters"><input data-db-field="search" aria-label="搜索音色" placeholder="搜索音色名称${this.tab === "mine" ? "或创建者" : ""}" value="${e(this.query)}"/><select data-db-field="scope" aria-label="音色所属空间"><option value="personal" ${this.scope === "personal" ? "selected" : ""}>个人空间 · 本地演示</option><option value="team" ${this.scope === "team" ? "selected" : ""}>团队空间 · 本地演示</option></select></div><div class="db-tab-indicator">${this.tab === "mine" ? "克隆音色" : "预置音色"} · ${filtered.length} 个</div><div class="db-voice-grid">${filtered.slice((this.index - 1) * 6, this.index * 6).map(voice => `<article class="db-voice-card ${voice.id === state.workflowTtsVoiceId ? "selected" : ""}"><div class="db-card-top"><span class="db-voice-avatar">${e(voice.name.slice(0, 1))}</span><div><strong>${e(voice.name)}</strong><small>${e(voice.creator || "豆包预置音色")}</small></div>${voice.group !== "official" ? `<button data-db-action="menu" data-id="${e(voice.id)}" aria-label="管理${e(voice.name)}">···</button>` : ""}</div>${voice.group !== "official" ? this.badge(voice) : '<span class="db-muted">预置音色</span>'}<div class="db-card-actions"><button data-db-action="preview" data-id="${e(voice.id)}">▷ 试听</button><button data-db-action="use" data-id="${e(voice.id)}">${voice.id === state.workflowTtsVoiceId ? "已选择 ✓" : "使用"}</button></div>${this.menu === voice.id ? `<div class="db-menu"><button data-db-action="edit" data-id="${e(voice.id)}">编辑音色</button><button data-db-action="delete" data-id="${e(voice.id)}">删除音色</button></div>` : ""}</article>`).join("") || `<div class="db-empty"><span>◌</span><strong>${this.query ? "未找到匹配的音色" : "暂无克隆音色"}</strong><p>${this.query ? "尝试其他名称，或清空搜索" : "用一段清晰的人声，创建专属音色"}</p>${b(this.query ? "clear" : "new", this.query ? "清空搜索" : "＋ 克隆新音色", true)}</div>`}</div><div class="db-pagination">${b("prev", "←", false, this.index === 1)}<span>${this.index} / ${pages}</span>${b("next", "→", false, this.index === pages)}</div><p class="db-note">${this.scope === "team" ? "团队规则：所有成员均可查看、使用、编辑和删除；名称在团队内唯一。当前仅演示空间切换，尚未连接真实团队。" : "音色归属个人空间，独立于当前项目。此原型保存在当前浏览器。"}</p>`;
      footer = b("close", "完成");
    } else if (["sample", "info", "success", "loading"].includes(this.page)) {
      title = "音色克隆";
      subtitle = "";
      body = `<div class="db-steps">${["添加样本", "音色信息", "创建结果"].map((s, i) => `<span class="${i === (this.page === "sample" ? 0 : this.page === "info" ? 1 : 2) ? "active" : ""}"><i>${i + 1}</i>${s}</span>`).join("")}</div>`;
      if (this.page === "sample") {
        body += `<div class="workflow-voice-clone-methods"><button data-db-action="record-method" class="${this.method === "record" ? "active" : ""}" ${this.recording ? "disabled" : ""}><strong>朗读录音</strong><span>用麦克风录制普通话</span></button><button data-db-action="upload-method" class="${this.method === "upload" ? "active" : ""}" ${this.recording ? "disabled" : ""}><strong>上传音频</strong><span>选择已有的人声样本</span></button></div>`;
        if (this.method === "record") body += `<div class="workflow-voice-record"><div class="db-toolbar"><span>请朗读以下文字</span>${b("passage", "换一段", false, this.recording)}</div><p>${this.passages[this.passage]}</p>${this.recording ? '<div class="db-recording"><span>● 正在录音</span><strong id="db-record-time">00:00</strong><div class="db-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>' : ""}${b(this.recording ? "stop-record" : "record", this.recording ? "结束录音" : this.sample ? "重新录制" : "● 开始录音", true, this.busy)}</div>`;
        else body += `<label class="db-upload" data-db-drop><span>↑</span><strong>${this.busy ? "正在读取并校验音频…" : "点击选择或拖入音频文件"}</strong><small>${this.provider === "minimax" ? "MP3、WAV、M4A · 不超过 20 MB" : "MP3、WAV、M4A、AAC、OGG · 原型限制 10 MB"}</small><input type="file" data-db-field="file" accept="${this.provider === "minimax" ? ".mp3,.wav,.m4a" : ".mp3,.wav,.m4a,.aac,.ogg"}" ${this.busy ? "disabled" : ""}/></label>`;
        if (this.sample) body += `<div class="db-sample"><strong>${e(this.sample.name)}</strong><small>${this.sample.duration.toFixed(1)} 秒 · ${(this.sample.size / 1024 / 1024).toFixed(2)} MB</small><audio controls src="${e(this.sample.url)}"></audio></div>`;
        body += `<p class="db-note">${this.provider === "minimax" ? "样本需 10 秒–5 分钟；支持 MP3、WAV、M4A。" : "建议 14–30 秒；当前原型按至少 5 秒校验，正式接入以 2.0 接口限制为准。"}请使用清晰、单人、无背景音乐的录音。</p>`;
        footer = b("close", "取消", false, this.busy) + b("info", "下一步 →", true, !this.sample || this.recording || this.busy);
      } else if (this.page === "info") {
        body += this.provider === "doubao" ? `<label class="workflow-video-field"><span>复刻效果</span><select data-db-field="cloneEffect">${["标准版", "表现力增强版"].map(m => `<option ${m === this.cloneEffect ? "selected" : ""}>${m}</option>`).join("")}</select></label>` : "";
        body += `<label class="workflow-voice-clone-name"><span>音色名称 <em>*</em></span><div class="db-name-input"><input data-db-field="name" maxlength="20" placeholder="例如：少年旁白" value="${e(this.name)}"/><span data-db-name-count>${[...this.name].length}/20</span></div></label><label class="workflow-voice-consent"><input type="checkbox" data-db-field="consent" ${this.consent ? "checked" : ""}/><span>我已获得声音本人授权，并同意将该声音用于内容创作。</span></label>`;
        footer = b("back-sample", "上一步") + b("create-failure", "演示创建失败") + b("create", "创建音色", true, !this.consent || !this.name.trim());
      } else if (this.page === "loading") {
        body += '<div class="db-empty"><span class="db-spinner">◌</span><strong>正在创建音色，请勿关闭页面…</strong><p>正在演示创建流程，不会提交真实训练</p></div>'; footer = b("busy", "创建中…", true, true);
      } else {
        body += `<div class="db-success">✓</div><h3 class="db-center">${e(v?.name || this.name)}</h3><div class="db-callout">${this.priceNote()}</div><div class="db-audition"><small>试听文案（试听不改变音色有效期）</small><p>${e(this.audition)}</p>${b("preview-result", "▷ 播放试听")}</div>`;
        footer = b("later", "暂不使用") + b("use-result", "使用此音色", true);
      }
    } else if (this.page === "edit") {
      title = "编辑音色"; subtitle = "修改后，引用处同步显示新名称";
      body = `<div class="db-detail"><span>创建者</span><strong>${e(v?.creator || "当前用户")}</strong><span>音色来源</span><strong>${e(this.label)}</strong></div><label class="workflow-voice-clone-name"><span>音色名称</span><input data-db-field="name" maxlength="20" value="${e(this.name)}"/></label>`;
      footer = b("library", "取消") + b("save-edit", "保存", true);
    } else if (this.page === "delete") {
      title = "确认删除"; subtitle = "";
      body = '<p class="db-delete-message">删除后音色将无法找回，已经生成的音频不受影响</p>';
      footer = b("library", "取消") + b("confirm-delete", "确认", true);
    } else if (this.page === "fees") {
      title = "临时音色调用费用确认"; subtitle = "";
      const price = this.pricing[this.provider], quote = this.quote(this.lastRequest?.text || state.workflowTtsText, this.lastRequest?.model || state.workflowTtsModel);
      body = `<div class="db-price"><div><span>一次性音色克隆费</span><strong>${this.diamonds(price.clone)}</strong></div><div><span>本次语音合成费（估算）</span><strong>${quote ? this.diamonds(quote.amount) : "待核实"}</strong></div><div><span>预计合计</span><strong>${quote ? this.diamonds(price.clone + quote.amount) : `${this.diamonds(price.clone)} ＋ 合成费`}</strong></div></div><div class="db-callout">${this.lifecycleNote()}</div>`;
      footer = b("close", "取消", false, this.busy) + b("confirm-generation", this.busy ? "生成中…" : "确认", true, this.busy);
    } else if (this.page === "preview") {
      title = "音色试听"; subtitle = this.previewName || "";
      body = `<div class="db-audition"><small>试听文案（试听不改变音色有效期）</small><p>${e(v?.audition || this.audition)}</p></div><div class="db-callout">试听音频尚未接入；播放已保存的试听文件不会将临时音色转为永久音色，也不会延长有效期。重新生成试听会产生合成费用。${this.provider === "minimax" ? `试听模型：${e(v?.previewModel || this.previewModel || "Speech 2.8 HD")}；预计 ${this.money(this.quote(v?.audition || this.audition, v?.previewModel || this.previewModel || "Speech 2.8 HD").amount)}（仅估算，未扣费）。` : "按声音复刻 2.0 合成费用计费，单价待核实。"}</div>`;
      footer = b("return-preview", "返回");
    } else if (this.page === "discard") {
      title = "放弃当前样本？"; subtitle = "当前录音尚未保存";
      body = '<p class="db-description">确认后将丢弃当前样本；取消后可继续录制或编辑。</p>';
      footer = b("cancel-discard", "继续编辑") + b("confirm-discard", "放弃并返回", true);
    }
    return `<div class="workflow-voice-clone-modal db-modal"><button class="workflow-voice-clone-backdrop" data-db-action="close" aria-label="关闭音色面板" ${this.busy ? "disabled" : ""}></button><section class="workflow-voice-clone-dialog db-dialog db-fees-dialog" role="dialog" aria-modal="true" aria-label="${title}"><header><div><strong>${title}</strong>${subtitle ? `<span>${e(subtitle)}</span>` : ""}</div><button data-db-action="close" aria-label="关闭" ${this.busy ? "disabled" : ""}>×</button></header><div class="db-body">${body}${this.notice ? `<p class="db-callout" role="status">${e(this.notice)}</p>` : ""}${this.error ? `<p class="db-error" role="alert">${e(this.error)}</p>` : ""}</div><footer>${footer}</footer></section></div>`;
  },
  handle(element, event) {
    if (!element) return false;
    const action = element.dataset.workflowAction;
    if (action === "open-voice-clone") { event.preventDefault(); this.provider = state.workflowTtsModel === this.model ? "doubao" : "minimax"; this.previewModel = state.workflowTtsModel.replace(/^MiniMax /, ""); this.noiseReduction = false; this.normalize = false; this.cloneEffect = "标准版"; this.resetSample(); this.name = ""; this.consent = false; this.method = "record"; this.target = null; this.notice = ""; this.open = true; this.page = "sample"; this.error = ""; this.refresh(); return true; }
    if (action === "open-provider-clone") { event.preventDefault(); this.provider = element.dataset.provider; this.open = true; this.page = "library"; this.tab = "mine"; this.error = ""; this.refresh(); return true; }
    if (action === "delete-tts-voice" && currentProvider(element)) { event.preventDefault(); this.provider = currentProvider(element); this.target = element.dataset.voiceId; this.open = true; this.page = "delete"; this.refresh(); return true; }
    const current = state.workflowTtsVoices.find(v => v.id === (element.closest("[data-voice-id]")?.dataset.voiceId || state.workflowTtsVoiceId));
    if (state.workflowTtsModel === this.model && action === "delete-tts-voice") { event.preventDefault(); this.target = current?.id; this.open = true; this.page = "delete"; this.refresh(); return true; }
    if (state.workflowTtsModel === this.model && action === "preview-tts-voice") { event.preventDefault(); this.previewName = current?.name; this.open = true; this.page = "preview"; this.returnPage = "outside"; this.refresh(); return true; }
    if (state.workflowAudioMode === "sfx" && action === "generate-scene-audio") {
      event.preventDefault(); this.sync();
      this.provider = state.workflowTtsModel === this.model ? "doubao" : "minimax";
      const editor = workflowHomeView?.querySelector("[data-workflow-tts-editor]"); if (editor) state.workflowTtsText = workflowTtsEditorValue(editor);
      if (state.workflowTtsText.length > speechTextLimit()) { window.alert(`当前模式最多支持 ${speechTextLimit()} 字符，请缩短文本或切换长文模式。`); return true; }
      if (!state.workflowTtsModel.includes("2.8") && Object.keys(speechTagNames).some(tag => state.workflowTtsText.includes(`(${tag})`))) { window.alert("当前模型不支持文本中的 2.8 发声标签，请移除标签或切回 Speech 2.8。"); return true; }
      if (this.provider === "doubao" && /<#|\[[^\]|]+\|/.test(state.workflowTtsText)) { window.alert("文本包含 MiniMax 停顿或分段情绪标记，请移除后使用豆包表演要求。"); return true; }
      normalizeSpeechLanguage();
      this.lastRequest = { model: state.workflowTtsModel, text: state.workflowTtsText, voiceId: state.workflowTtsVoiceId, speed: state.workflowTtsSpeed, pitch: state.workflowTtsPitch, volume: state.workflowTtsVolume, ...(this.provider === "minimax" ? { language: state.workflowTtsLanguage, language_boost: { "自动检测": "auto", "中文": "Chinese", "英语": "English", "日语": "Japanese", "法语": "French" }[state.workflowTtsLanguage] } : {}), longMode: state.workflowTtsLongMode, ...speechOptions() };
      const voice = this.voices.find(v => v.id === state.workflowTtsVoiceId);
      this.generationScene = currentWorkflowStudioSelection().scene;
      this.generationName = state.workflowAudioName.trim();
      this.open = true; this.target = voice?.id; this.page = voice && !voice.active ? "fees" : "library";
      this.error = !state.workflowTtsText.trim() ? "请先填写需要生成的配音文字。" : this.page === "library" ? "音频合成服务尚未接入，暂不能生成真实配音。" : "";
      if (!state.workflowTtsText.trim()) this.page = "library";
      if (this.page === "library") { this.open = false; this.toast(this.error); }
      this.refresh(); return true;
    }
    return false;
  },
  validName() {
    const name = this.name.trim();
    if (!name || [...name].length > 20) return "请输入 1–20 个字符的音色名称。";
    if (this.voices.some(v => v.scope === this.scope && v.id !== (this.page === "edit" ? this.target : null) && v.name === name)) return "音色名称已存在，请更换名称。";
    return "";
  },
  async record() {
    if (this.sample && !window.confirm("重新录制将覆盖当前样本，确认继续？")) return;
    this.busy = true; this.refresh();
    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error("当前环境不支持录音，请使用 localhost / HTTPS，或上传音频。");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.resetSample(); this.stream = stream; this.recorder = new MediaRecorder(stream); const chunks = [];
      this.recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      this.recorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop()); clearInterval(this.timer);
        const duration = (Date.now() - this.started) / 1000; this.recording = false;
        if (!this.discardRecording) { const blob = new Blob(chunks, { type: this.recorder.mimeType }); this.sample = { name: "朗读录音", size: blob.size, duration, url: URL.createObjectURL(blob) }; }
        this.discardRecording = false; this.refresh();
      };
      this.started = Date.now(); this.recording = true; this.recorder.start();
      this.timer = setInterval(() => {
        const seconds = Math.floor((Date.now() - this.started) / 1000); const el = document.getElementById("db-record-time"); if (el) el.textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
      }, 300);
    } catch (err) { this.error = err.name === "NotAllowedError" ? "麦克风权限被拒绝，请允许访问后重试，或切换上传音频。" : err.message; }
    this.busy = false; this.refresh();
  },
  async upload(file) {
    if (!file || this.busy) return;
    this.error = "";
    const formats = this.provider === "minimax" ? /\.(mp3|wav|m4a)$/i : /\.(mp3|wav|m4a|aac|ogg|pcm)$/i;
    if (!formats.test(file.name)) this.error = "格式不支持，请按当前模型的格式要求上传。";
    else if (file.size > (this.provider === "minimax" ? 20 : 10) * 1024 * 1024) this.error = "文件超过当前模型的大小限制。";
    else if (/\.pcm$/i.test(file.name)) this.error = "PCM 原始音频需要采样率与声道信息，当前预览无法校验；请转换为 WAV 后上传。正式接入需由服务端校验 PCM。";
    if (this.error) { this.refresh(); return; }
    this.busy = true; this.refresh();
    let context;
    try {
      context = new (window.AudioContext || window.webkitAudioContext)(); const buffer = await context.decodeAudioData(await file.arrayBuffer());
      if (buffer.duration < (this.provider === "minimax" ? 10 : 5) || (this.provider === "minimax" && buffer.duration > 300)) throw new Error("音频时长不符合当前模型要求，请重新选择。");
      this.resetSample(); this.sample = { name: file.name, size: file.size, duration: buffer.duration, url: URL.createObjectURL(file) };
    } catch (err) { this.error = err.message.includes("时长") ? err.message : "无法读取该音频，请检查文件是否损坏，或转换为 WAV 后重试。"; }
    finally { await context?.close(); this.busy = false; this.refresh(); }
  },
  async action(action, id) {
    if (this.busy) return;
    if (action === "confirm-generation") { await this.confirmGeneration(); return; }
    this.error = ""; this.notice = "";
    if (action !== "menu") this.menu = null;
    if (["close", "back-library"].includes(action)) {
      if (this.recording || (["sample", "info"].includes(this.page) && this.sample)) { this.discardFrom = this.page; this.page = "discard"; }
      else if (action === "close") { this.close(); return; } else this.page = "library";
    } else if (action === "cancel-discard") this.page = this.discardFrom;
    else if (action === "confirm-discard") { if (this.recording) { this.discardRecording = true; this.recorder.stop(); } this.resetSample(); this.close(); return; }
    else if (action === "existing-model") { this.open = false; state.workflowTtsCloneOpen = true; state.workflowTtsCloneRecorded = false; }
    else if (["choose-model", "choose-minimax"].includes(action)) { this.provider = action === "choose-minimax" ? "minimax" : "doubao"; state.workflowTtsCloneOpen = false; this.page = "library"; this.tab = "mine"; this.sync(); }
    else if (action === "new") { this.resetSample(); this.name = ""; this.consent = false; this.method = "record"; this.page = "sample"; }
    else if (["official", "mine"].includes(action)) { this.tab = action; this.query = ""; this.index = 1; }
    else if (action === "clear") { this.query = ""; this.index = 1; }
    else if (action === "prev") this.index = Math.max(1, this.index - 1);
    else if (action === "next") this.index++;
    else if (action === "menu") this.menu = this.menu === id ? null : id;
    else if (action === "use" || action === "use-result") { this.sync(); const selectedId = id || this.target; if (state.workflowTtsVoices.some(v => v.id === selectedId)) { this.switchModel(this.provider === "doubao" ? this.model : state.workflowTtsModel.startsWith("MiniMax Speech") ? state.workflowTtsModel : "MiniMax Speech 2.8 HD"); state.workflowTtsVoiceId = selectedId; state.workflowTtsVoiceTab = state.workflowTtsVoices.find(v => v.id === selectedId).group; state.workflowAudioMode = "sfx"; this.resetSample(); this.close(); return; } this.error = "该音色已失效，请重新选择。"; this.page = "library"; }
    else if (["preview", "preview-result"].includes(action)) { this.stop(); this.returnPage = this.page; this.target = id || this.target; this.previewName = state.workflowTtsVoices.find(v => v.id === this.target)?.name; this.page = "preview"; }
    else if (action === "return-preview") { if (this.returnPage === "outside") { this.close(); return; } this.page = this.returnPage; }
    else if (["edit", "delete"].includes(action)) { this.target = id; this.name = this.voices.find(v => v.id === id)?.name || ""; this.page = action; }
    else if (action === "save-edit") { this.error = this.validName(); if (!this.error) { const voice = this.voices.find(v => v.id === this.target); if (voice) voice.name = this.name.trim(); this.save(); this.page = "library"; } }
    else if (action === "confirm-delete") { this.voices = this.voices.filter(v => v.id !== this.target); this.save(); this.sync(); this.close(); return; }
    else if (["library", "later"].includes(action)) { this.resetSample(); this.close(); return; }
    else if (["record-method", "upload-method"].includes(action) && !this.recording) { if (!this.sample || window.confirm("切换方式将丢弃当前样本，确认继续？")) { this.resetSample(); this.method = action === "record-method" ? "record" : "upload"; } }
    else if (action === "passage" && !this.recording) this.passage = (this.passage + 1) % 3;
    else if (action === "record") { await this.record(); return; }
    else if (action === "stop-record" && this.recording) { const seconds = (Date.now() - this.started) / 1000; if (seconds < (this.provider === "minimax" ? 10 : 5)) this.error = "录音时长不足，请继续录制。"; else if (this.provider === "minimax" && seconds > 300) { this.discardRecording = true; this.recorder.stop(); this.error = "录音超过 5 分钟，请重新录制。"; } else this.recorder.stop(); }
    else if (action === "info" && !this.recording) { this.error = this.validateSample(this.sample); if (!this.error) this.page = "info"; }
    else if (action === "back-sample") this.page = "sample";
    else if (action === "create-failure") this.error = "音色创建失败（演示）：样本人声不够清晰。请重试，或返回上一步更换样本。未添加任何音色。";
    else if (action === "create") {
      this.error = this.validName() || this.validateSample(this.sample); if (!this.consent) this.error = "请先确认声音授权。";
      if (!this.audition.trim() || [...this.audition].length > 1000) this.error = "请输入 1–1000 字符的试听文本。";
      if (!this.error) {
        this.page = "loading"; this.busy = true; this.refresh();
        setTimeout(() => {
          const voice = { id: `${this.provider}-clone-${crypto.randomUUID()}`, name: this.name.trim(), creator: "当前用户", scope: this.scope, createdAt: Date.now(), active: false, demo: true, effect: this.provider === "doubao" ? this.cloneEffect : "克隆音色", noiseReduction: this.noiseReduction, normalize: this.normalize, audition: this.audition, previewModel: this.previewModel || "Speech 2.8 HD" };
          this.voices.unshift(voice); this.target = voice.id; this.save(); this.busy = false; this.page = "success"; this.refresh();
        }, 1100); return;
      }
    } else if (action === "simulate-success") { this.sync(); const voice = this.voices.find(v => v.id === this.target); if (voice) { voice.active = true; this.save(); this.page = "library"; this.notice = "已演示生成成功：临时音色已转为永久音色。未生成真实音频，未扣费。"; } else { this.page = "library"; this.error = "音色已到期，请重新创建。"; } }
    else if (action === "simulate-failure") this.error = "生成失败（演示）。音色仍为临时音色，原到期时间不变；本次未扣费，可重试。";
    this.refresh();
  },
};

document.addEventListener("click", event => {
  const button = event.target.closest("[data-db-action]");
  if (button) { event.preventDefault(); event.stopPropagation(); if (!button.disabled) DoubaoVoice.action(button.dataset.dbAction, button.dataset.id); }
  else if (DoubaoVoice.menu && !event.target.closest(".db-menu")) { DoubaoVoice.menu = null; DoubaoVoice.refresh(); }
}, true);
document.addEventListener("input", event => {
  const field = event.target.dataset.dbField;
  if (field === "audition") DoubaoVoice.audition = event.target.value;
  if (field === "name") { DoubaoVoice.name = event.target.value; const counter = document.querySelector("[data-db-name-count]"); if (counter) counter.textContent = `${[...DoubaoVoice.name].length}/20`; const create = document.querySelector('[data-db-action="create"]'); if (create) create.disabled = !DoubaoVoice.consent || !DoubaoVoice.name.trim(); }
  if (field === "search") { const pos = event.target.selectionStart; DoubaoVoice.query = event.target.value; DoubaoVoice.index = 1; DoubaoVoice.refresh(); const input = document.querySelector('[data-db-field="search"]'); input?.focus(); input?.setSelectionRange(pos, pos); }
});
document.addEventListener("change", event => {
  const field = event.target.dataset.dbField;
  if (["noiseReduction", "normalize"].includes(field)) DoubaoVoice[field] = event.target.checked;
  if (["cloneEffect", "previewModel"].includes(field)) DoubaoVoice[field] = event.target.value;
  if (field === "consent") { DoubaoVoice.consent = event.target.checked; const create = document.querySelector('[data-db-action="create"]'); if (create) create.disabled = !DoubaoVoice.consent || !DoubaoVoice.name.trim(); }
  if (field === "scope") { DoubaoVoice.scope = event.target.value; DoubaoVoice.index = 1; DoubaoVoice.refresh(); }
  if (field === "file") DoubaoVoice.upload(event.target.files[0]);
});
document.addEventListener("dragover", event => { if (event.target.closest("[data-db-drop]")) event.preventDefault(); });
document.addEventListener("drop", event => { if (event.target.closest("[data-db-drop]")) { event.preventDefault(); DoubaoVoice.upload(event.dataTransfer.files[0]); } });
document.addEventListener("keydown", event => {
  if (!DoubaoVoice.open) return;
  if (event.key === "Escape") { event.preventDefault(); event.stopImmediatePropagation(); DoubaoVoice.action("close"); }
  if (event.key === "Tab") { const items = [...document.querySelectorAll('.db-dialog button:not(:disabled), .db-dialog input:not(:disabled), .db-dialog select, .db-dialog audio')].filter(el => el.getClientRects().length); const first = items[0], last = items.at(-1); if (event.shiftKey && (document.activeElement === first || !document.activeElement.closest(".db-dialog"))) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && (document.activeElement === last || !document.activeElement.closest(".db-dialog"))) { event.preventDefault(); first?.focus(); } }
}, true);
window.addEventListener("beforeunload", event => { if (DoubaoVoice.recording || DoubaoVoice.busy) { event.preventDefault(); event.returnValue = ""; } });
setInterval(() => {
  if (!DoubaoVoice.initialized || DoubaoVoice.recording || DoubaoVoice.busy) return;
  const count = DoubaoVoice.voices.length; DoubaoVoice.sync();
  if (count !== DoubaoVoice.voices.length && state.currentView === "workflow-home") DoubaoVoice.refresh();
}, 30000);
