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
const CANVAS_NODE_TOOLBAR_TOOLBOX = "./assets/icons/toolbox.svg";
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
  video:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.2 6.2A1.7 1.7 0 0 1 4.9 4.5h7.2a1.7 1.7 0 0 1 1.7 1.7v1.45l2.95-1.9v8.5l-2.95-1.9v1.45a1.7 1.7 0 0 1-1.7 1.7H4.9a1.7 1.7 0 0 1-1.7-1.7V6.2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7.2 8.1v3.8l3.1-1.9-3.1-1.9Z" fill="currentColor"/></svg>',
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
  phone:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3.5h6a1.4 1.4 0 0 1 1.4 1.4v10.2a1.4 1.4 0 0 1-1.4 1.4H7a1.4 1.4 0 0 1-1.4-1.4V4.9A1.4 1.4 0 0 1 7 3.5Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9.1 14.1h1.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  volume:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.2 8.2h2.5l3.5-3v9.6l-3.5-3H4.2V8.2Z" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linejoin="round"/><path d="M13.1 7.1a4.2 4.2 0 0 1 0 5.8M15.2 5.4a6.8 6.8 0 0 1 0 9.2" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/></svg>',
  grid2:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3h6.25v6.25H3V3Zm7.75 0H17v6.25h-6.25V3ZM3 10.75h6.25V17H3v-6.25Zm7.75 0H17V17h-6.25v-6.25Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  layoutBoard:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9h8M12 15h8M12 4v16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid3:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3h4.167v4.167H3V3Zm5.417 0h4.166v4.167H8.417V3Zm5.416 0H18v4.167h-4.167V3ZM3 8.417h4.167v4.166H3V8.417Zm5.417 0h4.166v4.166H8.417V8.417Zm5.416 0H18v4.166h-4.167V8.417ZM3 13.833h4.167V18H3v-4.167Zm5.417 0h4.166V18H8.417v-4.167Zm5.416 0H18V18h-4.167v-4.167Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>',
  faceScan:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.2 3.5H4.1a1.6 1.6 0 0 0-1.6 1.6v1.1M14.8 3.5h1.1a1.6 1.6 0 0 1 1.6 1.6v1.1M5.2 16.5H4.1a1.6 1.6 0 0 1-1.6-1.6v-1.1M14.8 16.5h1.1a1.6 1.6 0 0 0 1.6-1.6v-1.1M6.6 10a3.4 3.4 0 0 1 6.8 0M8.1 11.8c.95.65 2.85.65 3.8 0" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  user:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10.2a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4ZM3.4 17.2c.65-3.1 2.9-4.95 6.6-4.95s5.95 1.85 6.6 4.95" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  layers:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.8 17 6.4 10 10 3 6.4 10 2.8ZM3 10l7 3.6 7-3.6M3 13.6l7 3.6 7-3.6" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  product:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.2 4.2H3.8a1.4 1.4 0 0 0-1.4 1.4v8.8a1.4 1.4 0 0 0 1.4 1.4h1.4V4.2ZM14.8 4.2h1.4a1.4 1.4 0 0 1 1.4 1.4v8.8a1.4 1.4 0 0 1-1.4 1.4h-1.4V4.2ZM5.2 3.2h9.6v13.6H5.2V3.2Z" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linejoin="round"/></svg>',
  filmGrid:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.2 3.2h13.6v13.6H3.2V3.2ZM7.4 3.2v13.6M12.6 3.2v13.6M3.2 7.4h13.6M3.2 12.6h13.6" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linejoin="round"/></svg>',
  imageCorrect:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.2 4.1h11.6a1.6 1.6 0 0 1 1.6 1.6v8.6a1.6 1.6 0 0 1-1.6 1.6H4.2a1.6 1.6 0 0 1-1.6-1.6V5.7a1.6 1.6 0 0 1 1.6-1.6ZM4.4 13.7l3-3.2a.9.9 0 0 1 1.32.02l1.75 2.02 1.25-1.4a.9.9 0 0 1 1.32-.02l2.55 2.58M13.8 6.7l.43 1.02 1.07.38-1.07.38-.43 1.02-.43-1.02-1.07-.38 1.07-.38.43-1.02Z" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  refresh:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10.15 3.4.62 1.72a1.2 1.2 0 0 0 .71.72l1.72.62-1.72.62a1.2 1.2 0 0 0-.71.71l-.62 1.72-.62-1.72a1.2 1.2 0 0 0-.71-.71l-1.72-.62 1.72-.62a1.2 1.2 0 0 0 .71-.72l.62-1.72ZM5.26 10.82l.44 1.22a.85.85 0 0 0 .5.5l1.22.44-1.22.44a.85.85 0 0 0-.5.5l-.44 1.22-.44-1.22a.85.85 0 0 0-.5-.5l-1.22-.44 1.22-.44a.85.85 0 0 0 .5-.5l.44-1.22ZM13.8 10.2l2 2m-1.06-4.1 1.72.62m-9.4 7.34 5.8-5.8" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sparkles:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8.6 3.4.65 1.82a1 1 0 0 0 .59.59l1.82.65-1.82.65a1 1 0 0 0-.59.59L8.6 10.52l-.65-1.82a1 1 0 0 0-.59-.59l-1.82-.65 1.82-.65a1 1 0 0 0 .59-.59L8.6 3.4Zm6.08 6.2.42 1.18a.7.7 0 0 0 .42.42l1.18.42-1.18.42a.7.7 0 0 0-.42.42l-.42 1.18-.42-1.18a.7.7 0 0 0-.42-.42l-1.18-.42 1.18-.42a.7.7 0 0 0 .42-.42l.42-1.18ZM4.3 12.6h6.2m-6.2 3h8.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  guides:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3v14M10 3v14M14 3v14M3 6h14M3 10h14M3 14h14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  expand:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 3.5H16.5V7.5M7.5 16.5H3.5V12.5M16.2 3.8 11 9M3.8 16.2 9 11" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  eye:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.25 10s2.7-5 7.75-5 7.75 5 7.75 5-2.7 5-7.75 5-7.75-5-7.75-5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="10" r="2.25" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
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
  { id: "public", label: "公共资产库" },
  { id: "market", label: "素材广场" },
];

const workflowReferenceCategories = ["角色", "服装", "场景", "道具", "音频", "其他"];

const workflowReferenceCategoryTypes = {
  project: {
    角色: ["image"],
    服装: ["image"],
    场景: ["image"],
    道具: ["image"],
    音频: ["audio"],
    其他: ["image", "video"],
  },
  public: {
    角色: ["image"],
    服装: ["image"],
    场景: ["image"],
    道具: ["image"],
    音频: ["audio"],
  },
  market: {
    角色: ["image"],
    服装: ["image"],
    场景: ["image"],
    道具: ["image"],
    音频: ["audio"],
  },
};

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
  public: "公共资产库",
  market: "素材广场",
};

