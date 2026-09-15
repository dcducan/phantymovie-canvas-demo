/* Export UI prototype; real media and a rendering service are required. */
const TimelineExport = {
  root: null, trigger: null,
  open(trigger) {
    this.trigger = trigger;
    const panel = trigger.closest('.workflow-timeline-panel');
    const {scene} = currentWorkflowStudioSelection();
    this.name = scene.title + '-成片';
    this.resolution = '1080p';
    this.ratio = '原视频比例';
    Object.assign(this, {video: true, audio: true, videoFormat: 'MP4', audioFormat: 'MP3', fps: '跟随原视频', bitrate: '推荐', codec: 'H.264', audioBitrate: '192 kbps', sampleRate: '48000 Hz', videoAdvanced: false, audioAdvanced: false});
    this.videoCount = panel.querySelectorAll('[data-track-row="video"] .workflow-clip').length;
    this.audioCount = panel.querySelectorAll('[data-track-row="audio"] .workflow-clip').length;
    this.duration = panel.querySelector('.workflow-time-ruler span:last-child')?.textContent || '00:00';
    this.root = document.createElement('div');
    this.root.className = 'timeline-export-overlay';
    document.body.append(this.root);
    this.render();
    this.root.querySelector('input').focus({preventScroll:true});
  },
  extension() { return this.video ? this.videoFormat.toLowerCase() : this.audio ? this.audioFormat.toLowerCase() : ''; },
  render() {
    const select = (key, title, options) => `<label>${title}<select data-export-field="${key}">${options.map(value => `<option ${this[key] === value ? 'selected' : ''}>${value}</option>`).join('')}</select></label>`;
    const check = (key, title) => `<label class="export-check"><input type="checkbox" data-export-field="${key}" ${this[key] ? 'checked' : ''}>${title}</label>`;
    const lossless = !this.video && this.audioFormat === 'WAV';
    this.root.innerHTML = `<button class="export-backdrop" data-export-action="close" aria-label="关闭导出"></button>
      <section class="timeline-export-dialog export-simple" role="dialog" aria-modal="true" aria-labelledby="timeline-export-title">
        <header><h2 id="timeline-export-title">导出</h2><button data-export-action="close" aria-label="关闭">×</button></header>
        <main>
          <label class="export-name">文件名称<div><input maxlength="80" data-export-field="name" value="${escapeHtml(this.name)}"></div></label>
          <div class="export-duration"><span>时长</span><strong>${escapeHtml(this.duration)}</strong></div>
          <div class="export-columns">
            <section class="export-option-section">${check('video', '视频导出')}<fieldset ${this.video ? '' : 'disabled'}><div class="export-grid">${select('resolution','清晰度',['720p','1080p','4K'])}${select('ratio','画面比例',['原视频比例','16:9','9:16','1:1'])}${select('videoFormat','格式',['MP4','MOV'])}${select('fps','帧率',['跟随原视频','24 fps','25 fps','30 fps','60 fps'])}${select('bitrate','视频码率',['推荐','高质量'])}${select('codec','视频编码',['H.264','H.265'])}</div></fieldset></section>
            <section class="export-option-section">${check('audio', '音频导出')}<fieldset ${this.audio ? '' : 'disabled'}><div class="export-grid">
              <label>格式<select data-export-field="audioFormat" ${this.video ? 'disabled' : ''}>${this.video ? '<option>AAC（合并到视频）</option>' : ['MP3','WAV'].map(v => `<option ${this.audioFormat === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
              <label>音频质量<select data-export-field="audioBitrate" ${lossless ? 'disabled' : ''}>${lossless ? '<option>PCM · 16-bit</option>' : ['128 kbps','192 kbps','320 kbps'].map(v => `<option ${this.audioBitrate === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
              ${select('sampleRate','采样率',['44100 Hz','48000 Hz'])}
            </div></fieldset></section>
          </div>
          <div class="export-errors" role="alert"></div>
        </main>
        <footer><button data-export-action="close">取消</button><button class="primary" data-export-action="submit" ${!this.video && !this.audio ? 'disabled' : ''}>导出</button></footer>
      </section>`;
  },
  close() { this.root?.remove(); this.root = null; this.trigger?.focus({preventScroll:true}); },
  submit() {
    const error = this.root.querySelector('.export-errors');
    if (!this.name.trim() || /[\\\\/:*?"<>|]/.test(this.name)) { error.textContent = '请填写有效文件名，不含斜杠等特殊字符。'; return; }
    if (!this.video && !this.audio) { error.textContent = '请选择至少一项导出内容。'; return; }
    if (this.video && !this.videoCount) { error.textContent = '视频线暂无片段，请添加视频或取消视频导出。'; return; }
    if (this.audio && !this.audioCount) { error.textContent = '音频线暂无片段，请添加音频或取消音频导出。'; return; }
    // Never claim a file was rendered from thumbnail-only timeline clips.
    error.textContent = '当前为原型预览，真实素材与合成服务接入后即可导出。';
  },
};
document.addEventListener('click', event => {
  const entry = event.target.closest('[data-workflow-action="export-timeline"]');
  if (entry) { event.preventDefault(); event.stopImmediatePropagation(); if (!TimelineExport.root) TimelineExport.open(entry); return; }
  const button = event.target.closest('[data-export-action]');
  if (!button || !TimelineExport.root) return;
  event.preventDefault();
  if (button.dataset.exportAction === 'close') TimelineExport.close();
  else if (button.dataset.exportAction === 'submit') TimelineExport.submit();
}, true);
document.addEventListener('input', event => {
  const key = event.target.dataset.exportField;
  if (!key || !TimelineExport.root) return;
  TimelineExport[key] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  TimelineExport.root.querySelector('.export-errors').textContent = '';
});
document.addEventListener('change', event => {
  const key = event.target.dataset.exportField, root = TimelineExport.root;
  if (!key || !root || key === 'name') return;
  TimelineExport[key] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  root.querySelectorAll('[data-export-details]').forEach(el => { TimelineExport[el.dataset.exportDetails] = el.open; });
  const scroll = root.querySelector('main').scrollTop;
  TimelineExport.render();
  root.querySelector('main').scrollTop = scroll;
  root.querySelector(`[data-export-field="${key}"]`)?.focus({preventScroll:true});
});
document.addEventListener('keydown', event => {
  const root = TimelineExport.root; if (!root) return;
  if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); TimelineExport.close(); }
  if (event.key === 'Tab') {
    const items = [...root.querySelectorAll('.timeline-export-dialog button:not(:disabled), input:not(:disabled), select:not(:disabled), summary')].filter(el => el.getClientRects().length);
    const first = items[0], last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
}, true);
