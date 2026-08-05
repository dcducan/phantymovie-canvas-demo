const DEFAULT_TIMESTAMP = "2016年01月01日 12:30:23";
const DEFAULT_COVER = "./assets/images/default-cover.jpg";
const EXISTING_VIDEO_PLACEHOLDER = "__existing_video__";
const VIDEO_STATUS = {
  pending: "待审核",
  failed: "审核不通过",
  published: "已发布",
  shelfOff: "已下架",
};
const DEFAULT_NODE_PROMPT =
  "两只软萌圆滚滚小黄鸡，雌性小鸡头戴贵族小皇冠与花朵，雄性小鸡佩戴小礼帽，二者漫步在开满糖果色小花的草地里。整体为卡通 Q版治愈画风，毛茸茸质感，圆润线条";
const CANVAS_EMPTY_CREDIT = "./assets/icons/credit.svg";
const CANVAS_EMPTY_BELL = "./assets/icons/bell.svg";
const CANVAS_EMPTY_AVATAR_BG = "./assets/icons/avatar-bg.svg";
const CANVAS_EMPTY_AVATAR_IMAGE = "./assets/images/avatar-sunny.jpg";
const CANVAS_EMPTY_DOCK_GRID = "./assets/icons/grid.svg";
const CANVAS_EMPTY_DOCK_SCENE = "./assets/icons/image.svg";
const CANVAS_EMPTY_DOCK_POINTER = "./assets/icons/pointer.svg";
const CANVAS_EMPTY_DOCK_MINUS = "./assets/icons/minus.svg";
const CANVAS_EMPTY_DOCK_PLUS = "./assets/icons/plus.svg";
const CANVAS_EMPTY_BACK = "./assets/icons/back.svg";
const CANVAS_EMPTY_ADD_TEXT = "./assets/icons/text.svg";
const CANVAS_EMPTY_ADD_IMAGE = "./assets/icons/image.svg";
const CANVAS_EMPTY_ADD_UPLOAD_MASK = "./assets/icons/upload.svg";
const CANVAS_EMPTY_ADD_UPLOAD = "./assets/icons/upload.svg";
const CANVAS_ADD_PANEL_TEXT = "./assets/icons/text.svg";
const CANVAS_ADD_PANEL_IMAGE = "./assets/icons/image.svg";
const CANVAS_ADD_PANEL_UPLOAD_MASK = "./assets/icons/upload.svg";
const CANVAS_ADD_PANEL_UPLOAD = "./assets/icons/upload.svg";
const CANVAS_ADD_PANEL_LINE = "./assets/icons/divider-line.svg";
const CANVAS_EMPTY_LEFT_ADD = "./assets/icons/plus.svg";
const CANVAS_EMPTY_LEFT_SEARCH = "./assets/icons/search.svg";
const CANVAS_EMPTY_LEFT_GRID = "./assets/icons/grid.svg";
const CANVAS_EMPTY_LEFT_CLOCK = "./assets/icons/clock.svg";
const CANVAS_EMPTY_LEFT_DELETE = "./assets/icons/trash.svg";
const CANVAS_LINE = "./assets/icons/divider-line.svg";
const CANVAS_NODE_CREDIT = "./assets/icons/credit.svg";
const CANVAS_NODE_BELL = "./assets/icons/bell.svg";
const CANVAS_NODE_AVATAR_BG = "./assets/icons/avatar-bg.svg";
const CANVAS_NODE_AVATAR_IMAGE = "./assets/images/avatar-sunny.jpg";
const CANVAS_NODE_PREVIEW = "./assets/images/canvas-node-preview.png";
const CANVAS_NODE_BACK = "./assets/icons/back.svg";
const CANVAS_NODE_SIDE_ADD = "./assets/icons/connector-plus.svg";
const CANVAS_NODE_BRAIN = "./assets/icons/brain.svg";
const CANVAS_NODE_COUNT = "./assets/icons/count.svg";
const CANVAS_NODE_LIKE = "./assets/icons/heart.svg";
const CANVAS_NODE_SEND = "./assets/icons/send.svg";
const CANVAS_NODE_TOOLBAR_FULLSCREEN = "./assets/icons/fullscreen.svg";
const CANVAS_NODE_TOOLBAR_MULTI = "./assets/icons/multi-angle.svg";
const CANVAS_NODE_TOOLBAR_LIGHT = "./assets/icons/light.svg";
const CANVAS_NODE_TOOLBAR_GRID = "./assets/icons/grid.svg";
const CANVAS_NODE_TOOLBAR_ERASE_MASK = "./assets/icons/eraser.svg";
const CANVAS_NODE_TOOLBAR_ERASE = "./assets/icons/eraser.svg";
const CANVAS_NODE_TOOLBAR_SLICE = "./assets/icons/slice.svg";
const CANVAS_NODE_TOOLBAR_MORE = "./assets/icons/more.svg";
const CANVAS_NODE_TOOLBAR_UPLOAD = "./assets/icons/upload.svg";
const CANVAS_NODE_TOOLBAR_DOWNLOAD = "./assets/icons/download.svg";
const CANVAS_NODE_TOOLBAR_EXPAND = "./assets/icons/fullscreen.svg";
const CANVAS_NODE_TOOLBAR_CLOSE = "./assets/icons/close.svg";
const CANVAS_NODE_LEFT_ADD = "./assets/icons/plus.svg";
const CANVAS_NODE_LEFT_SEARCH = "./assets/icons/search.svg";
const CANVAS_NODE_LEFT_GRID = "./assets/icons/grid.svg";
const CANVAS_NODE_LEFT_CLOCK = "./assets/icons/clock.svg";
const CANVAS_NODE_LEFT_DELETE = "./assets/icons/trash.svg";
const CANVAS_NODE_DOCK_GRID = "./assets/icons/grid.svg";
const CANVAS_NODE_DOCK_SCENE = "./assets/icons/image.svg";
const CANVAS_NODE_DOCK_POINTER = "./assets/icons/pointer.svg";
const CANVAS_NODE_DOCK_MINUS = "./assets/icons/minus.svg";
const CANVAS_NODE_DOCK_PLUS = "./assets/icons/plus.svg";
const icon = {
  back:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.333 4 10.333 8 6.333 12" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14.333 14 10.891 10.558M12.778 7.111A5.667 5.667 0 1 1 1.444 7.11a5.667 5.667 0 0 1 11.334 0Z" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linejoin="round"/><path d="M8.333 7a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Z" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2h4.667v4.667H2V2Zm0 7.333h4.667V14H2V9.333Zm7.333-7.333H14v4.667H9.333V2Zm0 7.333H14V14H9.333V9.333Z" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linejoin="round"/></svg>',
  scene:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.333 10.92 14.667 14.334M3.667 11.667 7.333 7.333l2.334 2.334 2.666-3.334M8 5.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  square:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.667 1.667h12.666v12.666H1.667V1.667Z" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linejoin="round"/></svg>',
  clock:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.364 4.848a1.212 1.212 0 1 0 0-2.424 1.212 1.212 0 0 0 0 2.424Zm-3.03 3.758a6.667 6.667 0 1 0 13.333 0A6.667 6.667 0 0 0 1.334 8.606Zm6.666-3.273V9.03l2.667 1.523" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  trash:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3.333h10M5.333 3.333v-2h5.334v2M4.333 3.333V13a1.667 1.667 0 0 0 1.667 1.667h4A1.667 1.667 0 0 0 11.667 13V3.333M6.667 6.667V11M9.333 6.667V11" fill="none" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  image:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4.5A1.5 1.5 0 0 0 2.5 6v8A1.5 1.5 0 0 0 4 15.5h12a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 16 4.5H4Zm0-1.5h12A3 3 0 0 1 19 6v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm1.9 8.9 1.9-2.2a1 1 0 0 1 1.5 0l1.5 1.8 1.2-1.3a1 1 0 0 1 1.5.1L16 13H4l1.9-2.1ZM6.5 7.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" fill="currentColor"/></svg>',
  audio:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 8.25v3.5M7 5.5v9M10 3.5v13M13 6.5v7M16 8.75v2.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
  settings:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 7.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M16.55 8.85 15.3 8.3a5.8 5.8 0 0 0-.52-1.24l.5-1.28-1.08-1.08-1.28.5a5.8 5.8 0 0 0-1.24-.52l-.53-1.23h-1.52L9.1 4.68a5.8 5.8 0 0 0-1.24.52l-1.28-.5L5.5 5.78l.5 1.28a5.8 5.8 0 0 0-.52 1.24l-1.23.55v1.52l1.23.53c.12.44.3.86.52 1.24l-.5 1.28 1.08 1.08 1.28-.5c.38.23.8.4 1.24.52l.53 1.23h1.52l.53-1.23c.44-.12.86-.3 1.24-.52l1.28.5 1.08-1.08-.5-1.28c.23-.38.4-.8.52-1.24l1.25-.53V8.85Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  plus:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.667 8h10.666M8 2.667v10.666" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  circleDashedPlus:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2.6 3.2"/><path d="M20.1 14.6a8.5 8.5 0 0 1-5.5 5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2.6 3.2"/><path d="M12 20.5A8.5 8.5 0 0 1 3.5 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2.6 3.2"/><path d="M3.9 9.4a8.5 8.5 0 0 1 5.5-5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2.6 3.2"/><path d="M12 8.2v7.6M8.2 12h7.6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
  minus:
    '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 6h7" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  plusSmall:
    '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6.005 2.5v7M2.5 6h7" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  camera:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 5.5 8 3.833h4L13.5 5.5H16A1.5 1.5 0 0 1 17.5 7v8A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5h2.5ZM10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid2:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3h6.25v6.25H3V3Zm7.75 0H17v6.25h-6.25V3ZM3 10.75h6.25V17H3v-6.25Zm7.75 0H17V17h-6.25v-6.25Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  layoutBoard:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9h8M12 15h8M12 4v16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid3:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3h4.167v4.167H3V3Zm5.417 0h4.166v4.167H8.417V3Zm5.416 0H18v4.167h-4.167V3ZM3 8.417h4.167v4.166H3V8.417Zm5.417 0h4.166v4.166H8.417V8.417Zm5.416 0H18v4.166h-4.167V8.417ZM3 13.833h4.167V18H3v-4.167Zm5.417 0h4.166V18H8.417v-4.167Zm5.416 0H18V18h-4.167v-4.167Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>',
  refresh:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10.15 3.4.62 1.72a1.2 1.2 0 0 0 .71.72l1.72.62-1.72.62a1.2 1.2 0 0 0-.71.71l-.62 1.72-.62-1.72a1.2 1.2 0 0 0-.71-.71l-1.72-.62 1.72-.62a1.2 1.2 0 0 0 .71-.72l.62-1.72ZM5.26 10.82l.44 1.22a.85.85 0 0 0 .5.5l1.22.44-1.22.44a.85.85 0 0 0-.5.5l-.44 1.22-.44-1.22a.85.85 0 0 0-.5-.5l-1.22-.44 1.22-.44a.85.85 0 0 0 .5-.5l.44-1.22ZM13.8 10.2l2 2m-1.06-4.1 1.72.62m-9.4 7.34 5.8-5.8" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sparkles:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8.6 3.4.65 1.82a1 1 0 0 0 .59.59l1.82.65-1.82.65a1 1 0 0 0-.59.59L8.6 10.52l-.65-1.82a1 1 0 0 0-.59-.59l-1.82-.65 1.82-.65a1 1 0 0 0 .59-.59L8.6 3.4Zm6.08 6.2.42 1.18a.7.7 0 0 0 .42.42l1.18.42-1.18.42a.7.7 0 0 0-.42.42l-.42 1.18-.42-1.18a.7.7 0 0 0-.42-.42l-1.18-.42 1.18-.42a.7.7 0 0 0 .42-.42l.42-1.18ZM4.3 12.6h6.2m-6.2 3h8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  guides:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3v14M10 3v14M14 3v14M3 6h14M3 10h14M3 14h14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  expand:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 3.5H16.5V7.5M7.5 16.5H3.5V12.5M16.2 3.8 11 9M3.8 16.2 9 11" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  resetView:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10a6.5 6.5 0 0 1 11.092-4.596L16 6.833M16 6.833V3.5m0 3.333h-3.333M16.5 10a6.5 6.5 0 0 1-11.094 4.595L4 13.166M4 13.166V16.5m0-3.334h3.334" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const workflowEditIcon = {
  imageGeneration:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m5.5 13 2.25-2.55a.8.8 0 0 1 1.2 0l1.55 1.8 1.12-1.2a.8.8 0 0 1 1.18.04L15 13.7M12.5 6.5l.42 1.08L14 8l-1.08.42-.42 1.08-.42-1.08L11 8l1.08-.42.42-1.08Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  rectangle:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 5.5h13v9h-13v-9Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  borderInner:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 3.5h13v13h-13v-13Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 3.5v13M3.5 10h13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/></svg>',
  crop:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.8v11.2h11.2M2.8 6h11.2v11.2M6 14h-2M14 6h2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  resize:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 8V4.5H8M12 4.5h3.5V8M15.5 12v3.5H12M8 15.5H4.5V12M5 5l4 4M15 5l-4 4M15 15l-4-4M5 15l4-4" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chalkboardTeacher:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.5 7a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM2.5 16c.35-2.35 1.35-3.55 2.8-3.55s2.45 1.2 2.8 3.55M9.5 4.5h7v8h-7M12 8.5h2.8M12 10.8h1.8" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  eraser:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.2 14.5-3.7-3.7a1.4 1.4 0 0 1 0-2l4.9-4.9a1.4 1.4 0 0 1 2 0l6.1 6.1a1.4 1.4 0 0 1 0 2l-2.5 2.5H7.2ZM10 6.2l5.2 5.2M5.5 16.5h10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  palette:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5a6.5 6.5 0 0 0 0 13h1.2a1.25 1.25 0 0 0 .82-2.2.95.95 0 0 1 .62-1.67h1.18A2.72 2.72 0 0 0 16.5 9.9 6.4 6.4 0 0 0 10 3.5Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 9.2h.01M8.4 6.7h.01M11.2 6.7h.01M13.1 9.1h.01" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>',
  paint:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.2 11.2 12.8 3.6a1.4 1.4 0 0 1 2 2l-7.6 7.6-3 .9.9-2.9ZM4.5 16h11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  writing:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 15.8h12M5.2 12.8l.6-2.6 6.9-6.9a1.45 1.45 0 0 1 2.05 2.05l-6.9 6.9-2.65.55ZM11.7 4.3l2 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const workflowPlayerIcon = {
  play: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4.8v10.4L15 10 7 4.8Z" fill="currentColor"/></svg>',
  pause: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.2 4.5h3v11h-3v-11ZM10.8 4.5h3v11h-3v-11Z" fill="currentColor"/></svg>',
};

const workflowReferenceSources = [
  { id: "local", label: "本地" },
  { id: "project", label: "项目资产库" },
  { id: "team", label: "团队资产库" },
  { id: "market", label: "素材广场" },
];

const workflowReferenceCategories = ["角色", "场景", "服装", "道具", "音频", "其他"];

const workflowReferenceImagePool = [
  "./assets/images/canvas-character.jpg",
  "./assets/images/project-neon-tokyo.jpg",
  "./assets/images/style-cinematic.jpg",
  "./assets/images/canvas-chase-sequence.jpg",
  "./assets/images/canvas-ink-landscape.jpg",
  "./assets/images/canvas-node-preview.png",
];

const workflowReferenceLibraryNames = {
  project: "项目资产库",
  team: "团队资产库",
  market: "素材广场",
};

const workflowReferenceAssetName = (source, category, index) => {
  const sourcePrefix = { project: "项目", team: "团队", market: "广场" }[source] || "本地";
  const variants = {
    角色: ["李柏", "罗根", "雨夜线人"],
    场景: ["废弃仓库", "医院走廊", "码头雨棚"],
    服装: ["黑色风衣", "战术背心", "婚礼礼服"],
    道具: ["金属手枪", "旧录音机", "加密箱"],
    音频: ["雨夜环境声", "紧张鼓点", "对白底噪"],
    其他: ["冷白光效", "烟雾氛围", "镜头参考"],
  }[category] || ["资产"];
  return `${sourcePrefix}${variants[index % variants.length]}`;
};

const projectSeed = [
  {
    id: "p1",
    name: "霓虹魅影：东京",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "16:9 横屏",
    style: "电影感",
    cover: "./assets/images/project-neon-tokyo.jpg",
    canvases: [
      { id: "c1", name: "开场镜头", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER },
      { id: "c2", name: "角色定妆", timestamp: DEFAULT_TIMESTAMP, cover: "./assets/images/canvas-character.jpg" },
    ],
  },
  {
    id: "p2",
    name: "墨境追踪",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "16:9 横屏",
    style: "水墨风格",
    cover: DEFAULT_COVER,
    canvases: [
      { id: "c3", name: "山水画布", timestamp: DEFAULT_TIMESTAMP, cover: "./assets/images/canvas-ink-landscape.jpg" },
      { id: "c4", name: "追踪序列", timestamp: DEFAULT_TIMESTAMP, cover: "./assets/images/canvas-chase-sequence.jpg" },
    ],
  },
  {
    id: "p3",
    name: "Temporal Shift",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "9:16 竖屏",
    style: "赛博朋克",
    cover: "./assets/images/canvas-chase-sequence.jpg",
    canvases: [{ id: "c5", name: "时间裂缝", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
  {
    id: "p4",
    name: "Summit Echoes",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "16:9 横屏",
    style: "写实主义",
    cover: "./assets/images/canvas-ink-landscape.jpg",
    canvases: [{ id: "c6", name: "峰顶全景", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
  {
    id: "p5",
    name: "Infinite Loop",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "1:1 正方形",
    style: "极简风格",
    cover: "./assets/images/canvas-character.jpg",
    canvases: [{ id: "c7", name: "循环主体", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
];

const styleSeed = [
  { id: "realistic", name: "写实主义", image: "./assets/images/style-realistic.jpg" },
  { id: "anime", name: "动漫风格", image: "./assets/images/style-anime.jpg" },
  { id: "cyberpunk", name: "赛博朋克", image: "./assets/images/style-cyberpunk.jpg" },
  { id: "cinematic", name: "电影感", image: "./assets/images/style-cinematic.jpg" },
  { id: "three-d", name: "3D风格", image: "./assets/images/style-3d.jpg" },
];

const videoSeed = [
  {
    id: "v1",
    title: "霓虹雨夜追车片段",
    uploadedAt: "2026年07月21日 10:24",
    uploadedAtMs: new Date("2026-07-21T10:24:00+08:00").getTime(),
    userName: "Sunny",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/project-neon-tokyo.jpg",
    likes: 12800,
    videoSrc: "",
  },
  {
    id: "v2",
    title: "水墨山谷开场镜头",
    uploadedAt: "2026年07月20日 18:42",
    uploadedAtMs: new Date("2026-07-20T18:42:00+08:00").getTime(),
    userName: "墨影导演",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/canvas-ink-landscape.jpg",
    likes: 9400,
    videoSrc: "",
  },
  {
    id: "v3",
    title: "赛博城市角色亮相",
    uploadedAt: "2026年07月19日 21:16",
    uploadedAtMs: new Date("2026-07-19T21:16:00+08:00").getTime(),
    userName: "FutureLab",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/canvas-chase-sequence.jpg",
    likes: 17600,
    videoSrc: "",
  },
  {
    id: "v4",
    title: "角色定妆幕后预览",
    uploadedAt: "2026年07月18日 09:05",
    uploadedAtMs: new Date("2026-07-18T09:05:00+08:00").getTime(),
    userName: "分镜师阿岚",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/canvas-character.jpg",
    likes: 6800,
    videoSrc: "",
  },
  {
    id: "v5",
    title: "星港巡航概念预告",
    uploadedAt: "2026年07月22日 11:18",
    uploadedAtMs: new Date("2026-07-22T11:18:00+08:00").getTime(),
    userName: "Sunny",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/style-cinematic.jpg",
    likes: 0,
    status: "pending",
    videoSrc: "",
  },
  {
    id: "v6",
    title: "森林秘境角色试映",
    uploadedAt: "2026年07月22日 09:46",
    uploadedAtMs: new Date("2026-07-22T09:46:00+08:00").getTime(),
    userName: "Sunny",
    avatar: "./assets/images/avatar-sunny.jpg",
    cover: "./assets/images/style-realistic.jpg",
    likes: 0,
    status: "pending",
    videoSrc: "",
  },
];

const styleNameMap = Object.fromEntries(styleSeed.map((style) => [style.id, style.name]));
const NAV_STATE_KEY = "phanty-movie-nav-state";
const PROJECTS_STATE_KEY = "phanty-movie-projects-state";
const VIDEOS_STATE_KEY = "phanty-movie-videos-state";
const VIDEOS_REVIEW_INIT_KEY = "phanty-movie-videos-review-init";
const ACTIVITY_END_AT = new Date("2026-08-01T00:00:00+08:00").getTime();
const CAMERA_OPTIONS = [
  "ARRI Alexa Mini",
  "ARRI Alexa 65",
  "ARRI Alexa 35",
  "ARRI Alexa Classic",
  "Sony Venice",
  "RED V-Raptor",
  "Canon C500",
  "Sony FX6",
  "Sony FX",
  "IMAX 15/70 film camera",
];
const LENS_OPTIONS = ["Anamorphic Lens", "Spherical Lens", "Vintage Lens", "Macro Lens", "Cooke lens"];
const FOCAL_LENGTH_OPTIONS = ["8mm", "14mm", "24mm", "35mm", "50mm", "75mm", "125mm"];
const APERTURE_OPTIONS = ["f/1.4", "f/4", "f/11"];
const WASH_IMAGE_COST = 30;
const REVERSE_PROMPT_COST = 30;

const createImageNode = ({
  id,
  name,
  image,
  x = 0,
  y = 0,
  prompt,
  type = "image",
  panoramaSource = null,
  panoramaOffset = null,
  cameraControl = null,
} = {}) => ({
  id: id || `n${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "图片节点2-副本",
  image: image || CANVAS_NODE_PREVIEW,
  x,
  y,
  prompt: prompt || DEFAULT_NODE_PROMPT,
  panoramaSource,
  panoramaOffset,
  cameraControl: {
    enabled: cameraControl?.enabled || false,
    camera: cameraControl?.camera || "Sony Venice",
    lens: cameraControl?.lens || "Anamorphic Lens",
    focalLength: cameraControl?.focalLength || "35mm",
    aperture: cameraControl?.aperture || "f/1.4",
  },
  topTags: ["全景", "多角度", "打光", "九宫格", "擦除", "宫格切分"],
  badge: "",
  model: "Gemini 3.1 Flash Lite",
  ratio: "16:9·2K",
  outputCount: "3张",
  likes: "4",
  resolution: "2752*1536",
});

const createPanoramaPlayerNode = ({
  id,
  name,
  image,
  sourceImage,
  x = 0,
  y = 0,
  prompt,
  editorText,
  panX = 0,
  showGuides = false,
  type = "panorama",
} = {}) => ({
  id: id || `n${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "720°全景图",
  image: image || CANVAS_NODE_PREVIEW,
  sourceImage: sourceImage || image || CANVAS_NODE_PREVIEW,
  x,
  y,
  prompt: prompt || "720全景 去掉人物",
  editorText: editorText || "点击生成，直接将场景图像转为720全景图；支持文生/参考图生成。",
  panX,
  showGuides,
  model: "Lib Navo 2",
  ratio: "21:9 · 标准画质",
  outputCount: "1张",
  likes: "12",
  resolution: "3168 × 1344",
});

const createShotGroupNode = ({
  id,
  name,
  x = 0,
  y = 0,
  columns = 2,
  shots = [],
  type = "shot-group",
} = {}) => ({
  id: id || `g${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "全景截图组",
  x,
  y,
  columns,
  shots,
});

const createTextNode = ({
  id,
  name,
  text,
  x = 0,
  y = 0,
  type = "text",
} = {}) => ({
  id: id || `t${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "文本节点",
  text:
    text ||
    "一位年轻角色站在柔和自然光下，镜头聚焦面部与上半身，肤质细腻，背景虚化，整体呈现电影感写实风格。",
  x,
  y,
});

const createAudioNode = ({
  id,
  name,
  x = 0,
  y = 0,
  scriptText,
  voice = "青涩青年",
  model = "Minimax Speech 2.8 HD",
  format = "MP3",
  otherSetting = "自动降噪",
  type = "audio",
} = {}) => ({
  id: id || `a${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "音频节点",
  x,
  y,
  scriptText: scriptText || "",
  voice,
  model,
  format,
  otherSetting,
});

const officialCanvasTemplates = [
  {
    id: "official-character-board",
    type: "official",
    name: "角色定妆画布",
    masterTitle: "角色定妆母版",
    cover: "./assets/images/canvas-character.jpg",
    nodes: [
      createImageNode({
        name: "角色主视觉",
        image: "./assets/images/canvas-character.jpg",
        prompt: "角色三视图、表情、服装细节，统一电影感写实光线。",
        x: 0,
        y: 0,
      }),
      createTextNode({
        name: "角色设定说明",
        text: "记录角色身份、性格、服装、道具与镜头注意事项。",
        x: 720,
        y: 34,
      }),
    ],
  },
  {
    id: "official-scene-board",
    type: "official",
    name: "场景探索画布",
    masterTitle: "场景探索母版",
    cover: "./assets/images/canvas-ink-landscape.jpg",
    nodes: [
      createImageNode({
        name: "场景氛围图",
        image: "./assets/images/canvas-ink-landscape.jpg",
        prompt: "建立场景空间、天气、时代风格与主色调。",
        x: 0,
        y: 0,
      }),
      createImageNode({
        name: "分镜参考图",
        image: "./assets/images/canvas-chase-sequence.jpg",
        prompt: "补充关键镜头构图与运动方向。",
        x: 720,
        y: 0,
      }),
    ],
  },
];

const hydrateCanvasNode = (node, nodeIndex = 0) => {
  if (node?.type === "panorama") {
    return createPanoramaPlayerNode({
      ...node,
      x: node.x ?? 140 + nodeIndex * 28,
      y: node.y ?? 126 + nodeIndex * 24,
    });
  }
  if (node?.type === "shot-group") {
    return createShotGroupNode({
      ...node,
      x: node.x ?? 140 + nodeIndex * 28,
      y: node.y ?? 126 + nodeIndex * 24,
    });
  }
  if (node?.type === "text") {
    return createTextNode({
      ...node,
      x: node.x ?? 140 + nodeIndex * 28,
      y: node.y ?? 126 + nodeIndex * 24,
    });
  }
  if (node?.type === "audio") {
    return createAudioNode({
      ...node,
      x: node.x ?? 140 + nodeIndex * 28,
      y: node.y ?? 126 + nodeIndex * 24,
    });
  }
  return createImageNode({
    ...node,
    x: node.x ?? 140 + nodeIndex * 28,
    y: node.y ?? 126 + nodeIndex * 24,
  });
};

const normalizeCanvas = (canvas, index = 0) => {
  canvas.nodes = canvas.nodes?.map((node, nodeIndex) => hydrateCanvasNode(node, nodeIndex)) || [];

  if (!canvas.viewport) {
    canvas.viewport = { x: 0, y: 0, scale: 1 };
  }

  canvas.shareAccess = canvas.shareAccess === "private" ? "private" : "public";

  canvas.connections = Array.isArray(canvas.connections) ? canvas.connections : [];

  if (!canvas.selectedNodeId && canvas.nodes.length) {
    canvas.selectedNodeId = canvas.nodes[0]?.id || null;
  }

  return canvas;
};

const normalizeProject = (project) => {
  project.canvases = (project.canvases || []).map((canvas, index) => normalizeCanvas(canvas, index));
  project.canvasTemplates = Array.isArray(project.canvasTemplates) ? project.canvasTemplates : [];
  return project;
};

const loadProjectsState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(PROJECTS_STATE_KEY) || "null");
    if (Array.isArray(saved) && saved.length) {
      return saved.map(normalizeProject);
    }
  } catch {}
  return structuredClone(projectSeed).map(normalizeProject);
};

const saveProjectsState = () => {
  localStorage.setItem(PROJECTS_STATE_KEY, JSON.stringify(state.projects));
};

const defaultVideoStatus = (video, index = 0) => {
  if (video.status) return video.status;
  if (video.id === "v5" || video.id === "v6") return "pending";
  if (video.id === "v2" || index === 1) return "pending";
  if (video.id === "v4" || index === 3) return "failed";
  return "published";
};

const normalizeVideo = (video, index = 0) => ({
  id: video.id || `v${Date.now()}${index}`,
  title: video.title || `未命名视频 ${index + 1}`,
  uploadedAt: video.uploadedAt || DEFAULT_TIMESTAMP,
  uploadedAtMs: video.uploadedAtMs || Date.now() - index * 3600000,
  publishedAt: video.publishedAt || (defaultVideoStatus(video, index) === "published" ? video.uploadedAt || DEFAULT_TIMESTAMP : ""),
  publishedAtMs: video.publishedAtMs || (defaultVideoStatus(video, index) === "published" ? video.uploadedAtMs || Date.now() - index * 3600000 : null),
  userName: video.userName || "Sunny",
  avatar: video.avatar || "./assets/images/avatar-sunny.jpg",
  cover: video.cover || DEFAULT_COVER,
  likes: Number(video.likes) || 0,
  status: defaultVideoStatus(video, index),
  isShelfOff: Boolean(video.isShelfOff),
  videoSrc: video.videoSrc || "",
  videoFileName: video.videoFileName || "",
});

const loadVideosState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(VIDEOS_STATE_KEY) || "null");
    if (Array.isArray(saved)) {
      const shouldInitializeReviewState = localStorage.getItem(VIDEOS_REVIEW_INIT_KEY) !== "1";
      const videos = saved.map((video, index) => {
        const normalized = normalizeVideo(video, index);
        if (shouldInitializeReviewState && /^v[1-4]$/.test(normalized.id)) {
          normalized.status = defaultVideoStatus({ id: normalized.id }, index);
          normalized.isShelfOff = false;
        }
        return normalized;
      });
      const existingIds = new Set(videos.map((video) => video.id));
      let addedSeedVideos = false;
      videoSeed.forEach((video, index) => {
        if (!existingIds.has(video.id)) {
          videos.push(normalizeVideo(video, index));
          addedSeedVideos = true;
        }
      });
      if (shouldInitializeReviewState) {
        localStorage.setItem(VIDEOS_REVIEW_INIT_KEY, "1");
        localStorage.setItem(VIDEOS_STATE_KEY, JSON.stringify(videos));
      } else if (addedSeedVideos) {
        localStorage.setItem(VIDEOS_STATE_KEY, JSON.stringify(videos));
      }
      return videos;
    }
  } catch {}
  const videos = structuredClone(videoSeed).map(normalizeVideo);
  localStorage.setItem(VIDEOS_REVIEW_INIT_KEY, "1");
  return videos;
};

const saveVideosState = () => {
  localStorage.setItem(VIDEOS_STATE_KEY, JSON.stringify(state.videos));
};

const state = {
  projects: loadProjectsState(),
  videos: loadVideosState(),
  currentView: "home",
  currentProjectId: null,
  currentCanvasId: null,
  selectedIds: new Set(),
  batchMode: false,
  activeMenuId: null,
  sortKey: "date-desc",
  deleteTargetIds: [],
  createMode: "project-create",
  selectedRatio: "16:9",
  selectedStyle: "realistic",
  videoSortKey: "latest",
  activeVideoId: null,
  uploadTarget: null,
  uploadNodeTarget: null,
  canvasClipboard: null,
  canvasAddPanelOpen: false,
  canvasTemplatePanelOpen: false,
  canvasTemplateType: "official",
  canvasTemplateSearch: "",
  canvasTemplateDraftNodeId: null,
  canvasTemplateDraftTitle: "",
  canvasTemplateDraftCover: "",
  canvasTemplateDeleteTargetId: null,
  canvasTemplateActionGuardUntil: 0,
  canvasContextActionGuardUntil: 0,
  canvasAddPanelGuardUntil: 0,
  canvasDraftName: "",
  canvasContextMenu: null,
  avatarOpen: false,
  noticeOpen: false,
  fullscreenPanoramaId: null,
  cameraControlNodeId: null,
  cameraControlDraft: null,
  washConfirmNodeId: null,
  reversePromptConfirmNodeId: null,
  audioVoiceNodeId: null,
  workflowGenerateMode: null,
  workflowPreviewFrameIndex: null,
  workflowDetailFrameIndex: null,
  workflowEditFrameIndex: null,
  workflowEditVersionIndex: 0,
  workflowEditTool: null,
  workflowEditGeneratedVersions: [],
  workflowEditFinalizedVersionKey: "original",
  workflowEditDeletedVersionKeys: [],
  workflowEditDeleteVersionKey: null,
  workflowEditCostConfirmTool: null,
  workflowEditSaveMenuOpen: false,
  workflowKeyframeFilter: "all",
  workflowRenamingFrameIndex: null,
  workflowDeleteFrameIndex: null,
  workflowClearConfirmOpen: false,
  workflowPreviewModalOpen: false,
  workflowClipContextMenu: null,
  workflowReferenceModalOpen: false,
  workflowReferenceSource: "local",
  workflowReferenceCategory: "角色",
  workflowEpisodeIndex: 0,
  workflowSceneIndex: 0,
  workflowShotIndex: 1,
  projectModeTargetId: null,
  creatorVideoMenuId: null,
  creatorCoverTargetId: null,
  creatorVideoDeleteTargetId: null,
  reviewVideoTargetId: null,
  shelfVideoTargetId: null,
  reviewStatusFilter: "all",
  publishVideoMode: "create",
  publishVideoEditTargetId: null,
  publishDraftCover: "",
  publishDraftVideo: "",
  publishDraftCoverName: "",
  publishDraftVideoName: "",
};

const canvasRuntime = {
  mode: null,
  pointerId: null,
  startClientX: 0,
  startClientY: 0,
  startViewportX: 0,
  startViewportY: 0,
  nodeId: null,
  nodeStartX: 0,
  nodeStartY: 0,
  panStartX: 0,
  panoramaStartOffset: 0,
};

const grid = document.getElementById("project-grid");
const homeView = document.getElementById("home-view");
const creatorCenterView = document.getElementById("creator-center-view");
const reviewCenterView = document.getElementById("review-center-view");
const listView = document.getElementById("list-view");
const workflowHomeView = document.getElementById("workflow-home-view");
const detailView = document.getElementById("canvas-detail-view");
const canvasStage = document.getElementById("canvas-stage");
const brandHomeTrigger = document.getElementById("brand-home-trigger");
const topbarNav = document.querySelector(".topbar-nav");
const homeProjectCount = document.getElementById("home-project-count");
const homeVideoGrid = document.getElementById("home-video-grid");
const creatorVideoList = document.getElementById("creator-video-list");
const reviewVideoList = document.getElementById("review-video-list");
const reviewFilterSelect = document.getElementById("review-filter-select");
const sortMenu = document.getElementById("sort-menu");
const sortTrigger = document.getElementById("sort-trigger");
const sortLabel = document.getElementById("sort-label");
const batchTrigger = document.getElementById("batch-trigger");
const batchBottomTools = document.getElementById("batch-bottom-tools");
const selectAllTrigger = document.getElementById("select-all-trigger");
const batchDeleteTrigger = document.getElementById("batch-delete-trigger");
const searchInput = document.getElementById("search-input");
const pageTitle = document.getElementById("page-title");
const pageSubtitle = document.getElementById("page-subtitle");
const backTrigger = document.getElementById("back-trigger");
const sidebar = document.getElementById("canvas-list-sidebar");
const sidebarBackTrigger = document.getElementById("sidebar-back-trigger");
const sidebarProjectName = document.getElementById("sidebar-project-name");
const sidebarRatioTag = document.getElementById("sidebar-ratio-tag");
const sidebarStyleTag = document.getElementById("sidebar-style-tag");
const workflowBackTrigger = document.getElementById("workflow-back-trigger");
const workflowModeSwitchTrigger = document.getElementById("workflow-mode-switch-trigger");
const workflowProjectName = document.getElementById("workflow-project-name");
const workflowRatioTag = document.getElementById("workflow-ratio-tag");
const workflowStyleTag = document.getElementById("workflow-style-tag");
const workflowMainProjectName = document.getElementById("workflow-main-project-name");
const workflowMainStyleTag = document.getElementById("workflow-main-style-tag");
const workflowHistoryTrigger = document.getElementById("workflow-history-trigger");
const workflowEpisodeSelect = document.getElementById("workflow-episode-select");
const workflowSceneSelect = document.getElementById("workflow-scene-select");
const workflowScriptCard = document.getElementById("workflow-script-card");
const workflowShotSummary = document.getElementById("workflow-shot-summary");
const workflowShotTable = document.getElementById("workflow-shot-table");
const workflowKeyframeGrid = document.getElementById("workflow-keyframe-grid");
const workflowGenerateModalRoot = document.getElementById("workflow-generate-modal-root");
const createLabel = document.getElementById("create-label");
const avatarTrigger = document.getElementById("avatar-trigger");
const avatarPanel = document.getElementById("avatar-panel");
const noticeTrigger = document.getElementById("notice-trigger");
const noticePanel = document.getElementById("notice-panel");
const createModal = document.getElementById("create-modal");
const deleteModal = document.getElementById("delete-modal");
const projectModeModal = document.getElementById("project-mode-modal");
const limitedActivityModal = document.getElementById("limited-activity-modal");
const limitedActivityTrigger = document.getElementById("limited-activity-trigger");
const activityRechargeTrigger = document.getElementById("activity-recharge-trigger");
const activityCountdownDays = document.getElementById("activity-countdown-days");
const activityCountdownHours = document.getElementById("activity-countdown-hours");
const activityCountdownMinutes = document.getElementById("activity-countdown-minutes");
const activityCountdownSeconds = document.getElementById("activity-countdown-seconds");
const contactSupportModal = document.getElementById("contact-support-modal");
const contactSupportTrigger = document.getElementById("contact-support-trigger");
const creatorCenterTrigger = document.getElementById("creator-center-trigger");
const reviewCenterTrigger = document.getElementById("review-center-trigger");
const videoPreviewModal = document.getElementById("video-preview-modal");
const videoPreviewContent = document.getElementById("video-preview-content");
const publishSuccessModal = document.getElementById("publish-success-modal");
const reviewVideoModal = document.getElementById("review-video-modal");
const reviewVideoName = document.getElementById("review-video-name");
const reviewPassTrigger = document.getElementById("review-pass-trigger");
const reviewFailTrigger = document.getElementById("review-fail-trigger");
const canvasShareModal = document.getElementById("canvas-share-modal");
const canvasShareLinkInput = document.getElementById("canvas-share-link-input");
const copyCanvasShareTrigger = document.getElementById("copy-canvas-share-trigger");
const shareCopyFeedback = document.getElementById("share-copy-feedback");
const canvasShareAccessSwitch = document.getElementById("canvas-share-access-switch");
const shareAccessTitle = document.getElementById("share-access-title");
const shareAccessDescription = document.getElementById("share-access-description");
const copyCanvasModal = document.getElementById("copy-canvas-modal");
const copyCanvasProjectSelect = document.getElementById("copy-canvas-project-select");
const copyCanvasNameInput = document.getElementById("copy-canvas-name-input");
const confirmCopyCanvasTrigger = document.getElementById("confirm-copy-canvas-trigger");
const publishVideoModal = document.getElementById("publish-video-modal");
const publishVideoTrigger = document.getElementById("publish-video-trigger");
const publishVideoNameInput = document.getElementById("publish-video-name-input");
const publishCoverInput = document.getElementById("publish-cover-input");
const publishVideoInput = document.getElementById("publish-video-input");
const publishCoverTrigger = document.getElementById("publish-cover-trigger");
const publishVideoFileTrigger = document.getElementById("publish-video-file-trigger");
const publishCoverPreview = document.getElementById("publish-cover-preview");
const publishCoverName = document.getElementById("publish-cover-name");
const publishVideoFileName = document.getElementById("publish-video-file-name");
const confirmPublishVideoTrigger = document.getElementById("confirm-publish-video-trigger");
const createTitle = document.getElementById("create-title");
const createTrigger = document.getElementById("create-trigger");
const confirmCreateTrigger = document.getElementById("confirm-create-trigger");
const cancelCreateTrigger = document.getElementById("cancel-create-trigger");
const confirmDeleteTrigger = document.getElementById("confirm-delete-trigger");
const deleteMessage = document.getElementById("delete-message");
const projectNameInput = document.getElementById("project-name-input");
const styleGrid = document.getElementById("style-grid");
const ratioSection = document.getElementById("ratio-section");
const styleSection = document.getElementById("style-section");
const nameLabel = document.getElementById("name-label");
const coverUploadInput = document.getElementById("cover-upload-input");
const nodeImageUploadInput = document.getElementById("node-image-upload-input");
const creatorCoverUploadInput = document.getElementById("creator-cover-upload-input");

const sortLabelMap = {
  "date-asc": "时间正序",
  "date-desc": "时间倒序",
  "name-asc": "名称正序",
  "name-desc": "名称倒序",
};

const compareItems = (a, b, sortKey) => {
  if (sortKey === "name-asc") return a.name.localeCompare(b.name, "zh-CN");
  if (sortKey === "name-desc") return b.name.localeCompare(a.name, "zh-CN");
  return sortKey === "date-asc" ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
};

const formatLikeCount = (value) => {
  if (value >= 10000) return `${(value / 10000).toFixed(value % 10000 === 0 ? 0 : 1)}万`;
  return String(value);
};

const formatPublishTime = (date = new Date()) => {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日 ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const videoPublishedTimeText = (video) => video.publishedAt || "--";

const videoPublishedTimeValue = (video) => video.publishedAtMs || 0;

const videoDisplayStatus = (video) => {
  if (video.status === "published" && video.isShelfOff) {
    return { key: "shelfOff", label: VIDEO_STATUS.shelfOff };
  }
  return { key: video.status || "pending", label: VIDEO_STATUS[video.status] || "待审核" };
};

const videoMatchesReviewFilter = (video) =>
  state.reviewStatusFilter === "all" || videoDisplayStatus(video).key === state.reviewStatusFilter;

const currentProject = () => state.projects.find((project) => project.id === state.currentProjectId) || null;
const currentCanvas = () => currentProject()?.canvases.find((canvas) => canvas.id === state.currentCanvasId) || null;
const currentCanvasNodes = () => currentCanvas()?.nodes || [];
const isCanvasDetailView = () => state.currentView === "canvas-detail" || state.currentView === "canvas-share";
const isCanvasShareView = () => state.currentView === "canvas-share";
const firstCanvasTarget = () => {
  for (const project of state.projects) {
    const canvas = project.canvases?.[0];
    if (canvas) return { projectId: project.id, canvasId: canvas.id };
  }
  return { projectId: state.projects[0]?.id || null, canvasId: null };
};
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const workflowStudioData = [
  {
    title: "第 1 集 · 雨夜终局",
    scenes: [
      {
        title: "第 1 场 · 废弃仓库",
        script: [
          "夜雨倾盆，废弃仓库里只有冷白色顶灯闪烁。李柏压低枪口，缓慢穿过积水地面。远处传来金属门被推开的声音，罗根从阴影里走出。",
          "李柏没有回头，只听见同伴在耳机里急促提醒：“目标不止一个，二层还有人。”",
        ],
        shots: [
          {
            no: "镜 1",
            duration: "3s",
            script: "仓库全景，雨声与脚步声建立空间。远景，24mm镜头，f/4，轻微俯拍，废弃仓库屋顶漏雨，冷白顶灯闪烁，地面积水反射人物剪影，整体压暗。",
            assets: [
              { type: "角色", name: "李柏", image: "./assets/images/avatar-sunny.jpg" },
              { type: "场景", name: "废弃仓库", image: "./assets/images/canvas-chase-sequence.jpg" },
              { type: "道具", name: "顶灯", image: "./assets/images/canvas-node-preview.png" },
            ],
          },
          {
            no: "镜 2",
            duration: "3s",
            script: "雨滴打在金属枪管上的滴答声，李棺沉重而克制的呼吸声 · 特写，85mm镜头，f/1.8，慢推，黑色手枪枪口稳稳对准前方且李棺绷直的手臂入画，枪管金属表面附着细密水珠并反射冷光，侧逆光勾勒枪身轮廓，色温4000K冷白，高明暗对比，冷峻幽暗色调 · 特写",
            assets: [
              { type: "角色", name: "李棺", image: "./assets/images/avatar-sunny.jpg" },
              { type: "角色", name: "罗根", image: "./assets/images/avatar-sunny.jpg" },
              { type: "场景", name: "废弃仓库", image: "./assets/images/canvas-chase-sequence.jpg" },
              { type: "道具", name: "黑色手枪", image: "./assets/images/canvas-node-preview.png" },
              { type: "道具", name: "耳机通讯器", image: "./assets/images/canvas-node-preview.png" },
              { type: "定妆照", name: "雨夜战术服", image: "./assets/images/style-cinematic.jpg" },
              { type: "定妆照", name: "湿发妆造", image: "./assets/images/style-realistic.jpg" },
            ],
          },
          {
            no: "镜 3",
            duration: "2s",
            script: "手枪扳机特写，指尖悬停未扣下，水珠沿护圈滑落。微距镜头，浅景深，冷白反光切过指节，背景只保留模糊人影。",
            assets: [
              { type: "角色", name: "李棺手部", image: "./assets/images/avatar-sunny.jpg" },
              { type: "道具", name: "手枪扳机", image: "./assets/images/canvas-node-preview.png" },
            ],
          },
          {
            no: "镜 4",
            duration: "2s",
            script: "李棺眼神极近特写，听见二层金属响动后瞳孔轻微收缩。侧逆光压出脸部轮廓，雨声和呼吸声被放大。",
            assets: [
              { type: "角色", name: "李棺", image: "./assets/images/avatar-sunny.jpg" },
              { type: "定妆照", name: "湿发妆造", image: "./assets/images/style-realistic.jpg" },
            ],
          },
        ],
        keyframes: [
          { title: "KF#1", meta: "LS · 3s", image: "./assets/images/canvas-chase-sequence.jpg" },
          { title: "KF#2", meta: "MS · 3s", image: "./assets/images/project-neon-tokyo.jpg" },
          { title: "KF#3", meta: "CU · 2s", image: "./assets/images/style-cinematic.jpg" },
          { title: "整场九宫格", meta: "4 镜 · 1 张", image: "./assets/images/canvas-node-preview.png", grid: true },
        ],
      },
      {
        title: "第 2 场 · 医院走廊",
        script: ["凌晨的医院走廊只剩安全灯亮着，监护仪远远传来规律蜂鸣。罗根停在病房门外，迟迟没有推门。"],
        shots: [
          { no: "镜 1", duration: "4s", script: "走廊长镜头，冷绿安全灯拉出纵深，罗根背影停在画面中央。", assets: [{ type: "角色", name: "罗根", image: "./assets/images/avatar-sunny.jpg" }, { type: "场景", name: "医院走廊", image: "./assets/images/style-realistic.jpg" }] },
          { no: "镜 2", duration: "2s", script: "门把手特写，手指靠近但没有触碰，背景监护仪声持续。", assets: [{ type: "道具", name: "病房门把手", image: "./assets/images/canvas-node-preview.png" }] },
          { no: "镜 3", duration: "3s", script: "罗根侧脸中近景，眼眶泛红，走廊尽头有人影掠过。", assets: [{ type: "角色", name: "罗根", image: "./assets/images/avatar-sunny.jpg" }, { type: "定妆照", name: "疲惫状态", image: "./assets/images/style-cinematic.jpg" }] },
        ],
        keyframes: [
          { title: "KF#1", meta: "WS · 4s", image: "./assets/images/style-realistic.jpg" },
          { title: "KF#2", meta: "CU · 2s", image: "./assets/images/canvas-node-preview.png" },
        ],
      },
      {
        title: "第 3 场 · 码头追逐",
        script: ["货轮汽笛声压过雨声，李棺沿湿滑码头奔跑，远处警灯反复切过集装箱表面。"],
        shots: [
          { no: "镜 1", duration: "3s", script: "手持跟拍，人物穿过集装箱狭缝，镜头轻微晃动增强追逐感。", assets: [{ type: "角色", name: "李棺", image: "./assets/images/avatar-sunny.jpg" }, { type: "场景", name: "雨夜码头", image: "./assets/images/project-neon-tokyo.jpg" }] },
          { no: "镜 2", duration: "2s", script: "脚步踩过积水特写，水花飞溅，警灯红蓝反射。", assets: [{ type: "道具", name: "积水地面", image: "./assets/images/canvas-node-preview.png" }] },
        ],
        keyframes: [
          { title: "KF#1", meta: "MS · 3s", image: "./assets/images/project-neon-tokyo.jpg" },
          { title: "KF#2", meta: "CU · 2s", image: "./assets/images/canvas-chase-sequence.jpg" },
        ],
      },
    ],
  },
  {
    title: "第 2 集 · 旧案回声",
    scenes: [
      {
        title: "第 1 场 · 档案室",
        script: ["老旧档案室里尘埃漂浮，翻开的卷宗露出七年前的失踪记录。"],
        shots: [
          { no: "镜 1", duration: "3s", script: "卷宗俯拍，手电光扫过泛黄纸页，案件照片露出一角。", assets: [{ type: "道具", name: "旧卷宗", image: "./assets/images/canvas-node-preview.png" }, { type: "场景", name: "档案室", image: "./assets/images/style-cinematic.jpg" }] },
          { no: "镜 2", duration: "3s", script: "角色抬头看向门口，门缝外传来脚步。", assets: [{ type: "角色", name: "李棺", image: "./assets/images/avatar-sunny.jpg" }] },
        ],
        keyframes: [
          { title: "KF#1", meta: "CU · 3s", image: "./assets/images/style-cinematic.jpg" },
          { title: "KF#2", meta: "MS · 3s", image: "./assets/images/style-3d.jpg" },
        ],
      },
    ],
  },
];

const groupWorkflowAssets = (assets = []) =>
  ["角色", "场景", "道具", "定妆照"]
    .map((type) => ({ type, items: assets.filter((asset) => asset.type === type) }))
    .filter((group) => group.items.length);

const currentWorkflowStudioSelection = () => {
  const episode = workflowStudioData[Math.min(state.workflowEpisodeIndex, workflowStudioData.length - 1)];
  const scene = episode.scenes[Math.min(state.workflowSceneIndex, episode.scenes.length - 1)];
  const shot = scene.shots[Math.min(state.workflowShotIndex, scene.shots.length - 1)];
  return { episode, scene, shot };
};

const workflowKeyframeDefaultName = (episode, scene, frame, assignedShotIndex = 0) =>
  `${episode.title.split(" · ")[0]} · ${scene.title.split(" · ")[0]} · ${frame.grid ? "整场多宫格" : (scene.shots[assignedShotIndex]?.no || scene.shots[0]?.no || "镜 1")}`;

const workflowKeyframeDisplayName = (episode, scene, frame, assignedShotIndex = 0) =>
  frame.name || workflowKeyframeDefaultName(episode, scene, frame, assignedShotIndex);

const renderWorkflowTimelineKeyframeClips = (episode, scene) => {
  let nonGridOrdinal = -1;
  const positions = [
    { left: 3, width: 18 },
    { left: 23, width: 20 },
    { left: 46, width: 16 },
  ];
  return scene.keyframes
    .map((frame) => ({
      frame,
      assignedShotIndex: frame.grid ? null : (Number.isInteger(frame.assignedShotIndex) ? frame.assignedShotIndex : ((nonGridOrdinal += 1) % scene.shots.length)),
    }))
    .filter(({ frame }) => !frame.grid && !frame.pending)
    .slice(0, positions.length)
    .map(({ frame, assignedShotIndex }, index) => `
      <span class="workflow-clip workflow-keyframe-clip" draggable="true" data-clip-kind="keyframe" style="left:${positions[index].left}%; width:${positions[index].width}%">
        <img src="${escapeHtml(frame.image)}" alt="" />
        <em>${escapeHtml(workflowKeyframeDisplayName(episode, scene, frame, assignedShotIndex))}</em>
        <i class="clip-resize is-left" data-resize-edge="left"></i>
        <i class="clip-resize is-right" data-resize-edge="right"></i>
      </span>
    `)
    .join("");
};

const renderWorkflowReferenceModal = () => {
  if (!state.workflowReferenceModalOpen) return "";
  const activeSource = state.workflowReferenceSource || "local";
  const activeCategory = state.workflowReferenceCategory || "角色";
  const sourceLabel = workflowReferenceSources.find((source) => source.id === activeSource)?.label || "本地";
  const libraryLabel = workflowReferenceLibraryNames[activeSource] || "";
  const categoryOffset = Math.max(0, workflowReferenceCategories.indexOf(activeCategory));
  const libraryAssets = Array.from({ length: 8 }, (_, index) => ({
    image: workflowReferenceImagePool[(categoryOffset + index) % workflowReferenceImagePool.length],
    name: workflowReferenceAssetName(activeSource, activeCategory, index),
  }));

  return `
    <div class="workflow-reference-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-reference-modal" aria-label="关闭上传参考"></button>
      <section class="workflow-reference-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-reference-title">
        <header>
          <div>
            <strong id="workflow-reference-title">上传参考</strong>
            <span>${escapeHtml(sourceLabel)}</span>
          </div>
          <button type="button" data-workflow-action="close-reference-modal" aria-label="关闭">✕</button>
        </header>
        <main>
          <nav class="workflow-reference-source-nav" aria-label="上传方式">
            ${workflowReferenceSources
              .map((source) => `<button class="${activeSource === source.id ? "active" : ""}" type="button" data-workflow-action="set-reference-source" data-reference-source="${source.id}">${source.label}</button>`)
              .join("")}
          </nav>
          <section class="workflow-reference-modal-body">
            ${activeSource === "local" ? `
              <label class="workflow-reference-local-drop">
                <input type="file" accept="image/*" hidden />
                <span>＋</span>
                <strong>选择文件</strong>
              </label>
            ` : `
              <div class="workflow-reference-category-nav" aria-label="${libraryLabel}分类">
                ${workflowReferenceCategories
                  .map((category) => `<button class="${activeCategory === category ? "active" : ""}" type="button" data-workflow-action="set-reference-category" data-reference-category="${category}">${category}</button>`)
                  .join("")}
              </div>
              <div class="workflow-reference-asset-grid" aria-label="${libraryLabel}${activeCategory}">
                ${libraryAssets
                  .map((asset) => `
                    <button type="button" class="workflow-reference-asset-card">
                      <img src="${escapeHtml(asset.image)}" alt="" />
                      <strong>${escapeHtml(asset.name)}</strong>
                    </button>
                  `)
                  .join("")}
              </div>
            `}
          </section>
        </main>
        <footer>
          <button class="workflow-secondary-button" type="button" data-workflow-action="close-reference-modal">取消</button>
          <button class="workflow-primary-button" type="button" data-workflow-action="close-reference-modal">确认</button>
        </footer>
      </section>
    </div>
  `;
};

const renderWorkflowGenerateModal = () => {
  if (!state.workflowGenerateMode) return "";
  const { episode, scene, shot } = currentWorkflowStudioSelection();
  const isSceneMode = state.workflowGenerateMode === "scene";
  const referenceAssets = isSceneMode ? scene.shots.flatMap((item) => item.assets || []) : shot.assets || [];
  const uniqueAssets = referenceAssets.filter(
    (asset, index, list) => list.findIndex((item) => item.type === asset.type && item.name === asset.name) === index,
  );
  const promptText = isSceneMode
    ? `${episode.title}｜${scene.title}\n\n整场多宫格关键帧，覆盖本场 ${scene.shots.length} 个镜头，保持角色造型、场景空间、光线色调连续统一。\n\n${scene.shots.map((item) => `${item.no}｜${item.duration}｜${item.script}`).join("\n\n")}`
    : `${episode.title}｜${scene.title}｜${shot.no}｜${shot.duration}\n\n${shot.script}\n\n## 视觉规格\n- 质感：电影级、摄影真实感、高分辨率、轻微电影颗粒\n- 风格关键词：cinematic, dramatic lighting, film grain, photorealistic, high resolution\n- 要求：精准还原分镜描述中的景别、光线、色调和人物状态，角色外貌严格参照素材，不得改变角色外观特征。`;

  return `
    <div class="workflow-generate-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-generate-modal" aria-label="关闭生成设置"></button>
      <section class="workflow-generate-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-generate-title">
        <header>
          <div>
            <strong id="workflow-generate-title">关键帧生成</strong>
          </div>
          <button type="button" data-workflow-action="close-generate-modal" aria-label="关闭">✕</button>
        </header>
        <div class="workflow-generate-body">
          <label class="workflow-generate-prompt">
            <span>提示词</span>
            <textarea>${escapeHtml(promptText)}</textarea>
          </label>
          <aside class="workflow-generate-side">
            <section>
              <strong>生成张数</strong>
              <div class="workflow-segmented">
                ${[1, 2, 3, 4].map((count) => `<button class="${count === 1 ? "active" : ""}" type="button">${count}</button>`).join("")}
              </div>
            </section>
            <section>
              <strong>图像模型</strong>
              <select>
                <option>phan nano Image 3</option>
                <option>phan movie Image Pro</option>
              </select>
            </section>
            <div class="workflow-generate-params">
              <section>
                <strong>清晰度</strong>
                <select>
                  <option>1K</option>
                  <option>2K</option>
                  <option>4K</option>
                </select>
              </section>
              <section>
                <strong>画面比例</strong>
                <select>
                  <option>16:9</option>
                  <option>1:1</option>
                  <option>9:16</option>
                </select>
              </section>
            </div>
          </aside>
        </div>
        <section class="workflow-generate-references">
          <div>
            <strong>参考图</strong>
          </div>
          <div class="workflow-reference-strip">
            ${uniqueAssets
              .map((asset) => `
                <button type="button" class="workflow-reference-thumb">
                  <img src="${escapeHtml(asset.image)}" alt="" />
                  <span>${escapeHtml(asset.type)}</span>
                  <strong>${escapeHtml(asset.name)}</strong>
                  <i data-workflow-action="remove-reference" aria-label="删除参考图">✕</i>
                </button>
              `)
              .join("")}
            <button type="button" class="workflow-reference-upload" data-workflow-action="open-reference-modal">
              <span>＋</span>
              <strong>上传参考</strong>
            </button>
          </div>
        </section>
        <footer>
          <div>
            <span class="workflow-generate-cost"><img src="${CANVAS_NODE_CREDIT}" alt="" />42</span>
            <button class="workflow-secondary-button" type="button" data-workflow-action="close-generate-modal">取消</button>
            <button class="workflow-primary-button" type="button" data-workflow-action="generate-keyframe">生成</button>
          </div>
        </footer>
      </section>
    </div>
  `;
};

const renderWorkflowFrameModal = () => {
  const frameIndex = state.workflowPreviewFrameIndex ?? state.workflowDetailFrameIndex;
  if (frameIndex === null) return "";
  const { episode, scene, shot } = currentWorkflowStudioSelection();
  const frame = scene.keyframes[frameIndex];
  if (!frame) return "";
  const isDetail = state.workflowDetailFrameIndex !== null;
  const sourceShots = frame.grid ? scene.shots : [shot];
  const sourceAssets = sourceShots.flatMap((item) => item.assets || []);
  const referenceAssets = sourceAssets.filter(
    (asset, index, list) => list.findIndex((item) => item.type === asset.type && item.name === asset.name) === index,
  );
  const promptText = frame.grid
    ? `${episode.title}｜${scene.title}｜整场多宫格\n\n${scene.shots.map((item) => `${item.no}｜${item.duration}｜${item.script}`).join("\n\n")}\n\n## 视觉规格\n- 模型：phan nano Image 3\n- 清晰度：1K\n- 画面比例：16:9\n- 风格：电影级、摄影真实感、同场景连续光线、统一角色造型`
    : `${episode.title}｜${scene.title}｜${shot.no}｜${shot.duration}\n\n${shot.script}\n\n## 视觉规格\n- 模型：phan nano Image 3\n- 清晰度：1K\n- 画面比例：16:9\n- 风格：电影级、摄影真实感、冷白侧逆光、高明暗对比`;

  return `
    <div class="workflow-generate-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-frame-modal" aria-label="关闭关键帧弹窗"></button>
      <section class="workflow-frame-dialog${isDetail ? " is-detail" : ""}" role="dialog" aria-modal="true" aria-labelledby="workflow-frame-title">
        <header>
          <div>
            <strong id="workflow-frame-title">${isDetail ? "关键帧详情" : "关键帧预览"}</strong>
            <span>${episode.title.split(" · ")[0]} · ${scene.title.split(" · ")[0]} · ${frame.grid ? "整场多宫格" : shot.no}</span>
          </div>
          <button type="button" data-workflow-action="close-frame-modal" aria-label="关闭">✕</button>
        </header>
        <div class="workflow-frame-body${isDetail ? " is-detail-only" : ""}">
          ${isDetail ? "" : `
            <figure>
              <img src="${escapeHtml(frame.image)}" alt="" />
              <figcaption>${escapeHtml(frame.title)} · ${escapeHtml(frame.meta)}</figcaption>
            </figure>
          `}
          ${isDetail ? `
            <aside class="workflow-frame-detail">
              <section>
                <strong>生成参数</strong>
                <dl>
                  <div><dt>模型</dt><dd>phan nano Image 3</dd></div>
                  <div><dt>清晰度</dt><dd>1K</dd></div>
                  <div><dt>画面比例</dt><dd>16:9</dd></div>
                  <div><dt>生成类型</dt><dd>${frame.grid ? "整场多宫格" : "当前镜"}</dd></div>
                  <div><dt>生成张数</dt><dd>${frame.grid ? "1 张多宫格" : "1 张"}</dd></div>
                </dl>
              </section>
              <section>
                <strong>参考图</strong>
                <div class="workflow-frame-reference-grid">
                  ${referenceAssets
                    .map((asset) => `
                      <span>
                        <img src="${escapeHtml(asset.image)}" alt="" />
                        <em>${escapeHtml(asset.type)}</em>
                        <strong>${escapeHtml(asset.name)}</strong>
                      </span>
                    `)
                    .join("")}
                </div>
              </section>
              <section>
                <strong>提示词</strong>
                <textarea readonly>${escapeHtml(promptText)}</textarea>
              </section>
            </aside>
          ` : ""}
        </div>
      </section>
    </div>
  `;
};

const renderWorkflowEditModal = () => {
  if (state.workflowEditFrameIndex === null) return "";
  const { episode, scene, shot } = currentWorkflowStudioSelection();
  const frame = scene.keyframes[state.workflowEditFrameIndex];
  if (!frame) return "";
  const isSplitTool = state.workflowEditTool === "split";
  const sourceShots = frame.grid ? scene.shots : [shot];
  const sourceAssets = sourceShots
    .flatMap((item) => item.assets || [])
    .filter((asset, index, list) => list.findIndex((item) => item.type === asset.type && item.name === asset.name) === index);
  const promptText = frame.grid
    ? `统一角色造型、统一光线方向、保留每个镜头的景别变化，输出可用于视频生成的连续分镜。`
    : `${shot.script}\n\n保持角色外貌、服装和场景连续性，强化镜头叙事重点。`;
  const editVersions = [
    { key: "original", label: "原图 1", image: frame.originalImage || frame.image, original: true },
    { key: "wash-1", label: "洗图结果 1", image: frame.image },
    { key: "wash-2", label: "洗图结果 2", image: frame.image },
    ...state.workflowEditGeneratedVersions.map((version, index) => ({ ...version, key: `generated-${index}` })),
  ]
    .filter((version) => !state.workflowEditDeletedVersionKeys.includes(version.key))
    .map((version) => ({ ...version, finalized: version.key === state.workflowEditFinalizedVersionKey }));
  const selectedVersionIndex = Math.min(state.workflowEditVersionIndex, editVersions.length - 1);
  const selectedVersion = editVersions[selectedVersionIndex];
  const previewActions = selectedVersion.finalized
    ? [["下载", "download"]]
    : [["下载", "download"], ["添加到关键帧结果", "add-keyframe"], ["删除", "delete-version"], ...(!selectedVersion.pending ? [["定稿", "finalize-edit-version"]] : [])];
  const editTools = [
    ["改图", "rectangle", "redraw"],
    ["拆图", "borderInner", "split"],
    ["剪裁", "crop", "crop"],
    ["扩图", "resize", "expand"],
    ["抠图", "chalkboardTeacher", "matting"],
    ["擦除", "eraser", "erase"],
    ["重绘", "palette", "inpaint"],
    ["洗图", "paint", "wash"],
    ["标注", "writing", "annotate"],
  ];
  const splitFrames = Array.from({ length: 14 }, (_, index) => {
    const source = scene.keyframes[index % scene.keyframes.length] || frame;
    const shotSource = scene.shots[index % scene.shots.length] || shot;
    const shotType = index % 4 === 0 ? "LS" : index % 4 === 1 ? "MS" : index % 4 === 2 ? "CU" : "ECU";
    return {
      image: source.image,
      label: `KF#${index + 1} | ${shotType} | ${shotSource.duration}`,
    };
  });

  if (isSplitTool) {
    return `
      <div class="workflow-edit-modal">
        <button class="workflow-edit-backdrop" type="button" data-workflow-action="close-split-editor" aria-label="关闭拆图编辑器"></button>
        <section class="workflow-edit-dialog workflow-split-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-split-title">
          <header class="workflow-split-topbar">
            <strong id="workflow-split-title">拆图编辑器（1x1）</strong>
            <button class="workflow-edit-close" type="button" data-workflow-action="close-split-editor" aria-label="关闭">✕</button>
          </header>
          <div class="workflow-split-toolbar">
            <button class="active is-remove" type="button"><span></span>删除区域</button>
            <button type="button"><span></span>保留区域</button>
            <button type="button"><span></span>标记区域</button>
            <em>拖拽绘制 / 双击删除矩形</em>
            <button class="workflow-split-clear" type="button">清空全部</button>
          </div>
          <main class="workflow-split-body">
            <div class="workflow-split-board">
              <div class="workflow-split-grid">
                ${splitFrames
                  .map((item) => `
                    <figure>
                      <span>${escapeHtml(item.label)}</span>
                      <img src="${escapeHtml(item.image)}" alt="" />
                    </figure>
                  `)
                  .join("")}
              </div>
            </div>
          </main>
          <footer class="workflow-split-footer">
            <span>尚未绘制任何区域</span>
            <div>
              <button class="workflow-secondary-button" type="button" data-workflow-action="close-split-editor">取消</button>
              <button class="workflow-primary-button" type="button">导出结果</button>
            </div>
          </footer>
        </section>
      </div>
    `;
  }

  if (state.workflowEditTool === "crop") {
    return `
      <div class="workflow-edit-modal workflow-crop-modal">
        <button class="workflow-edit-backdrop" type="button" data-workflow-action="close-crop-editor" aria-label="关闭剪裁编辑器"></button>
        <section class="workflow-crop-dialog" role="dialog" aria-modal="true" aria-label="剪裁图片">
          <div class="workflow-crop-toolbar">
            <button class="workflow-crop-close" type="button" data-workflow-action="close-crop-editor" aria-label="关闭">✕</button>
            <span></span>
            <button class="workflow-crop-ratio" type="button">▦ 原图比例⌄</button>
            <span></span>
            <label class="workflow-crop-zoom" aria-label="缩放">
              <b>⊕</b>
              <input type="range" min="50" max="150" value="100" />
            </label>
            <span></span>
            <button class="workflow-crop-confirm" type="button" data-workflow-action="close-crop-editor">确认</button>
          </div>
          <div class="workflow-crop-canvas">
            <img src="${escapeHtml(selectedVersion.image)}" alt="" />
            <div class="workflow-crop-frame" aria-hidden="true"><b class="is-v-one"></b><b class="is-v-two"></b><b class="is-h-one"></b><b class="is-h-two"></b><i></i><i></i><i></i><i></i></div>
          </div>
        </section>
      </div>
    `;
  }

  if (state.workflowEditTool === "redraw") {
    return `
      <div class="workflow-generate-modal">
        <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-redraw-editor" aria-label="关闭改图弹窗"></button>
        <section class="workflow-generate-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-redraw-title">
          <header>
            <div>
              <strong id="workflow-redraw-title">改图</strong>
            </div>
            <button type="button" data-workflow-action="close-redraw-editor" aria-label="关闭">✕</button>
          </header>
          <div class="workflow-generate-body">
            <label class="workflow-generate-prompt">
              <span>提示词</span>
              <textarea placeholder="输入改图要求"></textarea>
            </label>
            <aside class="workflow-generate-side">
              <section>
                <strong>生成张数</strong>
                <div class="workflow-segmented">
                  ${[1, 2, 3, 4].map((count) => `<button class="${count === 1 ? "active" : ""}" type="button">${count}</button>`).join("")}
                </div>
              </section>
              <section>
                <strong>图像模型</strong>
                <select>
                  <option>phan nano Image 3</option>
                  <option>phan movie Image Pro</option>
                </select>
              </section>
              <div class="workflow-generate-params">
                <section>
                  <strong>清晰度</strong>
                  <select>
                    <option>1K</option>
                    <option>2K</option>
                    <option>4K</option>
                  </select>
                </section>
                <section>
                  <strong>画面比例</strong>
                  <select>
                    <option>16:9</option>
                    <option>1:1</option>
                    <option>9:16</option>
                  </select>
                </section>
              </div>
            </aside>
          </div>
          <section class="workflow-generate-references">
            <div>
              <strong>参考图</strong>
            </div>
            <div class="workflow-reference-strip">
              <button type="button" class="workflow-reference-upload" data-workflow-action="open-reference-modal">
                <span>＋</span>
                <strong>上传参考</strong>
              </button>
            </div>
          </section>
          <footer>
            <div>
              <span class="workflow-generate-cost"><img src="${CANVAS_NODE_CREDIT}" alt="" />42</span>
              <button class="workflow-secondary-button" type="button" data-workflow-action="close-redraw-editor">取消</button>
              <button class="workflow-primary-button" type="button" data-workflow-action="close-redraw-editor">生成</button>
            </div>
          </footer>
        </section>
      </div>
    `;
  }

  return `
    <div class="workflow-edit-modal">
      <button class="workflow-edit-backdrop" type="button" data-workflow-action="close-edit-modal" aria-label="关闭关键帧编辑弹窗"></button>
      <section class="workflow-edit-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-edit-title">
        <header class="workflow-edit-topbar">
          <div>
            <strong id="workflow-edit-title">关键帧结果编辑</strong>
            <span>${episode.title.split(" · ")[0]} · ${scene.title.split(" · ")[0]} · ${frame.grid ? "整场多宫格" : shot.no}</span>
          </div>
          <button class="workflow-edit-close" type="button" data-workflow-action="close-edit-modal" aria-label="关闭">✕</button>
        </header>
        <main class="workflow-edit-stage">
          <div class="workflow-edit-left">
            <div class="workflow-edit-thumbs" aria-label="关键帧结果缩略图">
              ${editVersions
                .map((version, index) => `
                  <button class="${index === selectedVersionIndex ? "active" : ""}" type="button" data-workflow-action="select-edit-version" data-workflow-edit-version-index="${index}" aria-label="查看${escapeHtml(version.label)}">
                    ${version.pending
                      ? `<span class="workflow-edit-thumb-pending">${workflowEditIcon.imageGeneration}</span>`
                      : `<img src="${escapeHtml(version.image)}" alt="" />`}
                    <span>${escapeHtml(version.label)}</span>
                    ${version.pending ? "<i>生成中</i>" : ""}
                    ${version.finalized ? "<i class=\"workflow-edit-finalized-tag\">已定稿</i>" : ""}
                  </button>
                `)
                .join("")}
            </div>
            <figure class="workflow-edit-preview">
              <div class="workflow-edit-preview-actions">
                <div class="workflow-edit-save-menu">
                  <button type="button" data-workflow-action="toggle-edit-save-menu">保存到</button>
                  ${state.workflowEditSaveMenuOpen ? `
                    <div>
                      <button type="button" data-workflow-action="save-edit-version-to" data-save-target="project">项目资产库</button>
                      <button type="button" data-workflow-action="save-edit-version-to" data-save-target="team">团队资产库</button>
                      <button type="button" data-workflow-action="save-edit-version-to" data-save-target="market">素材广场</button>
                    </div>
                  ` : ""}
                </div>
                ${previewActions
                  .map(([label, actionKey]) => `<button type="button" data-workflow-action="${actionKey}" data-workflow-version-key="${escapeHtml(selectedVersion.key)}" data-workflow-version-image="${escapeHtml(selectedVersion.image || "")}">${label}</button>`)
                  .join("")}
              </div>
              ${selectedVersion.pending
                ? `<div class="workflow-edit-preview-pending">${workflowEditIcon.imageGeneration}<span>生成中</span></div>`
                : `<img src="${escapeHtml(selectedVersion.image)}" alt="" />`}
              ${selectedVersion.finalized ? "<span class=\"workflow-edit-preview-finalized-tag\">已定稿</span>" : ""}
            </figure>
          </div>
          <aside class="workflow-edit-side">
            <section class="workflow-edit-params">
              <header>
                <strong>图片参数</strong>
              </header>
              <dl>
                <div><dt>模型</dt><dd>phan nano Image 3</dd></div>
                <div><dt>清晰度</dt><dd>1K</dd></div>
                <div><dt>画面比例</dt><dd>16:9</dd></div>
              </dl>
            </section>
            <section class="workflow-edit-param-card">
              <strong>提示词</strong>
              <textarea readonly>${escapeHtml(promptText)}</textarea>
            </section>
            <section class="workflow-edit-param-card">
              <strong>参考图</strong>
              <div class="workflow-edit-reference-grid">
                ${sourceAssets.length
                  ? sourceAssets
                    .map((asset) => `
                      <span>
                        <img src="${escapeHtml(asset.image)}" alt="" />
                        <em>${escapeHtml(asset.type)}</em>
                        <strong>${escapeHtml(asset.name)}</strong>
                      </span>
                    `)
                    .join("")
                  : `<p class="workflow-edit-reference-empty">暂无参考图</p>`}
              </div>
            </section>
          </aside>
        </main>
        <footer class="workflow-edit-actions">
          <nav aria-label="关键帧二次修改操作">
            ${editTools.map(([label, toolIcon, toolKey]) => `
              <button class="${state.workflowEditTool === toolKey || (!state.workflowEditTool && toolKey === "redraw") ? "active" : ""}" type="button" data-workflow-action="select-edit-tool" data-workflow-edit-tool="${toolKey}">
                <span>${workflowEditIcon[toolIcon] || ""}</span>
                <strong>${label}</strong>
              </button>
            `).join("")}
          </nav>
        </footer>
      </section>
    </div>
  `;
};

const renderWorkflowEditCostConfirmModal = () => {
  if (!state.workflowEditCostConfirmTool) return "";
  const label = state.workflowEditCostConfirmTool === "matting" ? "抠图" : "洗图";
  return `
    <div class="modal-backdrop is-open workflow-cost-confirm-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-cost-confirm-title">
        <div class="modal-header">
          <h2 id="workflow-cost-confirm-title">确认${label}</h2>
          <button class="icon-close" type="button" data-workflow-action="close-edit-cost-confirm" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>该操作将消耗30星钻</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-edit-cost-confirm">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-edit-cost">确认</button>
        </div>
      </div>
    </div>
  `;
};

const renderWorkflowKeyframeDeleteConfirmModal = () => {
  if (state.workflowDeleteFrameIndex === null) return "";
  return `
    <div class="modal-backdrop is-open workflow-keyframe-delete-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-keyframe-delete-title">
        <div class="modal-header">
          <h2 id="workflow-keyframe-delete-title">确认删除</h2>
          <button class="icon-close" type="button" data-workflow-action="close-keyframe-delete" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>关键帧结果将被删除且无法找回，是否确认删除？</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-keyframe-delete">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-keyframe-delete">确认</button>
        </div>
      </div>
    </div>
  `;
};

const renderWorkflowKeyframeClearConfirmModal = () => {
  if (!state.workflowClearConfirmOpen) return "";
  return `
    <div class="modal-backdrop is-open workflow-keyframe-delete-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-keyframe-clear-title">
        <div class="modal-header">
          <h2 id="workflow-keyframe-clear-title">确认清空</h2>
          <button class="icon-close" type="button" data-workflow-action="close-keyframe-clear" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>当前场的全部关键帧结果将被清空且无法找回，是否确认清空？</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-keyframe-clear">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-keyframe-clear">确认</button>
        </div>
      </div>
    </div>
  `;
};

const renderWorkflowEditVersionDeleteConfirmModal = () => {
  if (!state.workflowEditDeleteVersionKey) return "";
  return `
    <div class="modal-backdrop is-open workflow-keyframe-delete-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-edit-version-delete-title">
        <div class="modal-header">
          <h2 id="workflow-edit-version-delete-title">确认删除</h2>
          <button class="icon-close" type="button" data-workflow-action="close-edit-version-delete" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>该图片将被删除且无法找回，是否确认删除？</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-edit-version-delete">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-edit-version-delete">确认</button>
        </div>
      </div>
    </div>
  `;
};

const renderWorkflowTimelinePreviewModal = () => {
  if (!state.workflowPreviewModalOpen) return "";
  const { episode, scene } = currentWorkflowStudioSelection();
  return `
    <div class="workflow-generate-modal workflow-timeline-preview-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-timeline-preview" aria-label="关闭时间线预览"></button>
      <section class="workflow-timeline-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-timeline-preview-title">
        <header>
          <div>
            <strong id="workflow-timeline-preview-title">时间线预览</strong>
          </div>
          <button type="button" data-workflow-action="close-timeline-preview" aria-label="关闭">✕</button>
        </header>
        <main class="workflow-timeline-preview-content">
          <div class="workflow-preview-duo">
            <article class="workflow-preview-screen">
              <header>
                <strong>关键帧预览</strong>
              </header>
              <img src="./assets/images/project-neon-tokyo.jpg" alt="" />
            </article>
            <article class="workflow-preview-screen">
              <header>
                <strong>视频 / 音频预览</strong>
              </header>
              <img src="./assets/images/canvas-chase-sequence.jpg" alt="" />
            </article>
          </div>
          <section class="workflow-timeline-panel workflow-timeline-preview-editor" aria-label="预览时间线">
            <div class="workflow-preview-player" aria-label="视频播放器">
              <button class="workflow-preview-player-toggle" type="button" data-workflow-action="toggle-preview-player" aria-label="播放">${workflowPlayerIcon.play}</button>
              <div class="workflow-preview-player-progress" aria-hidden="true">
                <span style="width:36%;"></span>
              </div>
              <span class="workflow-preview-player-time">00:12 / 00:36</span>
              <label class="workflow-preview-volume">
                <span>音量</span>
                <input type="range" min="0" max="100" value="72" aria-label="调节音量" />
              </label>
            </div>
            <div class="workflow-timeline-head">
              <div>
                <strong>时间线</strong>
                <span>00:00 / 00:36</span>
              </div>
              <div class="workflow-timeline-head-actions">
                <div class="workflow-timeline-action-group is-left">
                  <button type="button" data-workflow-action="trim-selected-at-playhead">裁剪</button>
                </div>
                <div class="workflow-timeline-action-group is-right">
                  <button type="button" data-workflow-action="toggle-track" data-track="keyframe">关键帧线</button>
                  <button type="button" data-workflow-action="toggle-track" data-track="video">视频线</button>
                  <button type="button" data-workflow-action="toggle-track" data-track="audio">音频线</button>
                </div>
              </div>
            </div>
            <div class="workflow-timeline">
              <div class="workflow-time-ruler"><span>00:00</span><span>00:06</span><span>00:12</span><span>00:18</span><span>00:24</span><span>00:30</span><span>00:36</span></div>
              <div class="workflow-playhead" style="left:36%;" aria-hidden="true"></div>
              <div class="workflow-track" data-track-row="keyframe">
                <strong>关键帧线</strong>
                <div class="workflow-track-lane">
                  ${renderWorkflowTimelineKeyframeClips(episode, scene)}
                </div>
              </div>
              <div class="workflow-track is-video" data-track-row="video">
                <strong>视频线</strong>
                <div class="workflow-track-lane">
                  <span class="workflow-clip workflow-video-clip" draggable="true" data-clip-kind="video" style="left:3%; width:59%;">
                    <img src="./assets/images/project-neon-tokyo.jpg" alt="" />
                    <img src="./assets/images/canvas-chase-sequence.jpg" alt="" />
                    <img src="./assets/images/style-cinematic.jpg" alt="" />
                    <em>视频片段 01</em>
                    <i class="clip-resize is-left" data-resize-edge="left"></i>
                    <i class="clip-resize is-right" data-resize-edge="right"></i>
                  </span>
                </div>
              </div>
              <div class="workflow-track is-audio" data-track-row="audio">
                <strong>音频线</strong>
                <div class="workflow-track-lane">
                  <span class="workflow-clip workflow-audio-clip" draggable="true" data-clip-kind="audio" style="left:6%; width:54%;">
                    <b style="height:18%;"></b><b style="height:64%;"></b><b style="height:38%;"></b><b style="height:82%;"></b><b style="height:45%;"></b><b style="height:70%;"></b><b style="height:28%;"></b><b style="height:58%;"></b><b style="height:90%;"></b><b style="height:36%;"></b><b style="height:76%;"></b><b style="height:44%;"></b><b style="height:62%;"></b><b style="height:24%;"></b>
                    <em>配音 01</em>
                    <i class="clip-resize is-left" data-resize-edge="left"></i>
                    <i class="clip-resize is-right" data-resize-edge="right"></i>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  `;
};

const renderWorkflowClipContextMenu = () => {
  if (!state.workflowClipContextMenu) return "";
  return `
    <div class="workflow-clip-context-menu" style="left:${state.workflowClipContextMenu.x}px; top:${state.workflowClipContextMenu.y}px;">
      <button type="button" data-workflow-action="delete-context-clip">删除</button>
    </div>
  `;
};

const renderWorkflowStudio = () => {
  if (!workflowEpisodeSelect || !workflowSceneSelect || !workflowScriptCard || !workflowShotTable || !workflowShotSummary || !workflowKeyframeGrid) return;
  workflowHomeView?.classList.toggle(
    "is-workflow-modal-open",
    Boolean(state.workflowGenerateMode || state.workflowPreviewFrameIndex !== null || state.workflowDetailFrameIndex !== null || state.workflowEditFrameIndex !== null || state.workflowDeleteFrameIndex !== null || state.workflowClearConfirmOpen || state.workflowEditDeleteVersionKey || state.workflowPreviewModalOpen || state.workflowReferenceModalOpen),
  );
  const episodeIndex = Math.min(state.workflowEpisodeIndex, workflowStudioData.length - 1);
  const episode = workflowStudioData[episodeIndex];
  const sceneIndex = Math.min(state.workflowSceneIndex, episode.scenes.length - 1);
  const scene = episode.scenes[sceneIndex];
  const shotIndex = Math.min(state.workflowShotIndex, scene.shots.length - 1);
  const selectedShot = scene.shots[shotIndex];

  workflowEpisodeSelect.innerHTML = workflowStudioData
    .map((item, index) => `<option value="${index}"${index === episodeIndex ? " selected" : ""}>${escapeHtml(item.title)}</option>`)
    .join("");
  workflowSceneSelect.innerHTML = episode.scenes
    .map((item, index) => `<option value="${index}"${index === sceneIndex ? " selected" : ""}>${escapeHtml(item.title)} · ${item.shots.length} 镜</option>`)
    .join("");

  workflowScriptCard.innerHTML = `
    <h2>${escapeHtml(episode.title)} · ${escapeHtml(scene.title.split(" · ")[0])}</h2>
    ${scene.script.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
  `;
  workflowShotSummary.textContent = `${episode.title.split(" · ")[0]} · ${scene.title.split(" · ")[0]} · 共 ${scene.shots.length} 镜`;
  workflowShotTable.innerHTML = scene.shots
    .map((shot, index) => `
      <button class="${index === shotIndex ? "active" : ""}" type="button" data-workflow-shot-index="${index}">
        <span class="workflow-shot-index">${escapeHtml(shot.no)}</span>
        <strong>${escapeHtml(shot.duration)}</strong>
        <p>${escapeHtml(shot.script)}</p>
        <div class="workflow-shot-assets">
          ${groupWorkflowAssets(shot.assets)
            .map((group) => `
              <section class="workflow-shot-asset-group">
                <div>
                  <strong>${escapeHtml(group.type)}</strong>
                  <span>${group.items.length}</span>
                </div>
                <div class="workflow-shot-asset-strip">
                  ${group.items
                    .map((asset) => `
                      <span class="workflow-shot-asset" title="${escapeHtml(asset.name)}">
                        <img src="${escapeHtml(asset.image)}" alt="" />
                        <strong>${escapeHtml(asset.name)}</strong>
                      </span>
                    `)
                    .join("")}
                </div>
              </section>
            `)
            .join("")}
        </div>
      </button>
    `)
    .join("");
  const filterValue = state.workflowKeyframeFilter;
  let workflowNonGridFrameOrdinal = -1;
  const keyedWorkflowFrames = scene.keyframes.map((frame, index) => ({
    frame,
    index,
    assignedShotIndex: frame.grid ? null : (Number.isInteger(frame.assignedShotIndex) ? frame.assignedShotIndex : ((workflowNonGridFrameOrdinal += 1) % scene.shots.length)),
  }));
  const visibleKeyframes = keyedWorkflowFrames
    .filter(({ frame, assignedShotIndex }) => {
      if (filterValue === "scene") return Boolean(frame.grid);
      if (filterValue?.startsWith("shot-")) {
        const shotFilterIndex = Number(filterValue.replace("shot-", ""));
        return !frame.grid && assignedShotIndex === shotFilterIndex;
      }
      return true;
    });
  workflowKeyframeGrid.innerHTML = `
    <div class="workflow-keyframe-control-row">
      <label>
        <select data-workflow-action="filter-keyframes" aria-label="筛选关键帧结果">
          <option value="all"${filterValue === "all" ? " selected" : ""}>全部</option>
          ${scene.shots
            .map((item, index) => `<option value="shot-${index}"${filterValue === `shot-${index}` ? " selected" : ""}>${escapeHtml(item.no)}</option>`)
            .join("")}
          <option value="scene"${filterValue === "scene" ? " selected" : ""}>整场</option>
        </select>
      </label>
      <div>
        <button type="button" data-workflow-action="upload-keyframe">上传</button>
        <button type="button" data-workflow-action="compose-keyframes">拼图</button>
        <button type="button" data-workflow-action="clear-keyframes">清空</button>
      </div>
    </div>
    <div class="workflow-keyframe-list">
      ${visibleKeyframes.length ? visibleKeyframes
    .map(({ frame, index, assignedShotIndex }) => `
      <article class="workflow-keyframe-card${frame.grid ? " is-grid" : ""}${frame.pending ? " is-pending" : ""}" draggable="${frame.pending ? "false" : "true"}" data-workflow-frame-index="${index}">
        ${frame.pending
          ? `<div class="workflow-keyframe-pending">${workflowEditIcon.imageGeneration}<strong>生成中</strong></div>`
          : `<img src="${escapeHtml(frame.image)}" alt="" />`}
        <span class="workflow-keyframe-count">${frame.resultCount ?? 1} 张</span>
        <div class="workflow-keyframe-info">
          ${state.workflowRenamingFrameIndex === index
            ? `<input class="workflow-keyframe-name-input" type="text" value="${escapeHtml(workflowKeyframeDisplayName(episode, scene, frame, assignedShotIndex))}" data-workflow-keyframe-name-input data-workflow-frame-index="${index}" aria-label="关键帧名称" />`
            : `<span class="workflow-keyframe-name" title="双击重命名" data-workflow-frame-index="${index}">${escapeHtml(workflowKeyframeDisplayName(episode, scene, frame, assignedShotIndex))}</span>`}
        </div>
        <footer${frame.pending ? ' class="is-hidden"' : ""}>
          <button type="button" data-workflow-action="delete-keyframe" data-workflow-frame-index="${index}">删除</button>
          <button type="button" data-workflow-action="edit-frame" data-workflow-frame-index="${index}" data-generate-mode="${frame.grid ? "scene" : "shot"}">编辑</button>
        </footer>
      </article>
    `)
    .join("") : `<p class="workflow-keyframe-empty">暂无关键帧结果</p>`}
    </div>
  `;
  const timelineNames = keyedWorkflowFrames.filter(({ frame }) => !frame.grid && !frame.pending);
  workflowHomeView?.querySelectorAll(".workflow-timeline-panel:not(.workflow-timeline-preview-editor) .workflow-keyframe-clip").forEach((clip, index) => {
    const item = timelineNames[index];
    const label = clip.querySelector("em");
    if (item && label) label.textContent = workflowKeyframeDisplayName(episode, scene, item.frame, item.assignedShotIndex);
  });
  if (workflowGenerateModalRoot) workflowGenerateModalRoot.innerHTML = `${renderWorkflowGenerateModal()}${renderWorkflowFrameModal()}${renderWorkflowEditModal()}${renderWorkflowEditCostConfirmModal()}${renderWorkflowKeyframeDeleteConfirmModal()}${renderWorkflowKeyframeClearConfirmModal()}${renderWorkflowEditVersionDeleteConfirmModal()}${renderWorkflowTimelinePreviewModal()}${renderWorkflowReferenceModal()}${renderWorkflowClipContextMenu()}`;
};

const currentItems = () => {
  const keyword = searchInput.value.trim().toLowerCase();
  const source =
    state.currentView === "projects" ? state.projects : (currentProject()?.canvases || []);
  return [...source]
    .filter((item) => item.name.toLowerCase().includes(keyword))
    .sort((a, b) => compareItems(a, b, state.sortKey));
};

const currentMenuLabels = () =>
  state.currentView === "projects"
    ? { edit: "编辑项目", delete: "删除", upload: "上传封面" }
    : { edit: "重命名", delete: "删除", upload: "上传封面" };

const routeFromState = () => {
  if (state.currentView === "canvas-share" && state.currentProjectId && state.currentCanvasId) {
    return `#/share/project/${state.currentProjectId}/canvas/${state.currentCanvasId}`;
  }
  if (state.currentView === "canvas-detail" && state.currentProjectId && state.currentCanvasId) {
    return `#/project/${state.currentProjectId}/canvas/${state.currentCanvasId}`;
  }
  if (state.currentView === "canvases" && state.currentProjectId) {
    return `#/project/${state.currentProjectId}/canvases`;
  }
  if (state.currentView === "workflow-home" && state.currentProjectId) {
    return `#/project/${state.currentProjectId}/workflow`;
  }
  if (state.currentView === "projects") {
    return "#/projects";
  }
  if (state.currentView === "home") {
    return "#/home";
  }
  if (state.currentView === "creator-center") {
    return "#/creator-center";
  }
  if (state.currentView === "review-center") {
    return "#/review-center";
  }
  return "#/projects";
};

const persistNavigationState = () => {
  const payload = {
    currentView: state.currentView,
    currentProjectId: state.currentProjectId,
    currentCanvasId: state.currentCanvasId,
  };
  localStorage.setItem(NAV_STATE_KEY, JSON.stringify(payload));
  const nextHash = routeFromState();
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }
};

const restoreNavigationState = () => {
  const shareMatch = window.location.hash.match(/^#\/share\/project\/([^/]+)\/canvas\/([^/]+)$/);
  if (shareMatch) {
    const [, projectId, canvasId] = shareMatch;
    if (state.projects.some((project) => project.id === projectId && project.canvases.some((canvas) => canvas.id === canvasId))) {
      state.currentView = "canvas-share";
      state.currentProjectId = projectId;
      state.currentCanvasId = canvasId;
      return;
    }
  }

  const match = window.location.hash.match(/^#\/project\/([^/]+)\/canvas\/([^/]+)$/);
  if (match) {
    const [, projectId, canvasId] = match;
    if (state.projects.some((project) => project.id === projectId && project.canvases.some((canvas) => canvas.id === canvasId))) {
      state.currentView = "canvas-detail";
      state.currentProjectId = projectId;
      state.currentCanvasId = canvasId;
      return;
    }
  }

  const listMatch = window.location.hash.match(/^#\/project\/([^/]+)\/canvases$/);
  if (listMatch) {
    const [, projectId] = listMatch;
    if (state.projects.some((project) => project.id === projectId)) {
      state.currentView = "canvases";
      state.currentProjectId = projectId;
      state.currentCanvasId = null;
      return;
    }
  }

  const workflowMatch = window.location.hash.match(/^#\/project\/([^/]+)\/workflow$/);
  if (workflowMatch) {
    const [, projectId] = workflowMatch;
    if (state.projects.some((project) => project.id === projectId)) {
      state.currentView = "workflow-home";
      state.currentProjectId = projectId;
      state.currentCanvasId = null;
      return;
    }
  }

  if (window.location.hash === "#/projects") {
    state.currentView = "projects";
    state.currentProjectId = null;
    state.currentCanvasId = null;
    return;
  }

  if (!window.location.hash || window.location.hash === "#/" || window.location.hash === "#/home") {
    state.currentView = "home";
    state.currentProjectId = null;
    state.currentCanvasId = null;
    return;
  }

  if (window.location.hash === "#/creator-center") {
    state.currentView = "creator-center";
    state.currentProjectId = null;
    state.currentCanvasId = null;
    return;
  }

  if (window.location.hash === "#/review-center") {
    state.currentView = "review-center";
    state.currentProjectId = null;
    state.currentCanvasId = null;
    return;
  }

  try {
    const saved = JSON.parse(localStorage.getItem(NAV_STATE_KEY) || "null");
    if (saved?.currentView === "canvas-detail" && saved.currentProjectId && saved.currentCanvasId) {
      const valid = state.projects.some((project) => project.id === saved.currentProjectId && project.canvases.some((canvas) => canvas.id === saved.currentCanvasId));
      if (valid) {
        state.currentView = "canvas-detail";
        state.currentProjectId = saved.currentProjectId;
        state.currentCanvasId = saved.currentCanvasId;
        return;
      }
    }
    if (saved?.currentView === "canvas-share" && saved.currentProjectId && saved.currentCanvasId) {
      const valid = state.projects.some((project) => project.id === saved.currentProjectId && project.canvases.some((canvas) => canvas.id === saved.currentCanvasId));
      if (valid) {
        state.currentView = "canvas-share";
        state.currentProjectId = saved.currentProjectId;
        state.currentCanvasId = saved.currentCanvasId;
        return;
      }
    }
    if (saved?.currentView === "canvases" && saved.currentProjectId && state.projects.some((project) => project.id === saved.currentProjectId)) {
      state.currentView = "canvases";
      state.currentProjectId = saved.currentProjectId;
      state.currentCanvasId = null;
      return;
    }
    if (saved?.currentView === "workflow-home" && saved.currentProjectId && state.projects.some((project) => project.id === saved.currentProjectId)) {
      state.currentView = "workflow-home";
      state.currentProjectId = saved.currentProjectId;
      state.currentCanvasId = null;
      return;
    }
    if (saved?.currentView === "projects") {
      state.currentView = "projects";
      state.currentProjectId = null;
      state.currentCanvasId = null;
      return;
    }
    if (saved?.currentView === "home") {
      state.currentView = "home";
      state.currentProjectId = null;
      state.currentCanvasId = null;
      return;
    }
    if (saved?.currentView === "creator-center") {
      state.currentView = "creator-center";
      state.currentProjectId = null;
      state.currentCanvasId = null;
      return;
    }
    if (saved?.currentView === "review-center") {
      state.currentView = "review-center";
      state.currentProjectId = null;
      state.currentCanvasId = null;
      return;
    }
  } catch {}

  state.currentView = "home";
  state.currentProjectId = null;
  state.currentCanvasId = null;
};

const renderStyleCards = () => {
  styleGrid.innerHTML = styleSeed
    .map(
      (style) => `
        <button class="style-card${state.selectedStyle === style.id ? " active" : ""}" type="button" data-style-id="${style.id}">
          <img src="${style.image}" alt="${style.name}" />
          <span>${style.name}</span>
          <i class="style-check"></i>
        </button>
      `,
    )
    .join("");
};

const sortedVideos = () =>
  state.videos
    .filter((video) => video.status === "published" && !video.isShelfOff)
    .sort((a, b) => {
    if (state.videoSortKey === "hot") return b.likes - a.likes || videoPublishedTimeValue(b) - videoPublishedTimeValue(a);
    return videoPublishedTimeValue(b) - videoPublishedTimeValue(a);
  });

const renderHomeVideos = () => {
  if (!homeVideoGrid) return;
  document.querySelectorAll("[data-video-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.videoSort === state.videoSortKey);
  });
  homeVideoGrid.innerHTML = sortedVideos()
    .map(
      (video) => `
        <button class="home-video-card" type="button" data-video-id="${video.id}" aria-label="预览 ${escapeHtml(video.title)}">
          <div class="home-video-cover">
            <img src="${video.cover}" alt="${escapeHtml(video.title)}" />
            <span class="home-video-play">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.2 3.3v9.4L12 8 5.2 3.3Z" fill="currentColor"/></svg>
            </span>
            <span class="home-video-likes">
              <img src="./assets/icons/heart.svg" alt="" />
              ${formatLikeCount(video.likes)}
            </span>
          </div>
          <div class="home-video-info">
            <h3>${escapeHtml(video.title)}</h3>
            <div class="home-video-meta">
              <span class="home-video-user">
                <img src="${video.avatar}" alt="" />
                <span>${escapeHtml(video.userName)}</span>
              </span>
              <time class="home-video-time">${escapeHtml(videoPublishedTimeText(video))}</time>
            </div>
          </div>
        </button>
      `,
    )
    .join("");
};

const renderCreatorVideos = () => {
  if (!creatorVideoList) return;
  if (!state.videos.length) {
    creatorVideoList.innerHTML = `<div class="creator-empty-state">暂无已上传视频</div>`;
    return;
  }
  creatorVideoList.innerHTML = [...state.videos]
    .sort((a, b) => b.uploadedAtMs - a.uploadedAtMs)
    .map(
      (video) => {
        const displayStatus = videoDisplayStatus(video);
        return `
          <article class="creator-video-card" data-creator-video-id="${video.id}">
          <button class="creator-video-preview-trigger" type="button" data-creator-video-preview="${video.id}" aria-label="预览 ${escapeHtml(video.title)}">
            <div class="creator-video-cover">
              <img src="${video.cover}" alt="${escapeHtml(video.title)}" />
              <span class="creator-video-play">
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.2 3.3v9.4L12 8 5.2 3.3Z" fill="currentColor"/></svg>
              </span>
              <span class="video-status-badge creator-cover-status is-${displayStatus.key}">${displayStatus.label}</span>
            </div>
            <div class="creator-video-title">
              <strong>${escapeHtml(video.title)}</strong>
              ${video.videoFileName ? `<span>${escapeHtml(video.videoFileName)}</span>` : ""}
            </div>
          </button>
            <div class="creator-video-card-meta">
              <div class="creator-video-stat" aria-label="点赞数量">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20s-7.5-4.3-7.5-10.2A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.6C19.5 15.7 12 20 12 20Z"/>
                </svg>
                <span>${formatLikeCount(video.likes)}</span>
              </div>
              <time class="creator-video-date">${escapeHtml(videoPublishedTimeText(video))}</time>
            </div>
          <div class="creator-video-card-menu menu-anchor">
            <button class="creator-video-more" type="button" data-creator-video-menu="${video.id}" aria-expanded="${String(state.creatorVideoMenuId === video.id)}" aria-label="更多操作">
                <img src="./assets/icons/more.svg" alt="" />
              </button>
              <div class="dropdown-menu creator-video-menu${state.creatorVideoMenuId === video.id ? " is-open" : ""}">
                <button class="menu-item with-icon" type="button" data-creator-video-action="edit" data-video-id="${video.id}">
                  <img src="./assets/icons/edit.svg" alt="" />
                  <span>编辑</span>
                </button>
                <button class="menu-item with-icon" type="button" data-creator-video-action="delete" data-video-id="${video.id}">
                  <img src="./assets/icons/trash.svg" alt="" />
                  <span>删除</span>
                </button>
              </div>
          </div>
        </article>
        `;
      },
    )
    .join("");
};

const renderReviewVideos = () => {
  if (!reviewVideoList) return;
  if (reviewFilterSelect) reviewFilterSelect.value = state.reviewStatusFilter;
  const filteredVideos = [...state.videos].filter(videoMatchesReviewFilter);
  if (!filteredVideos.length) {
    reviewVideoList.innerHTML = `<div class="creator-empty-state">暂无上传视频</div>`;
    return;
  }
  reviewVideoList.innerHTML = `
    <div class="review-video-table">
      <div class="review-video-header">
        <span>视频名称</span>
        <span>点赞数量</span>
        <span>发布时间</span>
        <span>状态</span>
        <span>操作</span>
      </div>
      ${filteredVideos
        .sort((a, b) => b.uploadedAtMs - a.uploadedAtMs)
        .map((video) => {
          const displayStatus = videoDisplayStatus(video);
          const shelfAction = video.isShelfOff ? "上架" : "下架";
          const canShelf = video.status === "published";
          const canReview = video.status === "pending";
          const actionHtml = `
            <div class="review-video-action-group">
              <button class="review-video-action${canShelf ? "" : " is-disabled"}" type="button" data-review-action="shelf" data-video-id="${video.id}" ${canShelf ? "" : "disabled"}>${shelfAction}</button>
              <button class="review-video-action${canReview ? "" : " is-disabled"}" type="button" data-review-action="review" data-video-id="${video.id}" ${canReview ? "" : "disabled"}>审核</button>
            </div>
          `;
          return `
            <article class="review-video-row">
              <div class="review-video-main">
                <button class="review-video-cover-button" type="button" data-review-video-preview="${video.id}" aria-label="预览 ${escapeHtml(video.title)}">
                  <img src="${video.cover}" alt="${escapeHtml(video.title)}" />
                </button>
                <strong>${escapeHtml(video.title)}</strong>
              </div>
              <div class="review-video-likes">
                <img src="./assets/icons/heart.svg" alt="" />
                <span>${formatLikeCount(video.likes)}</span>
              </div>
              <time>${escapeHtml(videoPublishedTimeText(video))}</time>
              <span class="video-status-badge is-${displayStatus.key}">${displayStatus.label}</span>
              <div>${actionHtml}</div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
};

const syncHeader = () => {
  const inHomeView = state.currentView === "home";
  const inCreatorCenter = state.currentView === "creator-center";
  const inReviewCenter = state.currentView === "review-center";
  const inCanvasView = state.currentView === "canvases";
  const inWorkflowHome = state.currentView === "workflow-home";
  const inCanvasDetail = state.currentView === "canvas-detail";
  const inCanvasShare = state.currentView === "canvas-share";
  const inCanvasSurface = inCanvasDetail || inCanvasShare;
  const project = currentProject();
  backTrigger.classList.toggle("is-visible", inCanvasView);
  pageTitle.textContent = inCanvasView ? `${project?.name || ""} · 画布列表` : "我的项目";
  pageSubtitle.textContent = inCanvasView ? "管理项目下的 AI画布创作" : "管理您的 AI影视创作";
  createLabel.textContent = inCanvasView ? "新建画布" : "创建新项目";
  homeView.classList.toggle("is-hidden", !inHomeView);
  creatorCenterView?.classList.toggle("is-hidden", !inCreatorCenter);
  reviewCenterView?.classList.toggle("is-hidden", !inReviewCenter);
  workflowHomeView?.classList.toggle("is-hidden", !inWorkflowHome);
  listView.classList.toggle("is-hidden", inHomeView || inCreatorCenter || inReviewCenter || inWorkflowHome || inCanvasSurface);
  listView.classList.toggle("canvas-list-mode", state.currentView === "canvases");
  detailView.classList.toggle("is-open", inCanvasSurface);
  detailView.classList.toggle("is-share-view", inCanvasShare);
  const topbar = document.querySelector(".topbar");
  topbar?.classList.remove("is-hidden");
  topbar?.classList.toggle("is-canvas-detail", inCanvasDetail);
  topbar?.classList.toggle("is-canvas-share", inCanvasShare);
  topbarNav?.classList.toggle("is-hidden", inCanvasView || inWorkflowHome || inCanvasSurface);
  sidebar.classList.toggle("is-visible", state.currentView === "canvases");
  sidebarProjectName.textContent = project?.name || "测试项目";
  sidebarRatioTag.textContent = project?.ratio || "16:9 横屏";
  sidebarStyleTag.textContent = project?.style || "电影感";
  if (workflowProjectName) workflowProjectName.textContent = project?.name || "测试项目";
  if (workflowRatioTag) workflowRatioTag.textContent = project?.ratio || "16:9 横屏";
  if (workflowStyleTag) workflowStyleTag.textContent = project?.style || "电影感";
  if (workflowMainProjectName) workflowMainProjectName.textContent = project?.name || "test";
  if (workflowMainStyleTag) workflowMainStyleTag.textContent = project?.style || "写实";
  avatarPanel.classList.toggle("is-open", state.avatarOpen);
  noticePanel.classList.toggle("is-open", state.noticeOpen);
  topbarNav?.querySelectorAll("[data-nav-target]").forEach((item) => {
    const target = item.dataset.navTarget;
    const active =
      (target === "home" && inHomeView) ||
      (target === "projects" && (state.currentView === "projects" || state.currentView === "canvases" || inWorkflowHome)) ||
      (target !== "home" && target !== "projects" && false);
    item.classList.toggle("active", active);
  });
  document.title = inHomeView ? "PhanthyMovie" : inCreatorCenter ? "创作主页" : inReviewCenter ? "审核中心" : inWorkflowHome ? "工作流首页" : inCanvasSurface ? (currentCanvas()?.name || "PhanthyMovie 画布") : "PhanthyMovie 项目列表";
};

const syncBatchBar = () => {
  batchBottomTools.classList.toggle("is-active", state.batchMode);
  batchTrigger.querySelector("span").textContent = state.batchMode ? "取消批量操作" : "批量操作";
};

const renderGrid = () => {
  saveProjectsState();
  persistNavigationState();
  syncHeader();
  if (state.currentView === "home") {
    if (homeProjectCount) {
      homeProjectCount.textContent = "所有生成的项目将自动保存至您的个人库中";
    }
    renderHomeVideos();
    return;
  }
  if (state.currentView === "creator-center") {
    saveVideosState();
    renderCreatorVideos();
    return;
  }
  if (state.currentView === "review-center") {
    saveVideosState();
    renderReviewVideos();
    return;
  }
  if (state.currentView === "workflow-home") {
    renderWorkflowStudio();
    return;
  }
  if (isCanvasDetailView()) {
    renderCanvasDetail();
    return;
  }
  syncBatchBar();
  sortLabel.textContent = sortLabelMap[state.sortKey];
  const items = currentItems();
  const menuLabels = currentMenuLabels();

  const cards = items
    .map((item) => {
      const selected = state.selectedIds.has(item.id);
      const menuOpen = state.activeMenuId === item.id && !state.batchMode;
      return `
        <article class="project-card${state.batchMode ? " batch-active" : ""}${selected ? " selected" : ""}" data-card-id="${item.id}">
          <button class="card-check" type="button" data-card-check="${item.id}" aria-label="选择"></button>
          <div class="project-cover">
            <img src="${item.cover}" alt="${item.name}" />
          </div>
          <div class="project-info">
            <div class="project-title-row">
              <h2>${item.name}</h2>
              <div class="menu-anchor">
                <button class="more-button" type="button" data-card-trigger="${item.id}" aria-expanded="${String(menuOpen)}" aria-label="更多操作">
                  <img src="./assets/icons/more.svg" alt="" />
                </button>
                <div class="dropdown-menu card-menu${menuOpen ? " is-open" : ""}">
                  <button class="menu-item with-icon" type="button" data-card-action="upload" data-item-id="${item.id}">
                    <img src="./assets/icons/upload.svg" alt="" />
                    <span>${menuLabels.upload}</span>
                  </button>
                  <button class="menu-item with-icon" type="button" data-card-action="edit" data-item-id="${item.id}">
                    <img src="./assets/icons/edit.svg" alt="" />
                    <span>${menuLabels.edit}</span>
                  </button>
                  <button class="menu-item with-icon" type="button" data-card-action="delete" data-item-id="${item.id}">
                    <img src="./assets/icons/trash.svg" alt="" />
                    <span>${menuLabels.delete}</span>
                  </button>
                </div>
              </div>
            </div>
            <p class="project-meta">${item.timestamp}</p>
          </div>
        </article>
      `;
    })
    .join("");

  const emptyLabel = state.currentView === "projects" ? "创建空白项目" : "新建画布";
  grid.innerHTML = `${cards}
    <button class="empty-card" type="button" id="empty-create-trigger">
      <span class="empty-card-icon">${icon.circleDashedPlus}</span>
      <span class="empty-card-label">${emptyLabel}</span>
    </button>`;
};

const renderCanvasDetail = () => {
  const project = currentProject();
  const canvas = currentCanvas();
  if (!project || !canvas) return;
  const shareView = isCanvasShareView();
  const hasNodes = canvas.nodes.length > 0;
  const headerBackIcon = hasNodes ? CANVAS_NODE_BACK : CANVAS_EMPTY_BACK;
  const dockGridIcon = hasNodes ? CANVAS_NODE_DOCK_GRID : CANVAS_EMPTY_DOCK_GRID;
  const dockSceneIcon = hasNodes ? CANVAS_NODE_DOCK_SCENE : CANVAS_EMPTY_DOCK_SCENE;
  const dockPointerIcon = hasNodes ? CANVAS_NODE_DOCK_POINTER : CANVAS_EMPTY_DOCK_POINTER;
  const dockMinusIcon = hasNodes ? CANVAS_NODE_DOCK_MINUS : CANVAS_EMPTY_DOCK_MINUS;
  const dockPlusIcon = hasNodes ? CANVAS_NODE_DOCK_PLUS : CANVAS_EMPTY_DOCK_PLUS;
  const renderPanoramaShotFrame = (image, offset, className = "canvas-shot-frame") => `
    <div class="${className}">
      <div class="canvas-shot-strip" style="transform: translateX(${Number(offset || 0)}px);">
        <img src="${escapeHtml(image)}" alt="" />
        <img src="${escapeHtml(image)}" alt="" aria-hidden="true" />
        <img src="${escapeHtml(image)}" alt="" aria-hidden="true" />
      </div>
    </div>
  `;
  const renderSelectOptions = (items, value) =>
    items
      .map((item) => `<option value="${escapeHtml(item)}"${item === value ? " selected" : ""}>${escapeHtml(item)}</option>`)
      .join("");
  const renderPanoramaGuides = (enabled) =>
    enabled
      ? `
        <div class="canvas-panorama-guides">
          <span class="canvas-panorama-guide is-horizontal is-top"></span>
          <span class="canvas-panorama-guide is-horizontal is-bottom"></span>
          <span class="canvas-panorama-guide is-vertical is-left"></span>
          <span class="canvas-panorama-guide is-vertical is-right"></span>
        </div>
      `
      : "";
  const getNodeMetrics = (node) => {
    if (node.type === "panorama") {
      return { leftX: node.x + 276, rightX: node.x + 754, centerY: node.y + 166 };
    }
    if (node.type === "shot-group") {
      return { leftX: node.x + 20, rightX: node.x + 20, centerY: node.y + 180 };
    }
    if (node.type === "text") {
      return { leftX: node.x + 24, rightX: node.x + 476, centerY: node.y + 124 };
    }
    if (node.type === "audio") {
      return { leftX: node.x + 24, rightX: node.x + 626, centerY: node.y + 190 };
    }
    return { leftX: node.x + 89, rightX: node.x + 539, centerY: node.y + 185 };
  };
  const connectionsMarkup = (canvas.connections || [])
    .map((connection) => {
      const fromNode = findNodeById(connection.from);
      const toNode = findNodeById(connection.to);
      if (!fromNode || !toNode) return "";
      const fromMetrics = getNodeMetrics(fromNode);
      const toMetrics = getNodeMetrics(toNode);
      const startX = fromMetrics.rightX;
      const startY = fromMetrics.centerY;
      const groupShotAnchor =
        typeof connection.toShotIndex === "number" && toNode.type === "shot-group"
          ? getGroupShotAnchor(toNode, connection.toShotIndex)
          : null;
      const endX = groupShotAnchor ? groupShotAnchor.x : toMetrics.leftX;
      const endY = groupShotAnchor ? groupShotAnchor.y : toMetrics.centerY;
      const curve = Math.max(140, Math.abs(endX - startX) * 0.35);
      const d = `M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}`;
      return `
        <g class="canvas-connection" data-connection-id="${connection.id}">
          <path class="canvas-connection-glow" d="${d}"></path>
          <path class="canvas-connection-line" d="${d}"></path>
        </g>
      `;
    })
    .join("");
  const nodesMarkup = canvas.nodes
    .map((node) => {
      const selected = !shareView && node.id === canvas.selectedNodeId;
      const nodeDragAttr = shareView ? "" : ' data-node-drag="true"';
      const sideAnchors = shareView
        ? ""
        : `
          <button class="canvas-node-side-anchor is-left" type="button" data-node-action="add-near" data-node-side="left" data-node-id="${node.id}">
            <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
          </button>
          <button class="canvas-node-side-anchor is-right" type="button" data-node-action="add-near" data-node-side="right" data-node-id="${node.id}">
            <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
          </button>
        `;
      if (node.type === "shot-group") {
        const columns = node.columns || 2;
        const shotsMarkup = (node.shots || [])
          .map(
            (shot) => `
              <div class="canvas-shot-card">
                <div class="canvas-shot-card-title">
                  <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
                  <span>${escapeHtml(shot.name)}</span>
                </div>
                ${renderPanoramaShotFrame(shot.source, shot.panoramaOffset, "canvas-shot-card-frame")}
              </div>
            `,
          )
          .join("");
        return `
          <article class="canvas-canvas-node canvas-shot-group-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            <div class="canvas-shot-group-title"${nodeDragAttr}>${escapeHtml(node.name)}</div>
            <div class="canvas-shot-group-panel"${nodeDragAttr} style="--shot-columns:${columns};">
              ${shotsMarkup}
            </div>
          </article>
        `;
      }
      if (node.type === "panorama") {
        return `
          <article class="canvas-canvas-node canvas-panorama-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            ${selected ? `
              <div class="canvas-floating-toolbar canvas-panorama-toolbar">
                <button class="canvas-panorama-tool" type="button" data-toolbar-action="current-shot" data-node-id="${node.id}" title="当前视角截图">${icon.camera}</button>
                <div class="canvas-panorama-divider"></div>
                <button class="canvas-panorama-tool" type="button" data-toolbar-action="quad-shot" data-node-id="${node.id}" title="4大视角截图">${icon.grid2}</button>
                <button class="canvas-panorama-tool" type="button" data-toolbar-action="dodeca-shot" data-node-id="${node.id}" title="12大视角截图">${icon.grid3}</button>
                <button class="canvas-panorama-tool" type="button" data-toolbar-action="reset-view" data-node-id="${node.id}" title="重置视角">${icon.resetView}</button>
                <button class="canvas-panorama-tool${node.showGuides ? " is-active" : ""}" type="button" data-toolbar-action="toggle-guides" data-node-id="${node.id}" title="构线参考图">${icon.guides}</button>
                <button class="canvas-panorama-tool" type="button" data-toolbar-action="fullscreen-preview" data-node-id="${node.id}" title="全屏预览">${icon.expand}</button>
              </div>
            ` : ""}

            <div class="canvas-panorama-head"${nodeDragAttr}>
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
              <span class="canvas-node-resolution">${escapeHtml(node.resolution)}</span>
            </div>

            <div class="canvas-panorama-viewer-shell">
              ${shareView ? "" : `<button class="canvas-node-side-anchor is-left" type="button" data-node-action="add-near" data-node-side="left" data-node-id="${node.id}"><img src="${CANVAS_NODE_SIDE_ADD}" alt="" /></button>`}
              <button class="canvas-panorama-viewer" type="button" data-node-id="${node.id}"${shareView ? "" : ' data-node-drag="true" data-panorama-drag="true"'}>
                <div class="canvas-panorama-strip" style="transform: translateX(${Number(node.panX || 0)}px);">
                  <img src="${escapeHtml(node.image)}" alt="${escapeHtml(node.name)}" />
                  <img src="${escapeHtml(node.image)}" alt="" aria-hidden="true" />
                  <img src="${escapeHtml(node.image)}" alt="" aria-hidden="true" />
                </div>
                ${renderPanoramaGuides(node.showGuides)}
                <div class="canvas-panorama-overlay">${icon.expand}</div>
                <div class="canvas-panorama-minimap">
                  <span class="canvas-panorama-minimap-line"></span>
                  <span class="canvas-panorama-minimap-line is-vertical"></span>
                </div>
              </button>
              ${shareView ? "" : `<button class="canvas-node-side-anchor is-right" type="button" data-node-action="add-near" data-node-side="right" data-node-id="${node.id}"><img src="${CANVAS_NODE_SIDE_ADD}" alt="" /></button>`}
            </div>

            <div class="canvas-panorama-editor">
              <button class="canvas-panorama-editor-expand" type="button">${icon.expand}</button>
              <div class="canvas-panorama-reference-row">
                <button class="canvas-panorama-reference-add" type="button">
                  ${icon.plus}
                  <span>参考</span>
                </button>
                <div class="canvas-panorama-reference-thumb">
                  <img src="${escapeHtml(node.sourceImage || node.image)}" alt="" />
                  <span>1</span>
                </div>
              </div>
              <div class="canvas-panorama-chip-row">
                <span class="canvas-panorama-scene-chip">720</span>
                <span class="canvas-panorama-scene-title">720全景</span>
                <div
                  class="canvas-panorama-inline-editor"
                  contenteditable="${shareView ? "false" : "true"}"
                  spellcheck="false"
                  data-node-field="editorText"
                  data-node-id="${node.id}"
                  data-placeholder="点击生成，直接将场景图像转为720全景图；支持文生/参考图生成。"
                >${escapeHtml(node.editorText || "")}</div>
              </div>
              <div class="canvas-panorama-footer">
                <div class="canvas-panorama-footer-left">
                  <div class="canvas-node-model-chip"><img src="${CANVAS_NODE_BRAIN}" alt="" /><span>${escapeHtml(node.model)}</span></div>
                </div>
                <div class="canvas-panorama-footer-right">
                  <div class="canvas-node-meta-chip"><span>${escapeHtml(node.outputCount)}</span></div>
                  <div class="canvas-node-like-chip"><img src="${CANVAS_NODE_LIKE}" alt="" /><span>${escapeHtml(node.likes)}</span></div>
                  ${shareView ? "" : `<button class="canvas-node-send-button" type="button" data-node-action="upload-image" data-node-id="${node.id}"><img src="${CANVAS_NODE_SEND}" alt="" /></button>`}
                </div>
              </div>
            </div>
          </article>
        `;
      }
      if (node.type === "text") {
        return `
          <article class="canvas-canvas-node canvas-text-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            <div class="canvas-text-node-head"${nodeDragAttr}>
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
            </div>
            ${sideAnchors}
            <div class="canvas-text-node-card">
              <div class="canvas-text-node-label">反推提示词</div>
              <textarea class="canvas-text-node-editor" data-node-field="text" data-node-id="${node.id}" rows="8"${shareView ? " readonly" : ""}>${escapeHtml(node.text)}</textarea>
            </div>
          </article>
        `;
      }
      if (node.type === "audio") {
        return `
          <article class="canvas-canvas-node canvas-audio-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            <div class="canvas-audio-node-head"${nodeDragAttr}>
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon is-audio" aria-hidden="true">${icon.audio}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
              ${shareView ? "" : `<button class="canvas-audio-upload-button" type="button" aria-label="上传音频">${icon.expand}</button>`}
            </div>

            ${sideAnchors}

            <button class="canvas-audio-upload-card" type="button" data-node-id="${node.id}"${nodeDragAttr}>
              <span class="canvas-audio-wave" aria-hidden="true">${icon.audio}</span>
              <strong>未上传音频</strong>
              <span>MP3 / WAV / OGG / AAC，最大 100MB</span>
            </button>

            <div class="canvas-audio-settings-card">
              <textarea
                class="canvas-audio-textarea"
                data-node-field="scriptText"
                data-node-id="${node.id}"
                rows="3"
                placeholder="输入要合成为语音的文本，输入 @ 引用上游节点..."
                ${shareView ? " readonly" : ""}
              >${escapeHtml(node.scriptText || "")}</textarea>

              <div class="canvas-audio-footer-row">
                <div class="canvas-audio-footer-left">
                  <button class="canvas-audio-setting-button" type="button" data-node-action="open-voice-settings" data-node-id="${node.id}" title="音色设置" aria-label="音色设置">
                    <span class="canvas-audio-setting-icon">${icon.audio}</span>
                    <span>${escapeHtml(node.model)}</span>
                  </button>
                  <span class="canvas-audio-divider"></span>
                  <button class="canvas-audio-setting-button" type="button" data-node-action="open-voice-settings" data-node-id="${node.id}" title="音色设置" aria-label="音色设置">
                    <span>${escapeHtml(node.voice)}</span>
                    <span>· ${escapeHtml(node.format)}</span>
                  </button>
                  <button class="canvas-audio-icon-button" type="button" title="其他设置" aria-label="其他设置">
                    ${icon.settings}
                  </button>
                </div>
                <div class="canvas-audio-footer-right">
                  <span class="canvas-audio-cost">${icon.sparkles}<strong>77</strong></span>
                  <span class="canvas-audio-status">已验免</span>
                  ${shareView ? "" : `<button class="canvas-node-send-button" type="button" data-node-action="focus" data-node-id="${node.id}"><img src="${CANVAS_NODE_SEND}" alt="" /></button>`}
                </div>
              </div>
            </div>
          </article>
        `;
      }
      return `
        <article class="canvas-canvas-node canvas-image-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
          ${selected ? `
            <div class="canvas-floating-toolbar">
              <button class="canvas-toolbar-chip" type="button" data-toolbar-action="reverse-prompt" data-node-id="${node.id}"><span class="canvas-toolbar-inline-icon">${icon.sparkles}</span><span>反推</span></button>
              <button class="canvas-toolbar-chip" type="button" data-toolbar-action="panorama" data-node-id="${node.id}"><img src="${CANVAS_NODE_TOOLBAR_FULLSCREEN}" alt="" /><span>全景</span></button>
              <div class="canvas-toolbar-chip"><img src="${CANVAS_NODE_TOOLBAR_MULTI}" alt="" /><span>多角度</span></div>
              <div class="canvas-toolbar-chip"><img src="${CANVAS_NODE_TOOLBAR_LIGHT}" alt="" /><span>打光</span></div>
              <div class="canvas-toolbar-chip"><img src="${CANVAS_NODE_TOOLBAR_GRID}" alt="" /><span>九宫格</span></div>
              <div class="canvas-toolbar-chip"><span class="canvas-mask-icon canvas-erase-icon"><img src="${CANVAS_NODE_TOOLBAR_ERASE_MASK}" alt="" /><img src="${CANVAS_NODE_TOOLBAR_ERASE}" alt="" /></span><span>擦除</span></div>
              <button class="canvas-toolbar-chip" type="button" data-toolbar-action="wash-image" data-node-id="${node.id}"><span class="canvas-toolbar-inline-icon">${icon.refresh}</span><span>洗图</span></button>
              <div class="canvas-toolbar-chip"><img src="${CANVAS_NODE_TOOLBAR_SLICE}" alt="" /><span>宫格切分</span></div>
              <button class="canvas-toolbar-icon" type="button"><img src="${CANVAS_NODE_TOOLBAR_MORE}" alt="" /></button>
              <button class="canvas-toolbar-icon" type="button"><img src="${CANVAS_NODE_TOOLBAR_UPLOAD}" alt="" /></button>
              <button class="canvas-toolbar-icon" type="button"><img src="${CANVAS_NODE_TOOLBAR_DOWNLOAD}" alt="" /></button>
              <button class="canvas-toolbar-icon" type="button"><img src="${CANVAS_NODE_TOOLBAR_EXPAND}" alt="" /></button>
              <button class="canvas-toolbar-icon" type="button"><img src="${CANVAS_NODE_TOOLBAR_CLOSE}" alt="" /></button>
            </div>
          ` : ""}

          <div class="canvas-node-titlebar"${nodeDragAttr}>
            <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
              <span>${escapeHtml(node.name)}</span>
            </div>
            <span class="canvas-node-resolution">${escapeHtml(node.resolution)}</span>
          </div>

          <button class="canvas-node-image-frame${node.panoramaSource ? " is-shot" : ""}" type="button" data-node-id="${node.id}"${nodeDragAttr}>
            ${
              node.panoramaSource
                ? renderPanoramaShotFrame(node.panoramaSource, node.panoramaOffset, "canvas-image-shot-frame")
                : `<img src="${escapeHtml(node.image)}" alt="${escapeHtml(node.name)}" />`
            }
          </button>

          ${sideAnchors}

          <div class="canvas-node-prompt-card">
            <textarea class="canvas-node-textarea" data-node-field="prompt" data-node-id="${node.id}" rows="3"${shareView ? " readonly" : ""}>${escapeHtml(node.prompt)}</textarea>

            <div class="canvas-node-footer-row">
              <div class="canvas-node-footer-left">
                <div class="canvas-node-model-chip"><img src="${CANVAS_NODE_BRAIN}" alt="" /><span>${escapeHtml(node.model)}</span></div>
                <div class="canvas-node-meta-chip"><span class="canvas-node-ratio-icon"></span><span>${escapeHtml(node.ratio)}</span></div>
                <div class="canvas-node-meta-chip"><img src="${CANVAS_NODE_COUNT}" alt="" /><span>${escapeHtml(node.outputCount)}</span></div>
              </div>
              <div class="canvas-node-footer-right">
                ${shareView ? "" : `<button class="canvas-node-camera-button${node.cameraControl?.enabled ? " is-active" : ""}" type="button" data-node-action="open-camera-control" data-node-id="${node.id}" aria-label="摄像机控制">${icon.camera}</button>`}
                <div class="canvas-node-like-chip"><img src="${CANVAS_NODE_LIKE}" alt="" /><span>${escapeHtml(node.likes)}</span></div>
                ${shareView ? "" : `<button class="canvas-node-send-button" type="button" data-node-action="upload-image" data-node-id="${node.id}"><img src="${CANVAS_NODE_SEND}" alt="" /></button>`}
              </div>
            </div>
            ${
              state.cameraControlNodeId === node.id && state.cameraControlDraft
                ? `
                  <div class="canvas-camera-popover">
                    <div class="canvas-camera-popover-header">
                      <strong>摄像机</strong>
                      <button class="canvas-camera-close" type="button" data-canvas-action="close-camera-control" aria-label="关闭摄像机设置">✕</button>
                    </div>
                    <div class="canvas-camera-wheel-grid">
                      <section class="canvas-camera-wheel-block">
                        <span>相机</span>
                        <select class="canvas-camera-select" data-camera-field="camera">
                          ${renderSelectOptions(CAMERA_OPTIONS, state.cameraControlDraft.camera)}
                        </select>
                      </section>
                      <section class="canvas-camera-wheel-block">
                        <span>镜头</span>
                        <select class="canvas-camera-select" data-camera-field="lens">
                          ${renderSelectOptions(LENS_OPTIONS, state.cameraControlDraft.lens)}
                        </select>
                      </section>
                      <section class="canvas-camera-wheel-block">
                        <span>焦距</span>
                        <select class="canvas-camera-select" data-camera-field="focalLength">
                          ${renderSelectOptions(FOCAL_LENGTH_OPTIONS, state.cameraControlDraft.focalLength)}
                        </select>
                      </section>
                      <section class="canvas-camera-wheel-block">
                        <span>光圈</span>
                        <select class="canvas-camera-select" data-camera-field="aperture">
                          ${renderSelectOptions(APERTURE_OPTIONS, state.cameraControlDraft.aperture)}
                        </select>
                      </section>
                    </div>
                    <div class="canvas-camera-corner-toggle">
                      <span>摄像机控制</span>
                      <button class="canvas-camera-toggle${state.cameraControlDraft.enabled ? " is-enabled" : ""}" type="button" data-canvas-action="toggle-camera-control-enabled" aria-label="切换摄像机控制">
                        <span></span>
                      </button>
                    </div>
                  </div>
                `
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
  const fullscreenNode =
    state.fullscreenPanoramaId && findNodeById(state.fullscreenPanoramaId)?.type === "panorama"
      ? findNodeById(state.fullscreenPanoramaId)
      : null;
  const fullscreenMarkup = fullscreenNode
    ? `
      <div class="canvas-panorama-fullscreen">
        <button class="canvas-panorama-fullscreen-backdrop" type="button" data-canvas-action="close-fullscreen" aria-label="关闭预览"></button>
        <div class="canvas-panorama-fullscreen-header">
          <span class="canvas-panorama-fullscreen-title">${escapeHtml(fullscreenNode.name)}</span>
          <button class="canvas-panorama-fullscreen-close" type="button" data-canvas-action="close-fullscreen" aria-label="关闭预览">✕</button>
        </div>
        <div class="canvas-panorama-fullscreen-viewer">
          <div class="canvas-panorama-fullscreen-strip" style="transform: translateX(${Number(fullscreenNode.panX || 0) * 2.2}px);">
            <img src="${escapeHtml(fullscreenNode.image)}" alt="${escapeHtml(fullscreenNode.name)}" />
            <img src="${escapeHtml(fullscreenNode.image)}" alt="" aria-hidden="true" />
            <img src="${escapeHtml(fullscreenNode.image)}" alt="" aria-hidden="true" />
          </div>
          ${renderPanoramaGuides(fullscreenNode.showGuides)}
        </div>
      </div>
    `
    : "";
  const washConfirmNode = state.washConfirmNodeId ? findNodeById(state.washConfirmNodeId) : null;
  const reversePromptNode = state.reversePromptConfirmNodeId ? findNodeById(state.reversePromptConfirmNodeId) : null;
  const audioVoiceNode = state.audioVoiceNodeId ? findNodeById(state.audioVoiceNodeId) : null;
  const templateDraftNode = state.canvasTemplateDraftNodeId ? findNodeById(state.canvasTemplateDraftNodeId) : null;
  const templateDeleteTarget = state.canvasTemplateDeleteTargetId ? currentProject()?.canvasTemplates?.find((template) => template.id === state.canvasTemplateDeleteTargetId) : null;
  const actionModalMarkup = reversePromptNode
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-reverse-prompt-confirm" aria-label="关闭反推弹窗"></button>
        <div class="canvas-action-modal-panel" role="dialog" aria-modal="true" aria-labelledby="reverse-prompt-title">
          <div class="canvas-action-modal-header">
            <strong id="reverse-prompt-title">确认反推</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-reverse-prompt-confirm" aria-label="关闭反推弹窗">✕</button>
          </div>
          <div class="canvas-action-modal-body">
            <p>反推动作会扣除${REVERSE_PROMPT_COST}星钻</p>
          </div>
          <div class="canvas-action-modal-footer">
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-reverse-prompt-confirm">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="confirm-reverse-prompt">确认</button>
          </div>
        </div>
      </div>
    `
    : washConfirmNode
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-wash-confirm" aria-label="关闭洗图弹窗"></button>
        <div class="canvas-action-modal-panel" role="dialog" aria-modal="true" aria-labelledby="wash-image-title">
          <div class="canvas-action-modal-header">
            <strong id="wash-image-title">确认洗图</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-wash-confirm" aria-label="关闭洗图弹窗">✕</button>
          </div>
          <div class="canvas-action-modal-body">
            <p>洗图动作会扣除${WASH_IMAGE_COST}星钻</p>
          </div>
          <div class="canvas-action-modal-footer">
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-wash-confirm">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="confirm-wash-image">确认</button>
          </div>
        </div>
      </div>
    `
    : audioVoiceNode
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-audio-voice" aria-label="关闭音色设置"></button>
        <div class="canvas-action-modal-panel canvas-audio-voice-modal-panel" role="dialog" aria-modal="true" aria-labelledby="audio-voice-title">
          <div class="canvas-action-modal-header">
            <strong id="audio-voice-title">音色设置</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-audio-voice" aria-label="关闭音色设置">✕</button>
          </div>
          <div class="canvas-audio-voice-modal-body">
            <div class="canvas-audio-voice-current">
              <span class="canvas-audio-wave" aria-hidden="true">${icon.audio}</span>
              <div>
                <strong>${escapeHtml(audioVoiceNode.voice)}</strong>
                <span>${escapeHtml(audioVoiceNode.model)} · ${escapeHtml(audioVoiceNode.format)}</span>
              </div>
            </div>
            <div class="canvas-audio-voice-grid">
              ${["青涩青年", "温柔女声", "磁性旁白", "活力少年"].map((voice) => `
                <button class="canvas-audio-voice-option${voice === audioVoiceNode.voice ? " is-active" : ""}" type="button" data-canvas-action="select-audio-voice" data-node-id="${audioVoiceNode.id}" data-audio-voice="${escapeHtml(voice)}">
                  <span>${icon.audio}</span>
                  <strong>${escapeHtml(voice)}</strong>
                </button>
              `).join("")}
            </div>
          </div>
          <div class="canvas-action-modal-footer">
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-audio-voice">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="close-audio-voice">完成</button>
          </div>
        </div>
      </div>
    `
    : templateDraftNode
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-create-template" aria-label="关闭添加模板弹窗"></button>
        <div class="canvas-action-modal-panel canvas-template-modal-panel" role="dialog" aria-modal="true" aria-labelledby="create-template-title">
          <div class="canvas-action-modal-header">
            <strong id="create-template-title">添加为模板</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-create-template" aria-label="关闭添加模板弹窗">✕</button>
          </div>
          <div class="canvas-template-form">
            <label class="canvas-template-field">
              <span>模板标题</span>
              <input type="text" value="${escapeHtml(state.canvasTemplateDraftTitle)}" data-template-title-input placeholder="输入模板标题" />
            </label>
            <label class="canvas-template-cover-field">
              <span>模板封面</span>
              <input type="file" accept="image/*" data-template-cover-input hidden />
              <button class="canvas-template-cover-upload" type="button" data-canvas-action="pick-template-cover">
                <img src="${escapeHtml(state.canvasTemplateDraftCover || getNodeTemplateCover(templateDraftNode))}" alt="" />
                <span>上传模板封面</span>
              </button>
            </label>
          </div>
          <div class="canvas-action-modal-footer">
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-create-template">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="confirm-create-template">完成添加</button>
          </div>
        </div>
      </div>
    `
    : templateDeleteTarget
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-template-delete" aria-label="关闭删除模板弹窗"></button>
        <div class="canvas-action-modal-panel" role="dialog" aria-modal="true" aria-labelledby="delete-template-title">
          <div class="canvas-action-modal-header">
            <strong id="delete-template-title">删除模板</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-template-delete" aria-label="关闭删除模板弹窗">✕</button>
          </div>
          <div class="canvas-action-modal-body">
            <p>自定义模板「${escapeHtml(templateDeleteTarget.name)}」删除后无法恢复，是否确认删除？</p>
          </div>
          <div class="canvas-action-modal-footer">
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-template-delete">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="confirm-delete-template">确认删除</button>
          </div>
        </div>
      </div>
    `
    : "";

  const contextMenuMarkup = state.canvasContextMenu
    ? `
      <div class="canvas-context-menu" style="left:${state.canvasContextMenu.x}px; top:${state.canvasContextMenu.y}px;">
        <button class="canvas-context-item" type="button" data-context-action="save-asset" data-node-id="${state.canvasContextMenu.nodeId}">保存到资产库</button>
        <button class="canvas-context-item" type="button" data-context-action="create-template" data-node-id="${state.canvasContextMenu.nodeId}">添加为模板</button>
        <div class="canvas-context-divider"></div>
        <button class="canvas-context-item" type="button" data-context-action="duplicate" data-node-id="${state.canvasContextMenu.nodeId}">创建副本</button>
        <button class="canvas-context-item" type="button" data-context-action="copy" data-node-id="${state.canvasContextMenu.nodeId}">复制</button>
        <button class="canvas-context-item" type="button" data-context-action="paste" data-node-id="${state.canvasContextMenu.nodeId}">粘贴</button>
        <div class="canvas-context-divider"></div>
        <button class="canvas-context-item danger" type="button" data-context-action="delete" data-node-id="${state.canvasContextMenu.nodeId}">删除</button>
      </div>
    `
    : "";

  const templateSearchValue = state.canvasTemplateSearch.trim().toLowerCase();
  const templateItems = currentTemplateList().filter((template) => {
    if (!templateSearchValue) return true;
    return [template.name, template.masterTitle].some((value) => String(value || "").toLowerCase().includes(templateSearchValue));
  });
  const templateEmptyText = state.canvasTemplateSearch.trim()
    ? "未找到匹配模板"
    : state.canvasTemplateType === "custom"
      ? "暂无自定义模板"
      : "暂无官方模板";
  const templatePanelMarkup = state.canvasTemplatePanelOpen
    ? `
      <div class="canvas-template-panel">
        <div class="canvas-template-panel-header">
          <strong>模板库</strong>
          <button class="canvas-add-close canvas-template-close" type="button" data-canvas-action="close-template-panel">✕</button>
        </div>
        <div class="canvas-template-tabs" role="tablist" aria-label="模板类型">
          <button class="${state.canvasTemplateType === "official" ? "is-active" : ""}" type="button" data-canvas-action="switch-template-type" data-template-type="official">官方模板</button>
          <button class="${state.canvasTemplateType === "custom" ? "is-active" : ""}" type="button" data-canvas-action="switch-template-type" data-template-type="custom">自定义模板</button>
        </div>
        <label class="canvas-template-search" aria-label="搜索模板">
          <span>${icon.search}</span>
          <input type="search" value="${escapeHtml(state.canvasTemplateSearch)}" data-template-search-input placeholder="搜索模板" />
        </label>
        <div class="canvas-template-list">
          ${
            templateItems.length
              ? templateItems
                  .map(
                    (template) => `
                      <article class="canvas-template-card">
                        <img class="canvas-template-cover" src="${escapeHtml(template.cover || DEFAULT_COVER)}" alt="" />
                        <div class="canvas-template-copy">
                          <strong>${escapeHtml(template.name)}</strong>
                        </div>
                        <div class="canvas-template-actions">
                          <button type="button" data-canvas-action="add-template-to-canvas" data-template-id="${template.id}">添加至画布</button>
                          ${
                            template.type === "custom"
                              ? `<button class="is-danger" type="button" data-canvas-action="delete-template" data-template-id="${template.id}">删除</button>`
                              : ""
                          }
                        </div>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="canvas-template-empty">${templateEmptyText}</div>`
          }
        </div>
      </div>
    `
    : "";

  const addPanelMarkup = state.canvasAddPanelOpen
    ? `
      <div class="canvas-add-panel">
        <div class="canvas-add-panel-header">
          <strong>添加节点</strong>
          <button class="canvas-add-close" type="button" data-canvas-action="close-add-panel">✕</button>
        </div>
        <div class="canvas-add-actions">
          <button class="canvas-add-button is-text" type="button" data-canvas-action="create-node"><img src="${CANVAS_ADD_PANEL_TEXT}" alt="" /><span>文本</span></button>
          <div class="canvas-add-line"><img src="${CANVAS_ADD_PANEL_LINE}" alt="" /></div>
          <button class="canvas-add-button is-image" type="button" data-canvas-action="create-image-node"><img src="${CANVAS_ADD_PANEL_IMAGE}" alt="" /><span>图片</span></button>
          <div class="canvas-add-line"><img src="${CANVAS_ADD_PANEL_LINE}" alt="" /></div>
          <button class="canvas-add-button is-video" type="button" data-canvas-action="create-node"><img src="${CANVAS_ADD_PANEL_TEXT}" alt="" /><span>视频</span></button>
          <div class="canvas-add-line"><img src="${CANVAS_ADD_PANEL_LINE}" alt="" /></div>
          <button class="canvas-add-button is-audio" type="button" data-canvas-action="create-audio-node"><span class="canvas-add-inline-icon">${icon.audio}</span><span>音频</span></button>
          <div class="canvas-add-line"><img src="${CANVAS_ADD_PANEL_LINE}" alt="" /></div>
          <div class="canvas-add-section-label">添加资源</div>
          <button class="canvas-add-button is-upload" type="button" data-canvas-action="upload-create-node"><span class="canvas-mask-icon"><img src="${CANVAS_ADD_PANEL_UPLOAD_MASK}" alt="" /><img src="${CANVAS_ADD_PANEL_UPLOAD}" alt="" /></span><span>上传</span></button>
        </div>
      </div>
    `
    : "";

  canvasStage.innerHTML = `
    <div class="canvas-editor-shell">
      <div class="canvas-page-header">
        ${
          shareView
            ? `<button class="canvas-copy-entry" type="button" data-canvas-action="open-copy-canvas-modal">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="8" y="8" width="10" height="10" rx="2" />
                  <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>复制画布</span>
              </button>`
            : `
              <button class="canvas-page-crumb" type="button" data-canvas-action="back-to-canvases">
                <span class="canvas-page-back"><img src="${headerBackIcon}" alt="" /></span>
                <span>${escapeHtml(canvas.name)}</span>
              </button>
              <div class="canvas-page-header-right">
                <button class="canvas-page-share" type="button" data-canvas-action="open-share-modal" aria-label="分享画布" title="分享画布">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 6.5 8.8 10.1M8.8 13.9 15 17.5" />
                    <circle cx="6.5" cy="12" r="2.5" />
                    <circle cx="17.5" cy="5" r="2.5" />
                    <circle cx="17.5" cy="19" r="2.5" />
                  </svg>
                </button>
              </div>
            `
        }
      </div>

      <div class="canvas-board" id="canvas-board">
        <div class="canvas-grid-guide"></div>
        <div class="canvas-world" id="canvas-world">
          <svg class="canvas-connections-layer" aria-hidden="true">${connectionsMarkup}</svg>
          ${nodesMarkup}
        </div>
        ${fullscreenMarkup}
        ${actionModalMarkup}

        ${canvas.nodes.length ? "" : `
          <div class="canvas-empty-state">
            <h2>开启画布创作之旅</h2>
          </div>
        `}

        ${shareView ? "" : `<div class="canvas-left-tools">
          <button class="canvas-left-tool is-primary" type="button" data-canvas-action="toggle-add-panel" aria-label="添加节点"><img src="${hasNodes ? CANVAS_NODE_LEFT_ADD : CANVAS_EMPTY_LEFT_ADD}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="搜索"><img src="${hasNodes ? CANVAS_NODE_LEFT_SEARCH : CANVAS_EMPTY_LEFT_SEARCH}" alt="" /></button>
          <button class="canvas-left-tool" type="button" data-canvas-action="toggle-template-panel" aria-label="模板库" title="模板库">${icon.layoutBoard}</button>
          <button class="canvas-left-tool" type="button" aria-label="视图"><img src="${hasNodes ? CANVAS_NODE_LEFT_GRID : CANVAS_EMPTY_LEFT_GRID}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="历史"><img src="${hasNodes ? CANVAS_NODE_LEFT_CLOCK : CANVAS_EMPTY_LEFT_CLOCK}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="删除"><img src="${hasNodes ? CANVAS_NODE_LEFT_DELETE : CANVAS_EMPTY_LEFT_DELETE}" alt="" /></button>
        </div>`}

        ${shareView ? "" : addPanelMarkup}
        ${shareView ? "" : templatePanelMarkup}
        ${shareView ? "" : contextMenuMarkup}

        <div class="canvas-bottom-dock">
          <button class="canvas-dock-button" type="button" aria-label="网格"><img src="${dockGridIcon}" alt="" /></button>
          <button class="canvas-dock-button" type="button" aria-label="图片"><img src="${dockSceneIcon}" alt="" /></button>
          <button class="canvas-dock-button" type="button" aria-label="框选"><img src="${dockPointerIcon}" alt="" /></button>
          <div class="canvas-dock-divider"></div>
          <button class="canvas-dock-zoom" type="button" data-canvas-action="zoom-out" aria-label="缩小"><img src="${dockMinusIcon}" alt="" /></button>
          <button class="canvas-dock-percent" type="button" data-canvas-action="reset-zoom">${Math.round(canvas.viewport.scale * 100)}%</button>
          <button class="canvas-dock-zoom" type="button" data-canvas-action="zoom-in" aria-label="放大"><img src="${dockPlusIcon}" alt="" /></button>
        </div>
      </div>
    </div>
  `;
  const addPanelTrigger = canvasStage.querySelector('[data-canvas-action="toggle-add-panel"]');
  if (addPanelTrigger) {
    addPanelTrigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      openCanvasAddPanel();
    };
    addPanelTrigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
    };
  }
  const templatePanelTrigger = canvasStage.querySelector('[data-canvas-action="toggle-template-panel"]');
  if (templatePanelTrigger) {
    templatePanelTrigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (Date.now() < state.canvasAddPanelGuardUntil) return;
      toggleCanvasTemplatePanel();
    };
    templatePanelTrigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      toggleCanvasTemplatePanel();
    };
  }
  canvasStage.querySelectorAll('[data-canvas-action="create-image-node"]').forEach((trigger) => {
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      createNodeAtViewportCenter(CANVAS_NODE_PREVIEW);
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
    };
  });
  const templateTitleInput = canvasStage.querySelector("[data-template-title-input]");
  if (templateTitleInput) {
    templateTitleInput.addEventListener("input", (event) => {
      state.canvasTemplateDraftTitle = event.target.value;
    });
  }
  const templateCoverInput = canvasStage.querySelector("[data-template-cover-input]");
  if (templateCoverInput) {
    templateCoverInput.addEventListener("change", async () => {
      const file = templateCoverInput.files?.[0];
      if (!file) return;
      state.canvasTemplateDraftCover = await readFileAsDataUrl(file);
      renderCanvasDetail();
    });
  }
  const templateSearchInput = canvasStage.querySelector("[data-template-search-input]");
  if (templateSearchInput) {
    templateSearchInput.addEventListener("input", (event) => {
      state.canvasTemplateSearch = event.target.value;
      renderCanvasDetail();
      const nextInput = canvasStage.querySelector("[data-template-search-input]");
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
      }
    });
    templateSearchInput.onpointerdown = (event) => {
      event.stopPropagation();
    };
  }
  canvasStage.querySelectorAll('[data-canvas-action="switch-template-type"]').forEach((trigger) => {
    const switchTemplateType = () => {
      state.canvasTemplateType = trigger.dataset.templateType === "custom" ? "custom" : "official";
      renderCanvasDetail();
    };
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (Date.now() < state.canvasTemplateActionGuardUntil) return;
      switchTemplateType();
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      state.canvasTemplateActionGuardUntil = Date.now() + 250;
      switchTemplateType();
    };
  });
  canvasStage.querySelectorAll('[data-canvas-action="add-template-to-canvas"]').forEach((trigger) => {
    const addTemplate = () => addCanvasTemplateToCanvas(trigger.dataset.templateId);
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (Date.now() < state.canvasTemplateActionGuardUntil) return;
      addTemplate();
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      state.canvasTemplateActionGuardUntil = Date.now() + 250;
      addTemplate();
    };
  });
  canvasStage.querySelectorAll('[data-canvas-action="delete-template"]').forEach((trigger) => {
    const deleteTemplate = () => openTemplateDeleteConfirm(trigger.dataset.templateId);
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (Date.now() < state.canvasTemplateActionGuardUntil) return;
      deleteTemplate();
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      state.canvasTemplateActionGuardUntil = Date.now() + 250;
      deleteTemplate();
    };
  });
  canvasStage.querySelectorAll("[data-context-action]").forEach((trigger) => {
    const runContextAction = () => {
      const nodeId = trigger.dataset.nodeId;
      const action = trigger.dataset.contextAction;
      if (action === "save-asset") {
        state.canvasContextMenu = null;
        renderCanvasDetail();
      }
      if (action === "create-template") openCreateTemplateModal(nodeId);
      if (action === "duplicate") duplicateNode(nodeId);
      if (action === "copy") copyNode(nodeId);
      if (action === "paste") pasteNode(nodeId);
      if (action === "delete") deleteNode(nodeId);
    };
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (Date.now() < state.canvasContextActionGuardUntil) return;
      runContextAction();
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      state.canvasContextActionGuardUntil = Date.now() + 250;
      runContextAction();
    };
  });
  syncCanvasTransform();
};

const syncCanvasTransform = () => {
  const canvas = currentCanvas();
  const world = document.getElementById("canvas-world");
  if (!canvas || !world) return;
  world.style.transform = `translate(${canvas.viewport.x}px, ${canvas.viewport.y}px) scale(${canvas.viewport.scale})`;
  const zoomLabel = canvasStage.querySelector(".canvas-dock-percent");
  if (zoomLabel) zoomLabel.textContent = `${Math.round(canvas.viewport.scale * 100)}%`;
};

const findNodeById = (nodeId) => currentCanvasNodes().find((node) => node.id === nodeId) || null;

const currentTemplateList = () => {
  const project = currentProject();
  return state.canvasTemplateType === "custom" ? project?.canvasTemplates || [] : officialCanvasTemplates;
};

const findCanvasTemplate = (templateId) => {
  const project = currentProject();
  return officialCanvasTemplates.find((template) => template.id === templateId) || project?.canvasTemplates?.find((template) => template.id === templateId) || null;
};

const getNodeTemplateCover = (node) => {
  if (!node) return DEFAULT_COVER;
  if (node.type === "image" || node.type === "panorama") return node.image || DEFAULT_COVER;
  if (node.type === "shot-group") return node.shots?.[0]?.source || DEFAULT_COVER;
  return DEFAULT_COVER;
};

const closeCanvasPopups = () => {
  state.canvasAddPanelOpen = false;
  state.canvasTemplatePanelOpen = false;
  state.canvasContextMenu = null;
  state.washConfirmNodeId = null;
  state.reversePromptConfirmNodeId = null;
  state.audioVoiceNodeId = null;
};

const openCanvasAddPanel = () => {
  state.canvasAddPanelOpen = true;
  state.canvasTemplatePanelOpen = false;
  state.canvasContextMenu = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasAddPanel = () => {
  state.canvasAddPanelOpen = !state.canvasAddPanelOpen;
  state.canvasTemplatePanelOpen = false;
  state.canvasContextMenu = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasTemplatePanel = () => {
  state.canvasTemplatePanelOpen = !state.canvasTemplatePanelOpen;
  state.canvasAddPanelOpen = false;
  state.canvasContextMenu = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const createNodeAtViewportCenter = (image = null, offset = { x: 0, y: 0 }) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  if (!canvas || !board) return;
  const centerX = (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale;
  const centerY = (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale;
  const node = createImageNode({
    name: state.canvasDraftName.trim() || `图片节点 ${canvas.nodes.length + 1}`,
    image: image || canvas.cover,
    x: centerX - 325 + offset.x,
    y: centerY - 225 + offset.y,
  });
  canvas.nodes.push(node);
  canvas.selectedNodeId = node.id;
  state.canvasDraftName = "";
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createAudioNodeAtViewportCenter = (offset = { x: 0, y: 0 }) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  if (!canvas || !board) return;
  const centerX = (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale;
  const centerY = (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale;
  const audioNodes = canvas.nodes.filter((node) => node.type === "audio");
  const node = createAudioNode({
    name: `音频节点 ${audioNodes.length + 1}`,
    x: centerX - 325 + offset.x,
    y: centerY - 190 + offset.y,
  });
  canvas.nodes.push(node);
  canvas.selectedNodeId = node.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const openCreateTemplateModal = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node) return;
  state.canvasTemplateDraftNodeId = nodeId;
  state.canvasTemplateDraftTitle = `${node.name || "未命名节点"}模板`;
  state.canvasTemplateDraftCover = getNodeTemplateCover(node);
  state.canvasContextMenu = null;
  renderCanvasDetail();
};

const closeCreateTemplateModal = () => {
  state.canvasTemplateDraftNodeId = null;
  state.canvasTemplateDraftTitle = "";
  state.canvasTemplateDraftCover = "";
  renderCanvasDetail();
};

const confirmCreateTemplate = () => {
  const project = currentProject();
  const node = findNodeById(state.canvasTemplateDraftNodeId);
  if (!project || !node) return;
  const title = state.canvasTemplateDraftTitle.trim() || `${node.name || "未命名节点"}模板`;
  const savedNode = hydrateCanvasNode({
    ...structuredClone(node),
    id: undefined,
    x: 0,
    y: 0,
  });
  project.canvasTemplates = project.canvasTemplates || [];
  project.canvasTemplates.unshift({
    id: `tpl${Date.now()}${Math.floor(Math.random() * 1000)}`,
    type: "custom",
    name: title,
    masterTitle: node.name || title,
    cover: state.canvasTemplateDraftCover || getNodeTemplateCover(node),
    nodes: [savedNode],
  });
  state.canvasTemplateType = "custom";
  state.canvasTemplatePanelOpen = true;
  state.canvasTemplateDraftNodeId = null;
  state.canvasTemplateDraftTitle = "";
  state.canvasTemplateDraftCover = "";
  saveProjectsState();
  renderCanvasDetail();
};

const addCanvasTemplateToCanvas = (templateId) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  const template = findCanvasTemplate(templateId);
  if (!canvas || !board || !template) return;
  const centerX = (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale;
  const centerY = (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale;
  const sourceNodes = template.nodes?.length ? template.nodes : [createImageNode({ name: template.name, image: template.cover })];
  const minX = Math.min(...sourceNodes.map((node) => Number(node.x) || 0));
  const minY = Math.min(...sourceNodes.map((node) => Number(node.y) || 0));
  const createdNodes = sourceNodes.map((node, index) =>
    hydrateCanvasNode({
      ...structuredClone(node),
      id: undefined,
      name: node.name || `${template.name}-${index + 1}`,
      x: centerX + (Number(node.x) || 0) - minX - 260,
      y: centerY + (Number(node.y) || 0) - minY - 180,
    }),
  );
  canvas.nodes.push(...createdNodes);
  canvas.selectedNodeId = createdNodes[0]?.id || canvas.selectedNodeId;
  state.canvasTemplatePanelOpen = false;
  saveProjectsState();
  renderCanvasDetail();
};

const openTemplateDeleteConfirm = (templateId) => {
  const template = currentProject()?.canvasTemplates?.find((item) => item.id === templateId);
  if (!template) return;
  state.canvasTemplateDeleteTargetId = templateId;
  renderCanvasDetail();
};

const closeTemplateDeleteConfirm = () => {
  state.canvasTemplateDeleteTargetId = null;
  renderCanvasDetail();
};

const confirmDeleteCanvasTemplate = () => {
  const project = currentProject();
  if (!project || !state.canvasTemplateDeleteTargetId) return;
  project.canvasTemplates = (project.canvasTemplates || []).filter((template) => template.id !== state.canvasTemplateDeleteTargetId);
  state.canvasTemplateDeleteTargetId = null;
  saveProjectsState();
  renderCanvasDetail();
};

const centerViewportOnNode = (nodeId) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  const node = findNodeById(nodeId);
  if (!canvas || !board || !node) return;
  const centerX = node.type === "shot-group" ? node.x + 410 : node.type === "panorama" ? node.x + 531 : node.x + 240;
  const centerY = node.type === "shot-group" ? node.y + 240 : node.type === "panorama" ? node.y + 180 : node.y + 180;
  canvas.viewport.x = board.clientWidth / 2 - centerX * canvas.viewport.scale;
  canvas.viewport.y = board.clientHeight / 2 - centerY * canvas.viewport.scale;
  syncCanvasTransform();
};

const openCameraControlPanel = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "image" || node.panoramaSource) return;
  state.cameraControlNodeId = nodeId;
  state.cameraControlDraft = structuredClone(node.cameraControl);
  renderCanvasDetail();
};

const closeCameraControlPanel = () => {
  state.cameraControlNodeId = null;
  state.cameraControlDraft = null;
  renderCanvasDetail();
};

const syncCameraControlDraft = (field, value) => {
  const node = findNodeById(state.cameraControlNodeId);
  if (!node || !state.cameraControlDraft) return;
  state.cameraControlDraft[field] = value;
  node.cameraControl = structuredClone(state.cameraControlDraft);
  saveProjectsState();
  renderCanvasDetail();
};

const getPanoramaBaseName = (nodeId) => {
  const canvas = currentCanvas();
  if (!canvas) return "720全景图1";
  const panoramaNodes = canvas.nodes.filter((node) => node.type === "panorama");
  const index = Math.max(0, panoramaNodes.findIndex((node) => node.id === nodeId)) + 1;
  return `720全景图${index || 1}`;
};

const getImageBaseName = (nodeId) => {
  const canvas = currentCanvas();
  if (!canvas) return "图片节点1";
  const imageNodes = canvas.nodes.filter((node) => node.type === "image");
  const index = Math.max(0, imageNodes.findIndex((node) => node.id === nodeId)) + 1;
  return `图片节点${index || 1}`;
};

const getNextPanoramaOutputIndex = (baseName, matcher) => {
  const canvas = currentCanvas();
  if (!canvas) return 1;
  return (
    canvas.nodes.reduce((max, node) => {
      if (matcher(node.name || "")) {
        const match = String(node.name).match(/(\d+)(?!.*\d)/);
        return Math.max(max, Number(match?.[1] || 0));
      }
      return max;
    }, 0) + 1
  );
};

const panoramaOffsetForAngle = (angle) => {
  let normalized = angle % 360;
  if (normalized < 0) normalized += 360;
  if (normalized > 180) normalized -= 360;
  return Number(((-normalized / 180) * 180).toFixed(2));
};

const panoramaAngleFromOffset = (offset = 0) => {
  const normalized = Math.max(-180, Math.min(180, Number(offset) || 0));
  let angle = Math.round((-normalized / 180) * 180);
  if (angle < 0) angle += 360;
  return angle % 360;
};

const createPanoramaShotNode = ({ panoramaNode, name, x, y, offset, angleLabel = null }) =>
  createImageNode({
    name,
    image: panoramaNode.image,
    panoramaSource: panoramaNode.image,
    panoramaOffset: offset,
    prompt: angleLabel ? `全景截图 · ${angleLabel}` : "全景截图",
    x,
    y,
  });

const getGroupShotAnchor = (groupNode, shotIndex) => {
  const columns = groupNode.columns || 2;
  const cellWidth = 430;
  const cellHeight = 176;
  const gutterX = 30;
  const gutterY = 28;
  const titleOffsetY = 40;
  const column = shotIndex % columns;
  const row = Math.floor(shotIndex / columns);
  return {
    x: groupNode.x + 42 + column * (cellWidth + gutterX),
    y: groupNode.y + titleOffsetY + 20 + row * (cellHeight + gutterY) + cellHeight / 2,
  };
};

const createPanoramaCurrentShot = (nodeId) => {
  const canvas = currentCanvas();
  const panoramaNode = findNodeById(nodeId);
  if (!canvas || !panoramaNode || panoramaNode.type !== "panorama") return;
  const baseName = getPanoramaBaseName(nodeId);
  const shotIndex = getNextPanoramaOutputIndex(baseName, (name) => name.startsWith(`${baseName}-截图`));
  const shotNode = createPanoramaShotNode({
    panoramaNode,
    name: `${baseName}-截图${shotIndex}`,
    x: panoramaNode.x + 700,
    y: panoramaNode.y - 40,
    offset: Number(panoramaNode.panX || 0),
  });
  canvas.nodes.push(shotNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: panoramaNode.id,
    to: shotNode.id,
  });
  canvas.selectedNodeId = shotNode.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createPanoramaShotGroup = (nodeId, variant = "quad") => {
  const canvas = currentCanvas();
  const panoramaNode = findNodeById(nodeId);
  if (!canvas || !panoramaNode || panoramaNode.type !== "panorama") return;
  const baseName = getPanoramaBaseName(nodeId);
  const groupIndex = getNextPanoramaOutputIndex(baseName, (name) => name.startsWith(`${baseName}-全景截图组`));
  const presets =
    variant === "quad"
      ? [
          { angle: 0, label: "前方", name: `${baseName}-前方截图${groupIndex}` },
          { angle: 90, label: "左侧", name: `${baseName}-左侧截图${groupIndex}` },
          { angle: 180, label: "后方", name: `${baseName}-后方截图${groupIndex}` },
          { angle: 270, label: "右侧", name: `${baseName}-右侧截图${groupIndex}` },
        ]
      : Array.from({ length: 12 }, (_, index) => {
          const angle = index * 30;
          return {
            angle,
            label: `逆时针${angle}°`,
            name: `${baseName}-逆时针${angle}° ${groupIndex}`,
          };
        });
  const columns = variant === "quad" ? 2 : 4;
  const rows = Math.ceil(presets.length / columns);
  const groupNode = createShotGroupNode({
    name: `${baseName}-全景截图组${groupIndex}`,
    x: panoramaNode.x + 700,
    y: panoramaNode.y - 24,
    columns,
    shots: presets.map((preset) => ({
      name: preset.name,
      label: preset.label,
      source: panoramaNode.image,
      panoramaOffset: panoramaOffsetForAngle(preset.angle),
    })),
  });
  groupNode.y = panoramaNode.y - 24 - Math.max(0, rows - 2) * 4;
  canvas.nodes.push(groupNode);
  groupNode.shots.forEach((_, shotIndex) => {
    canvas.connections.push({
      id: `link${Date.now()}${Math.floor(Math.random() * 1000)}${shotIndex}`,
      from: panoramaNode.id,
      to: groupNode.id,
      toShotIndex: shotIndex,
    });
  });
  canvas.selectedNodeId = groupNode.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const resetPanoramaView = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "panorama") return;
  node.panX = 0;
  saveProjectsState();
  renderCanvasDetail();
};

const togglePanoramaGuides = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "panorama") return;
  node.showGuides = !node.showGuides;
  saveProjectsState();
  renderCanvasDetail();
};

const openPanoramaFullscreen = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "panorama") return;
  state.fullscreenPanoramaId = nodeId;
  renderCanvasDetail();
};

const closePanoramaFullscreen = () => {
  if (!state.fullscreenPanoramaId) return;
  state.fullscreenPanoramaId = null;
  renderCanvasDetail();
};

const openReversePromptConfirm = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "image") return;
  state.reversePromptConfirmNodeId = nodeId;
  renderCanvasDetail();
};

const openWashImageConfirm = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "image") return;
  state.washConfirmNodeId = nodeId;
  renderCanvasDetail();
};

const openAudioVoiceSettings = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "audio") return;
  state.audioVoiceNodeId = nodeId;
  state.canvasContextMenu = null;
  renderCanvasDetail();
};