const workflowReferenceAssetName = (source, category, index) => {
  const sourcePrefix = { project: "项目", public: "公共", market: "广场" }[source] || "本地";
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

const workflowUploadTargetConfig = (target = "keyframe") => {
  const configs = {
    keyframe: { type: "image", title: "上传关键帧", usage: "用于当前场景关键帧", multiple: true },
    "keyframe-reference": { type: "image", title: "上传参考图", usage: "用于关键帧生成参考", multiple: true },
    "video-image": { type: "image", title: "上传参考图", usage: "用于视频生成参考图", multiple: false },
    "video-video": { type: "video", title: "上传参考视频", usage: "用于视频生成参考视频", multiple: false },
    "video-audio": { type: "audio", title: "上传参考音频", usage: "用于视频生成参考音频", multiple: false },
    "audio-reference": { type: "audio", title: "上传参考音乐", usage: "用于音乐创作参考", multiple: false },
    "timeline-keyframe": { type: "image", title: "上传关键帧", usage: "添加到关键帧线", multiple: true },
    "timeline-video": { type: "video", title: "上传视频", usage: "添加到视频线", multiple: true },
    "timeline-audio": { type: "audio", title: "上传音频", usage: "添加到音频线", multiple: true },
  };
  return configs[target] || configs.keyframe;
};

const workflowUploadTypeMeta = {
  image: {
    label: "图片",
    accept: "image/*",
    extensions: "JPG、PNG、WEBP",
    localTip: "适用于角色、服装、场景、道具、关键帧和参考图。",
  },
  video: {
    label: "视频",
    accept: "video/*",
    extensions: "MP4、MOV",
    localTip: "建议上传清晰画面，可作为视频轨道或视频生成参考。",
  },
  audio: {
    label: "音频",
    accept: "audio/*",
    extensions: "MP3、WAV、M4A",
    localTip: "建议上传无明显噪声的音频，可作为音频轨道、参考音乐或参考音频。",
  },
};

const workflowReferenceCategoriesForSource = (source, type) =>
  workflowReferenceCategories.filter((category) => workflowReferenceCategoryTypes[source]?.[category]?.includes(type));

const workflowReferenceSourceAvailable = (source) => workflowReferenceSources.some((item) => item.id === source);

const workflowReferenceCurrentCategory = (source, type) => {
  const categories = workflowReferenceCategoriesForSource(source, type);
  if (!categories.length) return "";
  return categories.includes(state.workflowReferenceCategory) ? state.workflowReferenceCategory : categories[0];
};

const workflowReferenceVisual = (type, index = 0) => {
  if (type === "video") return "./assets/images/canvas-chase-sequence.jpg";
  if (type === "audio") return "";
  return workflowReferenceImagePool[index % workflowReferenceImagePool.length];
};

const openWorkflowUploadModal = (target) => {
  const config = workflowUploadTargetConfig(target);
  const activeSource = workflowReferenceSourceAvailable(state.workflowReferenceSource) ? state.workflowReferenceSource : "local";
  state.workflowReferenceTarget = target;
  state.workflowReferenceSource = activeSource;
  state.workflowReferenceCategory = workflowReferenceCurrentCategory(activeSource, config.type) || "角色";
  state.workflowReferenceModalOpen = true;
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
const PORTRAIT_TEXTURE_MODELS = [
  { id: "portrait-texture-lite", name: "人像质感 Lite", cost: 30 },
  { id: "portrait-texture-pro", name: "人像质感 Pro", cost: 60 },
  { id: "portrait-texture-film", name: "电影级人像质感", cost: 90 },
];
const CANVAS_STORY_TOOL_CONFIG = {
  storyboard: {
    label: "故事板",
    placeholder:
      "描述一个 10-15秒内能演完的小剧情片段，系统会整理为 4-8个连续分镜，内容过长时会自动提炼关键剧情。提供角色三视圈、美术设定图及准确的需求描述，生成效果会更好。",
  },
  scheduleStoryboard: {
    label: "调度故事板",
    placeholder:
      "描述一个 10-15 秒内能演完的小剧情片段。可补充角色、场景、道具、动作过程、走位、对白或参考图，系统会整理为 4-6 个中文调度分镜手绘版",
  },
  characterSheet: {
    label: "角色设定图",
    placeholder: "点击生成，直接基于当前图像生成完整的角色设定图；支持通过文本/参考图生成。",
  },
  sceneSheet: {
    label: "场景设定图",
    placeholder: "点击生成，直接基于当前图像生成完整的场景设定图；支持通过文本/参考图生成。",
  },
  productSheet: {
    label: "产品设定图",
    placeholder: "点击生成，直接基于当前图像生成完整的产品设定图；支持通过文本/参考图生成。",
  },
  lightingCorrect: {
    label: "电影级光影校正",
    placeholder: "点击生成，直接对当前图像进行电影机光影矫正、景别视角；支持通过文本/参考图生成。",
  },
};
const CANVAS_TOOLBOX_ITEMS = [
  { key: "multi-position", label: "多机位九宫格", icon: "grid3" },
  { key: "story-four", label: "剧情推演四宫格", icon: "grid2", active: true },
  { key: "face-three-view", label: "角色脸部三视图", icon: "faceScan" },
  { key: "character-sheet", label: "角色设定图", icon: "user" },
  { key: "scene-sheet", label: "场景设定图", icon: "layers" },
  { key: "product-sheet", label: "产品设定图", icon: "product" },
  { key: "portrait-texture", label: "人像质感调节", icon: "sparkles" },
  { key: "storyboard", label: "故事板", icon: "layoutBoard" },
  { key: "schedule-storyboard", label: "调度故事板", icon: "filmGrid" },
  { key: "lens-grid", label: "25宫格连贯分镜", icon: "filmGrid" },
  { key: "lighting-correct", label: "电影级光影校正", icon: "imageCorrect" },
];

const CANVAS_VIDEO_MODELS = ["Seedance 2.0", "Seedance 1.6", "Kling 2.1", "Runway Gen-4"];
const isSeedanceVideoModel = (model = "") => String(model).trim().toLowerCase().startsWith("seedance");
const optimizeVideoPromptText = (prompt = "") => {
  const source = prompt.trim() || "一个 5 秒内可完成的清晰视频画面";
  if (source.includes("优化提示词：")) return source;
  return `${source}\n\n优化提示词：保持主体一致，动作节奏清晰，镜头稳定推进；补充明确的场景光线、景别视角、运动方向与画面细节，整体呈现自然连贯的电影感视频。`;
};

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
  toolTag = null,
  promptPlaceholder = "",
} = {}) => ({
  id: id || `n${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "图片节点2-副本",
  image: image || CANVAS_NODE_PREVIEW,
  x,
  y,
  prompt: prompt ?? DEFAULT_NODE_PROMPT,
  promptPlaceholder,
  toolTag,
  panoramaSource,
  panoramaOffset,
  cameraControl: {
    enabled: cameraControl?.enabled || false,
    camera: cameraControl?.camera || "Sony Venice",
    lens: cameraControl?.lens || "Anamorphic Lens",
    focalLength: cameraControl?.focalLength || "35mm",
    aperture: cameraControl?.aperture || "f/1.4",
  },
  topTags: ["全景", "多角度", "打光", "工具箱", "擦除", "宫格切分"],
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

const createVideoNode = ({
  id,
  name,
  x = 0,
  y = 0,
  prompt,
  mode = "text-video",
  model = "Seedance 2.0",
  duration = "5s",
  quality = "720p",
  ratio = "9:16",
  audioEnabled = true,
  cost = "788",
  balance = "10002377",
  type = "video",
} = {}) => ({
  id: id || `v${Date.now()}${Math.floor(Math.random() * 1000)}`,
  type,
  name: name || "视频节点",
  x,
  y,
  prompt: prompt || "",
  mode,
  model,
  duration,
  quality,
  ratio,
  audioEnabled,
  cost,
  balance,
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
  if (node?.type === "video") {
    return createVideoNode({
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

const WORKFLOW_RECYCLE_KEY = "phanty-movie-workflow-recycle-v1";
const WORKFLOW_RECYCLE_SOURCES = ["画布", "项目资产库", "模型对话广场", "拍摄台", "全自动AI生成"];
const normalizeWorkflowRecycleSource = (source = "") => {
  if (WORKFLOW_RECYCLE_SOURCES.includes(source)) return source;
  if (["项目资产库", "本地上传"].includes(source)) return "项目资产库";
  if (["模型对话广场"].includes(source)) return "模型对话广场";
  return "拍摄台";
};
const activeHistoryProjectId = () => state.currentProjectId || state.projects[0]?.id || "p1";
const normalizeWorkflowRecycleItem = (item) => ({
  ...item,
  projectId: item.projectId || "p1",
  source: normalizeWorkflowRecycleSource(item.source),
  createdAt: item.createdAt || item.deletedAt,
  createdAtMs: item.createdAtMs || item.deletedAtMs || Date.now(),
});
const workflowRecycleSeed = [
  { id: "history-img-1", type: "image", name: "雨夜仓库 · 关键帧 03", source: "拍摄台", projectId: "p1", createdAt: "2026-08-26 16:50:35", createdAtMs: Date.parse("2026-08-26T16:50:35"), image: "./assets/images/canvas-chase-sequence.jpg" },
  { id: "history-img-2", type: "image", name: "东京街口 · 氛围参考", source: "项目资产库", projectId: "p1", createdAt: "2026-08-09 18:06:00", createdAtMs: 1786279560000, image: "./assets/images/project-neon-tokyo.jpg" },
  { id: "history-img-3", type: "image", name: "角色定妆 · 李柏", source: "模型对话广场", projectId: "p1", createdAt: "2026-08-08 09:45:00", createdAtMs: 1786153500000, image: "./assets/images/canvas-character.jpg" },
  { id: "history-video-1", type: "video", name: "仓库对峙 · 镜头 02", source: "拍摄台", projectId: "p1", createdAt: "2026-08-10 11:18:00", createdAtMs: 1786331880000, duration: "00:18", image: "./assets/images/style-cinematic.jpg" },
  { id: "history-video-2", type: "video", name: "雨夜追车 · 合成预览", source: "项目资产库", projectId: "p1", createdAt: "2026-08-07 16:20:00", createdAtMs: 1786090800000, duration: "00:36", image: "./assets/images/project-neon-tokyo.jpg" },
  { id: "history-audio-1", type: "audio", name: "雨夜环境声", source: "拍摄台", projectId: "p1", createdAt: "2026-08-10 10:12:00", createdAtMs: 1786327920000, duration: "00:24", image: "./assets/images/canvas-node-preview.png" },
  { id: "history-audio-2", type: "audio", name: "紧张鼓点", source: "模型对话广场", projectId: "p1", createdAt: "2026-08-09 15:28:00", createdAtMs: 1786270080000, duration: "00:30", image: "./assets/images/default-cover.jpg" },
  { id: "history-p3-img-1", type: "image", name: "时间裂缝 · 关键帧 01", source: "画布", projectId: "p3", createdAt: "2026-08-26 16:50:35", createdAtMs: Date.parse("2026-08-26T16:50:35"), image: "./assets/images/canvas-chase-sequence.jpg" },
  { id: "history-p3-img-2", type: "image", name: "时间裂缝 · 角色参考", source: "项目资产库", projectId: "p3", createdAt: "2026-08-25 14:18:22", createdAtMs: Date.parse("2026-08-25T14:18:22"), image: "./assets/images/canvas-character.jpg" },
  { id: "history-p3-video-1", type: "video", name: "时间裂缝 · 镜头预览", source: "拍摄台", projectId: "p3", createdAt: "2026-08-24 19:06:10", createdAtMs: Date.parse("2026-08-24T19:06:10"), duration: "00:18", image: "./assets/images/style-cinematic.jpg" },
  { id: "history-p3-video-2", type: "video", name: "时间裂缝 · 全自动生成", source: "全自动AI生成", projectId: "p3", createdAt: "2026-08-23 11:32:48", createdAtMs: Date.parse("2026-08-23T11:32:48"), duration: "00:36", image: "./assets/images/project-neon-tokyo.jpg" },
  { id: "history-p3-audio-1", type: "audio", name: "时间裂缝 · 环境声", source: "画布", projectId: "p3", createdAt: "2026-08-22 09:15:04", createdAtMs: Date.parse("2026-08-22T09:15:04"), duration: "00:24", image: "./assets/images/canvas-node-preview.png" },
  { id: "history-p3-audio-2", type: "audio", name: "时间裂缝 · 氛围配乐", source: "模型对话广场", projectId: "p3", createdAt: "2026-08-21 17:42:36", createdAtMs: Date.parse("2026-08-21T17:42:36"), duration: "00:30", image: "./assets/images/default-cover.jpg" },
];
const loadWorkflowRecycle = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(WORKFLOW_RECYCLE_KEY) || "null");
    if (Array.isArray(saved)) {
      const items = saved.map(normalizeWorkflowRecycleItem);
      const existingIds = new Set(items.map((item) => item.id));
      workflowRecycleSeed.forEach((item) => {
        if (!existingIds.has(item.id)) items.push(normalizeWorkflowRecycleItem(structuredClone(item)));
      });
      return items;
    }
  } catch {}
  return structuredClone(workflowRecycleSeed).map(normalizeWorkflowRecycleItem);
};
const saveWorkflowRecycle = () => localStorage.setItem(WORKFLOW_RECYCLE_KEY, JSON.stringify(state.workflowRecycleItems));

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
  canvasHistoryOpen: false,
  canvasHistoryTab: "image",
  canvasHistoryBatchMode: false,
  canvasHistorySelectedIds: new Set(),
  canvasHistoryPreviewId: null,
  canvasHistoryFilter: "all",
  canvasHistorySort: "date-desc",
  canvasHistoryOpenMenu: null,
  canvasOperationHistoryTab: "image",
  canvasOperationHistoryBatchMode: false,
  canvasOperationHistorySelectedIds: new Set(),
  canvasOperationHistoryPreviewId: null,
  canvasOperationHistoryFilter: "all",
  canvasOperationHistorySort: "date-desc",
  canvasOperationHistoryOpenMenu: null,
  canvasTemplateActionGuardUntil: 0,
  canvasContextActionGuardUntil: 0,
  canvasAddPanelGuardUntil: 0,
  canvasDraftName: "",
  canvasContextMenu: null,
  canvasToolboxNodeId: null,
  avatarOpen: false,
  fullscreenPanoramaId: null,
  cameraControlNodeId: null,
  cameraControlDraft: null,
  washConfirmNodeId: null,
  reversePromptConfirmNodeId: null,
  portraitTextureConfirmNodeId: null,
  portraitTextureModelId: PORTRAIT_TEXTURE_MODELS[0].id,
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
  workflowDeleteVideoIndex: null,
  workflowDeleteAudioIndex: null,
  workflowClearConfirmOpen: false,
  workflowPreviewModalOpen: false,
  workflowClipContextMenu: null,
  workflowReferenceModalOpen: false,
  workflowReferenceSource: "local",
  workflowReferenceCategory: "角色",
  workflowReferenceTarget: "keyframe",
  workflowSceneKeyframePickerOpen: false,
  workflowSceneKeyframePickerAnchor: null,
  workflowSceneKeyframePickerShotFilter: "all",
  workflowStage: "keyframe",
  workflowPage: "studio",
  workflowRecycleItems: loadWorkflowRecycle(),
  workflowRecycleTab: "image",
  workflowRecycleFilter: "all",
  workflowRecycleSort: "date-desc",
  workflowRecycleOpenMenu: null,
  workflowRecyclePreviewId: null,
  workflowRecycleBatchMode: false,
  workflowRecycleSelectedIds: new Set(),
  workflowRecyclePlaying: false,
  workflowRecycleProgress: 18,
  workflowRecycleVolume: 72,
  workflowResultView: "keyframes",
  workflowVideoShotIndex: "",
  workflowVideoDraftPrompt: "",
  workflowVideoPromptMention: null,
  workflowVideoReferences: { images: [], videos: [], audios: [] },
  workflowVideoExcludedReferenceKeys: [],
  workflowMediaPreview: null,
  workflowVideoSettings: {
    mode: "全能参考",
    model: "phan movie Video 2.1",
    ratio: "16:9",
    resolution: "1080P",
    duration: "",
    dubbing: "不生成配音",
  },
  workflowAudioMode: "music",
  workflowAudioDraftPrompt: "低沉悬疑的电影配乐，雨夜废弃仓库，缓慢推进的弦乐与克制的电子脉冲，在人物对峙时逐渐增强张力，不要突兀的高潮。",
  workflowAudioLyrics: "",
  workflowAudioStyle: "悬疑电影配乐，低音弦乐，电子脉冲，冷峻克制，缓慢推进",
  workflowAudioSongName: "雨夜仓库",
  workflowAudioReference: null,
  workflowAudioInstrumental: true,
  workflowAudioCount: 1,
  workflowAudioName: "仓库对白",
  workflowAudioModesExpanded: false,
  workflowTtsVoicesExpanded: false,
  workflowTtsText: "",
  workflowTtsModel: "phan Voice 2.0",
  workflowTtsVoiceId: "voice-linxi",
  workflowTtsVoiceTab: "official",
  workflowTtsLongMode: false,
  workflowTtsLanguage: "自动检测",
  workflowTtsSpeed: 1,
  workflowTtsPitch: 0,
  workflowTtsVolume: 100,
  workflowTtsCloneOpen: false,
  workflowTtsCloneMethod: "record",
  workflowTtsCloneName: "我的音色",
  workflowTtsCloneRecorded: false,
  workflowTtsEmotionMenu: null,
  workflowTtsSelectionRange: null,
  workflowTtsVoices: [
    { id: "voice-linxi", name: "林溪", meta: "温柔女声 · 叙事", group: "official", color: "#8c7cf6" },
    { id: "voice-chenyu", name: "陈宇", meta: "沉稳男声 · 纪录片", group: "official", color: "#4aa8d8" },
    { id: "voice-xiaoyu", name: "小雨", meta: "活力女声 · 广告", group: "official", color: "#e27eaa" },
    { id: "voice-baiyan", name: "白砚", meta: "磁性男声 · 影视", group: "official", color: "#dc9459" },
    { id: "voice-sumu", name: "苏沐", meta: "清亮女声 · 解说", group: "official", color: "#6bb6f0" },
    { id: "voice-guyan", name: "顾言", meta: "青年男声 · 短剧", group: "official", color: "#62c7a7" },
    { id: "voice-ali", name: "阿梨", meta: "甜美女声 · 口播", group: "official", color: "#f08fc0" },
    { id: "voice-zhouche", name: "周澈", meta: "成熟男声 · 商务", group: "official", color: "#d3a45f" },
  ],
  workflowAudioSettings: {
    model: "phan Music 1.5",
    duration: "30s",
    structure: "自动编排",
    vocal: "纯音乐",
    bpm: "82 BPM",
    key: "D 小调",
    creativity: "平衡",
    intensity: "中等",
    loop: "关闭",
  },
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
const canvasHistoryPage = document.getElementById("canvas-history-page");
const homeView = document.getElementById("home-view");
const creatorCenterView = document.getElementById("creator-center-view");
const reviewCenterView = document.getElementById("review-center-view");
const listView = document.getElementById("list-view");
const workflowHomeView = document.getElementById("workflow-home-view");
const workflowStudioMain = workflowHomeView?.querySelector(".workflow-studio-main");
const workflowRecycleMain = document.getElementById("workflow-recycle-main");
const workflowRecycleContent = document.getElementById("workflow-recycle-content");
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
const canvasHistoryNavTrigger = document.getElementById("canvas-history-nav-trigger");
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
const workflowResultTitle = document.getElementById("workflow-result-title");
const workflowResultSubtitle = document.getElementById("workflow-result-subtitle");
const workflowGenerateModalRoot = document.getElementById("workflow-generate-modal-root");
const createLabel = document.getElementById("create-label");
const avatarTrigger = document.getElementById("avatar-trigger");
const avatarPanel = document.getElementById("avatar-panel");
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

const renderCanvasToolboxMenu = (nodeId) => `
  <div class="canvas-toolbox-menu" role="menu" aria-label="工具箱">
    ${CANVAS_TOOLBOX_ITEMS.map(
      (item) => `
        <button class="canvas-toolbox-item${item.active ? " is-active" : ""}" type="button" role="menuitem" data-toolbox-action="${escapeHtml(item.key)}" data-node-id="${nodeId}">
          <span class="canvas-toolbox-item-icon">${icon[item.icon] || icon.grid}</span>
          <span>${escapeHtml(item.label)}</span>
        </button>
      `,
    ).join("")}
  </div>
`;

const selectedPortraitTextureModel = () =>
  PORTRAIT_TEXTURE_MODELS.find((model) => model.id === state.portraitTextureModelId) || PORTRAIT_TEXTURE_MODELS[0];

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

const workflowSceneDurationSeconds = (scene) =>
  scene.shots.reduce((total, shot) => total + (Number.parseFloat(shot.duration) || 0), 0);

const workflowSceneVideoResults = (scene) => {
  if (!Array.isArray(scene.videos)) {
    scene.videos = [];
  }
  return scene.videos;
};

const workflowSceneAudioResults = (scene) => {
  if (!Array.isArray(scene.audios)) {
    scene.audios = [
      {
        id: "audio-demo-1",
        title: "雨夜仓库 · 悬疑配乐",
        mode: "音乐创作",
        model: "phan Music 1.5",
        duration: "00:30",
        status: "已完成",
        prompt: "",
        params: { instrumental: true, lyrics: "", style: "悬疑电影配乐，低音弦乐，电子脉冲，冷峻克制", songName: "雨夜仓库", count: 1 },
      },
      {
        id: "audio-demo-2",
        title: "林溪 · 仓库对白",
        mode: "文生音频",
        model: "phan Voice 2.0",
        duration: "00:12",
        status: "已完成",
        prompt: "[紧张] 目标不止一个，二层还有人。<#0.5#>你先别回头。",
        params: { voiceId: "voice-linxi", speed: 1, pitch: 0, volume: 100, language: "中文", longMode: false },
      },
    ];
  }
  return scene.audios;
};

const workflowAssignedKeyframes = (scene) => {
  let nonGridOrdinal = -1;
  return scene.keyframes.map((frame, index) => ({
    frame,
    index,
    assignedShotIndex: frame.grid ? null : (Number.isInteger(frame.assignedShotIndex) ? frame.assignedShotIndex : ((nonGridOrdinal += 1) % scene.shots.length)),
  }));
};

const workflowVideoPrompt = (episode, scene, shotIndex = "") => {
  const keyframeCount = scene.keyframes.filter((frame) => !frame.grid && !frame.pending).length;
  if (shotIndex !== "" && scene.shots[Number(shotIndex)]) {
    const shot = scene.shots[Number(shotIndex)];
    const assetText = (shot.assets || []).map((asset) => `@${asset.type}:${asset.name}`).join(" ");
    return `${episode.title}｜${scene.title}｜${shot.no}｜${shot.duration}\n\n${shot.script}\n\n参考资产：${assetText || "无"}\n\n视频要求：基于当前镜关键帧与参考资产生成连续视频，保持角色外貌、服装、场景空间和光线方向一致，镜头运动遵循分镜描述。`;
  }
  return `${episode.title}｜${scene.title}\n\n基于当前场剧本、分镜表与 ${keyframeCount} 张可用关键帧生成每镜视频，保持角色造型、场景空间、光线方向和镜头运动连续。\n\n${scene.shots
    .map((shot) => `${shot.no}｜${shot.duration}\n${shot.script}`)
    .join("\n\n")}\n\n输出要求：每镜独立生成视频片段，并同步写入底部时间线的视频线；保留关键帧线作为对齐参考。`;
};

const workflowVideoDraftPromptValue = () => state.workflowVideoDraftPrompt;

const workflowVideoImageReferences = (episode, scene) => {
  const selectedShotIndex = state.workflowVideoShotIndex;
  const selectedShot = selectedShotIndex === "" ? null : scene.shots[Number(selectedShotIndex)];
  return [
    ...workflowAssignedKeyframes(scene)
      .filter(({ frame, assignedShotIndex }) => !frame.pending && (frame.grid || selectedShotIndex === "" || assignedShotIndex === Number(selectedShotIndex)))
      .slice(0, 6)
      .map(({ frame, index, assignedShotIndex }) => ({
        label: frame.grid ? "整场关键帧" : workflowKeyframeDisplayName(episode, scene, frame, assignedShotIndex),
        image: frame.image,
        source: "关键帧",
        index,
        key: `keyframe-${index}`,
        removable: true,
      })),
    ...(selectedShot?.assets || []).map((asset) => ({
      label: asset.name,
      image: asset.image,
      source: asset.type,
      key: `asset-${asset.type}-${asset.name}`,
      removable: true,
    })),
    ...state.workflowVideoReferences.images.map((item, referenceIndex) => ({
      ...item,
      removable: true,
      referenceIndex,
      key: `manual-${referenceIndex}`,
    })),
  ].filter((item) => !state.workflowVideoExcludedReferenceKeys.includes(item.key));
};

const workflowPromptReferences = (episode, scene) => [
  ...workflowVideoImageReferences(episode, scene).map((item) => ({ label: item.label, image: item.image, type: "参考图" })),
  ...state.workflowVideoReferences.videos.map((item) => ({ label: item.label || item.name, image: item.image, type: "参考视频" })),
  ...state.workflowVideoReferences.audios.map((item) => ({ label: item.label || item.name, image: item.image, type: "参考音频" })),
].filter((item, index, list) => item.label && list.findIndex((candidate) => candidate.type === item.type && candidate.label === item.label) === index);

const renderWorkflowPromptContent = (prompt, references) => {
  let remaining = prompt || "";
  let result = "";
  const mentionReferences = [...references].sort((a, b) => b.label.length - a.label.length);
  while (remaining) {
    const match = mentionReferences
      .map((item) => ({ item, index: remaining.indexOf(`@${item.label}`) }))
      .filter(({ index }) => index >= 0)
      .sort((a, b) => a.index - b.index)[0];
    if (!match) {
      result += escapeHtml(remaining).replace(/\n/g, "<br>");
      break;
    }
    result += escapeHtml(remaining.slice(0, match.index)).replace(/\n/g, "<br>");
    result += `<span class="workflow-prompt-mention-chip" contenteditable="false" data-workflow-mention-label="${escapeHtml(match.item.label)}"><span class="workflow-prompt-mention-prefix">@</span><img src="${escapeHtml(match.item.image || "./assets/images/canvas-node-preview.png")}" alt="" /><span>${escapeHtml(match.item.label)}</span></span>`;
    remaining = remaining.slice(match.index + match.item.label.length + 1);
  }
  return result;
};

const workflowPromptEditorValue = (editor) => {
  if (!editor) return "";
  const readNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) return node.nodeValue || "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.classList.contains("workflow-prompt-mention-chip")) return `@${node.dataset.workflowMentionLabel || ""}`;
    if (node.tagName === "BR") return "\n";
    return Array.from(node.childNodes).map(readNode).join("");
  };
  return Array.from(editor.childNodes).map(readNode).join("");
};

const workflowPromptCursorOffset = (editor) => {
  const selection = window.getSelection();
  if (!selection?.rangeCount || !editor.contains(selection.anchorNode)) return workflowPromptEditorValue(editor).length;
  const range = selection.getRangeAt(0).cloneRange();
  range.selectNodeContents(editor);
  range.setEnd(selection.anchorNode, selection.anchorOffset);
  return range.toString().length;
};

const setWorkflowPromptCursorOffset = (editor, offset) => {
  const range = document.createRange();
  const selection = window.getSelection();
  let consumed = 0;
  const nodes = Array.from(editor.childNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    const length = node.textContent?.length || 0;
    if (offset <= consumed + length) {
      if (node.nodeType === Node.TEXT_NODE) range.setStart(node, Math.max(0, offset - consumed));
      else range.setStart(editor, index + (offset === consumed ? 0 : 1));
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
      return;
    }
    consumed += length;
  }
  range.selectNodeContents(editor);
  range.collapse(false);
  selection?.removeAllRanges();
  selection?.addRange(range);
};

const workflowVideoDisplayName = (episodeIndex, sceneIndex, shotIndex) =>
  `第${episodeIndex + 1}集·第${sceneIndex + 1}场·${shotIndex === null || shotIndex === undefined ? "不指定镜头" : `第${shotIndex + 1}镜`}`;

const workflowReferenceLabelList = (items = []) =>
  items.length ? items.map((item) => `${item.source ? `${item.source} · ` : ""}${item.label || item.name}`).join("、") : "无";

const workflowSelectOption = (value, selectedValue) =>
  `<option${value === selectedValue ? " selected" : ""}>${escapeHtml(value)}</option>`;

const workflowReferenceMediaThumb = (item, kind, videoIndex, refIndex) => {
  const label = item.label || item.name || (kind === "audio" ? "参考音频" : kind === "video" ? "参考视频" : "参考图");
  const image = item.image || (kind === "audio" ? "./assets/images/canvas-node-preview.png" : "./assets/images/canvas-chase-sequence.jpg");
  return `
    <button class="workflow-reference-media is-${kind}" type="button" data-workflow-action="open-reference-preview" data-reference-kind="${kind}" data-workflow-video-index="${videoIndex}" data-reference-index="${refIndex}">
      <img src="${escapeHtml(image)}" alt="" />
      <span>${escapeHtml(label)}</span>
    </button>
  `;
};

const workflowReferenceMediaGrid = (items = [], kind, videoIndex) =>
  items.length
    ? `<div class="workflow-reference-media-grid">${items.map((item, index) => workflowReferenceMediaThumb(item, kind, videoIndex, index)).join("")}</div>`
    : "无";

const renderWorkflowResultTabs = () => `
  <div class="workflow-result-tabs" role="tablist" aria-label="当前场结果">
    <button class="${state.workflowResultView === "generator" ? "active" : ""}" type="button" data-workflow-action="set-result-view" data-result-view="generator">视频生成器</button>
    <button class="${state.workflowResultView === "videos" ? "active" : ""}" type="button" data-workflow-action="set-result-view" data-result-view="videos">该场视频</button>
  </div>
`;

const renderWorkflowVideoResults = (episode, scene, episodeIndex, sceneIndex) => {
  const videos = workflowSceneVideoResults(scene);
  return `
    ${renderWorkflowResultTabs()}
    <div class="workflow-video-result-list">
      ${videos.length ? videos
    .map((video, index) => {
      const shot = Number.isInteger(video.shotIndex) ? scene.shots[video.shotIndex] : null;
      const references = video.references || { images: [], videos: [], audios: [] };
      return `
        <article class="workflow-video-card${video.status === "生成中" ? " is-pending" : ""}${video.detailOpen ? " is-expanded" : ""}" draggable="${video.status === "已完成" ? "true" : "false"}" data-workflow-video-index="${index}">
          <div class="workflow-video-thumb" data-workflow-action="preview-scene-video" data-workflow-video-index="${index}">
            <img src="${escapeHtml(video.image)}" alt="" />
            <button type="button" data-workflow-action="preview-scene-video" data-workflow-video-index="${index}" aria-label="预览视频">${workflowPlayerIcon.play}</button>
            <span>${video.status === "生成中" ? "生成中" : "预览"}</span>
          </div>
          <div class="workflow-video-card-body">
            <div>
              <strong>${escapeHtml(video.title || workflowVideoDisplayName(episodeIndex, sceneIndex, video.shotIndex))}</strong>
              <span>${escapeHtml(video.duration || shot?.duration || "3s")}</span>
            </div>
            <em>${escapeHtml(video.status)}</em>
          </div>
          <dl class="workflow-video-param-list${video.detailOpen ? " is-open" : ""}">
            <div><dt>生成模式</dt><dd>${escapeHtml(video.mode || "全能参考")}</dd></div>
            <div><dt>模型</dt><dd>${escapeHtml(video.model || "phan movie Video 2.1")}</dd></div>
            <div><dt>比例</dt><dd>${escapeHtml(video.ratio || "16:9")}</dd></div>
            <div><dt>分辨率</dt><dd>${escapeHtml(video.resolution || "1080P")}</dd></div>
            <div><dt>时长</dt><dd>${escapeHtml(video.duration || shot?.duration || "3s")}</dd></div>
            <div><dt>配音</dt><dd>${escapeHtml(video.dubbing || "不生成配音")}</dd></div>
            <div class="is-wide"><dt>提示词</dt><dd>${escapeHtml(video.prompt || shot?.script || "")}</dd></div>
            <div class="is-wide"><dt>参考图</dt><dd>${workflowReferenceMediaGrid(references.images, "image", index)}</dd></div>
            <div class="is-wide"><dt>参考视频</dt><dd>${workflowReferenceMediaGrid(references.videos, "video", index)}</dd></div>
            <div class="is-wide"><dt>参考音频</dt><dd>${workflowReferenceMediaGrid(references.audios, "audio", index)}</dd></div>
          </dl>
          <footer>
            <button type="button" data-workflow-action="copy-video-params" data-workflow-video-index="${index}">复制参数到生成器</button>
            <button class="workflow-video-timeline-button" type="button" data-workflow-action="send-video-to-timeline" data-workflow-video-index="${index}">加入时间线</button>
            <button type="button" data-workflow-action="download-scene-video" data-workflow-video-index="${index}">下载</button>
            <button class="workflow-video-delete-button" type="button" data-workflow-action="delete-scene-video" data-workflow-video-index="${index}">删除</button>
          </footer>
        </article>
      `;
    })
    .join("") : `<p class="workflow-video-empty">暂无视频结果，请先在视频生成器中生成。</p>`}
    </div>
  `;
};

const renderWorkflowVideoGenerator = (episode, scene) => {
  const selectedShotIndex = state.workflowVideoShotIndex;
  const selectedShot = selectedShotIndex === "" ? null : scene.shots[Number(selectedShotIndex)];
  const settings = state.workflowVideoSettings;
  const defaultDuration = selectedShot?.duration || `${workflowSceneDurationSeconds(scene)}s`;
  const selectedDuration = settings.duration || defaultDuration;
  const imageReferences = workflowVideoImageReferences(episode, scene);
  const promptReferences = workflowPromptReferences(episode, scene);
  return `
    ${renderWorkflowResultTabs()}
    <div class="workflow-video-generator">
      <label class="workflow-video-field">
        <span>生成模式</span>
        <select data-workflow-video-param="mode">
          ${["全能参考"].map((item) => workflowSelectOption(item, settings.mode)).join("")}
        </select>
      </label>
      <label class="workflow-video-field">
        <span>选择模型</span>
        <select data-workflow-video-param="model">
          ${["phan movie Video 2.1", "phan motion Pro"].map((item) => workflowSelectOption(item, settings.model)).join("")}
        </select>
      </label>
      <label class="workflow-video-field">
        <span>生成镜头</span>
        <select data-workflow-video-shot-select>
          <option value=""${selectedShotIndex === "" ? " selected" : ""}>不指定镜头</option>
          ${scene.shots.map((shot, index) => `<option value="${index}"${selectedShotIndex === String(index) ? " selected" : ""}>${escapeHtml(shot.no)} · ${escapeHtml(shot.duration)}</option>`).join("")}
        </select>
      </label>
      <label class="workflow-generate-prompt workflow-video-prompt">
        <span>视频生成提示词 <em>@参考图 / @参考视频 / @参考音频</em></span>
        <div class="workflow-prompt-editor" contenteditable="true" data-workflow-video-prompt data-placeholder="输入视频生成提示词，输入 @ 可引用已添加的参考资源">${renderWorkflowPromptContent(workflowVideoDraftPromptValue(), promptReferences)}</div>
        <div class="workflow-prompt-mention-menu" data-workflow-prompt-mention-menu></div>
      </label>
      <section class="workflow-video-reference-section">
        <header>
          <strong>参考图</strong>
          <div>
            <button type="button" data-workflow-action="open-scene-keyframe-picker">选择该场关键帧</button>
          </div>
        </header>
        <div class="workflow-reference-strip workflow-video-image-reference-strip" aria-label="参考图">
          ${imageReferences.map((item) => `
            <div class="workflow-reference-thumb">
              <img src="${escapeHtml(item.image)}" alt="" />
              <span>${escapeHtml(item.source)}</span>
              <strong>${escapeHtml(item.label)}</strong>
              ${item.removable ? `<button class="workflow-reference-remove" type="button" data-workflow-action="remove-video-reference" data-reference-kind="image" data-reference-index="${item.referenceIndex ?? ""}" data-reference-key="${escapeHtml(item.key)}" aria-label="删除参考图">✕</button>` : ""}
            </div>
          `).join("")}
          <button type="button" class="workflow-reference-upload" data-workflow-action="upload-video-reference" data-reference-kind="image">
            <span>＋</span>
            <strong>上传参考</strong>
          </button>
        </div>
      </section>
      <section class="workflow-video-reference-section">
        <header>
          <strong>参考视频</strong>
          <button type="button" data-workflow-action="upload-video-reference" data-reference-kind="video">上传</button>
        </header>
        <div class="workflow-video-upload-list">
          ${state.workflowVideoReferences.videos.length ? state.workflowVideoReferences.videos.map((item, index) => `
            <div class="workflow-reference-media is-video" data-workflow-action="preview-generator-reference" data-reference-kind="video" data-reference-index="${index}" role="button" tabindex="0">
              <img src="${escapeHtml(item.image || "./assets/images/canvas-chase-sequence.jpg")}" alt="" />
              <span>${escapeHtml(item.name)}</span>
              <button class="workflow-reference-remove" type="button" data-workflow-action="remove-video-reference" data-reference-kind="video" data-reference-index="${index}" aria-label="删除参考视频">✕</button>
            </div>
          `).join("") : `<p>暂无参考视频</p>`}
        </div>
      </section>
      <section class="workflow-video-reference-section">
        <header>
          <strong>参考音频</strong>
          <button type="button" data-workflow-action="upload-video-reference" data-reference-kind="audio">上传</button>
        </header>
        <div class="workflow-video-upload-list">
          ${state.workflowVideoReferences.audios.length ? state.workflowVideoReferences.audios.map((item, index) => `
            <div class="workflow-reference-media is-audio" data-workflow-action="preview-generator-reference" data-reference-kind="audio" data-reference-index="${index}" role="button" tabindex="0">
              <img src="${escapeHtml(item.image || "./assets/images/canvas-node-preview.png")}" alt="" />
              <span>${escapeHtml(item.name)}</span>
              <button class="workflow-reference-remove" type="button" data-workflow-action="remove-video-reference" data-reference-kind="audio" data-reference-index="${index}" aria-label="删除参考音频">✕</button>
            </div>
          `).join("") : `<p>暂无参考音频</p>`}
        </div>
      </section>
      <div class="workflow-video-generator-options">
        <section>
          <strong>画面比例</strong>
          <select data-workflow-video-param="ratio">
            ${["16:9", "9:16", "1:1"].map((item) => workflowSelectOption(item, settings.ratio)).join("")}
          </select>
        </section>
        <section>
          <strong>分辨率</strong>
          <select data-workflow-video-param="resolution">
            ${["1080P", "2K", "4K"].map((item) => workflowSelectOption(item, settings.resolution)).join("")}
          </select>
        </section>
        <section>
          <strong>时长</strong>
          <select data-workflow-video-param="duration">
            ${[defaultDuration, "3s", "5s", "8s"].filter((item, index, list) => list.indexOf(item) === index).map((item) => workflowSelectOption(item, selectedDuration)).join("")}
          </select>
        </section>
        <section>
          <strong>是否配音</strong>
          <select data-workflow-video-param="dubbing">
            ${["不生成配音", "使用当前音频线", "同步生成配音"].map((item) => workflowSelectOption(item, settings.dubbing)).join("")}
          </select>
        </section>
      </div>
      <div class="workflow-video-generator-actions">
        <span class="workflow-generate-cost"><img src="${CANVAS_NODE_CREDIT}" alt="" />96</span>
        <button class="workflow-primary-button" type="button" data-workflow-action="generate-scene-video">生成视频</button>
      </div>
    </div>
  `;
};

const workflowWaveform = (seed = 0, count = 42) => `<div class="workflow-audio-waveform" aria-hidden="true">${Array.from({ length: count }, (_, index) => {
  const height = 18 + ((index * 31 + seed * 17) % 68);
  return `<b style="height:${height}%"></b>`;
}).join("")}</div>`;

const renderWorkflowAudioTabs = () => `
  <div class="workflow-result-tabs" role="tablist" aria-label="本场音频">
    <button class="${state.workflowResultView === "audio-generator" ? "active" : ""}" type="button" data-workflow-action="set-result-view" data-result-view="audio-generator">音频生成器</button>
    <button class="${state.workflowResultView === "audios" ? "active" : ""}" type="button" data-workflow-action="set-result-view" data-result-view="audios">本场音频</button>
  </div>`;

const renderWorkflowAudioResults = (scene) => {
  const audios = workflowSceneAudioResults(scene);
  return `
    ${renderWorkflowAudioTabs()}
    <div class="workflow-audio-result-list">
      <div class="workflow-audio-list-head"><span>${audios.length} 条音频</span></div>
      ${audios.map((audio, index) => `
        <article class="workflow-audio-card${audio.status === "生成中" ? " is-pending" : ""}" draggable="${audio.status === "已完成"}" data-workflow-audio-index="${index}">
          <button class="workflow-audio-play" type="button" data-workflow-action="preview-scene-audio" data-workflow-audio-index="${index}" aria-label="预览音频">${audio.status === "生成中" ? workflowEditIcon.imageGeneration : workflowPlayerIcon.play}</button>
          <div class="workflow-audio-card-main">
            <div class="workflow-audio-card-title"><strong>${escapeHtml(audio.title)}</strong><span>${escapeHtml(audio.duration)}</span><em>${escapeHtml(audio.mode)}</em></div>
            ${workflowWaveform(index)}
          </div>
          <div class="workflow-audio-card-actions">
            <button type="button" data-workflow-action="copy-audio-params" data-workflow-audio-index="${index}">复制参数</button>
            <button type="button" data-workflow-action="send-audio-to-timeline" data-workflow-audio-index="${index}">加入时间线</button>
            <button type="button" data-workflow-action="download-scene-audio" data-workflow-audio-index="${index}">下载</button>
            <button class="is-danger" type="button" data-workflow-action="delete-scene-audio" data-workflow-audio-index="${index}">删除</button>
          </div>
        </article>`).join("")}
    </div>`;
};

const workflowTtsVoice = () => state.workflowTtsVoices.find((voice) => voice.id === state.workflowTtsVoiceId) || state.workflowTtsVoices[0];

const renderWorkflowTtsContent = (value = "") => {
  const pattern = /\[([^\]|]+)\|([^\]]+)\]/g;
  let lastIndex = 0;
  let html = "";
  for (const match of value.matchAll(pattern)) {
    html += escapeHtml(value.slice(lastIndex, match.index)).replace(/\n/g, "<br>");
    html += `<span class="workflow-tts-emotion-chip" contenteditable="false" data-emotion="${escapeHtml(match[1])}" data-text="${escapeHtml(match[2])}"><b>${escapeHtml(match[1])}</b><span>${escapeHtml(match[2])}</span><i data-workflow-action="remove-tts-emotion-chip">×</i></span>`;
    lastIndex = match.index + match[0].length;
  }
  return html + escapeHtml(value.slice(lastIndex)).replace(/\n/g, "<br>");
};

const workflowTtsEditorValue = (editor) => {
  if (!editor) return state.workflowTtsText;
  const read = (node) => {
    if (node.nodeType === Node.TEXT_NODE) return node.nodeValue || "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.classList.contains("workflow-tts-emotion-chip")) return `[${node.dataset.emotion}|${node.dataset.text}]`;
    if (node.tagName === "BR") return "\n";
    return Array.from(node.childNodes).map(read).join("");
  };
  return Array.from(editor.childNodes).map(read).join("");
};

const workflowTtsSelectionOffset = (editor, boundaryNode, boundaryOffset) => {
  let offset = 0;
  let found = false;
  const walk = (node) => {
    if (found) return;
    if (node === boundaryNode) {
      if (node.nodeType === Node.TEXT_NODE) offset += boundaryOffset;
      else Array.from(node.childNodes).slice(0, boundaryOffset).forEach((child) => { offset += workflowTtsEditorValue({ childNodes: [child] }).length; });
      found = true;
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) { offset += (node.nodeValue || "").length; return; }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.classList.contains("workflow-tts-emotion-chip")) { offset += `[${node.dataset.emotion}|${node.dataset.text}]`.length; return; }
    if (node.tagName === "BR") { offset += 1; return; }
    Array.from(node.childNodes).forEach(walk);
  };
  Array.from(editor.childNodes).forEach(walk);
  return offset;
};

const renderWorkflowTtsCloneModal = () => state.workflowTtsCloneOpen ? `
  <div class="workflow-voice-clone-modal">
    <button class="workflow-voice-clone-backdrop" type="button" data-workflow-action="close-voice-clone" aria-label="关闭音色克隆"></button>
    <section class="workflow-voice-clone-dialog" role="dialog" aria-modal="true" aria-label="克隆音色">
      <header><div><strong>克隆我的音色</strong><span>使用清晰、无噪声的录音可获得更自然的效果</span></div><button type="button" data-workflow-action="close-voice-clone">×</button></header>
      <label class="workflow-voice-clone-name"><span>音色名称</span><input type="text" maxlength="20" value="${escapeHtml(state.workflowTtsCloneName)}" data-workflow-tts-field="cloneName" /></label>
      <div class="workflow-voice-clone-methods">
        <button class="${state.workflowTtsCloneMethod === "record" ? "active" : ""}" type="button" data-workflow-action="set-voice-clone-method" data-clone-method="record"><strong>朗读文字</strong><span>按示例朗读约 10–20 秒</span></button>
        <button class="${state.workflowTtsCloneMethod === "upload" ? "active" : ""}" type="button" data-workflow-action="set-voice-clone-method" data-clone-method="upload"><strong>上传录音</strong><span>支持 MP3、WAV，10 秒以上</span></button>
      </div>
      ${state.workflowTtsCloneMethod === "record" ? `
        <div class="workflow-voice-record"><span>请朗读</span><p>清晨的第一缕阳光越过山坡，风从窗外轻轻吹进来。今天会是充满希望的一天。</p><button class="${state.workflowTtsCloneRecorded ? "is-recorded" : ""}" type="button" data-workflow-action="record-clone-voice">${state.workflowTtsCloneRecorded ? "✓ 录音完成 · 00:14" : "● 开始录音"}</button></div>
      ` : `<button class="workflow-voice-upload" type="button" data-workflow-action="upload-clone-voice"><strong>上传一段录音</strong><span>${state.workflowTtsCloneRecorded ? "录音样本.wav · 00:18" : "点击选择或拖入音频文件"}</span></button>`}
      <label class="workflow-voice-consent"><input type="checkbox" checked /><span>我确认拥有该声音的合法使用授权，并同意音色克隆服务条款</span></label>
      <footer><button type="button" data-workflow-action="close-voice-clone">取消</button><button class="primary" type="button" data-workflow-action="create-cloned-voice" ${state.workflowTtsCloneRecorded ? "" : "disabled"}>生成音色</button></footer>
    </section>
  </div>` : "";

const renderWorkflowAudioGenerator = () => {
  const isMusic = state.workflowAudioMode === "music";
  const isTts = state.workflowAudioMode === "sfx";
  const isVoiceDesign = state.workflowAudioMode === "voice-design";
  const settings = state.workflowAudioSettings;
  const models = ["phan Music 1.5", "Suno v4.5", "Mureka O2"];
  if (!models.includes(settings.model)) settings.model = models[0];
  const voiceOptions = state.workflowTtsVoices.filter((voice) => voice.group === state.workflowTtsVoiceTab);
  const visibleVoices = state.workflowTtsVoicesExpanded ? voiceOptions : voiceOptions.slice(0, 4);
  const hiddenVoiceCount = Math.max(0, voiceOptions.length - visibleVoices.length);
  const selectedVoice = workflowTtsVoice();
  return `
    ${renderWorkflowAudioTabs()}
    <div class="workflow-audio-generator">
      <div class="workflow-audio-mode-switch" role="radiogroup" aria-label="音频创作模式">
        <button class="${isMusic ? "active" : ""}" type="button" data-workflow-action="set-audio-mode" data-audio-mode="music"><span>♫</span><div><strong>音乐创作</strong><small>配乐、主题曲、氛围音乐</small></div></button>
        <button class="${isTts ? "active" : ""}" type="button" data-workflow-action="set-audio-mode" data-audio-mode="sfx"><span>≋</span><div><strong>文生音频</strong><small>选择音色，将文字生成语音</small></div></button>
        <button class="${isVoiceDesign ? "active" : ""}" type="button" data-workflow-action="set-audio-mode" data-audio-mode="voice-design"><span>◌</span><div><strong>音色设计</strong><small>设计、管理和调试音色</small></div></button>
      </div>
      ${isMusic ? `
        <label class="workflow-video-field"><span>选择模型</span><select data-workflow-audio-param="model">${models.map((item) => workflowSelectOption(item, settings.model)).join("")}</select></label>
        <button class="workflow-audio-reference-upload${state.workflowAudioReference ? " has-file" : ""}" type="button" data-workflow-action="upload-audio-reference">
          <span>♫</span><div><strong>参考音乐（可选）</strong><small>${state.workflowAudioReference ? escapeHtml(state.workflowAudioReference) : "点击上传，生成专属翻唱"}</small></div><em>${state.workflowAudioReference ? "重新上传" : "上传"}</em>
        </button>
        ${state.workflowAudioInstrumental ? `<section class="workflow-music-instrumental-row"><strong>歌词不可用</strong><label class="workflow-audio-toggle"><button class="active" type="button" data-workflow-action="toggle-audio-instrumental" aria-pressed="true"><i></i></button><span>纯音乐</span></label></section>` : `<section class="workflow-music-text-card">
          <header><strong>歌词</strong><label class="workflow-audio-toggle"><button type="button" data-workflow-action="toggle-audio-instrumental" aria-pressed="false"><i></i></button><span>纯音乐</span></label></header>
          <textarea data-workflow-music-field="lyrics" maxlength="3500" placeholder="在此添加你的歌词，也可以输入 / 查看或插入歌词结构\n可以在 [Intro]、[Verse]、[Chorus] 等结构后补充编曲、人声、情绪等说明\n如果未填写歌词，我们将根据曲风为你自动生成">${escapeHtml(state.workflowAudioLyrics)}</textarea>
          <footer><span>${state.workflowAudioLyrics.length} / 3,500 字符</span></footer>
        </section>`}
        <section class="workflow-music-text-card is-style">
          <header><strong>风格</strong></header>
          <textarea data-workflow-music-field="style" maxlength="2000" placeholder="描述音乐风格与制作要求。例如曲风、情绪、速度、乐器或人声类型">${escapeHtml(state.workflowAudioStyle)}</textarea>
          <footer><span>${state.workflowAudioStyle.length} / 2,000 字符</span></footer>
        </section>
        <label class="workflow-music-name"><span>歌曲名称</span><input type="text" maxlength="60" value="${escapeHtml(state.workflowAudioSongName)}" data-workflow-music-field="songName" placeholder="输入歌曲名称" /></label>
      ` : isTts ? `
        <label class="workflow-video-field"><span>选择模型</span><select data-workflow-tts-model>${["phan Voice 2.0", "CosyVoice 3", "Eleven Multilingual v2"].map((item) => workflowSelectOption(item, state.workflowTtsModel)).join("")}</select></label>
        <section class="workflow-tts-voice-section">
          <header><div><strong>选择音色</strong><span>当前：${escapeHtml(selectedVoice.name)} · ${escapeHtml(selectedVoice.meta)}</span></div><button type="button" data-workflow-action="open-voice-clone">＋ 克隆音色</button></header>
          <div class="workflow-tts-voice-tabs"><button class="${state.workflowTtsVoiceTab === "official" ? "active" : ""}" type="button" data-workflow-action="set-voice-tab" data-voice-tab="official">官方音色</button><button class="${state.workflowTtsVoiceTab === "mine" ? "active" : ""}" type="button" data-workflow-action="set-voice-tab" data-voice-tab="mine">我的音色</button></div>
          <div class="workflow-tts-voice-list">${visibleVoices.length ? visibleVoices.map((voice) => `<button class="${voice.id === state.workflowTtsVoiceId ? "active" : ""}" type="button" data-workflow-action="select-tts-voice" data-voice-id="${voice.id}"><div><strong>${escapeHtml(voice.name)}</strong><span>${escapeHtml(voice.meta)}</span></div><em data-workflow-action="preview-tts-voice">▷</em>${voice.group === "mine" ? `<span class="workflow-tts-delete-voice" data-workflow-action="delete-tts-voice" data-voice-id="${voice.id}" title="删除音色">删除</span>` : ""}</button>`).join("") : `<div class="workflow-tts-empty-voice"><span>还没有克隆音色</span><button type="button" data-workflow-action="open-voice-clone">创建第一个音色</button></div>`}</div>
          ${voiceOptions.length > 4 ? `<button class="workflow-tts-voice-more" type="button" data-workflow-action="toggle-tts-voices">${state.workflowTtsVoicesExpanded ? "收起" : `查看更多（${hiddenVoiceCount}）`}</button>` : ""}
        </section>
        <section class="workflow-tts-effects"><header><strong>音色效果</strong><button type="button" data-workflow-action="reset-tts-effects">恢复默认</button></header><div>
          <label><span>语速 <em>${state.workflowTtsSpeed.toFixed(1)}×</em></span><input type="range" min="0.5" max="2" step="0.1" value="${state.workflowTtsSpeed}" data-workflow-tts-range="speed" /></label>
          <label><span>声调 <em>${state.workflowTtsPitch > 0 ? "+" : ""}${state.workflowTtsPitch}</em></span><input type="range" min="-12" max="12" step="1" value="${state.workflowTtsPitch}" data-workflow-tts-range="pitch" /></label>
          <label><span>音量 <em>${state.workflowTtsVolume}%</em></span><input type="range" min="0" max="150" step="5" value="${state.workflowTtsVolume}" data-workflow-tts-range="volume" /></label>
        </div></section>
        <section class="workflow-tts-editor">
          <div class="workflow-tts-content" contenteditable="true" data-workflow-tts-editor data-placeholder="在此处开始输入文字，生成您的个性化音频。\A\A💡选中文字后点击下方情绪按钮，即可为文字添加情绪。">${renderWorkflowTtsContent(state.workflowTtsText)}</div>
          <div class="workflow-tts-tools"><div><button type="button" data-workflow-action="open-tts-emotion" disabled>＋ 情绪</button><button type="button" data-workflow-action="insert-tts-tag" data-tts-tag="<#0.5#>">&lt;#&gt; 停顿</button><button type="button" data-workflow-action="insert-tts-tag" data-tts-tag="(轻笑)">( ) 语气词</button></div><label>长文模式 <button class="${state.workflowTtsLongMode ? "active" : ""}" type="button" data-workflow-action="toggle-tts-long-mode"><i></i></button></label><span>${state.workflowTtsText.length.toLocaleString()} / ${(state.workflowTtsLongMode ? 200000 : 5000).toLocaleString()} 字符</span></div>
          ${state.workflowTtsEmotionMenu ? `<div class="workflow-tts-emotion-menu" style="--emotion-x:${state.workflowTtsEmotionMenu.x}px;--emotion-y:${state.workflowTtsEmotionMenu.y}px"><strong>选择情绪</strong><div>${["开心", "难过", "生气", "害怕", "厌恶", "惊讶", "中性", "生动"].map((emotion) => `<button type="button" data-workflow-action="apply-tts-emotion" data-emotion="${emotion}">${emotion}</button>`).join("")}</div><button class="close" type="button" data-workflow-action="close-tts-emotion">×</button></div>` : ""}
          <label class="workflow-music-name workflow-tts-audio-name"><span>音频名称</span><input type="text" maxlength="60" value="${escapeHtml(state.workflowAudioName)}" data-workflow-audio-name placeholder="输入音频名称" /></label>
          <footer><label><span>◎</span><select data-workflow-tts-language>${["自动检测", "中文", "英语", "日语", "法语"].map((item) => workflowSelectOption(item, state.workflowTtsLanguage)).join("")}</select></label><span class="workflow-generate-cost workflow-tts-credit"><img src="${CANVAS_NODE_CREDIT}" alt="" />${Math.max(1, Math.ceil(state.workflowTtsText.length / 100))}</span><button class="primary" type="button" data-workflow-action="generate-scene-audio">✦ 生成音频</button></footer>
        </section>` : `
        <section class="workflow-audio-coming-soon">
          <strong>音色设计</strong>
          <span>后续可在这里集中创建、调试、管理音色，并复用到文生音频模块。</span>
        </section>`}
      ${isMusic ? `<div class="workflow-video-generator-actions workflow-audio-generator-actions"><div class="workflow-music-quantity"><span>数量</span><button type="button" data-workflow-action="change-audio-count" data-count-delta="-1" ${state.workflowAudioCount <= 1 ? "disabled" : ""}>−</button><strong>${state.workflowAudioCount}</strong><button type="button" data-workflow-action="change-audio-count" data-count-delta="1" ${state.workflowAudioCount >= 4 ? "disabled" : ""}>＋</button></div><span class="workflow-generate-cost"><img src="${CANVAS_NODE_CREDIT}" alt="" />${48 * state.workflowAudioCount}</span><button class="workflow-primary-button" type="button" data-workflow-action="generate-scene-audio">生成${state.workflowAudioCount} 首音乐</button></div>` : ""}
    </div>${renderWorkflowTtsCloneModal()}`;
};

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
  const uploadConfig = workflowUploadTargetConfig(state.workflowReferenceTarget);
  const uploadMeta = workflowUploadTypeMeta[uploadConfig.type];
  const activeSource = workflowReferenceSourceAvailable(state.workflowReferenceSource) ? state.workflowReferenceSource : "local";
  const availableCategories = workflowReferenceCategoriesForSource(activeSource, uploadConfig.type);
  const activeCategory = workflowReferenceCurrentCategory(activeSource, uploadConfig.type);
  const sourceLabel = workflowReferenceSources.find((source) => source.id === activeSource)?.label || "本地";
  const libraryLabel = workflowReferenceLibraryNames[activeSource] || "";
  const categoryOffset = Math.max(0, workflowReferenceCategories.indexOf(activeCategory));
  const libraryAssets = Array.from({ length: 8 }, (_, index) => ({
    image: workflowReferenceVisual(uploadConfig.type, categoryOffset + index),
    name: workflowReferenceAssetName(activeSource, activeCategory, index),
    type: uploadConfig.type,
    index,
  }));
  const emptyText = uploadConfig.type === "video"
    ? `暂无可用视频${activeSource === "market" ? "素材" : "资产"}`
    : uploadConfig.type === "audio"
      ? `暂无可用音频${activeSource === "market" ? "素材" : "资产"}`
      : `暂无可用图片${activeSource === "market" ? "素材" : "资产"}`;

  return `
    <div class="workflow-reference-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-reference-modal" aria-label="关闭${uploadMeta.label}上传"></button>
      <section class="workflow-reference-dialog" role="dialog" aria-modal="true" aria-labelledby="workflow-reference-title">
        <header>
          <div>
            <strong id="workflow-reference-title">${escapeHtml(uploadConfig.title)}</strong>
            <span>${escapeHtml(uploadConfig.usage)} · ${escapeHtml(sourceLabel)}</span>
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
                <input type="file" accept="${uploadMeta.accept}" ${uploadConfig.multiple ? "multiple" : ""} hidden />
                <span>＋</span>
                <strong>选择${uploadMeta.label}文件</strong>
                <small>支持 ${uploadMeta.extensions}${uploadConfig.multiple ? "，可多选上传" : "，仅支持单个文件"}</small>
                <em>${uploadMeta.localTip}</em>
              </label>
            ` : `
              ${availableCategories.length ? `
                <div class="workflow-reference-category-nav" aria-label="${libraryLabel}分类">
                  ${availableCategories
                  .map((category) => `<button class="${activeCategory === category ? "active" : ""}" type="button" data-workflow-action="set-reference-category" data-reference-category="${category}">${category}</button>`)
                  .join("")}
                </div>
                <div class="workflow-reference-asset-grid" aria-label="${libraryLabel}${activeCategory}">
                  ${libraryAssets
                  .map((asset) => `
                    <button type="button" class="workflow-reference-asset-card is-${asset.type}" data-workflow-action="confirm-reference-modal" data-reference-asset-index="${asset.index ?? 0}">
                      ${asset.type === "audio" ? `<span class="workflow-reference-audio-card">${icon.audio}<em>Audio</em></span>` : `<img src="${escapeHtml(asset.image)}" alt="" />`}
                      <strong>${escapeHtml(asset.name)}</strong>
                    </button>
                  `)
                  .join("")}
                </div>
              ` : `<div class="workflow-reference-empty"><strong>${emptyText}</strong><span>请切换到本地上传，或选择其他资源来源。</span></div>`}
            `}
          </section>
        </main>
        <footer>
          <button class="workflow-secondary-button" type="button" data-workflow-action="close-reference-modal">取消</button>
          ${activeSource === "local" ? `<button class="workflow-primary-button" type="button" data-workflow-action="confirm-reference-modal">确认上传</button>` : ""}
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

const renderWorkflowVideoDeleteConfirmModal = () => {
  if (state.workflowDeleteVideoIndex === null) return "";
  return `
    <div class="modal-backdrop is-open workflow-keyframe-delete-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-video-delete-title">
        <div class="modal-header">
          <h2 id="workflow-video-delete-title">确认删除</h2>
          <button class="icon-close" type="button" data-workflow-action="close-video-delete" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>是否确认删除？生成记录仍可在生成历史查看</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-video-delete">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-video-delete">确认</button>
        </div>
      </div>
    </div>
  `;
};

const renderWorkflowAudioDeleteConfirmModal = () => {
  if (state.workflowDeleteAudioIndex === null) return "";
  return `
    <div class="modal-backdrop is-open workflow-keyframe-delete-modal">
      <div class="modal-shell delete-modal-shell" role="dialog" aria-modal="true" aria-labelledby="workflow-audio-delete-title">
        <div class="modal-header">
          <h2 id="workflow-audio-delete-title">确认删除</h2>
          <button class="icon-close" type="button" data-workflow-action="close-audio-delete" aria-label="关闭">
            <img src="./assets/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="modal-body delete-modal-body">
          <p>是否确认删除？生成记录仍可在生成历史查看</p>
        </div>
        <div class="modal-footer">
          <button class="pill ghost-footer-pill compact-footer-pill" type="button" data-workflow-action="close-audio-delete">取消</button>
          <button class="pill confirm-footer-pill compact-footer-pill" type="button" data-workflow-action="confirm-audio-delete">确认</button>
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
                  <button class="workflow-track-upload" type="button" data-workflow-action="upload-timeline-media" data-timeline-track="keyframe" aria-label="上传关键帧" title="上传关键帧">＋</button>
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
                  <button class="workflow-track-upload" type="button" data-workflow-action="upload-timeline-media" data-timeline-track="video" aria-label="上传视频" title="上传视频">＋</button>
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
                  <button class="workflow-track-upload" type="button" data-workflow-action="upload-timeline-media" data-timeline-track="audio" aria-label="上传音频" title="上传音频">＋</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  `;
};

const appendTimelineUploadedClip = (track) => {
  const clipMarkup = track === "keyframe"
    ? `<span class="workflow-clip workflow-keyframe-clip" draggable="true" data-clip-kind="keyframe" style="left:68%; width:16%;"><img src="./assets/images/canvas-node-preview.png" alt="" /><em>上传关键帧</em><i class="clip-resize is-left" data-resize-edge="left"></i><i class="clip-resize is-right" data-resize-edge="right"></i></span>`
    : track === "video"
      ? `<span class="workflow-clip workflow-video-clip" draggable="true" data-clip-kind="video" style="left:68%; width:16%;"><img src="./assets/images/canvas-chase-sequence.jpg" alt="" /><em>上传视频</em><i class="clip-resize is-left" data-resize-edge="left"></i><i class="clip-resize is-right" data-resize-edge="right"></i></span>`
      : `<span class="workflow-clip workflow-audio-clip" draggable="true" data-clip-kind="audio" style="left:68%; width:16%;"><b style="height:32%;"></b><b style="height:76%;"></b><b style="height:48%;"></b><b style="height:88%;"></b><b style="height:42%;"></b><b style="height:66%;"></b><em>上传音频</em><i class="clip-resize is-left" data-resize-edge="left"></i><i class="clip-resize is-right" data-resize-edge="right"></i></span>`;
  workflowHomeView?.querySelectorAll(`.workflow-timeline-panel:not(.workflow-timeline-preview-editor) [data-track-row="${track}"] .workflow-track-lane`).forEach((lane) => {
    lane.insertAdjacentHTML("beforeend", clipMarkup);
  });
};

const workflowReferenceResult = (actionButton) => {
  const config = workflowUploadTargetConfig(state.workflowReferenceTarget);
  const source = workflowReferenceSourceAvailable(state.workflowReferenceSource) ? state.workflowReferenceSource : "local";
  const category = workflowReferenceCurrentCategory(source, config.type) || "其他";
  const assetIndex = Number(actionButton?.dataset.referenceAssetIndex || 0);
  const sourceLabel = workflowReferenceSources.find((item) => item.id === source)?.label || "本地";
  const name = source === "local"
    ? `${config.title} ${Date.now().toString().slice(-4)}${config.type === "video" ? ".mp4" : config.type === "audio" ? ".mp3" : ""}`
    : workflowReferenceAssetName(source, category, assetIndex);
  return {
    type: config.type,
    source,
    sourceLabel,
    category,
    name,
    label: name,
    image: source === "local" ? workflowReferenceVisual(config.type, assetIndex) : workflowReferenceVisual(config.type, workflowReferenceCategories.indexOf(category) + assetIndex),
  };
};

const appendWorkflowUploadedKeyframe = (result) => {
  const { scene } = currentWorkflowStudioSelection();
  scene.keyframes.push({
    id: `uploaded-keyframe-${Date.now()}`,
    title: `KF#${scene.keyframes.length + 1}`,
    meta: result.source === "local" ? "本地上传" : result.sourceLabel,
    image: result.image || "./assets/images/canvas-node-preview.png",
    grid: false,
    pending: false,
    resultCount: 1,
    assignedShotIndex: state.workflowShotIndex,
  });
  state.workflowResultView = "keyframes";
};

const appendWorkflowKeyframeReference = (result) => {
  const { shot } = currentWorkflowStudioSelection();
  if (!shot) return;
  shot.assets = shot.assets || [];
  shot.assets.push({
    type: result.category && result.category !== "其他" ? result.category : "参考图",
    name: result.name,
    image: result.image || "./assets/images/canvas-node-preview.png",
  });
};

const completeWorkflowUpload = (actionButton) => {
  const target = state.workflowReferenceTarget || "keyframe";
  const result = workflowReferenceResult(actionButton);
  if (target === "video-image") {
    state.workflowVideoReferences.images.push({
      label: result.name,
      image: result.image || "./assets/images/canvas-node-preview.png",
      source: result.source === "local" ? "上传" : result.category,
    });
    state.workflowVideoDraftPrompt = `${workflowPromptEditorValue(workflowHomeView?.querySelector("[data-workflow-video-prompt]"))}\n@参考图:${result.name}`.trim();
  } else if (target === "video-video") {
    state.workflowVideoReferences.videos.push({
      name: result.name,
      label: result.name,
      image: result.image || "./assets/images/canvas-chase-sequence.jpg",
      source: result.source === "local" ? "上传" : result.category,
    });
    state.workflowVideoDraftPrompt = `${workflowPromptEditorValue(workflowHomeView?.querySelector("[data-workflow-video-prompt]"))}\n@参考视频:${result.name}`.trim();
  } else if (target === "video-audio") {
    state.workflowVideoReferences.audios.push({
      name: result.name,
      label: result.name,
      image: result.image || "./assets/images/canvas-node-preview.png",
      source: result.source === "local" ? "上传" : result.category,
    });
    state.workflowVideoDraftPrompt = `${workflowPromptEditorValue(workflowHomeView?.querySelector("[data-workflow-video-prompt]"))}\n@参考音频:${result.name}`.trim();
  } else if (target === "audio-reference") {
    state.workflowAudioReference = result.name;
  } else if (target === "keyframe-reference") {
    appendWorkflowKeyframeReference(result);
  } else if (target === "keyframe") {
    appendWorkflowUploadedKeyframe(result);
  } else if (target.startsWith("timeline-")) {
    appendTimelineUploadedClip(target.replace("timeline-", ""));
  }
  state.workflowReferenceModalOpen = false;
  state.workflowReferenceTarget = "keyframe";
};