const createReversePromptTextNode = (nodeId) => {
  const canvas = currentCanvas();
  const sourceNode = findNodeById(nodeId);
  if (!canvas || !sourceNode || sourceNode.type !== "image") return;
  const baseName = getImageBaseName(nodeId);
  const resultIndex = getNextPanoramaOutputIndex(baseName, (name) => name.startsWith(`${baseName}-反推结果`));
  const textNode = createTextNode({
    name: `${baseName}-反推结果${resultIndex}`,
    text: sourceNode.prompt || DEFAULT_NODE_PROMPT,
    x: sourceNode.x + 720,
    y: sourceNode.y + 28,
  });
  canvas.nodes.push(textNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: sourceNode.id,
    to: textNode.id,
  });
  canvas.selectedNodeId = textNode.id;
  state.reversePromptConfirmNodeId = null;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createWashedImageNode = (nodeId) => {
  const canvas = currentCanvas();
  const sourceNode = findNodeById(nodeId);
  if (!canvas || !sourceNode || sourceNode.type !== "image") return;
  const baseName = getImageBaseName(nodeId);
  const resultIndex = getNextPanoramaOutputIndex(baseName, (name) => name.startsWith(`${baseName}-洗图结果`));
  const washedNode = createImageNode({
    name: `${baseName}-洗图结果${resultIndex}`,
    image: sourceNode.image,
    prompt: `${sourceNode.prompt}\n\n洗图结果`,
    cameraControl: sourceNode.cameraControl,
    x: sourceNode.x + 720,
    y: sourceNode.y + 36,
  });
  canvas.nodes.push(washedNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: sourceNode.id,
    to: washedNode.id,
  });
  canvas.selectedNodeId = washedNode.id;
  state.washConfirmNodeId = null;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const setCanvasZoom = (nextScale, clientX = null, clientY = null) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  if (!canvas || !board) return;
  const rect = board.getBoundingClientRect();
  const previousScale = canvas.viewport.scale;
  const scale = Math.min(1.8, Math.max(0.45, nextScale));
  const anchorX = clientX == null ? rect.left + rect.width / 2 : clientX;
  const anchorY = clientY == null ? rect.top + rect.height / 2 : clientY;
  const worldX = (anchorX - rect.left - canvas.viewport.x) / previousScale;
  const worldY = (anchorY - rect.top - canvas.viewport.y) / previousScale;
  canvas.viewport.scale = scale;
  canvas.viewport.x = anchorX - rect.left - worldX * scale;
  canvas.viewport.y = anchorY - rect.top - worldY * scale;
  syncCanvasTransform();
};