const renderWorkflowClipContextMenu = () => {
  if (!state.workflowClipContextMenu) return "";
  return `
    <div class="workflow-clip-context-menu" style="left:${state.workflowClipContextMenu.x}px; top:${state.workflowClipContextMenu.y}px;">
      <button type="button" data-workflow-action="delete-context-clip">删除</button>
    </div>
  `;
};

const renderWorkflowMediaPreviewModal = () => {
  if (!state.workflowMediaPreview) return "";
  const preview = state.workflowMediaPreview;
  const isAudio = preview.kind === "audio";
  const isVideo = preview.kind === "video" || preview.kind === "scene-video";
  return `
    <div class="workflow-generate-modal workflow-media-preview-modal">
      <button class="workflow-generate-backdrop" type="button" data-workflow-action="close-media-preview" aria-label="关闭预览"></button>
      <section class="workflow-media-preview-dialog" role="dialog" aria-modal="true" aria-label="媒体预览">
        <header>
          <strong>${isAudio ? "音频预览" : escapeHtml(preview.title || "预览")}</strong>
          <button type="button" data-workflow-action="close-media-preview" aria-label="关闭">✕</button>
        </header>
        <main class="${isAudio ? "is-audio" : ""}">
          ${isAudio ? `
            <div class="workflow-media-audio-preview">
              ${workflowWaveform(4, 68)}
            </div>
          ` : `
            <img src="${escapeHtml(preview.image || "./assets/images/canvas-chase-sequence.jpg")}" alt="" />
            <span>${isVideo ? "视频预览" : "图片预览"}</span>
          `}
          ${isVideo || isAudio ? `
            <div class="workflow-media-player-controls">
              <button type="button" data-workflow-action="toggle-media-preview-play" aria-label="${preview.playing ? "暂停" : "播放"}">${preview.playing ? workflowPlayerIcon.pause : workflowPlayerIcon.play}</button>
              <div class="workflow-media-progress" aria-hidden="true"><span style="width:${preview.playing ? "42%" : "18%"};"></span></div>
              <em>${preview.playing ? "00:04" : "00:00"} / ${escapeHtml(preview.duration || "00:10")}</em>
              <label>
                <span>音量</span>
                <input type="range" min="0" max="100" value="${preview.volume ?? 72}" data-workflow-action="set-media-preview-volume" aria-label="调节音量" />
              </label>
            </div>
          ` : ""}
        </main>
      </section>
    </div>
  `;
};

const renderWorkflowSceneKeyframePickerModal = (episodeArg = null, sceneArg = null) => {
  if (!state.workflowSceneKeyframePickerOpen) return "";
  const fallbackSelection = episodeArg && sceneArg ? null : currentWorkflowStudioSelection();
  const episode = episodeArg || fallbackSelection.episode;
  const scene = sceneArg || fallbackSelection.scene;
  const keyframes = workflowAssignedKeyframes(scene).filter(({ frame }) => !frame.pending);
  const shotFilter = state.workflowSceneKeyframePickerShotFilter;
  const visibleKeyframes = shotFilter === "all"
    ? keyframes
    : keyframes.filter(({ frame, assignedShotIndex }) => !frame.grid && assignedShotIndex === Number(shotFilter));
  const anchor = state.workflowSceneKeyframePickerAnchor || { left: 16, bottom: 16, maxHeight: 430 };
  return `
      <section class="workflow-scene-keyframe-picker" role="dialog" aria-label="选择该场关键帧" style="--workflow-picker-left: ${anchor.left}px; --workflow-picker-bottom: ${anchor.bottom}px; --workflow-picker-max-height: ${anchor.maxHeight}px;">
        <header>
          <div>
            <strong>选择该场关键帧 <span>${escapeHtml(episode.title.split(" · ")[0])} · ${escapeHtml(scene.title.split(" · ")[0])}</span></strong>
          </div>
          <button type="button" data-workflow-action="close-scene-keyframe-picker" aria-label="关闭">✕</button>
        </header>
        <nav class="workflow-scene-keyframe-filter" aria-label="按镜头筛选关键帧">
          <button class="${shotFilter === "all" ? "active" : ""}" type="button" data-workflow-action="filter-scene-keyframes" data-workflow-shot-filter="all">全部</button>
          ${scene.shots.map((shot, index) => `<button class="${shotFilter === String(index) ? "active" : ""}" type="button" data-workflow-action="filter-scene-keyframes" data-workflow-shot-filter="${index}">${escapeHtml(shot.no)}</button>`).join("")}
        </nav>
        <main>
          ${visibleKeyframes.length ? visibleKeyframes.map(({ frame, index, assignedShotIndex }) => `
            <button type="button" class="workflow-scene-keyframe-option" data-workflow-action="select-scene-keyframe-reference" data-workflow-frame-index="${index}">
              <img src="${escapeHtml(frame.image)}" alt="" />
              <strong>${escapeHtml(workflowKeyframeDisplayName(episode, scene, frame, assignedShotIndex))}</strong>
              <span>${escapeHtml(frame.meta || (frame.grid ? "整场" : scene.shots[assignedShotIndex]?.duration || ""))}</span>
            </button>
          `).join("") : `<p>${shotFilter === "all" ? "当前场暂无关键帧" : "该镜暂无关键帧"}</p>`}
        </main>
      </section>
  `;
};

const projectWorkflowRecycleItems = () =>
  state.workflowRecycleItems.filter((item) => item.projectId === activeHistoryProjectId());

const workflowRecycleVisibleItems = () => {
  return projectWorkflowRecycleItems()
    .filter((item) => item.type === state.workflowRecycleTab)
    .filter((item) => state.workflowRecycleFilter === "all" || item.source === state.workflowRecycleFilter)
    .sort((a, b) => {
      if (state.workflowRecycleSort === "date-asc") return a.createdAtMs - b.createdAtMs;
      return b.createdAtMs - a.createdAtMs;
    });
};

const workflowRecycleSortOptions = [
  { value: "date-asc", label: "时间正序" },
  { value: "date-desc", label: "时间倒序" },
];

const workflowRecycleFilterOptions = [
  { value: "all", label: "全部来源" },
  ...WORKFLOW_RECYCLE_SOURCES.map((source) => ({ value: source, label: source })),
];

const workflowRecycleMenuIcon = (kind) =>
  kind === "sort"
    ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 3.2h8M2 6h5.8M2 8.8h3.6" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>'
    : '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 3h8L6.7 6.8v2.7L5.3 10V6.8L2 3Z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>';

const renderWorkflowRecycleDropdown = (kind, label, options, currentValue) => `
  <div class="workflow-recycle-dropdown ${state.workflowRecycleOpenMenu === kind ? "is-open" : ""}">
    <button class="workflow-recycle-menu-trigger" type="button" data-recycle-action="toggle-menu" data-recycle-menu="${kind}" aria-expanded="${state.workflowRecycleOpenMenu === kind ? "true" : "false"}">
      ${workflowRecycleMenuIcon(kind)}
      <span>${escapeHtml(label)}</span>
      <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.2 2.8 7.8 6 4.2 9.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="workflow-recycle-menu">
      ${options.map((option) => `
        <button type="button" data-recycle-action="set-${kind}" data-recycle-value="${escapeHtml(option.value)}">
          <span>${escapeHtml(option.label)}</span>
          ${option.value === currentValue ? '<i>✓</i>' : ""}
        </button>
      `).join("")}
    </div>
  </div>
`;

const workflowRecycleTimeText = (progress, duration = "00:18") => {
  const durationParts = duration.split(":").map(Number);
  const totalSeconds = (durationParts[0] || 0) * 60 + (durationParts[1] || 18);
  const currentSeconds = Math.round(totalSeconds * Number(progress || 0) / 100);
  return `${String(Math.floor(currentSeconds / 60)).padStart(2, "0")}:${String(currentSeconds % 60).padStart(2, "0")}`;
};