const openModal = (el) => el.classList.add("is-open");
const closeModal = (el) => {
  el.classList.remove("is-open");
  if (el === projectModeModal) state.projectModeTargetId = null;
  if (el === canvasShareModal && shareCopyFeedback) shareCopyFeedback.textContent = "";
  if (el === videoPreviewModal) {
    state.activeVideoId = null;
    if (videoPreviewContent) videoPreviewContent.innerHTML = "";
  }
  if (el === publishVideoModal) resetPublishVideoDraft();
  if (el === deleteModal && state.creatorVideoDeleteTargetId) state.creatorVideoDeleteTargetId = null;
  if (el === deleteModal && state.shelfVideoTargetId) state.shelfVideoTargetId = null;
  if (el === reviewVideoModal) state.reviewVideoTargetId = null;
};

const formatCountdownUnit = (value) => String(value).padStart(2, "0");

const currentCanvasShareLink = () => {
  const project = currentProject();
  const canvas = currentCanvas();
  const route =
    project && canvas
      ? `#/share/project/${encodeURIComponent(project.id)}/canvas/${encodeURIComponent(canvas.id)}`
      : window.location.hash || "#/projects";
  return `${window.location.href.split("#")[0]}${route}`;
};

const syncShareAccessOptions = () => {
  const access = currentCanvas()?.shareAccess || "public";
  const isPublic = access === "public";
  canvasShareAccessSwitch?.setAttribute("aria-checked", String(isPublic));
  canvasShareAccessSwitch?.setAttribute("aria-label", isPublic ? "公开访问" : "仅自己可见");
  if (shareAccessTitle) shareAccessTitle.textContent = isPublic ? "公开访问" : "仅自己可见";
  if (shareAccessDescription) {
    shareAccessDescription.textContent = isPublic
      ? "获得链接的人可以查看当前画布以及后续操作内容"
      : "关闭外部访问，仅保留本人查看";
  }
};

const openCanvasShareModal = () => {
  const canvas = currentCanvas();
  if (!canvas || !canvasShareModal) return;
  if (canvasShareLinkInput) canvasShareLinkInput.value = currentCanvasShareLink();
  if (shareCopyFeedback) shareCopyFeedback.textContent = "";
  syncShareAccessOptions();
  openModal(canvasShareModal);
};

const enterCanvasSharePage = () => {
  if (!currentCanvas()) return;
  closeModal(canvasShareModal);
  state.currentView = "canvas-share";
  state.avatarOpen = false;
  state.noticeOpen = false;
  closeCanvasPopups();
  renderGrid();
};

const openCopyCanvasModal = () => {
  const canvas = currentCanvas();
  if (!canvas || !copyCanvasModal || !copyCanvasProjectSelect || !copyCanvasNameInput) return;
  copyCanvasProjectSelect.innerHTML = state.projects
    .map((project) => `<option value="${escapeHtml(project.id)}"${project.id === state.currentProjectId ? " selected" : ""}>${escapeHtml(project.name)}</option>`)
    .join("");
  copyCanvasNameInput.value = `${canvas.name} 副本`;
  openModal(copyCanvasModal);
};

const confirmCopyCanvas = () => {
  const sourceCanvas = currentCanvas();
  const targetProject = state.projects.find((project) => project.id === copyCanvasProjectSelect?.value);
  if (!sourceCanvas || !targetProject) return;
  const name = copyCanvasNameInput?.value.trim() || `${sourceCanvas.name} 副本`;
  const copiedCanvas = normalizeCanvas({
    ...structuredClone(sourceCanvas),
    id: `c${Date.now()}`,
    name,
    timestamp: DEFAULT_TIMESTAMP,
    shareAccess: "private",
  });
  targetProject.canvases.unshift(copiedCanvas);
  saveProjectsState();
  closeModal(copyCanvasModal);
  state.currentView = "canvas-detail";
  state.currentProjectId = targetProject.id;
  state.currentCanvasId = copiedCanvas.id;
  closeCanvasPopups();
  renderGrid();
};