const workflowRecycleCreatedAtText = (item) => {
  const date = new Date(item.createdAtMs || Date.parse(item.createdAt || ""));
  if (Number.isNaN(date.getTime())) return item.createdAt || "--";
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日 ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

const workflowRecycleDateLabel = (item) => {
  const date = new Date(item.createdAtMs || Date.parse(item.createdAt || ""));
  if (Number.isNaN(date.getTime())) return "未知日期";
  return `${date.getMonth() + 1}月${date.getDate()}日`;
};

const workflowRecycleGroupedItems = () =>
  workflowRecycleVisibleItems().reduce((groups, item) => {
    const label = workflowRecycleDateLabel(item);
    const currentGroup = groups.find((group) => group.label === label);
    if (currentGroup) currentGroup.items.push(item);
    else groups.push({ label, items: [item] });
    return groups;
  }, []);

const workflowRecycleVisibleIds = () => workflowRecycleVisibleItems().map((item) => item.id);

const workflowRecycleDateSelectedState = (items) => {
  const selectedCount = items.filter((item) => state.workflowRecycleSelectedIds.has(item.id)).length;
  if (!selectedCount) return "";
  return selectedCount === items.length ? " is-selected" : " is-partial";
};

const renderWorkflowRecycleCard = (item, { operationMode = false } = {}) => `
  <article class="workflow-recycle-card${state.workflowRecycleSelectedIds.has(item.id) ? " is-selected" : ""}">
    <div class="workflow-recycle-cover-wrap">
      ${state.workflowRecycleBatchMode ? `<button class="workflow-recycle-select-dot" type="button" data-recycle-action="toggle-select" data-recycle-id="${item.id}" aria-label="选择${escapeHtml(item.name)}"></button>` : ""}
      <button class="workflow-recycle-cover is-${item.type}" type="button" data-recycle-action="${state.workflowRecycleBatchMode ? "toggle-select" : "preview"}" data-recycle-id="${item.id}" aria-label="预览${item.type === "image" ? "图片" : item.type === "video" ? "视频" : "音频"}">
        ${item.type === "audio" ? `<div class="workflow-recycle-audio-cover">${icon.audio}<span>Audio</span></div>` : `<img src="${escapeHtml(item.image)}" alt="" />`}
        <span class="workflow-recycle-source-badge">${escapeHtml(item.source)}</span>
        ${item.type === "video" || item.type === "audio" ? `<em>${item.duration || "00:18"}</em>` : ""}
      </button>
      ${state.workflowRecycleBatchMode ? "" : `<div class="workflow-recycle-card-actions" aria-label="历史操作"><button type="button" data-recycle-action="preview" data-recycle-id="${item.id}" aria-label="预览" title="预览">${icon.eye}</button><button type="button" data-recycle-action="download" data-recycle-id="${item.id}" aria-label="下载" title="下载"><img src="./assets/icons/download.svg" alt="" /></button>${operationMode ? `<button type="button" data-recycle-action="use" data-recycle-id="${item.id}" aria-label="使用" title="使用">${icon.plus}</button>` : ""}</div>`}
    </div>
  </article>
`;

const historyTypeLabel = (type) => ({ image: "图片", video: "视频", audio: "音频" }[type] || "图片");

const canvasHistoryItems = () =>
  projectWorkflowRecycleItems()
    .filter((item) => item.type === state.canvasHistoryTab)
    .filter((item) => state.workflowRecycleFilter === "all" || item.source === state.workflowRecycleFilter)
    .sort((a, b) => {
      if (state.workflowRecycleSort === "date-asc") return a.createdAtMs - b.createdAtMs;
      return b.createdAtMs - a.createdAtMs;
    });

const canvasHistoryDateLabel = (item) => {
  const date = new Date(item.createdAtMs || Date.parse(item.createdAt || ""));
  if (Number.isNaN(date.getTime())) return "未知日期";
  return `${date.getMonth() + 1}月${date.getDate()}日`;
};

const canvasHistoryGroupedItems = () =>
  canvasHistoryItems().reduce((groups, item) => {
    const label = canvasHistoryDateLabel(item);
    if (!groups.some((group) => group.label === label)) groups.push({ label, items: [] });
    groups.find((group) => group.label === label).items.push(item);
    return groups;
  }, []);

const canvasHistoryCount = (type) => projectWorkflowRecycleItems().filter((item) => item.type === type).length;

const renderCanvasHistoryDropdown = (kind, label, options, currentValue) => `
  <div class="workflow-recycle-dropdown ${state.workflowRecycleOpenMenu === `canvas-${kind}` ? "is-open" : ""}">
    <button class="workflow-recycle-menu-trigger" type="button" data-canvas-history-action="toggle-menu" data-recycle-menu="canvas-${kind}" aria-expanded="${state.workflowRecycleOpenMenu === `canvas-${kind}` ? "true" : "false"}">${workflowRecycleMenuIcon(kind)}<span>${escapeHtml(label)}</span></button>
    <div class="workflow-recycle-menu">
      ${options.map((option) => `<button type="button" data-canvas-history-action="set-${kind}" data-recycle-value="${escapeHtml(option.value)}"><span>${escapeHtml(option.label)}</span>${option.value === currentValue ? "<i>✓</i>" : ""}</button>`).join("")}
    </div>
  </div>
`;

const renderCanvasHistoryThumb = (item) => {
  const selected = state.canvasHistorySelectedIds.has(item.id);
  const canUseHistory = ["canvas-detail", "canvas-share"].includes(state.currentView);
  const sourceBadge = `<span class="canvas-history-source-badge">${escapeHtml(item.source)}</span>`;
  return `
    <article class="canvas-history-thumb${selected ? " is-selected" : ""}">
      ${state.canvasHistoryBatchMode ? `<button class="canvas-history-select-dot" type="button" data-canvas-history-action="toggle-select" data-history-id="${item.id}" aria-label="选择${escapeHtml(item.name)}"></button>` : ""}
      <button class="canvas-history-thumb-media" type="button" data-canvas-history-action="${state.canvasHistoryBatchMode ? "toggle-select" : "preview"}" data-history-id="${item.id}" aria-label="查看${escapeHtml(item.name)}">
        <img src="${escapeHtml(item.image || DEFAULT_COVER)}" alt="" />
      </button>
      ${sourceBadge}
      ${!state.canvasHistoryBatchMode ? `<div class="canvas-history-hover-actions"><button type="button" data-canvas-history-action="preview" data-history-id="${item.id}" aria-label="预览" title="预览">${icon.eye}</button><button type="button" data-canvas-history-action="download" data-history-id="${item.id}" aria-label="下载" title="下载"><img src="./assets/icons/download.svg" alt="" /></button>${canUseHistory ? `<button type="button" data-canvas-history-action="use" data-history-id="${item.id}" aria-label="使用" title="使用">${icon.plus}</button>` : ""}</div>` : ""}
    </article>
  `;
};

const renderCanvasListHistory = () => {
  const previous = {
    tab: state.workflowRecycleTab,
    batchMode: state.workflowRecycleBatchMode,
    selectedIds: state.workflowRecycleSelectedIds,
    previewId: state.workflowRecyclePreviewId,
    filter: state.workflowRecycleFilter,
    sort: state.workflowRecycleSort,
    openMenu: state.workflowRecycleOpenMenu,
  };
  state.workflowRecycleTab = state.canvasHistoryTab;
  state.workflowRecycleBatchMode = state.canvasHistoryBatchMode;
  state.workflowRecycleSelectedIds = state.canvasHistorySelectedIds;
  state.workflowRecyclePreviewId = state.canvasHistoryPreviewId;
  state.workflowRecycleFilter = state.canvasHistoryFilter;
  state.workflowRecycleSort = state.canvasHistorySort;
  state.workflowRecycleOpenMenu = state.canvasHistoryOpenMenu;
  const markup = renderWorkflowRecycleMarkup()
    .replaceAll("data-recycle-action", "data-canvas-history-action")
    .replaceAll("data-recycle-id", "data-history-id")
    .replaceAll("data-recycle-tab", "data-history-tab")
    .replaceAll("data-recycle-date", "data-history-date");
  Object.assign(state, {
    workflowRecycleTab: previous.tab,
    workflowRecycleBatchMode: previous.batchMode,
    workflowRecycleSelectedIds: previous.selectedIds,
    workflowRecyclePreviewId: previous.previewId,
    workflowRecycleFilter: previous.filter,
    workflowRecycleSort: previous.sort,
    workflowRecycleOpenMenu: previous.openMenu,
  });
  return markup;
};

const renderCanvasOperationHistory = () => {
  if (!state.canvasHistoryOpen) return "";
  const previous = {
    tab: state.workflowRecycleTab,
    batchMode: state.workflowRecycleBatchMode,
    selectedIds: state.workflowRecycleSelectedIds,
    previewId: state.workflowRecyclePreviewId,
    filter: state.workflowRecycleFilter,
    sort: state.workflowRecycleSort,
    openMenu: state.workflowRecycleOpenMenu,
  };
  state.workflowRecycleTab = state.canvasOperationHistoryTab;
  state.workflowRecycleBatchMode = state.canvasOperationHistoryBatchMode;
  state.workflowRecycleSelectedIds = state.canvasOperationHistorySelectedIds;
  state.workflowRecyclePreviewId = state.canvasOperationHistoryPreviewId;
  state.workflowRecycleFilter = state.canvasOperationHistoryFilter;
  state.workflowRecycleSort = state.canvasOperationHistorySort;
  state.workflowRecycleOpenMenu = state.canvasOperationHistoryOpenMenu;
  const markup = renderWorkflowRecycleMarkup({ operationMode: true })
    .replaceAll("data-recycle-action", "data-canvas-history-action")
    .replaceAll("data-recycle-id", "data-history-id")
    .replaceAll("data-recycle-tab", "data-history-tab")
    .replaceAll("data-recycle-date", "data-history-date");
  state.canvasOperationHistoryTab = state.workflowRecycleTab;
  state.canvasOperationHistoryBatchMode = state.workflowRecycleBatchMode;
  state.canvasOperationHistorySelectedIds = state.workflowRecycleSelectedIds;
  state.canvasOperationHistoryPreviewId = state.workflowRecyclePreviewId;
  state.canvasOperationHistoryFilter = state.workflowRecycleFilter;
  state.canvasOperationHistorySort = state.workflowRecycleSort;
  state.canvasOperationHistoryOpenMenu = state.workflowRecycleOpenMenu;
  Object.assign(state, {
    workflowRecycleTab: previous.tab,
    workflowRecycleBatchMode: previous.batchMode,
    workflowRecycleSelectedIds: previous.selectedIds,
    workflowRecyclePreviewId: previous.previewId,
    workflowRecycleFilter: previous.filter,
    workflowRecycleSort: previous.sort,
    workflowRecycleOpenMenu: previous.openMenu,
  });
  return `<div class="canvas-history-modal canvas-operation-history-modal" role="dialog" aria-modal="true" aria-label="生成历史"><section class="canvas-operation-history-panel"><button class="canvas-operation-history-close" type="button" data-canvas-history-action="close" aria-label="关闭" title="关闭">✕</button>${markup}</section></div>`;
};

const renderWorkflowRecycleMarkup = ({ operationMode = false } = {}) => {
  const previewHeaderAction = operationMode ? `<button type="button" data-recycle-action="close-preview">‹ 返回</button>` : `<button class="workflow-recycle-preview-close" type="button" data-recycle-action="close-preview" aria-label="关闭预览" title="关闭预览">×</button>`;
  const groups = workflowRecycleGroupedItems();
  const visibleIds = workflowRecycleVisibleIds();
  const allVisibleSelected = Boolean(visibleIds.length) && visibleIds.every((id) => state.workflowRecycleSelectedIds.has(id));
  const projectItems = projectWorkflowRecycleItems();
  const imageCount = projectItems.filter((item) => item.type === "image").length;
  const videoCount = projectItems.filter((item) => item.type === "video").length;
  const audioCount = projectItems.filter((item) => item.type === "audio").length;
  const preview = projectItems.find((item) => item.id === state.workflowRecyclePreviewId);
  const activeFilter = workflowRecycleFilterOptions.find((item) => item.value === state.workflowRecycleFilter)?.label || "全部来源";
  const activeSort = workflowRecycleSortOptions.find((item) => item.value === state.workflowRecycleSort)?.label || "时间倒序";
  return `
    <header class="workflow-recycle-header"><div><h1>生成历史</h1></div><span class="workflow-recycle-total">共 ${projectItems.length} 项</span></header>
    <div class="workflow-recycle-tabs" role="tablist">
      <button class="${state.workflowRecycleTab === "image" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="image">图片 <span>${imageCount}</span></button>
      <button class="${state.workflowRecycleTab === "video" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="video">视频 <span>${videoCount}</span></button>
      <button class="${state.workflowRecycleTab === "audio" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="audio">音频 <span>${audioCount}</span></button>
    </div>
    <div class="workflow-recycle-toolbar"><div class="workflow-recycle-controls">
      ${state.workflowRecycleBatchMode ? `<button class="workflow-recycle-select-all${allVisibleSelected ? " is-selected" : ""}" type="button" data-recycle-action="toggle-select-all">${allVisibleSelected ? "取消全选" : "全选"}</button><span>已选择 ${state.workflowRecycleSelectedIds.size} 项</span><button type="button" data-recycle-action="cancel-batch">取消</button><button class="workflow-recycle-download-selected" type="button" data-recycle-action="download-selected">下载</button>${operationMode ? `<button class="workflow-recycle-use-selected" type="button" data-recycle-action="download-use-selected">${icon.plus}使用</button>` : ""}` : `${renderWorkflowRecycleDropdown("sort", activeSort, workflowRecycleSortOptions, state.workflowRecycleSort)}${renderWorkflowRecycleDropdown("filter", activeFilter, workflowRecycleFilterOptions, state.workflowRecycleFilter)}<button type="button" data-recycle-action="enter-batch">多选</button>`}
    </div></div>
    ${groups.length ? `<section class="workflow-recycle-groups">${groups.map((group) => `<section class="workflow-recycle-date-group"><header>${state.workflowRecycleBatchMode ? `<button class="workflow-recycle-date-select${workflowRecycleDateSelectedState(group.items)}" type="button" data-recycle-action="toggle-date" data-recycle-date="${escapeHtml(group.label)}" aria-label="选择${escapeHtml(group.label)}全部内容"></button>` : ""}<h2 class="workflow-recycle-date-title">${escapeHtml(group.label)}</h2><span>${group.items.length} 项</span></header><div class="workflow-recycle-grid">${group.items.map((item) => renderWorkflowRecycleCard(item, { operationMode })).join("")}</div></section>`).join("")}</section>` : `<div class="workflow-recycle-empty">${icon.clock}<strong>暂无${state.workflowRecycleTab === "image" ? "图片" : state.workflowRecycleTab === "video" ? "视频" : "音频"}生成历史</strong></div>`}
    ${preview ? `<div class="workflow-recycle-modal"><button class="workflow-recycle-backdrop" type="button" data-recycle-action="close-preview" aria-label="关闭预览"></button><section class="workflow-recycle-preview workflow-recycle-preview-unified" role="dialog" aria-modal="true" aria-label="${historyTypeLabel(preview.type)}预览"><header class="${operationMode ? "" : "has-preview-close"}">${previewHeaderAction}<strong>${historyTypeLabel(preview.type)}预览</strong><div><button type="button" data-recycle-action="download" data-recycle-id="${preview.id}">下载</button></div></header><main><div class="workflow-recycle-preview-stage">${preview.type === "audio" ? `<div class="workflow-recycle-audio-preview">${icon.audio}<span>音频</span><em>${escapeHtml(preview.duration || "00:04")}</em></div>` : `<img src="${escapeHtml(preview.image || DEFAULT_COVER)}" alt="" />`}${preview.type === "video" || preview.type === "audio" ? `<div class="workflow-recycle-player"><button type="button" data-recycle-action="toggle-play" aria-label="${state.workflowRecyclePlaying ? "暂停" : "播放"}">${state.workflowRecyclePlaying ? workflowPlayerIcon.pause : workflowPlayerIcon.play}</button><input class="workflow-recycle-progress" type="range" min="0" max="100" value="${state.workflowRecycleProgress}" data-recycle-progress aria-label="进度" /><time data-recycle-time>${workflowRecycleTimeText(state.workflowRecycleProgress, preview.duration)} / ${preview.duration || "00:18"}</time><label class="workflow-recycle-volume">♬<input type="range" min="0" max="100" value="${state.workflowRecycleVolume}" data-recycle-volume aria-label="音量" /></label></div>` : ""}</div><aside><dl><dt>${historyTypeLabel(preview.type)}信息</dt><div><span>来源</span><strong>${escapeHtml(preview.source)}</strong></div><div><span>创建时间</span><strong>${escapeHtml(workflowRecycleCreatedAtText(preview))}</strong></div><div><span>格式</span><strong>${preview.type === "image" ? "JPG" : preview.type === "video" ? "MP4" : "MP3"}</strong></div><div><span>模型</span><strong>${preview.type === "video" ? "sd2.0" : preview.type === "audio" ? "Music 1.5" : "Gemini"}</strong></div><div><span>ID</span><strong>#${escapeHtml(String(preview.id).replace(/\D/g, "").slice(-4) || "2208")}</strong></div></dl></aside></main></section></div>` : ""}
  `;
};

const renderWorkflowRecycle = () => {
  if (!workflowRecycleContent) return;
  saveWorkflowRecycle();
  workflowRecycleContent.innerHTML = renderWorkflowRecycleMarkup();
  return;
  const previewHeaderAction = `<button class="workflow-recycle-preview-close" type="button" data-recycle-action="close-preview" aria-label="关闭预览" title="关闭预览">×</button>`;
  const groups = workflowRecycleGroupedItems();
  const visibleIds = workflowRecycleVisibleIds();
  const allVisibleSelected = Boolean(visibleIds.length) && visibleIds.every((id) => state.workflowRecycleSelectedIds.has(id));
  const projectItems = projectWorkflowRecycleItems();
  const imageCount = projectItems.filter((item) => item.type === "image").length;
  const videoCount = projectItems.filter((item) => item.type === "video").length;
  const audioCount = projectItems.filter((item) => item.type === "audio").length;
  const preview = projectItems.find((item) => item.id === state.workflowRecyclePreviewId);
  const activeFilter = workflowRecycleFilterOptions.find((item) => item.value === state.workflowRecycleFilter)?.label || "全部来源";
  const activeSort = workflowRecycleSortOptions.find((item) => item.value === state.workflowRecycleSort)?.label || "时间倒序";
  workflowRecycleContent.innerHTML = `
    <header class="workflow-recycle-header">
      <div><h1>生成历史</h1></div>
      <span class="workflow-recycle-total">共 ${projectItems.length} 项</span>
    </header>
    <div class="workflow-recycle-tabs" role="tablist">
      <button class="${state.workflowRecycleTab === "image" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="image">图片 <span>${imageCount}</span></button>
      <button class="${state.workflowRecycleTab === "video" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="video">视频 <span>${videoCount}</span></button>
      <button class="${state.workflowRecycleTab === "audio" ? "active" : ""}" type="button" data-recycle-action="tab" data-recycle-tab="audio">音频 <span>${audioCount}</span></button>
    </div>
    <div class="workflow-recycle-toolbar">
      <div class="workflow-recycle-controls">
        ${state.workflowRecycleBatchMode ? `
          <button class="workflow-recycle-select-all${allVisibleSelected ? " is-selected" : ""}" type="button" data-recycle-action="toggle-select-all">${allVisibleSelected ? "取消全选" : "全选"}</button>
          <span>已选择 ${state.workflowRecycleSelectedIds.size} 项</span>
          <button type="button" data-recycle-action="cancel-batch">取消</button>
          <button class="workflow-recycle-download-selected" type="button" data-recycle-action="download-selected">下载</button>
        ` : `${renderWorkflowRecycleDropdown("sort", activeSort, workflowRecycleSortOptions, state.workflowRecycleSort)}${renderWorkflowRecycleDropdown("filter", activeFilter, workflowRecycleFilterOptions, state.workflowRecycleFilter)}<button type="button" data-recycle-action="enter-batch">多选</button>`}
      </div>
    </div>
    ${groups.length ? `<section class="workflow-recycle-groups">${groups.map((group) => `
      <section class="workflow-recycle-date-group">
        <header>
          ${state.workflowRecycleBatchMode ? `<button class="workflow-recycle-date-select${workflowRecycleDateSelectedState(group.items)}" type="button" data-recycle-action="toggle-date" data-recycle-date="${escapeHtml(group.label)}" aria-label="选择${escapeHtml(group.label)}全部内容"></button>` : ""}
          <h2 class="workflow-recycle-date-title">${escapeHtml(group.label)}</h2>
          <span>${group.items.length} 项</span>
        </header>
        <div class="workflow-recycle-grid">${group.items.map(renderWorkflowRecycleCard).join("")}</div>
      </section>
    `).join("")}</section>` : `<div class="workflow-recycle-empty">${icon.clock}<strong>暂无${state.workflowRecycleTab === "image" ? "图片" : state.workflowRecycleTab === "video" ? "视频" : "音频"}生成历史</strong></div>`}
    ${preview ? `<div class="workflow-recycle-modal"><button class="workflow-recycle-backdrop" type="button" data-recycle-action="close-preview" aria-label="关闭预览"></button><section class="workflow-recycle-preview workflow-recycle-preview-unified" role="dialog" aria-modal="true" aria-label="${historyTypeLabel(preview.type)}预览"><header class="${operationMode ? "" : "has-preview-close"}">${previewHeaderAction}<strong>${historyTypeLabel(preview.type)}预览</strong><div><button type="button" data-recycle-action="download" data-recycle-id="${preview.id}">下载</button></div></header><main><div class="workflow-recycle-preview-stage">${preview.type === "audio" ? `<div class="workflow-recycle-audio-preview">${icon.audio}<span>音频</span><em>${escapeHtml(preview.duration || "00:04")}</em></div>` : `<img src="${escapeHtml(preview.image || DEFAULT_COVER)}" alt="" />`}${preview.type === "video" || preview.type === "audio" ? `<div class="workflow-recycle-player"><button type="button" data-recycle-action="toggle-play" aria-label="${state.workflowRecyclePlaying ? "暂停" : "播放"}">${state.workflowRecyclePlaying ? workflowPlayerIcon.pause : workflowPlayerIcon.play}</button><input class="workflow-recycle-progress" type="range" min="0" max="100" value="${state.workflowRecycleProgress}" data-recycle-progress aria-label="进度" /><time data-recycle-time>${workflowRecycleTimeText(state.workflowRecycleProgress, preview.duration)} / ${preview.duration || "00:18"}</time><label class="workflow-recycle-volume">♬<input type="range" min="0" max="100" value="${state.workflowRecycleVolume}" data-recycle-volume aria-label="音量" /></label></div>` : ""}</div><aside><dl><dt>${historyTypeLabel(preview.type)}信息</dt><div><span>来源</span><strong>${escapeHtml(preview.source)}</strong></div><div><span>创建时间</span><strong>${escapeHtml(workflowRecycleCreatedAtText(preview))}</strong></div><div><span>格式</span><strong>${preview.type === "image" ? "JPG" : preview.type === "video" ? "MP4" : "MP3"}</strong></div><div><span>模型</span><strong>${preview.type === "video" ? "sd2.0" : preview.type === "audio" ? "Music 1.5" : "Gemini"}</strong></div><div><span>ID</span><strong>#${escapeHtml(String(preview.id).replace(/\D/g, "").slice(-4) || "2208")}</strong></div></dl></aside></main></section></div>` : ""}
  `;
};

const addWorkflowRecycleItem = (item) => {
  const now = new Date();
  state.workflowRecycleItems.unshift({
    id: `history-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`,
    createdAtMs: now.getTime(),
    ...item,
    projectId: item.projectId || activeHistoryProjectId(),
    source: normalizeWorkflowRecycleSource(item.source || "拍摄台"),
  });
  saveWorkflowRecycle();
};

const addWorkflowHistoryItem = addWorkflowRecycleItem;

const renderWorkflowStudio = () => {
  if (!workflowEpisodeSelect || !workflowSceneSelect || !workflowScriptCard || !workflowShotTable || !workflowShotSummary || !workflowKeyframeGrid) return;
  workflowHomeView?.classList.toggle(
    "is-workflow-modal-open",
    Boolean(state.workflowGenerateMode || state.workflowPreviewFrameIndex !== null || state.workflowDetailFrameIndex !== null || state.workflowEditFrameIndex !== null || state.workflowDeleteFrameIndex !== null || state.workflowDeleteVideoIndex !== null || state.workflowDeleteAudioIndex !== null || state.workflowClearConfirmOpen || state.workflowEditDeleteVersionKey || state.workflowPreviewModalOpen || state.workflowReferenceModalOpen || state.workflowMediaPreview || state.workflowSceneKeyframePickerOpen),
  );
  const episodeIndex = Math.min(state.workflowEpisodeIndex, workflowStudioData.length - 1);
  const episode = workflowStudioData[episodeIndex];
  const sceneIndex = Math.min(state.workflowSceneIndex, episode.scenes.length - 1);
  const scene = episode.scenes[sceneIndex];
  const shotIndex = Math.min(state.workflowShotIndex, scene.shots.length - 1);
  const selectedShot = scene.shots[shotIndex];
  const stageLabel = state.workflowStage === "video" ? "视频制作" : state.workflowStage === "audio" ? "配音配乐" : "关键帧生成";

  workflowHomeView?.querySelectorAll("[data-workflow-stage]").forEach((button) => {
    button.classList.toggle("active", button.dataset.workflowStage === state.workflowStage);
  });
  workflowHomeView?.querySelector("#workflow-studio-grid")?.setAttribute("aria-label", `${stageLabel}工作台`);
  workflowHomeView?.querySelector(".workflow-generation-card")?.classList.toggle("is-hidden", state.workflowStage === "video");

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
  if (state.workflowStage === "keyframe") {
    state.workflowResultView = "keyframes";
  } else if (state.workflowStage === "video" && !["generator", "videos"].includes(state.workflowResultView)) {
    state.workflowResultView = "generator";
  } else if (state.workflowStage === "audio" && !["audio-generator", "audios"].includes(state.workflowResultView)) {
    state.workflowResultView = "audio-generator";
  }

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
  const keyframeResultHtml = `
    ${state.workflowStage === "video" ? renderWorkflowResultTabs() : ""}
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
  if (workflowResultTitle) {
    workflowResultTitle.textContent = state.workflowStage === "video" ? "视频制作" : state.workflowStage === "audio" ? "配音配乐" : "关键帧结果";
  }
  if (workflowResultSubtitle) {
    workflowResultSubtitle.textContent =
      state.workflowStage === "video"
        ? ""
        : state.workflowStage === "audio"
          ? ""
          : "可拖入底部时间线";
  }
  if (state.workflowStage === "video" && state.workflowResultView === "videos") {
    workflowKeyframeGrid.innerHTML = renderWorkflowVideoResults(episode, scene, episodeIndex, sceneIndex);
  } else if (state.workflowStage === "video" && state.workflowResultView === "generator") {
    workflowKeyframeGrid.innerHTML = renderWorkflowVideoGenerator(episode, scene);
  } else if (state.workflowStage === "audio" && state.workflowResultView === "audios") {
    workflowKeyframeGrid.innerHTML = renderWorkflowAudioResults(scene);
  } else if (state.workflowStage === "audio") {
    workflowKeyframeGrid.innerHTML = renderWorkflowAudioGenerator(scene);
  } else {
    workflowKeyframeGrid.innerHTML = keyframeResultHtml;
  }
  const timelineNames = keyedWorkflowFrames.filter(({ frame }) => !frame.grid && !frame.pending);
  workflowHomeView?.querySelectorAll(".workflow-timeline-panel:not(.workflow-timeline-preview-editor) .workflow-keyframe-clip").forEach((clip, index) => {
    const item = timelineNames[index];
    const label = clip.querySelector("em");
    if (item && label) label.textContent = workflowKeyframeDisplayName(episode, scene, item.frame, item.assignedShotIndex);
  });
  if (workflowGenerateModalRoot) workflowGenerateModalRoot.innerHTML = `${renderWorkflowGenerateModal()}${renderWorkflowFrameModal()}${renderWorkflowEditModal()}${renderWorkflowEditCostConfirmModal()}${renderWorkflowKeyframeDeleteConfirmModal()}${renderWorkflowVideoDeleteConfirmModal()}${renderWorkflowAudioDeleteConfirmModal()}${renderWorkflowKeyframeClearConfirmModal()}${renderWorkflowEditVersionDeleteConfirmModal()}${renderWorkflowTimelinePreviewModal()}${renderWorkflowReferenceModal()}${renderWorkflowMediaPreviewModal()}${renderWorkflowSceneKeyframePickerModal(episode, scene)}${renderWorkflowClipContextMenu()}`;
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
  const inCanvasHistory = inCanvasView && state.canvasHistoryOpen;
  const inWorkflowHome = state.currentView === "workflow-home";
  const inCanvasDetail = state.currentView === "canvas-detail";
  const inCanvasShare = state.currentView === "canvas-share";
  const inCanvasSurface = inCanvasDetail || inCanvasShare;
  const project = currentProject();
  backTrigger.classList.toggle("is-visible", inCanvasView);
  pageTitle.textContent = inCanvasHistory ? `${project?.name || ""} · 生成历史` : inCanvasView ? `${project?.name || ""} · 画布列表` : "我的项目";
  pageSubtitle.textContent = inCanvasHistory ? "查看项目下所有模式的生成记录" : inCanvasView ? "管理项目下的 AI画布创作" : "管理您的 AI影视创作";
  createLabel.textContent = inCanvasView ? "新建画布" : "创建新项目";
  homeView.classList.toggle("is-hidden", !inHomeView);
  creatorCenterView?.classList.toggle("is-hidden", !inCreatorCenter);
  reviewCenterView?.classList.toggle("is-hidden", !inReviewCenter);
  workflowHomeView?.classList.toggle("is-hidden", !inWorkflowHome);
  listView.classList.toggle("is-hidden", inHomeView || inCreatorCenter || inReviewCenter || inWorkflowHome || inCanvasSurface);
  listView.classList.toggle("canvas-list-mode", state.currentView === "canvases");
  listView.classList.toggle("canvas-history-page", inCanvasHistory);
  document.querySelector("#list-view .heading-row")?.classList.toggle("is-hidden", inCanvasHistory);
  document.querySelector("#list-view .toolbar")?.classList.toggle("is-hidden", inCanvasHistory);
  document.querySelector("#list-view .batch-bottom-tools")?.classList.toggle("is-hidden", inCanvasHistory);
  document.querySelector("#list-view .project-grid")?.classList.toggle("is-hidden", inCanvasHistory);
  canvasHistoryPage?.classList.toggle("is-visible", inCanvasHistory);
  detailView.classList.toggle("is-open", inCanvasSurface);
  detailView.classList.toggle("is-share-view", inCanvasShare);
  const topbar = document.querySelector(".topbar");
  topbar?.classList.remove("is-hidden");
  topbar?.classList.toggle("is-canvas-detail", inCanvasDetail);
  topbar?.classList.toggle("is-canvas-share", inCanvasShare);
  topbarNav?.classList.toggle("is-hidden", inCanvasView || inWorkflowHome || inCanvasSurface);
  sidebar.classList.toggle("is-visible", state.currentView === "canvases");
  sidebar.querySelectorAll("[data-canvas-nav]").forEach((item) => {
    item.classList.toggle("active", (inCanvasHistory && item.dataset.canvasNav === "history") || (!inCanvasHistory && item.dataset.canvasNav === "list"));
  });
  sidebarProjectName.textContent = project?.name || "测试项目";
  sidebarRatioTag.textContent = project?.ratio || "16:9 横屏";
  sidebarStyleTag.textContent = project?.style || "电影感";
  if (workflowProjectName) workflowProjectName.textContent = project?.name || "测试项目";
  if (workflowRatioTag) workflowRatioTag.textContent = project?.ratio || "16:9 横屏";
  if (workflowStyleTag) workflowStyleTag.textContent = project?.style || "电影感";
  if (workflowMainProjectName) workflowMainProjectName.textContent = project?.name || "test";
  if (workflowMainStyleTag) workflowMainStyleTag.textContent = project?.style || "写实";
  avatarPanel.classList.toggle("is-open", state.avatarOpen);
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
    const inRecycle = state.workflowPage === "recycle";
    workflowHomeView?.classList.toggle("is-recycle-page", inRecycle);
    workflowStudioMain?.classList.toggle("is-hidden", inRecycle);
    workflowRecycleMain?.classList.toggle("is-hidden", !inRecycle);
    workflowHomeView?.querySelectorAll(".workflow-nav-item").forEach((item) => {
      item.classList.toggle("active", inRecycle ? item.dataset.workflowPage === "recycle" : item.title === "拍摄台");
    });
    if (inRecycle) renderWorkflowRecycle();
    else renderWorkflowStudio();
    return;
  }
  if (isCanvasDetailView()) {
    renderCanvasDetail();
    return;
  }
  if (state.currentView === "canvases" && state.canvasHistoryOpen) {
    if (canvasHistoryPage) canvasHistoryPage.innerHTML = renderCanvasListHistory();
    grid.innerHTML = "";
    return;
  }
  if (canvasHistoryPage) canvasHistoryPage.innerHTML = "";
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
  if (state.currentView === "canvases") {
    renderGrid();
    return;
  }
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
    if (node.type === "video") {
      return { leftX: node.x + 46, rightX: node.x + 914, centerY: node.y + 272 };
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
      if (node.type === "video") {
        const modeTabs = [
          { key: "text-video", label: "文生视频" },
          { key: "first-frame", label: "纯首帧" },
          { key: "first-last-frame", label: "首尾帧" },
          { key: "reference-image", label: "参考图" },
        ];
        return `
          <article class="canvas-canvas-node canvas-video-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            <div class="canvas-video-node-head"${nodeDragAttr}>
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon is-video" aria-hidden="true">${icon.video}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
              ${shareView ? "" : `<button class="canvas-video-upload-button" type="button" aria-label="上传视频">${icon.expand}</button>`}
            </div>

            ${sideAnchors}

            <button class="canvas-video-frame" type="button" data-node-id="${node.id}"${nodeDragAttr}>
              <span class="canvas-video-empty-button" aria-hidden="true">${icon.video}</span>
            </button>

            <div class="canvas-video-prompt-card">
              <button class="canvas-video-expand-button" type="button" aria-label="展开提示词">${icon.expand}</button>
              <div class="canvas-video-mode-tabs" role="tablist" aria-label="视频生成模式">
                ${modeTabs
                  .map(
                    (tab) => `
                      <button class="${node.mode === tab.key ? "is-active" : ""}" type="button" data-node-action="set-video-mode" data-node-id="${node.id}" data-video-mode="${tab.key}">
                        ${escapeHtml(tab.label)}
                      </button>
                    `,
                  )
                  .join("")}
              </div>
              <textarea
                class="canvas-video-textarea"
                data-node-field="prompt"
                data-node-id="${node.id}"
                rows="4"
                placeholder="描述你想要生成的画面内容，输入 @ 引用素材"
                ${shareView ? " readonly" : ""}
              >${escapeHtml(node.prompt || "")}</textarea>
              <div class="canvas-video-footer-row">
                <div class="canvas-video-footer-left">
                  <span class="canvas-video-brain" aria-hidden="true">${icon.sparkles}</span>
                  <label class="canvas-video-model-select">
                    <select data-node-field="model" data-node-id="${node.id}" aria-label="视频模型">
                      ${renderSelectOptions(CANVAS_VIDEO_MODELS, node.model)}
                    </select>
                  </label>
                  <span class="canvas-video-caret">⌄</span>
                  <span class="canvas-video-divider"></span>
                  <span class="canvas-video-param">${icon.phone}<strong>${escapeHtml(node.duration)}</strong><span>·</span><strong>${escapeHtml(node.quality)}</strong><span>·</span><strong>${escapeHtml(node.ratio)}</strong></span>
                  <span class="canvas-video-audio">声 ${icon.volume}</span>
                  ${
                    isSeedanceVideoModel(node.model) && !shareView
                      ? `<button class="canvas-video-optimize-button" type="button" data-node-action="optimize-video-prompt" data-node-id="${node.id}" title="优化提示词" aria-label="优化提示词">${icon.sparkles}</button>`
                      : ""
                  }
                </div>
                <div class="canvas-video-footer-right">
                  <span class="canvas-video-cost">${icon.sparkles}<strong>${escapeHtml(node.cost)}</strong></span>
                  <span class="canvas-video-balance">余额：${escapeHtml(node.balance)} 星钻</span>
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
              <div class="canvas-toolbox-anchor">
                <button class="canvas-toolbar-chip${state.canvasToolboxNodeId === node.id ? " is-active" : ""}" type="button" data-toolbar-action="toggle-toolbox" data-node-id="${node.id}" aria-haspopup="menu" aria-expanded="${state.canvasToolboxNodeId === node.id ? "true" : "false"}">
                  <img src="${CANVAS_NODE_TOOLBAR_TOOLBOX}" alt="" />
                  <span>工具箱</span>
                </button>
                ${state.canvasToolboxNodeId === node.id ? renderCanvasToolboxMenu(node.id) : ""}
              </div>
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

          <div class="canvas-node-prompt-card${node.toolTag ? " has-tool-tag" : ""}">
            ${node.toolTag ? `
              <div class="canvas-node-tool-prompt-line">
                <div class="canvas-node-tool-tag">
                  <span class="canvas-node-tool-tag-icon"><img src="${CANVAS_NODE_TOOLBAR_TOOLBOX}" alt="" /></span>
                  <span>${escapeHtml(node.toolTag.label)}</span>
                  ${shareView ? "" : `<button type="button" data-node-action="remove-tool-tag" data-node-id="${node.id}" aria-label="删除${escapeHtml(node.toolTag.label)}标签">×</button>`}
                </div>
                <span class="canvas-node-tool-placeholder">${escapeHtml(node.promptPlaceholder || "")}</span>
              </div>
            ` : ""}
            <textarea class="canvas-node-textarea${node.toolTag ? " has-tool-tag" : ""}" data-node-field="prompt" data-node-id="${node.id}" rows="3" placeholder="${node.toolTag ? "" : escapeHtml(node.promptPlaceholder || "")}"${shareView ? " readonly" : ""}>${escapeHtml(node.prompt)}</textarea>

            <div class="canvas-node-footer-row">
              <div class="canvas-node-footer-left">
                <div class="canvas-node-model-chip"><img src="${CANVAS_NODE_BRAIN}" alt="" /><span>${escapeHtml(node.model)}</span></div>
                <div class="canvas-node-meta-chip"><span class="canvas-node-ratio-icon"></span><span>${escapeHtml(node.ratio)}</span></div>
                <div class="canvas-node-meta-chip"><img src="${CANVAS_NODE_COUNT}" alt="" /><span>${escapeHtml(node.outputCount)}</span></div>
              </div>
              <div class="canvas-node-footer-right">
                ${shareView ? "" : `<button class="canvas-node-camera-button${node.cameraControl?.enabled ? " is-active" : ""}${node.toolTag ? " is-disabled" : ""}" type="button" data-node-action="open-camera-control" data-node-id="${node.id}" aria-label="摄像机控制"${node.toolTag ? " disabled title=\"删除工具标签后可调整摄像机参数\"" : ""}>${icon.camera}</button>`}
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
  const portraitTextureNode = state.portraitTextureConfirmNodeId ? findNodeById(state.portraitTextureConfirmNodeId) : null;
  const portraitTextureModel = selectedPortraitTextureModel();
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
    : portraitTextureNode
    ? `
      <div class="canvas-action-modal">
        <button class="canvas-action-modal-backdrop" type="button" data-canvas-action="close-portrait-texture-confirm" aria-label="关闭人像质感调节弹窗"></button>
        <div class="canvas-action-modal-panel canvas-portrait-texture-modal-panel" role="dialog" aria-modal="true" aria-labelledby="portrait-texture-title">
          <div class="canvas-action-modal-header">
            <strong id="portrait-texture-title">确认</strong>
            <button class="canvas-action-modal-close" type="button" data-canvas-action="close-portrait-texture-confirm" aria-label="关闭人像质感调节弹窗">✕</button>
          </div>
          <div class="canvas-action-modal-body canvas-portrait-texture-body">
            <label class="canvas-portrait-texture-field">
              <span>选择模型</span>
              <select data-canvas-portrait-model>
                ${PORTRAIT_TEXTURE_MODELS.map((model) => `<option value="${escapeHtml(model.id)}"${model.id === portraitTextureModel.id ? " selected" : ""}>${escapeHtml(model.name)}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="canvas-action-modal-footer">
            <span class="canvas-portrait-texture-cost"><img src="${CANVAS_NODE_CREDIT}" alt="" /><strong>${portraitTextureModel.cost}</strong></span>
            <button class="canvas-action-modal-button is-ghost" type="button" data-canvas-action="close-portrait-texture-confirm">取消</button>
            <button class="canvas-action-modal-button is-primary" type="button" data-canvas-action="confirm-portrait-texture">确认</button>
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
          <button class="canvas-add-button is-video" type="button" data-canvas-action="create-video-node"><span class="canvas-add-inline-icon">${icon.video}</span><span>视频</span></button>
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
          <button class="canvas-left-tool${state.canvasHistoryOpen ? " is-active" : ""}" type="button" data-canvas-action="toggle-history" aria-label="生成历史" title="生成历史"><img src="${hasNodes ? CANVAS_NODE_LEFT_CLOCK : CANVAS_EMPTY_LEFT_CLOCK}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="删除"><img src="${hasNodes ? CANVAS_NODE_LEFT_DELETE : CANVAS_EMPTY_LEFT_DELETE}" alt="" /></button>
        </div>`}

        ${shareView ? "" : addPanelMarkup}
        ${shareView ? "" : templatePanelMarkup}
        ${shareView ? "" : contextMenuMarkup}
        ${shareView ? "" : renderCanvasOperationHistory()}

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
  canvasStage.querySelectorAll('[data-canvas-action="create-video-node"]').forEach((trigger) => {
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      createVideoNodeAtViewportCenter();
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
  canvasStage.querySelectorAll("[data-toolbox-action]").forEach((trigger) => {
    const runToolboxAction = () => {
      const nodeId = trigger.dataset.nodeId;
      const action = trigger.dataset.toolboxAction;
      if (action === "portrait-texture") {
        openPortraitTextureConfirm(nodeId);
        return;
      }
      const toolMap = {
        storyboard: "storyboard",
        "schedule-storyboard": "scheduleStoryboard",
        "character-sheet": "characterSheet",
        "scene-sheet": "sceneSheet",
        "product-sheet": "productSheet",
        "lighting-correct": "lightingCorrect",
      };
      if (toolMap[action]) {
        createStoryToolNode(nodeId, toolMap[action]);
        return;
      }
      state.canvasToolboxNodeId = null;
      renderCanvasDetail();
    };
    trigger.onclick = (event) => {
      event.stopPropagation();
      event.preventDefault();
      runToolboxAction();
    };
    trigger.onpointerdown = (event) => {
      event.stopPropagation();
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
  state.canvasHistoryOpen = false;
  state.canvasHistoryPreviewId = null;
  state.canvasHistoryBatchMode = false;
  state.canvasHistorySelectedIds.clear();
  state.canvasContextMenu = null;
  state.canvasToolboxNodeId = null;
  state.washConfirmNodeId = null;
  state.reversePromptConfirmNodeId = null;
  state.portraitTextureConfirmNodeId = null;
  state.audioVoiceNodeId = null;
};

const openCanvasAddPanel = () => {
  state.canvasAddPanelOpen = true;
  state.canvasTemplatePanelOpen = false;
  state.canvasHistoryOpen = false;
  state.canvasContextMenu = null;
  state.canvasToolboxNodeId = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasAddPanel = () => {
  state.canvasAddPanelOpen = !state.canvasAddPanelOpen;
  state.canvasTemplatePanelOpen = false;
  state.canvasHistoryOpen = false;
  state.canvasContextMenu = null;
  state.canvasToolboxNodeId = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasTemplatePanel = () => {
  state.canvasTemplatePanelOpen = !state.canvasTemplatePanelOpen;
  state.canvasAddPanelOpen = false;
  state.canvasHistoryOpen = false;
  state.canvasContextMenu = null;
  state.canvasToolboxNodeId = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasHistory = () => {
  state.canvasHistoryOpen = !state.canvasHistoryOpen;
  state.canvasAddPanelOpen = false;
  state.canvasTemplatePanelOpen = false;
  state.canvasContextMenu = null;
  state.canvasToolboxNodeId = null;
  state.canvasHistoryPreviewId = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const useCanvasHistoryItem = (item, offset = { x: 0, y: 0 }) => {
  if (!item) return;
  if (item.type === "video") {
    createVideoNodeAtViewportCenter(offset);
    const node = currentCanvas()?.nodes.at(-1);
    if (node?.type === "video") {
      node.name = item.name || node.name;
      node.prompt = `${item.source || "历史"}生成视频`;
      saveProjectsState();
      renderCanvasDetail();
    }
    return;
  }
  if (item.type === "audio") {
    createAudioNodeAtViewportCenter(offset);
    const node = currentCanvas()?.nodes.at(-1);
    if (node?.type === "audio") {
      node.name = item.name || node.name;
      node.scriptText = `${item.source || "历史"}生成音频`;
      saveProjectsState();
      renderCanvasDetail();
    }
    return;
  }
  createNodeAtViewportCenter(item.image || CANVAS_NODE_PREVIEW, offset);
  const node = currentCanvas()?.nodes.at(-1);
  if (node?.type === "image") {
    node.name = item.name || node.name;
    saveProjectsState();
    renderCanvasDetail();
  }
};

const downloadCanvasHistoryItem = (item) => {
  if (!item) return;
  const link = document.createElement("a");
  link.href = item.image || DEFAULT_COVER;
  link.download = `${item.name || "history"}.${item.type === "video" ? "mp4" : item.type === "audio" ? "mp3" : "jpg"}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const downloadWorkflowHistoryItems = (items) => items.filter(Boolean).forEach((item) => downloadCanvasHistoryItem(item));

const renderCanvasHistoryOwner = () => {
  if (state.currentView === "canvases") renderGrid();
  else renderCanvasDetail();
};

const handleCanvasHistoryAction = (actionButton, event) => {
  if (!actionButton) return false;
  const operationHistory = isCanvasDetailView();
  const listHistory = state.currentView === "canvases";
  if (operationHistory) {
    state.canvasHistoryTab = state.canvasOperationHistoryTab;
    state.canvasHistoryBatchMode = state.canvasOperationHistoryBatchMode;
    state.canvasHistorySelectedIds = state.canvasOperationHistorySelectedIds;
    state.canvasHistoryPreviewId = state.canvasOperationHistoryPreviewId;
    state.workflowRecycleFilter = state.canvasOperationHistoryFilter;
    state.workflowRecycleSort = state.canvasOperationHistorySort;
    state.workflowRecycleOpenMenu = state.canvasOperationHistoryOpenMenu;
  } else if (listHistory) {
    state.workflowRecycleTab = state.canvasHistoryTab;
    state.workflowRecycleBatchMode = state.canvasHistoryBatchMode;
    state.workflowRecycleSelectedIds = state.canvasHistorySelectedIds;
    state.workflowRecyclePreviewId = state.canvasHistoryPreviewId;
    state.workflowRecycleFilter = state.canvasHistoryFilter;
    state.workflowRecycleSort = state.canvasHistorySort;
    state.workflowRecycleOpenMenu = state.canvasHistoryOpenMenu;
  }
  const action = actionButton.dataset.canvasHistoryAction;
  if (!action) return false;
  event.preventDefault();
  event.stopPropagation();
  const id = actionButton.dataset.historyId;
  const item = state.workflowRecycleItems.find((candidate) => candidate.id === id);
  if (action === "close") {
    state.canvasHistoryOpen = false;
    state.canvasHistoryPreviewId = null;
    state.canvasHistoryBatchMode = false;
    state.canvasHistorySelectedIds.clear();
    if (operationHistory) {
      state.canvasOperationHistoryPreviewId = null;
      state.canvasOperationHistoryBatchMode = false;
      state.canvasOperationHistorySelectedIds.clear();
    }
    renderCanvasHistoryOwner();
  } else if (action === "tab") {
    state.canvasHistoryTab = actionButton.dataset.historyTab || "image";
    state.canvasHistoryBatchMode = false;
    state.canvasHistorySelectedIds.clear();
    state.canvasHistoryPreviewId = null;
    renderCanvasHistoryOwner();
  } else if (action === "enter-batch") {
    state.canvasHistoryBatchMode = true;
    state.canvasHistoryPreviewId = null;
    renderCanvasHistoryOwner();
  } else if (action === "cancel-batch") {
    state.canvasHistoryBatchMode = false;
    state.canvasHistorySelectedIds.clear();
    renderCanvasHistoryOwner();
  } else if (action === "toggle-select") {
    if (state.canvasHistorySelectedIds.has(id)) state.canvasHistorySelectedIds.delete(id);
    else state.canvasHistorySelectedIds.add(id);
    renderCanvasHistoryOwner();
  } else if (action === "toggle-select-all") {
    const ids = canvasHistoryItems().map((candidate) => candidate.id);
    const allSelected = ids.length > 0 && ids.every((candidateId) => state.canvasHistorySelectedIds.has(candidateId));
    ids.forEach((candidateId) => allSelected ? state.canvasHistorySelectedIds.delete(candidateId) : state.canvasHistorySelectedIds.add(candidateId));
    renderCanvasHistoryOwner();
  } else if (action === "toggle-date") {
    const label = actionButton.dataset.historyDate;
    const ids = canvasHistoryItems().filter((candidate) => canvasHistoryDateLabel(candidate) === label).map((candidate) => candidate.id);
    const allSelected = ids.every((candidateId) => state.canvasHistorySelectedIds.has(candidateId));
    ids.forEach((candidateId) => {
      if (allSelected) state.canvasHistorySelectedIds.delete(candidateId);
      else state.canvasHistorySelectedIds.add(candidateId);
    });
    renderCanvasHistoryOwner();
  } else if (action === "preview") {
    state.canvasHistoryPreviewId = id;
    renderCanvasHistoryOwner();
  } else if (action === "close-preview") {
    state.canvasHistoryPreviewId = null;
    renderCanvasHistoryOwner();
  } else if (action === "toggle-menu") {
    const menu = actionButton.dataset.recycleMenu || "";
    state.workflowRecycleOpenMenu = state.workflowRecycleOpenMenu === menu ? null : menu;
    renderCanvasHistoryOwner();
  } else if (action === "set-filter") {
    state.workflowRecycleFilter = actionButton.dataset.recycleValue || "all";
    state.workflowRecycleOpenMenu = null;
    renderCanvasHistoryOwner();
  } else if (action === "set-sort") {
    state.workflowRecycleSort = actionButton.dataset.recycleValue || "date-desc";
    state.workflowRecycleOpenMenu = null;
    renderCanvasHistoryOwner();
  } else if (action === "toggle-sort") {
    state.workflowRecycleSort = state.workflowRecycleSort === "date-desc" ? "date-asc" : "date-desc";
    renderCanvasHistoryOwner();
  } else if (action === "download") {
    downloadCanvasHistoryItem(item);
  } else if (action === "download-selected" || action === "download-use-selected") {
    const selectedItems = [...state.canvasHistorySelectedIds].map((selectedId) => state.workflowRecycleItems.find((candidate) => candidate.id === selectedId)).filter(Boolean);
    downloadWorkflowHistoryItems(selectedItems);
    if (action === "download-use-selected") selectedItems.forEach((selectedItem, index) => useCanvasHistoryItem(selectedItem, { x: index * 36, y: index * 36 }));
    state.canvasHistoryBatchMode = false;
    state.canvasHistorySelectedIds.clear();
    renderCanvasHistoryOwner();
  } else if (action === "use") {
    state.canvasHistoryOpen = false;
    state.canvasHistoryPreviewId = null;
    useCanvasHistoryItem(item);
  } else if (action === "use-selected") {
    const selectedItems = [...state.canvasHistorySelectedIds]
      .map((selectedId) => state.workflowRecycleItems.find((candidate) => candidate.id === selectedId))
      .filter(Boolean);
    state.canvasHistoryOpen = false;
    state.canvasHistoryBatchMode = false;
    state.canvasHistorySelectedIds.clear();
    selectedItems.forEach((selectedItem, index) => useCanvasHistoryItem(selectedItem, { x: index * 36, y: index * 36 }));
  }
  if (operationHistory) {
    state.canvasOperationHistoryTab = state.canvasHistoryTab;
    state.canvasOperationHistoryBatchMode = state.canvasHistoryBatchMode;
    state.canvasOperationHistorySelectedIds = state.canvasHistorySelectedIds;
    state.canvasOperationHistoryPreviewId = state.canvasHistoryPreviewId;
    state.canvasOperationHistoryFilter = state.workflowRecycleFilter;
    state.canvasOperationHistorySort = state.workflowRecycleSort;
    state.canvasOperationHistoryOpenMenu = state.workflowRecycleOpenMenu;
  } else if (listHistory) {
    state.canvasHistoryFilter = state.workflowRecycleFilter;
    state.canvasHistorySort = state.workflowRecycleSort;
    state.canvasHistoryOpenMenu = state.workflowRecycleOpenMenu;
  }
  return true;
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

const createVideoNodeAtViewportCenter = (offset = { x: 0, y: 0 }) => {
  const canvas = currentCanvas();
  const board = document.getElementById("canvas-board");
  if (!canvas || !board) return;
  const centerX = (board.clientWidth / 2 - canvas.viewport.x) / canvas.viewport.scale;
  const centerY = (board.clientHeight / 2 - canvas.viewport.y) / canvas.viewport.scale;
  const videoNodes = canvas.nodes.filter((node) => node.type === "video");
  const node = createVideoNode({
    name: `视频节点${videoNodes.length + 1}`,
    x: centerX - 480 + offset.x,
    y: centerY - 390 + offset.y,
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

const openPortraitTextureConfirm = (nodeId) => {
  const node = findNodeById(nodeId);
  if (!node || node.type !== "image") return;
  state.portraitTextureConfirmNodeId = nodeId;
  state.canvasToolboxNodeId = null;
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

const createPortraitTextureNode = (nodeId) => {
  const canvas = currentCanvas();
  const sourceNode = findNodeById(nodeId);
  if (!canvas || !sourceNode || sourceNode.type !== "image") return;
  const model = selectedPortraitTextureModel();
  const resultIndex = getNextPanoramaOutputIndex("人像质感调节", (name) => /^人像质感调节\d+$/.test(name));
  const textureNode = createImageNode({
    name: `人像质感调节${resultIndex}`,
    image: sourceNode.image,
    prompt: `${sourceNode.prompt}\n\n人像质感调节：${model.name}`,
    cameraControl: sourceNode.cameraControl,
    x: sourceNode.x + 720,
    y: sourceNode.y + 36,
  });
  textureNode.model = model.name;
  canvas.nodes.push(textureNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: sourceNode.id,
    to: textureNode.id,
  });
  canvas.selectedNodeId = textureNode.id;
  state.portraitTextureConfirmNodeId = null;
  closeCanvasPopups();
  saveProjectsState();
  renderCanvasDetail();
};

const createStoryToolNode = (nodeId, toolKey) => {
  const canvas = currentCanvas();
  const sourceNode = findNodeById(nodeId);
  const config = CANVAS_STORY_TOOL_CONFIG[toolKey];
  if (!canvas || !sourceNode || sourceNode.type !== "image" || !config) return;
  const resultIndex = getNextPanoramaOutputIndex(config.label, (name) => name.startsWith(config.label));
  const storyNode = createImageNode({
    name: `${config.label}${resultIndex}`,
    image: sourceNode.image,
    prompt: "",
    promptPlaceholder: config.placeholder,
    toolTag: {
      key: toolKey,
      label: config.label,
    },
    cameraControl: sourceNode.cameraControl,
    x: sourceNode.x + 720,
    y: sourceNode.y + 36,
  });
  canvas.nodes.push(storyNode);
  canvas.connections.push({
    id: `link${Date.now()}${Math.floor(Math.random() * 1000)}`,
    from: sourceNode.id,
    to: storyNode.id,
  });
  canvas.selectedNodeId = storyNode.id;
  state.canvasToolboxNodeId = null;
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
  syncHeader();
  updateActivityCountdown();
  openModal(limitedActivityModal);
};

limitedActivityTrigger?.addEventListener("click", openLimitedActivityModal);
activityRechargeTrigger?.addEventListener("click", () => closeModal(limitedActivityModal));

contactSupportTrigger?.addEventListener("click", () => {
  state.avatarOpen = false;
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
  state.workflowPage = "recycle";
  state.workflowRecyclePreviewId = null;
  renderGrid();
});

const handleWorkflowAction = (workflowAction, event) => {
  if (!workflowAction) return false;
  if (workflowAction.dataset.workflowStage) {
    event.preventDefault();
    event.stopPropagation();
    state.workflowStage = workflowAction.dataset.workflowStage || "keyframe";
    state.workflowResultView = state.workflowStage === "video" ? "generator" : state.workflowStage === "audio" ? "audio-generator" : "keyframes";
    renderWorkflowStudio();
    return true;
  }
  const action = workflowAction?.dataset.workflowAction;
  if (!action) return false;
  if (action === "set-result-view") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowResultView = workflowAction.dataset.resultView || "keyframes";
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-audio-mode") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowAudioMode = workflowAction.dataset.audioMode || "music";
    if (state.workflowAudioMode === "music") state.workflowAudioSettings.model = "phan Music 1.5";
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-voice-tab") {
    event.preventDefault();
    state.workflowTtsVoiceTab = workflowAction.dataset.voiceTab || "official";
    state.workflowTtsVoicesExpanded = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-tts-voices") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowTtsVoicesExpanded = !state.workflowTtsVoicesExpanded;
    renderWorkflowStudio();
    return true;
  }
  if (action === "select-tts-voice") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowTtsVoiceId = workflowAction.dataset.voiceId || state.workflowTtsVoiceId;
    renderWorkflowStudio();
    return true;
  }
  if (action === "delete-tts-voice") {
    event.preventDefault();
    event.stopPropagation();
    const voiceId = workflowAction.dataset.voiceId || "";
    const voice = state.workflowTtsVoices.find((item) => item.id === voiceId);
    if (voice?.group === "mine") {
      state.workflowTtsVoices = state.workflowTtsVoices.filter((item) => item.id !== voiceId);
      if (state.workflowTtsVoiceId === voiceId) state.workflowTtsVoiceId = "voice-linxi";
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "preview-tts-voice") {
    event.preventDefault();
    event.stopPropagation();
    window.alert(`正在试听「${workflowTtsVoice().name}」`);
    return true;
  }
  if (action === "open-voice-clone") {
    event.preventDefault();
    state.workflowTtsCloneOpen = true;
    state.workflowTtsCloneRecorded = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-voice-clone") {
    event.preventDefault();
    state.workflowTtsCloneOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-voice-clone-method") {
    event.preventDefault();
    state.workflowTtsCloneMethod = workflowAction.dataset.cloneMethod || "record";
    state.workflowTtsCloneRecorded = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "record-clone-voice" || action === "upload-clone-voice") {
    event.preventDefault();
    state.workflowTtsCloneRecorded = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "create-cloned-voice") {
    event.preventDefault();
    if (!state.workflowTtsCloneRecorded) return true;
    const id = `voice-clone-${Date.now()}`;
    state.workflowTtsVoices.push({ id, name: state.workflowTtsCloneName || "我的音色", meta: "克隆音色 · 私有", group: "mine", color: "#2ec9a5" });
    state.workflowTtsVoiceId = id;
    state.workflowTtsVoiceTab = "mine";
    state.workflowTtsCloneOpen = false;
    renderWorkflowStudio();
    return true;
  }
  if (action === "reset-tts-effects") {
    event.preventDefault();
    state.workflowTtsSpeed = 1;
    state.workflowTtsPitch = 0;
    state.workflowTtsVolume = 100;
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-tts-long-mode") {
    event.preventDefault();
    state.workflowTtsLongMode = !state.workflowTtsLongMode;
    renderWorkflowStudio();
    return true;
  }
  if (action === "open-tts-emotion") {
    event.preventDefault();
    const selection = state.workflowTtsSelectionRange;
    if (!selection || selection.start === selection.end) return true;
    const editor = workflowHomeView?.querySelector("[data-workflow-tts-editor]");
    state.workflowTtsText = workflowTtsEditorValue(editor);
    state.workflowTtsEmotionMenu = { ...selection };
    renderWorkflowStudio();
    return true;
  }
  if (action === "apply-tts-emotion") {
    event.preventDefault();
    const selection = state.workflowTtsEmotionMenu;
    const emotion = workflowAction.dataset.emotion || "中性";
    if (selection) {
      const selectedText = state.workflowTtsText.slice(selection.start, selection.end);
      state.workflowTtsText = `${state.workflowTtsText.slice(0, selection.start)}[${emotion}|${selectedText}]${state.workflowTtsText.slice(selection.end)}`;
      state.workflowTtsEmotionMenu = null;
      state.workflowTtsSelectionRange = null;
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "close-tts-emotion") {
    event.preventDefault();
    state.workflowTtsEmotionMenu = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "remove-tts-emotion-chip") {
    event.preventDefault();
    event.stopPropagation();
    const chip = workflowAction.closest(".workflow-tts-emotion-chip");
    chip?.replaceWith(document.createTextNode(chip.dataset.text || ""));
    const editor = workflowHomeView?.querySelector("[data-workflow-tts-editor]");
    state.workflowTtsText = workflowTtsEditorValue(editor);
    state.workflowTtsSelectionRange = null;
    return true;
  }
  if (action === "insert-tts-tag") {
    event.preventDefault();
    const tag = workflowAction.dataset.ttsTag || "";
    const editor = workflowHomeView?.querySelector("[data-workflow-tts-editor]");
    state.workflowTtsText = workflowTtsEditorValue(editor);
    const start = state.workflowTtsSelectionRange?.start ?? state.workflowTtsText.length;
    const end = state.workflowTtsSelectionRange?.end ?? start;
    state.workflowTtsText = `${state.workflowTtsText.slice(0, start)}${tag}${state.workflowTtsText.slice(end)}`;
    state.workflowTtsSelectionRange = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "upload-audio-reference") {
    event.preventDefault();
    event.stopPropagation();
    openWorkflowUploadModal("audio-reference");
    renderWorkflowStudio();
    return true;
  }
  if (action === "toggle-audio-instrumental") {
    event.preventDefault();
    state.workflowAudioInstrumental = !state.workflowAudioInstrumental;
    renderWorkflowStudio();
    return true;
  }
  if (action === "change-audio-count") {
    event.preventDefault();
    const delta = Number(workflowAction.dataset.countDelta || 0);
    state.workflowAudioCount = Math.max(1, Math.min(4, state.workflowAudioCount + delta));
    renderWorkflowStudio();
    return true;
  }
  if (action === "generate-scene-audio") {
    event.preventDefault();
    state.workflowAudioSettings.model = workflowHomeView?.querySelector("[data-workflow-audio-param=\"model\"]")?.value || state.workflowAudioSettings.model;
    state.workflowTtsModel = workflowHomeView?.querySelector("[data-workflow-tts-model]")?.value || state.workflowTtsModel;
    state.workflowAudioName = workflowHomeView?.querySelector("[data-workflow-audio-name]")?.value || state.workflowAudioName;
    const ttsEditor = workflowHomeView?.querySelector("[data-workflow-tts-editor]");
    if (ttsEditor) state.workflowTtsText = workflowTtsEditorValue(ttsEditor);
    const { scene } = currentWorkflowStudioSelection();
    const isMusic = state.workflowAudioMode === "music";
    if (!isMusic && state.workflowAudioMode !== "sfx") return true;
    const prompt = isMusic ? state.workflowAudioStyle : state.workflowTtsText.trim();
    if (prompt) state.workflowAudioDraftPrompt = prompt;
    const createAudio = (ordinal = 0) => ({
      id: `audio-${Date.now()}-${ordinal}`,
      title: isMusic ? (state.workflowAudioSongName || `未命名歌曲 ${ordinal + 1}`) : (state.workflowAudioName.trim() || `${workflowTtsVoice().name} · 语音 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`),
      mode: state.workflowAudioMode === "music" ? "音乐创作" : "文生音频",
      model: isMusic ? state.workflowAudioSettings.model : state.workflowTtsModel,
      duration: isMusic ? `00:${String(Number.parseInt(state.workflowAudioSettings.duration, 10) || 30).padStart(2, "0")}` : `00:${String(Math.max(2, Math.ceil(state.workflowTtsText.length / (4.5 * state.workflowTtsSpeed)))).padStart(2, "0")}`,
      status: "生成中",
      prompt: state.workflowAudioDraftPrompt,
      params: isMusic
        ? { instrumental: state.workflowAudioInstrumental, lyrics: state.workflowAudioLyrics, style: state.workflowAudioStyle, songName: state.workflowAudioSongName, reference: state.workflowAudioReference, count: state.workflowAudioCount }
        : { model: state.workflowTtsModel, audioName: state.workflowAudioName, voiceId: state.workflowTtsVoiceId, speed: state.workflowTtsSpeed, pitch: state.workflowTtsPitch, volume: state.workflowTtsVolume, language: state.workflowTtsLanguage, longMode: state.workflowTtsLongMode },
    });
    const createdAudios = Array.from({ length: isMusic ? state.workflowAudioCount : 1 }, (_, index) => createAudio(index));
    workflowSceneAudioResults(scene).unshift(...createdAudios);
    state.workflowResultView = "audios";
    renderWorkflowStudio();
    window.setTimeout(() => { createdAudios.forEach((audio) => { audio.status = "已完成"; }); renderWorkflowStudio(); }, 1100);
    return true;
  }
  if (action === "preview-scene-audio") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const audio = workflowSceneAudioResults(scene)[Number(workflowAction.dataset.workflowAudioIndex || 0)];
    if (audio?.status === "已完成") {
      state.workflowMediaPreview = { kind: "audio", title: "音频预览", duration: audio.duration, playing: false, volume: 72 };
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "delete-scene-audio") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteAudioIndex = Number(workflowAction.dataset.workflowAudioIndex || 0);
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-audio-delete") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteAudioIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-audio-delete") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    if (state.workflowDeleteAudioIndex !== null) {
      workflowSceneAudioResults(scene).splice(state.workflowDeleteAudioIndex, 1);
    }
    state.workflowDeleteAudioIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "copy-audio-params") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const audio = workflowSceneAudioResults(scene)[Number(workflowAction.dataset.workflowAudioIndex || 0)];
    if (audio) {
      const isMusic = audio.mode === "音乐创作";
      state.workflowAudioMode = isMusic ? "music" : "sfx";
      if (isMusic) state.workflowAudioSettings.model = audio.model || "phan Music 1.5";
      state.workflowAudioDraftPrompt = audio.prompt || "";
      if (isMusic) {
        state.workflowAudioInstrumental = audio.params?.instrumental ?? true;
        state.workflowAudioLyrics = audio.params?.lyrics || "";
        state.workflowAudioStyle = audio.params?.style || audio.prompt || "";
        state.workflowAudioSongName = audio.params?.songName || audio.title || "";
        state.workflowAudioReference = audio.params?.reference || null;
        state.workflowAudioCount = audio.params?.count || 1;
      } else {
        state.workflowTtsVoiceId = audio.params?.voiceId || state.workflowTtsVoiceId;
        state.workflowTtsModel = audio.params?.model || audio.model || "phan Voice 2.0";
        state.workflowTtsSpeed = audio.params?.speed ?? 1;
        state.workflowTtsPitch = audio.params?.pitch ?? 0;
        state.workflowTtsVolume = audio.params?.volume ?? 100;
        state.workflowTtsLanguage = audio.params?.language || "自动检测";
        state.workflowTtsLongMode = audio.params?.longMode ?? false;
        state.workflowTtsText = audio.prompt || "";
        state.workflowAudioName = audio.params?.audioName || audio.title || "";
      }
      state.workflowResultView = "audio-generator";
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "send-audio-to-timeline") {
    event.preventDefault();
    event.stopPropagation();
    const timeline = workflowHomeView?.querySelector(".workflow-timeline-panel:not(.workflow-timeline-preview-editor) .workflow-timeline");
    timeline?.classList.add("is-updated");
    window.setTimeout(() => timeline?.classList.remove("is-updated"), 900);
    return true;
  }
  if (action === "download-scene-audio") {
    event.preventDefault();
    event.stopPropagation();
    window.alert("已开始下载音频");
    return true;
  }
  if (action === "upload-video-reference") {
    event.preventDefault();
    event.stopPropagation();
    const kind = workflowAction.dataset.referenceKind || "image";
    openWorkflowUploadModal(kind === "video" ? "video-video" : kind === "audio" ? "video-audio" : "video-image");
    renderWorkflowStudio();
    return true;
  }
  if (action === "upload-timeline-media") {
    event.preventDefault();
    event.stopPropagation();
    const track = workflowAction.dataset.timelineTrack || "keyframe";
    openWorkflowUploadModal(`timeline-${track}`);
    renderWorkflowStudio();
    return true;
  }
  if (action === "remove-video-reference") {
    event.preventDefault();
    event.stopPropagation();
    const kind = workflowAction.dataset.referenceKind || "image";
    const key = kind === "audio" ? "audios" : kind === "video" ? "videos" : "images";
    const referenceKey = workflowAction.dataset.referenceKey || "";
    if (kind === "image" && referenceKey && !referenceKey.startsWith("manual-")) {
      state.workflowVideoExcludedReferenceKeys.push(referenceKey);
    } else {
      state.workflowVideoReferences[key].splice(Number(workflowAction.dataset.referenceIndex || 0), 1);
    }
    renderWorkflowStudio();
    return true;
  }
  if (action === "insert-video-prompt-mention") {
    event.preventDefault();
    event.stopPropagation();
    const editor = workflowHomeView?.querySelector("[data-workflow-video-prompt]");
    const mention = state.workflowVideoPromptMention;
    const label = workflowAction.dataset.workflowMentionLabel || "";
    if (editor && mention && label) {
      const inserted = `@${label}`;
      const prompt = workflowPromptEditorValue(editor);
      state.workflowVideoDraftPrompt = `${prompt.slice(0, mention.start)}${inserted}${prompt.slice(mention.end)}`;
      state.workflowVideoPromptMention = null;
      renderWorkflowStudio();
      window.requestAnimationFrame(() => {
        const nextEditor = workflowHomeView?.querySelector("[data-workflow-video-prompt]");
        const cursor = mention.start + inserted.length;
        nextEditor?.focus();
        if (nextEditor) setWorkflowPromptCursorOffset(nextEditor, cursor);
      });
    }
    return true;
  }
  if (action === "open-scene-keyframe-picker") {
    event.preventDefault();
    event.stopPropagation();
    const rect = workflowAction.getBoundingClientRect();
    const pickerWidth = Math.min(520, window.innerWidth - 32);
    state.workflowSceneKeyframePickerAnchor = {
      left: Math.max(16, Math.min(rect.right - pickerWidth, window.innerWidth - pickerWidth - 16)),
      bottom: Math.max(16, window.innerHeight - rect.top + 8),
      maxHeight: Math.max(180, Math.min(430, rect.top - 16)),
    };
    state.workflowSceneKeyframePickerShotFilter = "all";
    state.workflowSceneKeyframePickerOpen = true;
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-scene-keyframe-picker") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowSceneKeyframePickerOpen = false;
    state.workflowSceneKeyframePickerAnchor = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "filter-scene-keyframes") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowSceneKeyframePickerShotFilter = workflowAction.dataset.workflowShotFilter || "all";
    renderWorkflowStudio();
    return true;
  }
  if (action === "select-scene-keyframe-reference") {
    event.preventDefault();
    event.stopPropagation();
    const { episode, scene } = currentWorkflowStudioSelection();
    const frameIndex = Number(workflowAction.dataset.workflowFrameIndex || 0);
    const keyframe = workflowAssignedKeyframes(scene).find(({ index }) => index === frameIndex);
    if (keyframe) {
      const name = workflowKeyframeDisplayName(episode, scene, keyframe.frame, keyframe.assignedShotIndex);
      state.workflowVideoReferences.images.push({
        label: name,
        image: keyframe.frame.image,
        source: "关键帧",
      });
      state.workflowVideoDraftPrompt = `${workflowPromptEditorValue(workflowHomeView?.querySelector("[data-workflow-video-prompt]"))}\n@参考图:${name}`.trim();
    }
    state.workflowSceneKeyframePickerOpen = false;
    state.workflowSceneKeyframePickerAnchor = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "generate-scene-video") {
    event.preventDefault();
    event.stopPropagation();
    const { episode, scene } = currentWorkflowStudioSelection();
    const videos = workflowSceneVideoResults(scene);
    const promptInput = workflowHomeView?.querySelector("[data-workflow-video-prompt]");
    state.workflowVideoDraftPrompt = workflowPromptEditorValue(promptInput) || workflowVideoDraftPromptValue(episode, scene);
    const selectedShotIndex = state.workflowVideoShotIndex === "" ? null : Number(state.workflowVideoShotIndex);
    const selectedShot = selectedShotIndex === null ? null : scene.shots[selectedShotIndex];
    const readVideoParam = (key, fallback) => workflowHomeView?.querySelector(`[data-workflow-video-param="${key}"]`)?.value || fallback;
    state.workflowVideoSettings = {
      mode: readVideoParam("mode", "全能参考"),
      model: readVideoParam("model", "phan movie Video 2.1"),
      ratio: readVideoParam("ratio", "16:9"),
      resolution: readVideoParam("resolution", "1080P"),
      duration: readVideoParam("duration", selectedShot?.duration || `${workflowSceneDurationSeconds(scene)}s`),
      dubbing: readVideoParam("dubbing", "不生成配音"),
    };
    const imageReferences = Array.from(workflowHomeView?.querySelectorAll(".workflow-video-image-reference-strip .workflow-reference-thumb") || []).map((item) => ({
      label: item.querySelector("strong")?.textContent || "参考图",
      image: item.querySelector("img")?.getAttribute("src") || "",
      source: item.querySelector("span")?.textContent || "参考图",
    }));
    const referenceSnapshot = {
      images: imageReferences,
      videos: state.workflowVideoReferences.videos.map((item) => ({ ...item, source: "参考视频" })),
      audios: state.workflowVideoReferences.audios.map((item) => ({ ...item, source: "参考音频" })),
    };
    const pendingVideo = {
      id: `video-${Date.now()}`,
      shotIndex: selectedShotIndex,
      title: workflowVideoDisplayName(state.workflowEpisodeIndex, state.workflowSceneIndex, selectedShotIndex),
      duration: state.workflowVideoSettings.duration,
      status: "生成中",
      image: scene.keyframes.find((frame) => !frame.grid && !frame.pending)?.image || "./assets/images/canvas-chase-sequence.jpg",
      mode: state.workflowVideoSettings.mode,
      model: state.workflowVideoSettings.model,
      ratio: state.workflowVideoSettings.ratio,
      resolution: state.workflowVideoSettings.resolution,
      dubbing: state.workflowVideoSettings.dubbing,
      prompt: state.workflowVideoDraftPrompt,
      references: referenceSnapshot,
    };
    videos.unshift(pendingVideo);
    state.workflowResultView = "videos";
    renderWorkflowStudio();
    window.setTimeout(() => {
      pendingVideo.status = "已完成";
      renderWorkflowStudio();
    }, 1200);
    return true;
  }
  if (action === "regenerate-scene-video") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const videos = workflowSceneVideoResults(scene);
    const target = videos[Number(workflowAction.dataset.workflowVideoIndex || 0)];
    if (target) {
      target.status = "生成中";
      renderWorkflowStudio();
      window.setTimeout(() => {
        target.status = "已完成";
        renderWorkflowStudio();
      }, 900);
    }
    return true;
  }
  if (action === "copy-video-params") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const video = workflowSceneVideoResults(scene)[Number(workflowAction.dataset.workflowVideoIndex || 0)];
    if (video) {
      state.workflowVideoShotIndex = Number.isInteger(video.shotIndex) ? String(video.shotIndex) : "";
      state.workflowVideoDraftPrompt = video.prompt || "";
      state.workflowVideoReferences = {
        images: (video.references?.images || []).map((item) => ({ ...item, source: item.source || "参考图" })),
        videos: (video.references?.videos || []).map((item) => ({ ...item, source: item.source || "参考视频" })),
        audios: (video.references?.audios || []).map((item) => ({ ...item, source: item.source || "参考音频" })),
      };
      state.workflowVideoSettings = {
        mode: video.mode || "全能参考",
        model: video.model || "phan movie Video 2.1",
        ratio: video.ratio || "16:9",
        resolution: video.resolution || "1080P",
        duration: video.duration || "",
        dubbing: video.dubbing || "不生成配音",
      };
      state.workflowResultView = "generator";
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "send-video-to-timeline") {
    event.preventDefault();
    event.stopPropagation();
    const timeline = workflowHomeView?.querySelector(".workflow-timeline-panel:not(.workflow-timeline-preview-editor) .workflow-timeline");
    timeline?.classList.add("is-updated");
    window.setTimeout(() => timeline?.classList.remove("is-updated"), 900);
    return true;
  }
  if (action === "download-scene-video") {
    event.preventDefault();
    event.stopPropagation();
    window.alert("已开始下载视频");
    return true;
  }
  if (action === "delete-scene-video") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteVideoIndex = Number(workflowAction.dataset.workflowVideoIndex || 0);
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-video-delete") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowDeleteVideoIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-video-delete") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    if (state.workflowDeleteVideoIndex !== null) {
      workflowSceneVideoResults(scene).splice(state.workflowDeleteVideoIndex, 1);
    }
    state.workflowDeleteVideoIndex = null;
    renderWorkflowStudio();
    return true;
  }
  if (action === "preview-scene-video") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const video = workflowSceneVideoResults(scene)[Number(workflowAction.dataset.workflowVideoIndex || 0)];
    if (video) {
      state.workflowMediaPreview = {
        kind: "scene-video",
        title: video.title || "视频预览",
        image: video.image,
        playing: false,
        volume: 72,
      };
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "preview-generator-reference") {
    event.preventDefault();
    event.stopPropagation();
    const kind = workflowAction.dataset.referenceKind || "video";
    const list = kind === "audio" ? state.workflowVideoReferences.audios : state.workflowVideoReferences.videos;
    const reference = list[Number(workflowAction.dataset.referenceIndex || 0)];
    if (reference) {
      state.workflowMediaPreview = {
        kind,
        title: reference.label || reference.name || "参考资源",
        image: reference.image,
        playing: false,
        volume: 72,
      };
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "open-reference-preview") {
    event.preventDefault();
    event.stopPropagation();
    const { scene } = currentWorkflowStudioSelection();
    const video = workflowSceneVideoResults(scene)[Number(workflowAction.dataset.workflowVideoIndex || 0)];
    const kind = workflowAction.dataset.referenceKind || "image";
    const key = kind === "audio" ? "audios" : kind === "video" ? "videos" : "images";
    const reference = video?.references?.[key]?.[Number(workflowAction.dataset.referenceIndex || 0)];
    if (reference) {
      state.workflowMediaPreview = {
        kind,
        title: reference.label || reference.name || "参考资源",
        image: reference.image,
        playing: false,
        volume: 72,
      };
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "toggle-media-preview-play") {
    event.preventDefault();
    event.stopPropagation();
    if (state.workflowMediaPreview) {
      state.workflowMediaPreview.playing = !state.workflowMediaPreview.playing;
      renderWorkflowStudio();
    }
    return true;
  }
  if (action === "set-media-preview-volume") {
    event.stopPropagation();
    if (state.workflowMediaPreview) {
      state.workflowMediaPreview.volume = Number(workflowAction.value || 72);
    }
    return true;
  }
  if (action === "close-media-preview") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowMediaPreview = null;
    renderWorkflowStudio();
    return true;
  }
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
    openWorkflowUploadModal("keyframe");
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
    openWorkflowUploadModal("keyframe-reference");
    renderWorkflowStudio();
    return true;
  }
  if (action === "close-reference-modal") {
    event.preventDefault();
    event.stopPropagation();
    state.workflowReferenceModalOpen = false;
    state.workflowReferenceTarget = "keyframe";
    renderWorkflowStudio();
    return true;
  }
  if (action === "confirm-reference-modal") {
    event.preventDefault();
    event.stopPropagation();
    completeWorkflowUpload(workflowAction);
    renderWorkflowStudio();
    return true;
  }
  if (action === "set-reference-source") {
    event.preventDefault();
    event.stopPropagation();
    const config = workflowUploadTargetConfig(state.workflowReferenceTarget);
    state.workflowReferenceSource = workflowAction.dataset.referenceSource || "local";
    state.workflowReferenceCategory = workflowReferenceCurrentCategory(state.workflowReferenceSource, config.type) || state.workflowReferenceCategory;
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

const isWorkflowFormControl = (target) =>
  target instanceof Element && Boolean(target.closest("input, textarea, select, option, [contenteditable='true']")) && !target.closest("[data-workflow-action]");

const focusWorkflowFormControl = (target) =>
  target instanceof Element
    ? target.closest("input, textarea, select, [contenteditable='true']")?.focus({ preventScroll: true })
    : undefined;

document.addEventListener(
  "click",
  (event) => {
    if (!workflowHomeView) return;
    if (isWorkflowFormControl(event.target)) return;
    const workflowAction = event.target.closest?.("[data-workflow-action], [data-workflow-stage]");
    if (!workflowAction || !workflowHomeView?.contains(workflowAction)) return;
    if (handleWorkflowAction(workflowAction, event)) event.stopPropagation();
  },
  true,
);

workflowHomeView?.addEventListener("click", (event) => {
  if (isWorkflowFormControl(event.target)) {
    focusWorkflowFormControl(event.target);
    return;
  }
  const workflowAction = event.target.closest("[data-workflow-action], [data-workflow-stage]");
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

  const videoCard = event.target.closest(".workflow-video-card");
  if (videoCard && !event.target.closest("button, input, select, textarea, .workflow-video-thumb, .workflow-reference-media")) {
    const { scene } = currentWorkflowStudioSelection();
    const video = workflowSceneVideoResults(scene)[Number(videoCard.dataset.workflowVideoIndex || 0)];
    if (video) {
      video.detailOpen = !video.detailOpen;
      renderWorkflowStudio();
    }
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
  state.workflowPage = navItem.dataset.workflowPage === "recycle" ? "recycle" : "studio";
  renderGrid();
});

let workflowRecyclePlaybackTimer = null;
const stopWorkflowRecyclePlayback = () => {
  if (workflowRecyclePlaybackTimer) window.clearInterval(workflowRecyclePlaybackTimer);
  workflowRecyclePlaybackTimer = null;
  state.workflowRecyclePlaying = false;
};

workflowRecycleContent?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-recycle-action]");
  if (!actionButton) {
    if (state.workflowRecycleOpenMenu) {
      state.workflowRecycleOpenMenu = null;
      renderWorkflowRecycle();
    }
    return;
  }
  const action = actionButton.dataset.recycleAction;
  const id = actionButton.dataset.recycleId;
  if (action === "tab") {
    state.workflowRecycleTab = actionButton.dataset.recycleTab || "image";
    state.workflowRecycleFilter = "all";
    state.workflowRecycleOpenMenu = null;
    renderWorkflowRecycle();
  } else if (action === "enter-batch") {
    state.workflowRecycleBatchMode = true;
    state.workflowRecycleSelectedIds.clear();
    state.workflowRecycleOpenMenu = null;
    renderWorkflowRecycle();
  } else if (action === "cancel-batch") {
    state.workflowRecycleBatchMode = false;
    state.workflowRecycleSelectedIds.clear();
    renderWorkflowRecycle();
  } else if (action === "toggle-select") {
    if (state.workflowRecycleSelectedIds.has(id)) state.workflowRecycleSelectedIds.delete(id);
    else state.workflowRecycleSelectedIds.add(id);
    renderWorkflowRecycle();
  } else if (action === "toggle-select-all") {
    const visibleIds = workflowRecycleVisibleIds();
    const allSelected = Boolean(visibleIds.length) && visibleIds.every((visibleId) => state.workflowRecycleSelectedIds.has(visibleId));
    visibleIds.forEach((visibleId) => {
      if (allSelected) state.workflowRecycleSelectedIds.delete(visibleId);
      else state.workflowRecycleSelectedIds.add(visibleId);
    });
    renderWorkflowRecycle();
  } else if (action === "toggle-date") {
    const date = actionButton.dataset.recycleDate || "";
    const dateItems = workflowRecycleVisibleItems().filter((item) => workflowRecycleDateLabel(item) === date);
    const allSelected = Boolean(dateItems.length) && dateItems.every((item) => state.workflowRecycleSelectedIds.has(item.id));
    dateItems.forEach((item) => {
      if (allSelected) state.workflowRecycleSelectedIds.delete(item.id);
      else state.workflowRecycleSelectedIds.add(item.id);
    });
    renderWorkflowRecycle();
  } else if (action === "toggle-menu") {
    const menu = actionButton.dataset.recycleMenu || "";
    state.workflowRecycleOpenMenu = state.workflowRecycleOpenMenu === menu ? null : menu;
    renderWorkflowRecycle();
  } else if (action === "set-filter") {
    state.workflowRecycleFilter = actionButton.dataset.recycleValue || "all";
    state.workflowRecycleOpenMenu = null;
    renderWorkflowRecycle();
  } else if (action === "set-sort") {
    state.workflowRecycleSort = actionButton.dataset.recycleValue || "date-desc";
    state.workflowRecycleOpenMenu = null;
    renderWorkflowRecycle();
  } else if (action === "preview") {
    state.workflowRecyclePreviewId = id;
    state.workflowRecycleProgress = 18;
    state.workflowRecycleOpenMenu = null;
    stopWorkflowRecyclePlayback();
    renderWorkflowRecycle();
  } else if (action === "close-preview") {
    stopWorkflowRecyclePlayback();
    state.workflowRecyclePreviewId = null;
    renderWorkflowRecycle();
  } else if (action === "download") {
    const item = state.workflowRecycleItems.find((candidate) => candidate.id === id);
    downloadCanvasHistoryItem(item);
  } else if (action === "download-selected") {
    const selectedItems = [...state.workflowRecycleSelectedIds].map((selectedId) => state.workflowRecycleItems.find((candidate) => candidate.id === selectedId)).filter(Boolean);
    downloadWorkflowHistoryItems(selectedItems);
    state.workflowRecycleBatchMode = false;
    state.workflowRecycleSelectedIds.clear();
    renderWorkflowRecycle();
  } else if (action === "toggle-play") {
    state.workflowRecyclePlaying = !state.workflowRecyclePlaying;
    actionButton.innerHTML = state.workflowRecyclePlaying ? workflowPlayerIcon.pause : workflowPlayerIcon.play;
    actionButton.setAttribute("aria-label", state.workflowRecyclePlaying ? "暂停" : "播放");
    if (!state.workflowRecyclePlaying) {
      stopWorkflowRecyclePlayback();
      return;
    }
    workflowRecyclePlaybackTimer = window.setInterval(() => {
      state.workflowRecycleProgress = Math.min(100, state.workflowRecycleProgress + 1);
      const range = workflowRecycleContent.querySelector("[data-recycle-progress]");
      if (range) range.value = state.workflowRecycleProgress;
      const time = workflowRecycleContent.querySelector("[data-recycle-time]");
      const preview = state.workflowRecycleItems.find((item) => item.id === state.workflowRecyclePreviewId);
      if (time && preview) time.textContent = `${workflowRecycleTimeText(state.workflowRecycleProgress, preview.duration)} / ${preview.duration || "00:18"}`;
      if (state.workflowRecycleProgress >= 100) {
        state.workflowRecycleProgress = 0;
        if (range) range.value = 0;
      }
    }, 180);
  }
});

workflowRecycleContent?.addEventListener("input", (event) => {
  if (event.target.matches("[data-recycle-progress]")) {
    state.workflowRecycleProgress = Number(event.target.value || 0);
  } else if (event.target.matches("[data-recycle-volume]")) {
    state.workflowRecycleVolume = Number(event.target.value || 0);
  }
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
  if (isWorkflowFormControl(event.target)) {
    focusWorkflowFormControl(event.target);
    return;
  }
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
  if (event.target?.matches?.("[data-workflow-tts-model]")) {
    state.workflowTtsModel = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-tts-language]")) {
    state.workflowTtsLanguage = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-audio-param]")) {
    state.workflowAudioSettings[event.target.dataset.workflowAudioParam] = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-video-shot-select]")) {
    const { episode, scene } = currentWorkflowStudioSelection();
    state.workflowVideoShotIndex = event.target.value || "";
    state.workflowVideoDraftPrompt = workflowVideoPrompt(episode, scene, state.workflowVideoShotIndex);
    state.workflowVideoSettings.duration = "";
    renderWorkflowStudio();
    return;
  }
  if (event.target?.matches?.("[data-workflow-video-param]")) {
    state.workflowVideoSettings[event.target.dataset.workflowVideoParam] = event.target.value;
    return;
  }
  if (event.target === workflowEpisodeSelect) {
    state.workflowEpisodeIndex = Number(event.target.value || 0);
    state.workflowSceneIndex = 0;
    state.workflowShotIndex = 0;
    state.workflowKeyframeFilter = "all";
    state.workflowResultView = state.workflowStage === "video" ? "generator" : state.workflowStage === "audio" ? "audio-generator" : "keyframes";
    state.workflowVideoShotIndex = "";
    state.workflowVideoDraftPrompt = "";
    renderWorkflowStudio();
    return;
  }
  if (event.target === workflowSceneSelect) {
    state.workflowSceneIndex = Number(event.target.value || 0);
    state.workflowShotIndex = 0;
    state.workflowKeyframeFilter = "all";
    state.workflowResultView = state.workflowStage === "video" ? "generator" : state.workflowStage === "audio" ? "audio-generator" : "keyframes";
    state.workflowVideoShotIndex = "";
    state.workflowVideoDraftPrompt = "";
    renderWorkflowStudio();
    return;
  }
  if (event.target?.dataset?.workflowAction === "filter-keyframes") {
    state.workflowKeyframeFilter = event.target.value || "all";
    renderWorkflowStudio();
  }
});

const updateWorkflowPromptMentionMenu = (editor) => {
  const menu = editor.closest(".workflow-video-prompt")?.querySelector("[data-workflow-prompt-mention-menu]");
  const prompt = workflowPromptEditorValue(editor);
  const cursor = workflowPromptCursorOffset(editor);
  const matchedMention = prompt.slice(0, cursor).match(/@([^\s@]*)$/);
  if (!menu || !matchedMention) {
    state.workflowVideoPromptMention = null;
    menu?.classList.remove("is-open");
    if (menu) menu.innerHTML = "";
    return;
  }

  const query = matchedMention[1].toLowerCase();
  const { episode, scene } = currentWorkflowStudioSelection();
  const references = workflowPromptReferences(episode, scene).filter((item) => item.label.toLowerCase().includes(query));

  state.workflowVideoPromptMention = {
    start: cursor - matchedMention[0].length,
    end: cursor,
  };
  menu.innerHTML = references.length
    ? references.map((item) => `<button type="button" data-workflow-action="insert-video-prompt-mention" data-workflow-mention-label="${escapeHtml(item.label)}"><img src="${escapeHtml(item.image || "./assets/images/canvas-node-preview.png")}" alt="" /><span>${escapeHtml(item.type)}</span><strong>@${escapeHtml(item.label)}</strong></button>`).join("")
    : `<p>暂无可引用的参考资源</p>`;
  menu.classList.add("is-open");
};

workflowHomeView?.addEventListener("input", (event) => {
  if (event.target?.matches?.("[data-workflow-tts-editor]")) {
    state.workflowTtsText = workflowTtsEditorValue(event.target);
    const limit = state.workflowTtsLongMode ? 200000 : 5000;
    if (state.workflowTtsText.length > limit) {
      state.workflowTtsText = state.workflowTtsText.slice(0, limit);
      event.target.innerHTML = renderWorkflowTtsContent(state.workflowTtsText);
    }
    const counter = event.target.closest(".workflow-tts-editor")?.querySelector(".workflow-tts-tools > span");
    if (counter) counter.textContent = `${state.workflowTtsText.length.toLocaleString()} / ${(state.workflowTtsLongMode ? 200000 : 5000).toLocaleString()} 字符`;
    return;
  }
  if (event.target?.matches?.("[data-workflow-tts-range]")) {
    const key = event.target.dataset.workflowTtsRange;
    const value = Number(event.target.value);
    if (key === "speed") state.workflowTtsSpeed = value;
    if (key === "pitch") state.workflowTtsPitch = value;
    if (key === "volume") state.workflowTtsVolume = value;
    event.target.closest("label")?.querySelector("em")?.replaceChildren(document.createTextNode(key === "speed" ? `${value.toFixed(1)}×` : key === "pitch" ? `${value > 0 ? "+" : ""}${value}` : `${value}%`));
    return;
  }
  if (event.target?.matches?.('[data-workflow-tts-field="cloneName"]')) {
    state.workflowTtsCloneName = event.target.value;
    return;
  }
  if (event.target?.matches?.('[data-workflow-music-field="lyrics"]')) {
    state.workflowAudioLyrics = event.target.value;
    return;
  }
  if (event.target?.matches?.('[data-workflow-music-field="style"]')) {
    state.workflowAudioStyle = event.target.value;
    return;
  }
  if (event.target?.matches?.('[data-workflow-music-field="songName"]')) {
    state.workflowAudioSongName = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-audio-name]")) {
    state.workflowAudioName = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-audio-prompt]")) {
    state.workflowAudioDraftPrompt = event.target.value;
    return;
  }
  if (event.target?.matches?.("[data-workflow-video-prompt]")) {
    state.workflowVideoDraftPrompt = workflowPromptEditorValue(event.target);
    updateWorkflowPromptMentionMenu(event.target);
  }
});

workflowHomeView?.addEventListener("keyup", (event) => {
  if (event.target?.matches?.("[data-workflow-video-prompt]")) {
    updateWorkflowPromptMentionMenu(event.target);
  }
});

const updateWorkflowTtsSelection = () => {
  const editor = workflowHomeView?.querySelector("[data-workflow-tts-editor]");
  const button = workflowHomeView?.querySelector('[data-workflow-action="open-tts-emotion"]');
  const selection = window.getSelection();
  if (!editor || !button || !selection?.rangeCount || selection.isCollapsed || !editor.contains(selection.anchorNode) || !editor.contains(selection.focusNode)) {
    state.workflowTtsSelectionRange = null;
    if (button) button.disabled = true;
    return;
  }
  const range = selection.getRangeAt(0);
  const start = workflowTtsSelectionOffset(editor, range.startContainer, range.startOffset);
  const end = workflowTtsSelectionOffset(editor, range.endContainer, range.endOffset);
  const rect = range.getBoundingClientRect();
  const editorRect = editor.closest(".workflow-tts-editor")?.getBoundingClientRect();
  state.workflowTtsSelectionRange = {
    start: Math.min(start, end),
    end: Math.max(start, end),
    x: Math.max(12, Math.min((rect.left - (editorRect?.left || 0)), (editorRect?.width || 360) - 352)),
    y: Math.max(48, rect.top - (editorRect?.top || 0) + rect.height + 8),
  };
  button.disabled = false;
};

workflowHomeView?.addEventListener("mouseup", (event) => {
  if (event.target.closest("[data-workflow-tts-editor]")) window.requestAnimationFrame(updateWorkflowTtsSelection);
});

workflowHomeView?.addEventListener("keyup", (event) => {
  if (event.target.closest("[data-workflow-tts-editor]")) window.requestAnimationFrame(updateWorkflowTtsSelection);
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
  const canvasNav = event.target.closest("[data-canvas-nav]");
  if (canvasNav) {
    const target = canvasNav.dataset.canvasNav;
    if (target === "history") {
      state.canvasHistoryOpen = true;
      state.canvasHistoryPreviewId = null;
    } else if (target === "list") {
      state.canvasHistoryOpen = false;
      state.canvasHistoryPreviewId = null;
    }
    renderGrid();
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

canvasHistoryPage?.addEventListener("click", (event) => {
  const canvasHistoryAction = event.target.closest("[data-canvas-history-action]");
  handleCanvasHistoryAction(canvasHistoryAction, event);
});

grid.addEventListener("click", (event) => {
  const canvasHistoryAction = event.target.closest("[data-canvas-history-action]");
  if (handleCanvasHistoryAction(canvasHistoryAction, event)) return;
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
  if (state.canvasToolboxNodeId && state.canvasToolboxNodeId !== nodeId) state.canvasToolboxNodeId = null;
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

  const canvasHistoryAction = event.target.closest("[data-canvas-history-action]");
  if (handleCanvasHistoryAction(canvasHistoryAction, event)) return;

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
    if (action === "toggle-history") {
      event.stopPropagation();
      if (Date.now() < state.canvasAddPanelGuardUntil) return;
      toggleCanvasHistory();
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
    if (action === "create-video-node") createVideoNodeAtViewportCenter();
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
    if (action === "close-portrait-texture-confirm") {
      event.preventDefault();
      event.stopPropagation();
      state.portraitTextureConfirmNodeId = null;
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
    if (action === "confirm-portrait-texture") {
      event.preventDefault();
      event.stopPropagation();
      if (state.portraitTextureConfirmNodeId) createPortraitTextureNode(state.portraitTextureConfirmNodeId);
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
    if (action === "toggle-toolbox") {
      state.canvasToolboxNodeId = state.canvasToolboxNodeId === nodeId ? null : nodeId;
      state.canvasAddPanelOpen = false;
      state.canvasTemplatePanelOpen = false;
      state.canvasContextMenu = null;
      renderCanvasDetail();
      return;
    }
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

  const toolboxAction = event.target.closest("[data-toolbox-action]");
  if (toolboxAction) {
    const nodeId = toolboxAction.dataset.nodeId;
    if (toolboxAction.dataset.toolboxAction === "portrait-texture") {
      openPortraitTextureConfirm(nodeId);
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "storyboard") {
      createStoryToolNode(nodeId, "storyboard");
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "schedule-storyboard") {
      createStoryToolNode(nodeId, "scheduleStoryboard");
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "character-sheet") {
      createStoryToolNode(nodeId, "characterSheet");
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "scene-sheet") {
      createStoryToolNode(nodeId, "sceneSheet");
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "product-sheet") {
      createStoryToolNode(nodeId, "productSheet");
      return;
    }
    if (toolboxAction.dataset.toolboxAction === "lighting-correct") {
      createStoryToolNode(nodeId, "lightingCorrect");
      return;
    }
    state.canvasToolboxNodeId = null;
    renderCanvasDetail();
    return;
  }

  const nodeAction = event.target.closest("[data-node-action]");
  if (nodeAction) {
    const nodeId = nodeAction.dataset.nodeId;
    const action = nodeAction.dataset.nodeAction;
    const targetNode = findNodeById(nodeId);
    if (action === "remove-tool-tag") {
      if (targetNode?.type === "image") {
        targetNode.toolTag = null;
        targetNode.promptPlaceholder = "";
        saveProjectsState();
      }
      selectNode(nodeId);
      return;
    }
    if (action === "set-video-mode") {
      if (targetNode?.type === "video") {
        targetNode.mode = nodeAction.dataset.videoMode || targetNode.mode;
        saveProjectsState();
      }
      selectNode(nodeId);
      return;
    }
    if (action === "optimize-video-prompt") {
      if (targetNode?.type === "video" && isSeedanceVideoModel(targetNode.model)) {
        targetNode.prompt = optimizeVideoPromptText(targetNode.prompt);
        saveProjectsState();
      }
      selectNode(nodeId);
      return;
    }
    if (action === "open-camera-control" && targetNode?.toolTag) {
      selectNode(nodeId);
      return;
    }
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
  if (event.target.matches("[data-canvas-portrait-model]")) {
    state.portraitTextureModelId = event.target.value;
    renderCanvasDetail();
    return;
  }
  const nodeField = event.target.dataset.nodeField;
  const nodeId = event.target.dataset.nodeId;
  const node = findNodeById(nodeId);
  if (nodeField && node) {
    node[nodeField] = event.target.value;
    saveProjectsState();
    renderCanvasDetail();
    return;
  }
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
  if (event.target.closest(".canvas-add-panel, .canvas-template-panel, .canvas-history-modal, .canvas-context-menu, .canvas-bottom-dock")) {
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
  if (event.target.closest("[data-canvas-action]")) {
    event.stopPropagation();
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

[avatarTrigger].forEach((button) => {
  if (!button) return;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    state.avatarOpen = !state.avatarOpen;
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
  if (state.currentView === "workflow-home" || workflowHomeView?.contains(event.target)) return;
  if (state.currentView === "canvas-detail") {
    if (Date.now() < state.canvasAddPanelGuardUntil) return;
    let shouldRenderCanvas = false;
    if (!event.target.closest(".canvas-context-menu") && state.canvasContextMenu && !event.target.closest("[data-node-id]")) {
      state.canvasContextMenu = null;
      shouldRenderCanvas = true;
    }
    if (!event.target.closest(".canvas-toolbox-anchor") && state.canvasToolboxNodeId) {
      state.canvasToolboxNodeId = null;
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
    if (state.portraitTextureConfirmNodeId) {
      state.portraitTextureConfirmNodeId = null;
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