const updateActivityCountdown = () => {
  const remaining = Math.max(0, ACTIVITY_END_AT - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  activityCountdownDays.textContent = formatCountdownUnit(days);
  activityCountdownHours.textContent = formatCountdownUnit(hours);
  activityCountdownMinutes.textContent = formatCountdownUnit(minutes);
  activityCountdownSeconds.textContent = formatCountdownUnit(seconds);
  limitedActivityModal?.classList.toggle("is-expired", remaining <= 0);
};

const openLimitedActivityModal = () => {
  state.avatarOpen = false;
  state.noticeOpen = false;
  syncHeader();
  updateActivityCountdown();
  openModal(limitedActivityModal);
};

limitedActivityTrigger?.addEventListener("click", openLimitedActivityModal);
activityRechargeTrigger?.addEventListener("click", () => closeModal(limitedActivityModal));

contactSupportTrigger?.addEventListener("click", () => {
  state.avatarOpen = false;
  state.noticeOpen = false;
  syncHeader();
  openModal(contactSupportModal);
});

creatorCenterTrigger?.addEventListener("click", () => {
  state.currentView = "creator-center";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  state.creatorVideoMenuId = null;
  state.avatarOpen = false;
  state.noticeOpen = false;
  renderGrid();
});

reviewCenterTrigger?.addEventListener("click", () => {
  state.currentView = "review-center";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  state.creatorVideoMenuId = null;
  state.avatarOpen = false;
  state.noticeOpen = false;
  renderGrid();
});

reviewFilterSelect?.addEventListener("change", () => {
  state.reviewStatusFilter = reviewFilterSelect.value;
  renderGrid();
});

const openCreateModal = (mode, id = null) => {
  state.createMode = mode;
  const inCanvasMode = mode === "canvas-create" || mode === "canvas-edit";
  createTitle.textContent =
    mode === "project-create" ? "创建新项目" : mode === "project-edit" ? "编辑项目" : mode === "canvas-create" ? "新建画布" : "重命名画布";
  nameLabel.textContent = inCanvasMode ? "画布名称" : "项目名称";
  confirmCreateTrigger.textContent = mode.includes("create") ? (inCanvasMode ? "创建画布" : "创建项目") : "保存";
  cancelCreateTrigger.textContent = mode.includes("create") ? "取消创建" : "取消";
  ratioSection.style.display = inCanvasMode ? "none" : "";
  styleSection.style.display = inCanvasMode ? "none" : "";

  if (mode === "project-edit") {
    projectNameInput.value = state.projects.find((project) => project.id === id)?.name || "";
    state.createTargetId = id;
  } else if (mode === "canvas-edit") {
    projectNameInput.value = currentProject()?.canvases.find((canvas) => canvas.id === id)?.name || "";
    state.createTargetId = id;
  } else {
    projectNameInput.value = "";
    state.createTargetId = null;
  }

  openModal(createModal);
};

const openDeleteModal = (ids) => {
  const itemLabel = state.currentView === "projects" ? "项目" : "画布";
  state.deleteTargetIds = ids;
  deleteMessage.textContent =
    ids.length > 1
      ? `选中的 ${ids.length} 个${itemLabel}将被永久删除且无法找回，是否确认删除？`
      : `${itemLabel}将被永久删除且无法找回，是否确认删除？`;
  openModal(deleteModal);
};

const openProjectModeModal = (projectId) => {
  state.projectModeTargetId = projectId;
  openModal(projectModeModal);
};

const openVideoPreview = (videoId) => {
  const video = state.videos.find((item) => item.id === videoId);
  if (!video || !videoPreviewContent) return;
  state.activeVideoId = video.id;
  videoPreviewContent.innerHTML = `
    <div class="video-preview-frame">
      ${
        video.videoSrc
          ? `<video src="${video.videoSrc}" poster="${video.cover}" controls autoplay muted playsinline></video>`
          : `<img src="${video.cover}" alt="${escapeHtml(video.title)}" />
             <div class="video-preview-fallback">
               <span>
                 <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14"><path d="M5.2 3.3v9.4L12 8 5.2 3.3Z" fill="currentColor"/></svg>
                 播放预览
               </span>
             </div>`
      }
    </div>
    <div class="video-preview-detail">
      <div class="video-preview-title-block">
        <h3>${escapeHtml(video.title)}</h3>
        <p>${escapeHtml(video.userName)} · ${escapeHtml(video.uploadedAt)}</p>
      </div>
      <span class="video-preview-stat">
        <img src="./assets/icons/heart.svg" alt="" />
        ${formatLikeCount(video.likes)}
      </span>
    </div>
  `;
  openModal(videoPreviewModal);
};

const resetPublishVideoDraft = () => {
  state.publishVideoMode = "create";
  state.publishVideoEditTargetId = null;
  state.publishDraftCover = "";
  state.publishDraftVideo = "";
  state.publishDraftCoverName = "";
  state.publishDraftVideoName = "";
  if (publishVideoNameInput) publishVideoNameInput.value = "";
  if (publishCoverInput) publishCoverInput.value = "";
  if (publishVideoInput) publishVideoInput.value = "";
  if (publishCoverPreview) {
    publishCoverPreview.innerHTML = `<img src="./assets/icons/upload.svg" alt="" />`;
  }
  if (publishCoverName) publishCoverName.textContent = "支持图片格式";
  if (publishVideoFileName) publishVideoFileName.textContent = "支持视频格式";
  if (document.getElementById("publish-video-title")) document.getElementById("publish-video-title").textContent = "发布视频";
  if (confirmPublishVideoTrigger) confirmPublishVideoTrigger.textContent = "发布";
};

const openPublishVideoModal = () => {
  resetPublishVideoDraft();
  openModal(publishVideoModal);
};

const openEditVideoModal = (videoId) => {
  const video = state.videos.find((item) => item.id === videoId);
  if (!video) return;
  resetPublishVideoDraft();
  state.publishVideoMode = "edit";
  state.publishVideoEditTargetId = video.id;
  state.publishDraftCover = video.cover;
  state.publishDraftVideo = video.videoSrc || EXISTING_VIDEO_PLACEHOLDER;
  state.publishDraftCoverName = "当前封面";
  state.publishDraftVideoName = video.videoFileName || "当前视频";
  if (document.getElementById("publish-video-title")) document.getElementById("publish-video-title").textContent = "编辑视频";
  if (confirmPublishVideoTrigger) confirmPublishVideoTrigger.textContent = "保存";
  if (publishVideoNameInput) publishVideoNameInput.value = video.title;
  if (publishCoverPreview) publishCoverPreview.innerHTML = `<img src="${video.cover}" alt="" />`;
  if (publishCoverName) publishCoverName.textContent = state.publishDraftCoverName;
  if (publishVideoFileName) publishVideoFileName.textContent = state.publishDraftVideoName;
  openModal(publishVideoModal);
};

const enterProjectMode = (projectId, mode) => {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  if (mode === "workflow") {
    state.currentView = "workflow-home";
    state.currentProjectId = project.id;
    state.currentCanvasId = null;
    state.batchMode = false;
    state.selectedIds.clear();
    state.activeMenuId = null;
    searchInput.value = "";
    closeModal(projectModeModal);
    renderGrid();
    return;
  }
  if (mode === "infinite-canvas") {
    state.currentView = "canvases";
    state.currentProjectId = project.id;
    state.currentCanvasId = null;
    state.batchMode = false;
    state.selectedIds.clear();
    state.activeMenuId = null;
    searchInput.value = "";
    closeModal(projectModeModal);
    renderGrid();
    return;
  }
};

const mutateCurrentCollection = (updater) => {
  if (state.currentView === "projects") {
    state.projects = updater([...state.projects]);
    return;
  }
  const project = currentProject();
  if (!project) return;
  project.canvases = updater([...project.canvases]);
};

const removeItems = (ids) => {
  mutateCurrentCollection((items) => items.filter((item) => !ids.includes(item.id)));
  ids.forEach((id) => state.selectedIds.delete(id));
  state.activeMenuId = null;
  renderGrid();
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

restoreNavigationState();
renderStyleCards();
renderGrid();
updateActivityCountdown();
setInterval(updateActivityCountdown, 1000);
setTimeout(openLimitedActivityModal, 350);

sortTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  sortMenu.classList.toggle("is-open");
  sortTrigger.setAttribute("aria-expanded", String(sortMenu.classList.contains("is-open")));
});

sortMenu.addEventListener("click", (event) => {
  const target = event.target.closest("[data-sort]");
  if (!target) return;
  state.sortKey = target.dataset.sort;
  sortMenu.classList.remove("is-open");
  renderGrid();
});

searchInput.addEventListener("input", renderGrid);

batchTrigger.addEventListener("click", () => {
  state.batchMode = !state.batchMode;
  state.activeMenuId = null;
  if (!state.batchMode) state.selectedIds.clear();
  renderGrid();
});

selectAllTrigger.addEventListener("click", () => {
  const ids = currentItems().map((item) => item.id);
  const allSelected = ids.every((id) => state.selectedIds.has(id));
  if (allSelected) ids.forEach((id) => state.selectedIds.delete(id));
  else ids.forEach((id) => state.selectedIds.add(id));
  renderGrid();
});

batchDeleteTrigger.addEventListener("click", () => {
  const ids = [...state.selectedIds];
  if (ids.length) openDeleteModal(ids);
});

backTrigger.addEventListener("click", () => {
  state.currentView = "projects";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  searchInput.value = "";
  renderGrid();
});

sidebarBackTrigger.addEventListener("click", () => {
  state.currentView = "projects";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  renderGrid();
});

workflowBackTrigger?.addEventListener("click", () => {
  state.currentView = "projects";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  renderGrid();
});

workflowModeSwitchTrigger?.addEventListener("click", () => {
  if (state.currentProjectId) openProjectModeModal(state.currentProjectId);
});

workflowHistoryTrigger?.addEventListener("click", () => {
  window.alert("暂无构建历史");
});

const handleWorkflowAction = (workflowAction, event) => {
  const action = workflowAction?.dataset.workflowAction;
  if (!action) return false;
  if (action === "open-generate-modal" || action === "edit-frame") {
    event.preventDefault();
    event.stopPropagation();
    if (action === "edit-frame") {
      state.workflowEditFrameIndex = Number(workflowAction.dataset.workflowFrameIndex || 0);
      const { scene } = currentWorkflowStudioSelection();
      const frame = scene.keyframes[state.workflowEditFrameIndex];
      state.workflowEditVersionIndex = 0;
      state.workflowEditTool = null;
      state.workflowEditGeneratedVersions = [];
      state.workflowEditFinalizedVersionKey = frame?.finalizedVersionKey || "original";
      state.workflowEditDeletedVersionKeys = [];
      state.workflowEditDeleteVersionKey = null;
      state.workflowGenerateMode = null;
      state.workflowPreviewFrameIndex = null;
      state.workflowDetailFrameIndex = null;
      renderWorkflowStudio();
      return true;
    }
    state.workflowGenerateMode = workflowAction.dataset.generateMode === "scene" ? "scene" : "shot";
    state.workflowPreviewFrameIndex = null;
    state.workflowDetailFrameIndex = null;
    state.workflowEditFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "open-frame-detail") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDetailFrameIndex = Number(workflowAction.dataset.workflowFrameIndex || 0);
    state.workflowPreviewFrameIndex = null;
    state.workflowGenerateMode = null;
    state.workflowEditFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "delete-keyframe") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteFrameIndex = Number(workflowAction.dataset.workflowFrameIndex || 0);
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-keyframe-delete") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-keyframe-delete") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    if (state.workflowDeleteFrameIndex !== null) {
      scene.keyframes.splice(state.workflowDeleteFrameIndex, 1);
    }
    state.workflowDeleteFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "clear-keyframes") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowClearConfirmOpen = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-keyframe-clear") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowClearConfirmOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-keyframe-clear") {
    event.preventDefault();
    event.stopPropagation();
    currentWorkflowStudioSelection().scene.keyframes = [];
    state.workflowClearConfirmOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "compose-keyframes") {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  if (action === "upload-keyframe") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceModalOpen = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-timeline") {
    event.preventDefault();
    event.stopPropagation();
    const panel = workflowAction.closest(".workflow-timeline-panel");
    panel?.classList.toggle("is-collapsed");
    workflowAction.textContent = panel?.classList.contains("is-collapsed") ? "展开" : "收起";
    return true;
  }
  if (action === "open-timeline-preview") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowPreviewModalOpen = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "export-timeline") {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  if (action === "close-timeline-preview") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowPreviewModalOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-preview-player") {
    event.preventDefault();
    event.stopPropagation();
    const modal = workflowAction.closest(".workflow-timeline-preview-dialog");
    const playing = !modal?.classList.contains("is-playing");
    modal?.classList.toggle("is-playing", playing);
    modal?.querySelectorAll(".workflow-preview-screen").forEach((screen) => screen.classList.toggle("is-playing", playing));
    workflowAction.innerHTML = playing ? workflowPlayerIcon.pause : workflowPlayerIcon.play;
    workflowAction.setAttribute("aria-label", playing ? "暂停" : "播放");
    return true;
  }
  if (action === "toggle-track") {
    event.preventDefault();
    event.stopPropagation();
    const panel = workflowAction.closest(".workflow-timeline-panel");
    const row = panel?.querySelector(`[data-track-row="${workflowAction.dataset.track}"]`);
    row?.classList.toggle("is-hidden-track");
    workflowAction.classList.toggle("is-muted", Boolean(row?.classList.contains("is-hidden-track")));
    return true;
  }
  if (action === "trim-selected-at-playhead") {
    event.preventDefault();
    event.stopPropagation();
    const panel = workflowAction.closest(".workflow-timeline-panel");
    const selectedClip = panel?.querySelector(".workflow-clip.is-selected");
    const playhead = panel?.querySelector(".workflow-playhead");
    if (selectedClip && playhead) {
      const clipLeft = parseFloat(selectedClip.style.left || "0");
      const playheadLeft = parseFloat(playhead.style.left || "0");
      const nextWidth = Math.max(4, playheadLeft - clipLeft);
      selectedClip.style.width = `${nextWidth}%`;
    }
    return true;
  }
  if (action === "delete-context-clip") {
    event.preventDefault();
    event.stopPropagation();
    workflowHomeView?.querySelector(".workflow-clip.is-context-target")?.remove();
    workflowGenerateModalRoot?.querySelector(".workflow-clip-context-menu")?.remove();
    return true;
  }
  if (action === "open-frame-preview") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowPreviewFrameIndex = Number(workflowAction.dataset.workflowFrameIndex || 0);
    state.workflowDetailFrameIndex = null;
    state.workflowGenerateMode = null;
    state.workflowEditFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-generate-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowGenerateMode = null;
    state.workflowReferenceModalOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "generate-keyframe") {
    event.preventDefault();
    event.stopPropagation();
    const { scene, shot } = currentWorkflowStudioSelection();
    const isSceneMode = state.workflowGenerateMode === "scene";
    const pendingId = `pending-${Date.now()}`;
    const pendingFrame = {
      id: pendingId,
      title: isSceneMode ? "整场多宫格" : `KF#${scene.keyframes.length + 1}`,
      meta: isSceneMode ? `${scene.shots.length} 镜 · 生成中` : `${shot.duration} · 生成中`,
      image: "",
      grid: isSceneMode,
      pending: true,
      resultCount: 1,
      assignedShotIndex: isSceneMode ? null : state.workflowShotIndex,
    };
    scene.keyframes.push(pendingFrame);
    state.workflowGenerateMode = null;
    state.workflowReferenceModalOpen = false;
    renderWorkflowStudio();
    window.setTimeout(() => {
      const targetFrame = scene.keyframes.find((frame) => frame.id === pendingId);
      if (!targetFrame) return;
      const generatedImage = isSceneMode ? "./assets/images/canvas-node-preview.png" : "./assets/images/canvas-chase-sequence.jpg";
      targetFrame.image = generatedImage;
      targetFrame.pending = false;
      targetFrame.meta = isSceneMode ? `${scene.shots.length} 镜 · 1 张` : `${shot.duration}`;
      renderWorkflowStudio();
    }, 1200);
    return true;
  }
  if (action === "open-reference-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceModalOpen = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-reference-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceModalOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-reference-source") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceSource = workflowAction.dataset.referenceSource || "local";
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-reference-category") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceCategory = workflowAction.dataset.referenceCategory || "角色";
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-frame-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowPreviewFrameIndex = null;
    state.workflowDetailFrameIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-edit-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditFrameIndex = null;
    state.workflowEditVersionIndex = 0;
    state.workflowEditTool = null;
    state.workflowEditGeneratedVersions = [];
    state.workflowEditFinalizedVersionKey = "original";
    state.workflowEditDeletedVersionKeys = [];
    state.workflowEditDeleteVersionKey = null;
    state.workflowEditCostConfirmTool = null;
    state.workflowEditSaveMenuOpen = false;
    state.workflowReferenceModalOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-split-editor") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditTool = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-crop-editor") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditTool = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-redraw-editor") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditTool = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "select-edit-version") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditVersionIndex = Number(workflowAction.dataset.workflowEditVersionIndex || 0);
    state.workflowEditSaveMenuOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "finalize-edit-version") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const frame = scene.keyframes[state.workflowEditFrameIndex];
    const versionKey = workflowAction.dataset.workflowVersionKey;
    if (frame && versionKey) {
      frame.originalImage ||= frame.image;
      frame.image = workflowAction.dataset.workflowVersionImage || frame.image;
      frame.finalizedVersionKey = versionKey;
      state.workflowEditFinalizedVersionKey = versionKey;
    }
    renderWorkflowStudio();
    return true;
  }
  if (action === "select-edit-tool") {
    event.preventDefault();
    event.stopPropagation();
    const toolKey = workflowAction.dataset.workflowEditTool || null;
    if (toolKey === "matting" || toolKey === "wash") {
      state.workflowEditCostConfirmTool = toolKey;
      state.workflowEditTool = toolKey;
      renderWorkflowStudio();
      return true;
    }
    state.workflowEditTool = toolKey;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-edit-cost-confirm") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditCostConfirmTool = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-edit-cost") {
    event.preventDefault();
    event.stopPropagation();
    const toolKey = state.workflowEditCostConfirmTool;
    const sameTypeCount = state.workflowEditGeneratedVersions.filter((item) => item.tool === toolKey).length;
    const label = toolKey === "matting" ? `抠图结果 ${sameTypeCount + 1}` : `洗图结果 ${sameTypeCount + 3}`;
    state.workflowEditGeneratedVersions.push({
      label,
      image: "",
      pending: true,
      tool: toolKey,
    });
    state.workflowEditVersionIndex = 3 + state.workflowEditGeneratedVersions.length - 1;
    state.workflowEditTool = toolKey;
    state.workflowEditCostConfirmTool = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "delete-version") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditDeleteVersionKey = workflowAction.dataset.workflowVersionKey || null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-edit-version-delete") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditDeleteVersionKey = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-edit-version-delete") {
    event.preventDefault();
    event.stopPropagation();
    const versionKey = state.workflowEditDeleteVersionKey;
    if (versionKey && versionKey !== "original" && !state.workflowEditDeletedVersionKeys.includes(versionKey)) {
      state.workflowEditDeletedVersionKeys.push(versionKey);
    }
    state.workflowEditDeleteVersionKey = null;
    state.workflowEditVersionIndex = 0;
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-edit-save-menu") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditSaveMenuOpen = !state.workflowEditSaveMenuOpen;
    renderWorkflowStudio();
    return true;
  }
  if (action === "save-edit-version-to") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowEditSaveMenuOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "download" || action === "add-keyframe") {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  return false;
};

document.addEventListener(
  "click",
  (event) => {
    if (!workflowHomeView) return;
    const workflowAction = event.target.closest?.("[data-workflow-action]");
    if (!workflowAction || !workflowHomeView?.contains(workflowAction)) return;
    handleWorkflowAction(workflowAction, event);
  },
  true,
);

workflowHomeView?.addEventListener("click", (event) => {
  const workflowAction = event.target.closest("[data-workflow-action]");
  if (handleWorkflowAction(workflowAction, event)) return;
  workflowGenerateModalRoot?.querySelector(".workflow-clip-context-menu")?.remove();
  workflowHomeView.querySelectorAll(".workflow-clip.is-context-target").forEach((item) => item.classList.remove("is-context-target"));
  const timelineClip = event.target.closest(".workflow-clip");
  if (timelineClip) {
    workflowHomeView.querySelectorAll(".workflow-clip.is-selected").forEach((item) => item.classList.remove("is-selected"));
    timelineClip.classList.add("is-selected");
    return;
  }
  if (workflowAction?.dataset.workflowAction === "toggle-sidebar") {
    workflowHomeView.classList.toggle("is-sidebar-collapsed");
    return;
  }
  if (workflowAction?.dataset.workflowAction === "remove-reference") {
    event.preventDefault();
    event.stopPropagation();
    workflowAction.closest(".workflow-reference-thumb")?.remove();
    return;
  }

  const frameCard = event.target.closest(".workflow-keyframe-card");
  if (event.target.closest(".workflow-keyframe-name")) return;
  if (frameCard && !frameCard.classList.contains("is-pending") && !event.target.closest("button")) {
    state.workflowPreviewFrameIndex = Number(frameCard.dataset.workflowFrameIndex || 0);
    state.workflowDetailFrameIndex = null;
    renderWorkflowStudio();
    return;
  }

  const shotItem = event.target.closest(".workflow-shot-table button");
  if (shotItem) {
    state.workflowShotIndex = Number(shotItem.dataset.workflowShotIndex || 0);
    renderWorkflowStudio();
    return;
  }

  const navItem = event.target.closest(".workflow-nav-item");
  if (!navItem) return;
  workflowHomeView.querySelectorAll(".workflow-nav-item").forEach((item) => item.classList.remove("active"));
  navItem.classList.add("active");
});

workflowHomeView?.addEventListener("dblclick", (event) => {
  const name = event.target.closest(".workflow-keyframe-name");
  if (!name) return;
  event.preventDefault();
  event.stopPropagation();
  state.workflowRenamingFrameIndex = Number(name.dataset.workflowFrameIndex || 0);
  renderWorkflowStudio();
  window.requestAnimationFrame(() => {
    const input = workflowHomeView.querySelector("[data-workflow-keyframe-name-input]");
    input?.focus();
    input?.select();
  });
});

const saveWorkflowKeyframeName = (input) => {
  const frameIndex = Number(input.dataset.workflowFrameIndex || 0);
  const { scene } = currentWorkflowStudioSelection();
  const frame = scene.keyframes[frameIndex];
  if (!frame) return;
  const nextName = input.value.trim();
  if (nextName) frame.name = nextName;
  else delete frame.name;
  state.workflowRenamingFrameIndex = null;
  renderWorkflowStudio();
};

workflowHomeView?.addEventListener("keydown", (event) => {
  const input = event.target.closest("[data-workflow-keyframe-name-input]");
  if (!input) return;
  if (event.key === "Enter") {
    event.preventDefault();
    saveWorkflowKeyframeName(input);
  }
  if (event.key === "Escape") {
    event.preventDefault();
    state.workflowRenamingFrameIndex = null;
    renderWorkflowStudio();
  }
});

workflowHomeView?.addEventListener("focusout", (event) => {
  const input = event.target.closest("[data-workflow-keyframe-name-input]");
  if (input) saveWorkflowKeyframeName(input);
});

workflowHomeView?.addEventListener("contextmenu", (event) => {
  const timelineClip = event.target.closest(".workflow-clip");
  if (!timelineClip) return;
  event.preventDefault();
  workflowHomeView.querySelectorAll(".workflow-clip.is-context-target").forEach((item) => item.classList.remove("is-context-target"));
  timelineClip.classList.add("is-context-target", "is-selected");
  workflowGenerateModalRoot?.querySelector(".workflow-clip-context-menu")?.remove();
  workflowGenerateModalRoot?.insertAdjacentHTML(
    "beforeend",
    `<div class="workflow-clip-context-menu" style="left:${event.clientX}px; top:${event.clientY}px;"><button type="button" data-workflow-action="delete-context-clip">删除</button></div>`,
  );
});

workflowHomeView?.addEventListener("pointerdown", (event) => {
  const panelResizer = event.target.closest(".workflow-panel-resizer");
  if (panelResizer) {
    const grid = panelResizer.closest(".workflow-studio-grid");
    const scriptPanel = grid?.querySelector(".workflow-script-panel");
    const shotPanel = grid?.querySelector(".workflow-shot-panel");
    if (!grid || !scriptPanel || !shotPanel) return;
    event.preventDefault();
    panelResizer.classList.add("is-dragging");
    const startX = event.clientX;
    const startScriptWidth = scriptPanel.getBoundingClientRect().width;
    const startShotWidth = shotPanel.getBoundingClientRect().width;
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const onMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX;
      if (panelResizer.dataset.resizePanel === "script") {
        grid.style.setProperty("--workflow-script-width", `${clamp(startScriptWidth + delta, 200, 420)}px`);
      } else {
        grid.style.setProperty("--workflow-shot-width", `${clamp(startShotWidth + delta, 260, 560)}px`);
      }
    };
    const onUp = () => {
      panelResizer.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return;
  }

  const resizeHandle = event.target.closest(".clip-resize");
  if (!resizeHandle) return;
  const clip = resizeHandle.closest(".workflow-clip");
  const lane = clip?.closest(".workflow-track-lane");
  if (!clip || !lane) return;
  event.preventDefault();
  event.stopPropagation();
  const edge = resizeHandle.dataset.resizeEdge;
  const laneRect = lane.getBoundingClientRect();
  const startX = event.clientX;
  const startLeft = parseFloat(clip.style.left || "0");
  const startWidth = parseFloat(clip.style.width || "10");
  const onMove = (moveEvent) => {
    const deltaPercent = ((moveEvent.clientX - startX) / laneRect.width) * 100;
    if (edge === "right") {
      clip.style.width = `${Math.max(4, Math.min(100 - startLeft, startWidth + deltaPercent))}%`;
    } else {
      const nextLeft = Math.max(0, Math.min(startLeft + startWidth - 4, startLeft + deltaPercent));
      clip.style.left = `${nextLeft}%`;
      clip.style.width = `${Math.max(4, startWidth + startLeft - nextLeft)}%`;
    }
  };
  const onUp = () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
  };
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
});

workflowHomeView?.addEventListener("change", (event) => {
  if (event.target === workflowEpisodeSelect) {
    state.workflowEpisodeIndex = Number(event.target.value || 0);
    state.workflowSceneIndex = 0;
    state.workflowShotIndex = 0;
    state.workflowKeyframeFilter = "all";
    renderWorkflowStudio();
    return;
  }
  if (event.target === workflowSceneSelect) {
    state.workflowSceneIndex = Number(event.target.value || 0);
    state.workflowShotIndex = 0;
    state.workflowKeyframeFilter = "all";
    renderWorkflowStudio();
    return;
  }
  if (event.target?.dataset?.workflowAction === "filter-keyframes") {
    state.workflowKeyframeFilter = event.target.value || "all";
    renderWorkflowStudio();
  }
});

workflowHomeView?.addEventListener("dragstart", (event) => {
  const clip = event.target.closest(".workflow-clip");
  if (clip) {
    clip.classList.add("is-dragging");
    event.dataTransfer?.setData("text/plain", "timeline-clip");
    return;
  }
  const keyframe = event.target.closest(".workflow-keyframe-card");
  if (!keyframe) return;
  event.dataTransfer?.setData("text/plain", keyframe.querySelector("strong")?.textContent || "关键帧");
});

workflowHomeView?.addEventListener("dragend", () => {
  workflowHomeView.querySelectorAll(".workflow-clip.is-dragging").forEach((item) => item.classList.remove("is-dragging"));
});

workflowHomeView?.addEventListener("dragover", (event) => {
  const timeline = event.target.closest(".workflow-timeline");
  if (!timeline) return;
  event.preventDefault();
  timeline.classList.add("is-drop-target");
});

workflowHomeView?.addEventListener("dragleave", (event) => {
  if (!event.target.closest(".workflow-timeline")) {
    workflowHomeView.querySelector(".workflow-timeline")?.classList.remove("is-drop-target");
  }
});

workflowHomeView?.addEventListener("drop", (event) => {
  const timeline = event.target.closest(".workflow-timeline");
  if (!timeline) return;
  event.preventDefault();
  const draggingClip = workflowHomeView.querySelector(".workflow-clip.is-dragging");
  const targetLane = event.target.closest(".workflow-track-lane");
  if (draggingClip && targetLane && draggingClip.closest(".workflow-track-lane") === targetLane) {
    const laneRect = targetLane.getBoundingClientRect();
    const nextLeft = Math.max(0, Math.min(92, ((event.clientX - laneRect.left) / laneRect.width) * 100));
    draggingClip.style.left = `${nextLeft}%`;
    draggingClip.classList.remove("is-dragging");
    timeline.classList.remove("is-drop-target");
    return;
  }
  draggingClip?.classList.remove("is-dragging");
  timeline.classList.remove("is-drop-target");
  timeline.classList.add("is-updated");
  window.setTimeout(() => timeline.classList.remove("is-updated"), 900);
});

sidebar?.addEventListener("click", (event) => {
  const openModeModal = event.target.closest("[data-open-mode-modal]");
  if (openModeModal) {
    if (state.currentProjectId) openProjectModeModal(state.currentProjectId);
    return;
  }
  const modeSwitch = event.target.closest("[data-mode-switch]");
  if (!modeSwitch || modeSwitch.disabled) return;
  const mode = modeSwitch.dataset.modeSwitch;
  if (mode === "infinite-canvas" || mode === "workflow") {
    renderGrid();
  }
});

topbarNav?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-nav-target]");
  if (!target) return;
  const view = target.dataset.navTarget;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  state.creatorVideoMenuId = null;
  state.avatarOpen = false;
  state.noticeOpen = false;
  if (view === "home") {
    state.currentView = "home";
    state.currentProjectId = null;
    state.currentCanvasId = null;
  } else if (view === "projects") {
    state.currentView = "projects";
    state.currentProjectId = null;
    state.currentCanvasId = null;
  }
  renderGrid();
});

brandHomeTrigger?.addEventListener("click", () => {
  document.querySelectorAll(".modal-backdrop.is-open").forEach((modal) => closeModal(modal));
  closeCanvasPopups();
  state.currentView = "home";
  state.currentProjectId = null;
  state.currentCanvasId = null;
  state.batchMode = false;
  state.selectedIds.clear();
  state.activeMenuId = null;
  state.creatorVideoMenuId = null;
  state.avatarOpen = false;
  state.noticeOpen = false;
  renderGrid();
});

homeView?.addEventListener("click", (event) => {
  const promoCard = event.target.closest("[data-promo-card]");
  if (promoCard) {
    homeView.querySelectorAll("[data-promo-card]").forEach((card) => {
      const isActive = card === promoCard;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-expanded", String(isActive));
    });
    if (!event.target.closest("[data-home-action]")) return;
  }

  const videoSort = event.target.closest("[data-video-sort]");
  if (videoSort) {
    state.videoSortKey = videoSort.dataset.videoSort;
    renderHomeVideos();
    return;
  }

  const videoCard = event.target.closest("[data-video-id]");
  if (videoCard) {
    openVideoPreview(videoCard.dataset.videoId);
    return;
  }

  const navTarget = event.target.closest("[data-nav-target]");
  if (navTarget) {
    if (navTarget.dataset.navTarget === "projects") {
      state.currentView = "projects";
      state.currentProjectId = null;
      state.currentCanvasId = null;
      renderGrid();
    }
    return;
  }
  const homeAction = event.target.closest("[data-home-action]");
  if (!homeAction) return;
  if (homeAction.dataset.homeAction === "open-latest-canvas") {
    openCreateModal("project-create");
  }
});

creatorVideoList?.addEventListener("click", (event) => {
  const menuTrigger = event.target.closest("[data-creator-video-menu]");
  if (menuTrigger) {
    const videoId = menuTrigger.dataset.creatorVideoMenu;
    state.creatorVideoMenuId = state.creatorVideoMenuId === videoId ? null : videoId;
    renderGrid();
    return;
  }

  const previewTrigger = event.target.closest("[data-creator-video-preview]");
  if (previewTrigger) {
    state.creatorVideoMenuId = null;
    openVideoPreview(previewTrigger.dataset.creatorVideoPreview);
    renderGrid();
    return;
  }

  const action = event.target.closest("[data-creator-video-action]");
  if (!action) return;
  const videoId = action.dataset.videoId;
  const video = state.videos.find((item) => item.id === videoId);
  if (!video) return;
  state.creatorVideoMenuId = null;

  if (action.dataset.creatorVideoAction === "edit") {
    openEditVideoModal(videoId);
    return;
  }

  if (action.dataset.creatorVideoAction === "delete") {
    state.creatorVideoDeleteTargetId = videoId;
    deleteMessage.textContent = "视频将被删除且无法找回，是否确认删除？";
    openModal(deleteModal);
    renderGrid();
  }
});

reviewVideoList?.addEventListener("click", (event) => {
  const previewTrigger = event.target.closest("[data-review-video-preview]");
  if (previewTrigger) {
    openVideoPreview(previewTrigger.dataset.reviewVideoPreview);
    return;
  }

  const action = event.target.closest("[data-review-action]");
  if (!action) return;
  const videoId = action.dataset.videoId;
  const video = state.videos.find((item) => item.id === videoId);
  if (!video) return;

  if (action.dataset.reviewAction === "review") {
    state.reviewVideoTargetId = videoId;
    if (reviewVideoName) reviewVideoName.textContent = `审核视频：${video.title}`;
    openModal(reviewVideoModal);
    return;
  }

  if (action.dataset.reviewAction === "shelf") {
    state.shelfVideoTargetId = videoId;
    deleteMessage.textContent = video.isShelfOff
      ? "视频将重新上架并展示在创作中心首页，是否确认上架？"
      : "视频将从创作中心首页下架，是否确认下架？";
    openModal(deleteModal);
  }
});

reviewPassTrigger?.addEventListener("click", () => {
  const video = state.videos.find((item) => item.id === state.reviewVideoTargetId);
  if (!video) return;
  const now = new Date();
  video.status = "published";
  video.isShelfOff = false;
  video.publishedAt = formatPublishTime(now);
  video.publishedAtMs = now.getTime();
  saveVideosState();
  closeModal(reviewVideoModal);
  renderGrid();
});

reviewFailTrigger?.addEventListener("click", () => {
  const video = state.videos.find((item) => item.id === state.reviewVideoTargetId);
  if (!video) return;
  video.status = "failed";
  video.isShelfOff = false;
  saveVideosState();
  closeModal(reviewVideoModal);
  renderGrid();
});

publishVideoTrigger?.addEventListener("click", openPublishVideoModal);

publishCoverTrigger?.addEventListener("click", () => publishCoverInput?.click());
publishVideoFileTrigger?.addEventListener("click", () => publishVideoInput?.click());

publishCoverInput?.addEventListener("change", async () => {
  const file = publishCoverInput.files?.[0];
  if (!file) return;
  state.publishDraftCover = await readFileAsDataUrl(file);
  state.publishDraftCoverName = file.name;
  if (publishCoverPreview) {
    publishCoverPreview.innerHTML = `<img src="${state.publishDraftCover}" alt="" />`;
  }
  if (publishCoverName) publishCoverName.textContent = file.name;
});

publishVideoInput?.addEventListener("change", () => {
  const file = publishVideoInput.files?.[0];
  if (!file) return;
  state.publishDraftVideo = URL.createObjectURL(file);
  state.publishDraftVideoName = file.name;
  if (publishVideoFileName) publishVideoFileName.textContent = file.name;
});

confirmPublishVideoTrigger?.addEventListener("click", () => {
  const title = publishVideoNameInput?.value.trim();
  if (!title) {
    window.alert("请设置视频名称");
    return;
  }
  if (!state.publishDraftCover) {
    window.alert("请上传视频封面");
    return;
  }
  if (!state.publishDraftVideo) {
    window.alert("请上传视频内容");
    return;
  }
  if (state.publishVideoMode === "edit") {
    const video = state.videos.find((item) => item.id === state.publishVideoEditTargetId);
    if (!video) return;
    video.title = title;
    video.cover = state.publishDraftCover;
    if (state.publishDraftVideo !== EXISTING_VIDEO_PLACEHOLDER) {
      video.videoSrc = state.publishDraftVideo;
    }
    video.videoFileName = state.publishDraftVideoName;
    saveVideosState();
    closeModal(publishVideoModal);
    renderGrid();
    return;
  }
  const now = new Date();
  state.videos.unshift(
    normalizeVideo({
      id: `v${Date.now()}`,
      title,
      uploadedAt: formatPublishTime(now),
      uploadedAtMs: now.getTime(),
      userName: "Sunny",
      avatar: "./assets/images/avatar-sunny.jpg",
      cover: state.publishDraftCover,
      likes: 0,
      status: "pending",
      isShelfOff: false,
      publishedAt: "",
      publishedAtMs: null,
      videoSrc: state.publishDraftVideo,
      videoFileName: state.publishDraftVideoName,
    }),
  );
  saveVideosState();
  closeModal(publishVideoModal);
  renderGrid();
  openModal(publishSuccessModal);
});

grid.addEventListener("click", (event) => {
  const createBlank = event.target.closest("#empty-create-trigger");
  if (createBlank) {
    openCreateModal(state.currentView === "projects" ? "project-create" : "canvas-create");
    return;
  }

  const check = event.target.closest("[data-card-check]");
  if (check) {
    const id = check.dataset.cardCheck;
    if (state.selectedIds.has(id)) state.selectedIds.delete(id);
    else state.selectedIds.add(id);
    renderGrid();
    return;
  }

  const trigger = event.target.closest("[data-card-trigger]");
  if (trigger) {
    state.activeMenuId = state.activeMenuId === trigger.dataset.cardTrigger ? null : trigger.dataset.cardTrigger;
    renderGrid();
    return;
  }

  const action = event.target.closest("[data-card-action]");
  if (action) {
    const itemId = action.dataset.itemId;
    const kind = action.dataset.cardAction;
    state.activeMenuId = null;
    if (kind === "upload") {
      state.uploadTarget = itemId;
      coverUploadInput.click();
    }
    if (kind === "edit") {
      openCreateModal(state.currentView === "projects" ? "project-edit" : "canvas-edit", itemId);
    }
    if (kind === "delete") {
      openDeleteModal([itemId]);
    }
    renderGrid();
    return;
  }

  const card = event.target.closest("[data-card-id]");
  if (card && !state.batchMode) {
    if (state.currentView === "projects") {
      openProjectModeModal(card.dataset.cardId);
      return;
    }
    if (state.currentView === "canvases") {
      state.currentView = "canvas-detail";
      state.currentCanvasId = card.dataset.cardId;
      state.selectedIds.clear();
      state.activeMenuId = null;
      renderGrid();
    }
  }
});

createTrigger.addEventListener("click", () => {
  openCreateModal(state.currentView === "projects" ? "project-create" : "canvas-create");
});

confirmCreateTrigger.addEventListener("click", () => {
  const name =
    projectNameInput.value.trim() ||
    (state.createMode === "project-create" || state.createMode === "project-edit"
      ? `新项目 ${state.projects.length + 1}`
      : `新画布 ${Date.now() % 1000}`);

  if (state.createMode === "project-create") {
    const nextProject = {
      id: `p${Date.now()}`,
      name,
      timestamp: DEFAULT_TIMESTAMP,
      ratio: `${state.selectedRatio} ${state.selectedRatio === "16:9" ? "横屏" : state.selectedRatio === "9:16" ? "竖屏" : "正方形"}`,
      style: styleNameMap[state.selectedStyle] || "写实主义",
      cover: DEFAULT_COVER,
      canvases: [],
    };
    state.projects.unshift(nextProject);
    state.currentProjectId = nextProject.id;
    closeModal(createModal);
    openProjectModeModal(nextProject.id);
    renderGrid();
    return;
  } else if (state.createMode === "project-edit") {
    const project = state.projects.find((item) => item.id === state.createTargetId);
    if (project) project.name = name;
  } else if (state.createMode === "canvas-create") {
    const project = currentProject();
    if (project) {
      project.canvases.unshift(
        normalizeCanvas({
          id: `c${Date.now()}`,
          name,
          timestamp: DEFAULT_TIMESTAMP,
          cover: DEFAULT_COVER,
        }),
      );
    }
  } else if (state.createMode === "canvas-edit") {
    const canvas = currentProject()?.canvases.find((item) => item.id === state.createTargetId);
    if (canvas) canvas.name = name;
  }

  closeModal(createModal);
  renderGrid();
});

projectModeModal?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-project-mode]");
  if (!target || !state.projectModeTargetId) return;
  enterProjectMode(state.projectModeTargetId, target.dataset.projectMode);
});

confirmDeleteTrigger.addEventListener("click", () => {
  if (state.shelfVideoTargetId) {
    const video = state.videos.find((item) => item.id === state.shelfVideoTargetId);
    if (video) {
      video.isShelfOff = !video.isShelfOff;
      saveVideosState();
    }
    state.shelfVideoTargetId = null;
    closeModal(deleteModal);
    renderGrid();
    return;
  }
  if (state.creatorVideoDeleteTargetId) {
    state.videos = state.videos.filter((item) => item.id !== state.creatorVideoDeleteTargetId);
    saveVideosState();
    state.creatorVideoDeleteTargetId = null;
    closeModal(deleteModal);
    renderGrid();
    return;
  }
  removeItems(state.deleteTargetIds);
  closeModal(deleteModal);
  state.deleteTargetIds = [];
});

coverUploadInput.addEventListener("change", async () => {
  const file = coverUploadInput.files?.[0];
  if (!file || !state.uploadTarget) return;
  const dataUrl = await readFileAsDataUrl(file);
  mutateCurrentCollection((items) =>
    items.map((item) => (item.id === state.uploadTarget ? { ...item, cover: dataUrl } : item)),
  );
  state.uploadTarget = null;
  coverUploadInput.value = "";
  renderGrid();
});

creatorCoverUploadInput?.addEventListener("change", async () => {
  const file = creatorCoverUploadInput.files?.[0];
  if (!file || !state.creatorCoverTargetId) return;
  const dataUrl = await readFileAsDataUrl(file);
  const video = state.videos.find((item) => item.id === state.creatorCoverTargetId);
  if (video) {
    video.cover = dataUrl;
    saveVideosState();
  }
  state.creatorCoverTargetId = null;
  creatorCoverUploadInput.value = "";
  renderGrid();
});

nodeImageUploadInput?.addEventListener("change", async () => {
  const file = nodeImageUploadInput.files?.[0];
  if (!file) return;
  const dataUrl = await readFileAsDataUrl(file);
  const targetNode = findNodeById(state.uploadNodeTarget);
  if (targetNode) {
    targetNode.image = dataUrl;
    state.uploadNodeTarget = null;
    nodeImageUploadInput.value = "";
    saveProjectsState();
    renderCanvasDetail();
    return;
  }
  if (state.canvasAddPanelOpen) {
    createNodeAtViewportCenter(dataUrl);
    state.uploadNodeTarget = null;
    nodeImageUploadInput.value = "";
    return;
  }
  nodeImageUploadInput.value = "";
});

const selectNode = (nodeId) => {
  const canvas = currentCanvas();
  if (!canvas) return;
  canvas.selectedNodeId = nodeId;
  state.canvasContextMenu = null;
  if (state.cameraControlNodeId && state.cameraControlNodeId !== nodeId) {
    state.cameraControlNodeId = null;
    state.cameraControlDraft = null;
  }
  renderCanvasDetail();
};

const deleteNode = (nodeId) => {
  const canvas = currentCanvas();
  if (!canvas) return;
  canvas.nodes = canvas.nodes.filter((node) => node.id !== nodeId);
  canvas.connections = (canvas.connections || []).filter((connection) => connection.from !== nodeId && connection.to !== nodeId);
  canvas.selectedNodeId = canvas.nodes[0]?.id || null;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const duplicateNode = (nodeId) => {
  const canvas = currentCanvas();
  const node = findNodeById(nodeId);
  if (!canvas || !node) return;
  const duplicate = hydrateCanvasNode({
    ...structuredClone(node),
    id: undefined,
    name: `${node.name} 副本`,
    x: node.x + 36,
    y: node.y + 36,
  });
  canvas.nodes.push(duplicate);
  canvas.selectedNodeId = duplicate.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createNodeNear = (nodeId, side = "right") => {
  const canvas = currentCanvas();
  const node = findNodeById(nodeId);
  if (!canvas || !node) return;
  const nextNode = createImageNode({
    x: node.x + (side === "left" ? -720 : 720),
    y: node.y,
  });
  canvas.nodes.push(nextNode);
  canvas.selectedNodeId = nextNode.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createPanoramaNode = (nodeId) => {
  const canvas = currentCanvas();
  const node = findNodeById(nodeId);
  if (!canvas || !node) return;
  const panoramaNode = createPanoramaPlayerNode({
    name: "720°全景图",
    image: node.image,
    sourceImage: node.image,
    prompt: "720°全景图 去掉人物",
    x: node.x + 730,
    y: node.y - 140,
  });
  canvas.nodes.push(panoramaNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: node.id,
    to: panoramaNode.id,
  });
  canvas.selectedNodeId = panoramaNode.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const copyNode = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node) return;
  state.canvasClipboard = structuredClone(node);
  state.canvasContextMenu = null;
  renderCanvasDetail();
};

const pasteNode = (nodeId = null) => {
  const canvas = currentCanvas();
  if (!canvas || !state.canvasClipboard) return;
  const baseNode = nodeId ? findNodeById(nodeId) : null;
  const duplicate = hydrateCanvasNode({
    ...structuredClone(state.canvasClipboard),
    id: undefined,
    x: (baseNode?.x ?? state.canvasClipboard.x) + 36,
    y: (baseNode?.y ?? state.canvasClipboard.y) + 36,
  });
  canvas.nodes.push(duplicate);
  canvas.selectedNodeId = duplicate.id;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

canvasStage.addEventListener("click", (event) => {
  if (!isCanvasDetailView()) return;
  const shareView = isCanvasShareView();

  const canvasAction = event.target.closest("[data-canvas-action]");
  if (canvasAction) {
    const action = canvasAction.dataset.canvasAction;
    if (action === "open-copy-canvas-modal") {
      event.preventDefault();
      event.stopPropagation();
      openCopyCanvasModal();
      return;
    }
    if (action === "back-to-canvases") {
      state.currentView = "canvases";
      state.currentCanvasId = null;
      closeCanvasPopups();
      renderGrid();
    }
    if (action === "open-share-modal") {
      event.preventDefault();
      event.stopPropagation();
      openCanvasShareModal();
      return;
    }
    if (action === "toggle-add-panel") {
      event.stopPropagation();
      if (Date.now() < state.canvasAddPanelGuardUntil) return;
      toggleCanvasAddPanel();
    }
    if (action === "toggle-template-panel") {
      event.stopPropagation();
      if (Date.now() < state.canvasAddPanelGuardUntil) return;
      toggleCanvasTemplatePanel();
    }
    if (action === "close-add-panel") {
      state.canvasAddPanelOpen = false;
      renderCanvasDetail();
    }
    if (action === "close-template-panel") {
      state.canvasTemplatePanelOpen = false;
      renderCanvasDetail();
    }
    if (action === "switch-template-type") {
      state.canvasTemplateType = canvasAction.dataset.templateType === "custom" ? "custom" : "official";
      renderCanvasDetail();
    }
    if (action === "add-template-to-canvas") {
      addCanvasTemplateToCanvas(canvasAction.dataset.templateId);
    }
    if (action === "delete-template") {
      openTemplateDeleteConfirm(canvasAction.dataset.templateId);
    }
    if (action === "pick-template-cover") {
      event.preventDefault();
      event.stopPropagation();
      canvasStage.querySelector("[data-template-cover-input]")?.click();
      return;
    }
    if (action === "close-create-template") {
      event.preventDefault();
      event.stopPropagation();
      closeCreateTemplateModal();
      return;
    }
    if (action === "confirm-create-template") {
      event.preventDefault();
      event.stopPropagation();
      confirmCreateTemplate();
      return;
    }
    if (action === "close-template-delete") {
      event.preventDefault();
      event.stopPropagation();
      closeTemplateDeleteConfirm();
      return;
    }
    if (action === "confirm-delete-template") {
      event.preventDefault();
      event.stopPropagation();
      confirmDeleteCanvasTemplate();
      return;
    }
    if (action === "create-node") createNodeAtViewportCenter();
    if (action === "create-image-node") createNodeAtViewportCenter(CANVAS_NODE_PREVIEW);
    if (action === "create-audio-node") createAudioNodeAtViewportCenter();
    if (action === "upload-create-node") {
      state.uploadNodeTarget = null;
      nodeImageUploadInput?.click();
    }
    if (action === "close-camera-control") {
      event.preventDefault();
      event.stopPropagation();
      closeCameraControlPanel();
      return;
    }
    if (action === "toggle-camera-control-enabled") {
      event.preventDefault();
      event.stopPropagation();
      if (state.cameraControlDraft) {
        syncCameraControlDraft("enabled", !state.cameraControlDraft.enabled);
      }
      return;
    }
    if (action === "close-fullscreen") {
      event.preventDefault();
      event.stopPropagation();
      closePanoramaFullscreen();
      return;
    }
    if (action === "close-wash-confirm") {
      event.preventDefault();
      event.stopPropagation();
      state.washConfirmNodeId = null;
      renderCanvasDetail();
      return;
    }
    if (action === "close-reverse-prompt-confirm") {
      event.preventDefault();
      event.stopPropagation();
      state.reversePromptConfirmNodeId = null;
      renderCanvasDetail();
      return;
    }
    if (action === "close-audio-voice") {
      event.preventDefault();
      event.stopPropagation();
      state.audioVoiceNodeId = null;
      renderCanvasDetail();
      return;
    }
    if (action === "select-audio-voice") {
      event.preventDefault();
      event.stopPropagation();
      const node = findNodeById(canvasAction.dataset.nodeId);
      if (node?.type === "audio") {
        node.voice = canvasAction.dataset.audioVoice || node.voice;
        saveProjectsState();
      }
      renderCanvasDetail();
      return;
    }
    if (action === "confirm-wash-image") {
      event.preventDefault();
      event.stopPropagation();
      if (state.washConfirmNodeId) createWashedImageNode(state.washConfirmNodeId);
      return;
    }
    if (action === "confirm-reverse-prompt") {
      event.preventDefault();
      event.stopPropagation();
      if (state.reversePromptConfirmNodeId) createReversePromptTextNode(state.reversePromptConfirmNodeId);
      return;
    }
    if (action === "reset-zoom") {
      const canvas = currentCanvas();
      if (canvas) {
        canvas.viewport = { x: 0, y: 0, scale: 1 };
        syncCanvasTransform();
      }
    }
    if (action === "zoom-in") setCanvasZoom((currentCanvas()?.viewport.scale || 1) + 0.1);
    if (action === "zoom-out") setCanvasZoom((currentCanvas()?.viewport.scale || 1) - 0.1);
    return;
  }

  if (shareView) return;

  const contextAction = event.target.closest("[data-context-action]");
  if (contextAction) {
    const nodeId = contextAction.dataset.nodeId;
    const action = contextAction.dataset.contextAction;
    if (action === "save-asset") {
      state.canvasContextMenu = null;
      renderCanvasDetail();
    }
    if (action === "create-template") openCreateTemplateModal(nodeId);
    if (action === "duplicate") duplicateNode(nodeId);
    if (action === "copy") copyNode(nodeId);
    if (action === "paste") pasteNode(nodeId);
    if (action === "delete") deleteNode(nodeId);
    return;
  }

  const cameraPick = event.target.closest("[data-camera-pick]");
  if (cameraPick) {
    event.preventDefault();
    event.stopPropagation();
    syncCameraControlDraft(cameraPick.dataset.cameraPick, cameraPick.dataset.cameraValue);
    return;
  }

  const toolbarAction = event.target.closest("[data-toolbar-action]");
  if (toolbarAction) {
    const nodeId = toolbarAction.dataset.nodeId;
    const action = toolbarAction.dataset.toolbarAction;
    if (action === "reverse-prompt") openReversePromptConfirm(nodeId);
    if (action === "panorama") createPanoramaNode(nodeId);
    if (action === "wash-image") openWashImageConfirm(nodeId);
    if (action === "current-shot") createPanoramaCurrentShot(nodeId);
    if (action === "quad-shot") createPanoramaShotGroup(nodeId, "quad");
    if (action === "dodeca-shot") createPanoramaShotGroup(nodeId, "dodeca");
    if (action === "reset-view") resetPanoramaView(nodeId);
    if (action === "toggle-guides") togglePanoramaGuides(nodeId);
    if (action === "fullscreen-preview") openPanoramaFullscreen(nodeId);
    if (action === "noop") return;
    return;
  }

  const nodeAction = event.target.closest("[data-node-action]");
  if (nodeAction) {
    const nodeId = nodeAction.dataset.nodeId;
    const action = nodeAction.dataset.nodeAction;
    selectNode(nodeId);
    if (action === "upload-image") {
      state.uploadNodeTarget = nodeId;
      nodeImageUploadInput?.click();
    }
    if (action === "open-camera-control") openCameraControlPanel(nodeId);
    if (action === "open-voice-settings") openAudioVoiceSettings(nodeId);
    if (action === "focus") centerViewportOnNode(nodeId);
    if (action === "add-near") createNodeNear(nodeId, nodeAction.dataset.nodeSide);
    return;
  }

  const node = event.target.closest("[data-node-id]");
  if (node) {
    selectNode(node.dataset.nodeId);
    return;
  }

  if (event.target.closest("#canvas-board")) {
    state.canvasContextMenu = null;
    if (!event.target.closest(".canvas-add-panel")) state.canvasAddPanelOpen = false;
    selectNode(null);
  }
});

canvasStage.addEventListener("input", (event) => {
  if (state.currentView !== "canvas-detail") return;
  if (event.target.id === "canvas-draft-name") {
    state.canvasDraftName = event.target.value;
    return;
  }
  const field = event.target.dataset.nodeField;
  const nodeId = event.target.dataset.nodeId;
  const node = findNodeById(nodeId);
  if (!field || !node) return;
  node[field] = event.target.isContentEditable ? event.target.textContent : event.target.value;
  saveProjectsState();
});

canvasStage.addEventListener("change", (event) => {
  if (state.currentView !== "canvas-detail") return;
  const field = event.target.dataset.cameraField;
  if (!field || !state.cameraControlDraft) return;
  syncCameraControlDraft(field, event.target.value);
});

canvasStage.addEventListener("dblclick", (event) => {
  if (state.currentView !== "canvas-detail") return;
  const board = event.target.closest("#canvas-board");
  if (!board || event.target.closest("[data-node-id]")) return;
  createNodeAtViewportCenter();
});

canvasStage.addEventListener(
  "wheel",
  (event) => {
    if (!isCanvasDetailView()) return;
    if (!event.target.closest("#canvas-board")) return;
    event.preventDefault();
    const factor = Math.exp(-event.deltaY * 0.0012);
    setCanvasZoom((currentCanvas()?.viewport.scale || 1) * factor, event.clientX, event.clientY);
  },
  { passive: false },
);

canvasStage.addEventListener("pointerdown", (event) => {
  if (!isCanvasDetailView()) return;
  const shareView = isCanvasShareView();
  if (event.target.closest(".canvas-camera-popover")) {
    event.stopPropagation();
    return;
  }
  if (event.target.closest(".canvas-action-modal-panel")) {
    event.stopPropagation();
    return;
  }
  if (event.target.closest(".canvas-panorama-fullscreen")) {
    event.stopPropagation();
    return;
  }
  if (event.target.closest(".canvas-add-panel, .canvas-template-panel, .canvas-context-menu, .canvas-bottom-dock")) {
    event.stopPropagation();
    return;
  }
  const canvasAction = event.target.closest('[data-canvas-action="toggle-add-panel"]');
  if (canvasAction) {
    event.stopPropagation();
    event.preventDefault();
    if (shareView) return;
    openCanvasAddPanel();
    return;
  }
  if (shareView && event.target.closest("[data-node-id]")) return;
  if (event.target.closest("[data-node-action]")) return;

  const dragHandle = event.target.closest("[data-node-drag]");
  if (dragHandle && !shareView) {
    const nodeEl = dragHandle.closest("[data-node-id]");
    const node = findNodeById(nodeEl?.dataset.nodeId);
    const canvas = currentCanvas();
    if (!node) return;
    if (canvas) canvas.selectedNodeId = node.id;
    state.canvasContextMenu = null;
    canvasStage.querySelectorAll(".canvas-canvas-node").forEach((el) => {
      el.classList.toggle("is-selected", el.dataset.nodeId === node.id);
    });
    canvasRuntime.mode = dragHandle.dataset.panoramaDrag ? "panorama-view" : "node";
    canvasRuntime.pointerId = event.pointerId;
    canvasRuntime.nodeId = node.id;
    canvasRuntime.startClientX = event.clientX;
    canvasRuntime.startClientY = event.clientY;
    canvasRuntime.nodeStartX = node.x;
    canvasRuntime.nodeStartY = node.y;
    canvasRuntime.panStartX = event.clientX;
    canvasRuntime.panoramaStartOffset = Number(node.panX || 0);
    dragHandle.setPointerCapture(event.pointerId);
    return;
  }

  const board = event.target.closest("#canvas-board");
  if (board && !event.target.closest("[data-node-id]")) {
    const canvas = currentCanvas();
    if (!canvas) return;
    canvasRuntime.mode = "pan";
    canvasRuntime.pointerId = event.pointerId;
    canvasRuntime.startClientX = event.clientX;
    canvasRuntime.startClientY = event.clientY;
    canvasRuntime.startViewportX = canvas.viewport.x;
    canvasRuntime.startViewportY = canvas.viewport.y;
    board.setPointerCapture(event.pointerId);
  }
});

document.addEventListener("pointermove", (event) => {
  if (!isCanvasDetailView() || canvasRuntime.pointerId !== event.pointerId) return;
  const canvas = currentCanvas();
  if (!canvas) return;

  if (canvasRuntime.mode === "pan") {
    canvas.viewport.x = canvasRuntime.startViewportX + (event.clientX - canvasRuntime.startClientX);
    canvas.viewport.y = canvasRuntime.startViewportY + (event.clientY - canvasRuntime.startClientY);
    syncCanvasTransform();
  }

  if (canvasRuntime.mode === "node") {
    const node = findNodeById(canvasRuntime.nodeId);
    const nodeEl = canvasStage.querySelector(`[data-node-id="${canvasRuntime.nodeId}"]`);
    if (!node || !nodeEl) return;
    node.x = canvasRuntime.nodeStartX + (event.clientX - canvasRuntime.startClientX) / canvas.viewport.scale;
    node.y = canvasRuntime.nodeStartY + (event.clientY - canvasRuntime.startClientY) / canvas.viewport.scale;
    nodeEl.style.left = `${node.x}px`;
    nodeEl.style.top = `${node.y}px`;
  }

  if (canvasRuntime.mode === "panorama-view") {
    const node = findNodeById(canvasRuntime.nodeId);
    const strip = canvasStage.querySelector(`[data-node-id="${canvasRuntime.nodeId}"] .canvas-panorama-strip`);
    if (!node || !strip) return;
    node.panX = Math.max(-180, Math.min(180, canvasRuntime.panoramaStartOffset + (event.clientX - canvasRuntime.panStartX) * 0.9));
    strip.style.transform = `translateX(${node.panX}px)`;
  }
});

document.addEventListener("pointerup", (event) => {
  if (canvasRuntime.pointerId !== event.pointerId) return;
  if (state.currentView === "canvas-detail") saveProjectsState();
  canvasRuntime.mode = null;
  canvasRuntime.pointerId = null;
  canvasRuntime.nodeId = null;
});

canvasStage.addEventListener("contextmenu", (event) => {
  if (state.currentView !== "canvas-detail") return;
  const node = event.target.closest("[data-node-id]");
  if (!node) return;
  event.preventDefault();
  const board = document.getElementById("canvas-board");
  if (!board) return;
  const rect = board.getBoundingClientRect();
  const canvas = currentCanvas();
  if (canvas) canvas.selectedNodeId = node.dataset.nodeId;
  state.canvasContextMenu = {
    nodeId: node.dataset.nodeId,
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  state.canvasAddPanelOpen = false;
  state.canvasTemplatePanelOpen = false;
  renderCanvasDetail();
});

[noticeTrigger].forEach((button) => {
  if (!button) return;
  button.addEventListener("click", () => {
    state.noticeOpen = !state.noticeOpen;
    state.avatarOpen = false;
    renderGrid();
  });
});

[avatarTrigger].forEach((button) => {
  if (!button) return;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    state.avatarOpen = !state.avatarOpen;
    state.noticeOpen = false;
    renderGrid();
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.closeModal);
    if (modal) closeModal(modal);
  });
});

copyCanvasShareTrigger?.addEventListener("click", enterCanvasSharePage);

confirmCopyCanvasTrigger?.addEventListener("click", confirmCopyCanvas);

canvasShareAccessSwitch?.addEventListener("click", () => {
  const canvas = currentCanvas();
  if (!canvas) return;
  canvas.shareAccess = canvas.shareAccess === "public" ? "private" : "public";
  saveProjectsState();
  syncShareAccessOptions();
});

document.querySelectorAll(".ratio-card").forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedRatio = button.dataset.ratio;
    document.querySelectorAll(".ratio-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.ratio === state.selectedRatio);
    });
  });
});

styleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-style-id]");
  if (!button) return;
  state.selectedStyle = button.dataset.styleId;
  renderStyleCards();
});

document.addEventListener("click", (event) => {
  if (state.currentView === "canvas-detail") {
    if (Date.now() < state.canvasAddPanelGuardUntil) return;
    let shouldRenderCanvas = false;
    if (!event.target.closest(".canvas-context-menu") && state.canvasContextMenu && !event.target.closest("[data-node-id]")) {
      state.canvasContextMenu = null;
      shouldRenderCanvas = true;
    }
    if (!event.target.closest(".canvas-add-panel") && !event.target.closest('[data-canvas-action="toggle-add-panel"]') && state.canvasAddPanelOpen) {
      state.canvasAddPanelOpen = false;
      shouldRenderCanvas = true;
    }
    if (!event.target.closest(".canvas-template-panel") && !event.target.closest('[data-canvas-action="toggle-template-panel"]') && state.canvasTemplatePanelOpen) {
      state.canvasTemplatePanelOpen = false;
      shouldRenderCanvas = true;
    }
    if (shouldRenderCanvas) {
      renderGrid();
    }
    return;
  }

  if (!event.target.closest("#avatar-panel") && !event.target.closest("#avatar-trigger")) {
    state.avatarOpen = false;
  }

  if (!event.target.closest("#notice-panel") && !event.target.closest("#notice-trigger")) {
    state.noticeOpen = false;
  }

  if (!event.target.closest(".menu-anchor")) {
    state.activeMenuId = null;
    state.creatorVideoMenuId = null;
    sortMenu.classList.remove("is-open");
    sortTrigger.setAttribute("aria-expanded", "false");
  }

  document.querySelectorAll(".modal-backdrop.is-open").forEach((modal) => {
    if (event.target === modal) closeModal(modal);
  });

  renderGrid();
});

document.addEventListener("keydown", (event) => {
  if (state.currentView !== "canvas-detail") return;
  if (event.key === "Escape") {
    if (state.reversePromptConfirmNodeId) {
      state.reversePromptConfirmNodeId = null;
      renderCanvasDetail();
      return;
    }
    if (state.washConfirmNodeId) {
      state.washConfirmNodeId = null;
      renderCanvasDetail();
      return;
    }
    if (state.canvasTemplateDraftNodeId || state.canvasTemplateDeleteTargetId) {
      state.canvasTemplateDraftNodeId = null;
      state.canvasTemplateDeleteTargetId = null;
      renderCanvasDetail();
      return;
    }
    if (state.canvasAddPanelOpen || state.canvasTemplatePanelOpen || state.canvasContextMenu) {
      closeCanvasPopups();
      renderGrid();
    }
    return;
  }
  if ((event.key === "Delete" || event.key === "Backspace") && !event.target.closest("input, textarea")) {
    const canvas = currentCanvas();
    if (!canvas?.selectedNodeId) return;
    deleteNode(canvas.selectedNodeId);
  }
});

window.addEventListener("hashchange", () => {
  restoreNavigationState();
  renderGrid();
});
