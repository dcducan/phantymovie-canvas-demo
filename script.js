const DEFAULT_TIMESTAMP = "2016年01月01日 12:30:23";
const DEFAULT_COVER = "https://www.figma.com/api/mcp/asset/daa1d3f1-61c2-4836-a871-b452d66180f1";
const DEFAULT_NODE_PROMPT =
  "两只软萌圆滚滚小黄鸡，雌性小鸡头戴贵族小皇冠与花朵，雄性小鸡佩戴小礼帽，二者漫步在开满糖果色小花的草地里。整体为卡通 Q版治愈画风，毛茸茸质感，圆润线条";
const CANVAS_EMPTY_CREDIT = "https://www.figma.com/api/mcp/asset/4843611a-9392-458f-973f-a93e3c2f7feb";
const CANVAS_EMPTY_BELL = "https://www.figma.com/api/mcp/asset/099f0a93-035f-48c6-abdd-92dcc00f478a";
const CANVAS_EMPTY_AVATAR_BG = "https://www.figma.com/api/mcp/asset/1a7ace7f-5018-4a97-bf74-3c093bf57f4a";
const CANVAS_EMPTY_AVATAR_IMAGE = "https://www.figma.com/api/mcp/asset/77099d11-57f1-48fe-a98f-e8a4f8bf9dba";
const CANVAS_EMPTY_DOCK_GRID = "https://www.figma.com/api/mcp/asset/5ffa11fe-0a21-41cc-b842-392127e74258";
const CANVAS_EMPTY_DOCK_SCENE = "https://www.figma.com/api/mcp/asset/9f4cf144-ed57-4dac-b12c-27df980329b8";
const CANVAS_EMPTY_DOCK_POINTER = "https://www.figma.com/api/mcp/asset/8b07d88c-f92e-4db7-945d-cbce9f124c02";
const CANVAS_EMPTY_DOCK_MINUS = "https://www.figma.com/api/mcp/asset/33d4e7bd-4eaa-4866-a92c-bf85a92655ac";
const CANVAS_EMPTY_DOCK_PLUS = "https://www.figma.com/api/mcp/asset/aaaa3ee6-7888-4293-9fe6-625b8d56c550";
const CANVAS_EMPTY_BACK = "https://www.figma.com/api/mcp/asset/0b52205d-ee12-4fab-8b84-bf491d02134c";
const CANVAS_EMPTY_ADD_TEXT = "https://www.figma.com/api/mcp/asset/c32a3c8b-6979-4c0a-bea3-3c00a1a1c8e0";
const CANVAS_EMPTY_ADD_IMAGE = "https://www.figma.com/api/mcp/asset/6f8cab11-3c5f-493c-b6c9-093ecf6e4743";
const CANVAS_EMPTY_ADD_UPLOAD_MASK = "https://www.figma.com/api/mcp/asset/067071a1-04c4-4bd7-a3f1-88d1e8efea71";
const CANVAS_EMPTY_ADD_UPLOAD = "https://www.figma.com/api/mcp/asset/399fb76f-a4fc-430f-830f-98b16eb55901";
const CANVAS_ADD_PANEL_TEXT = "https://www.figma.com/api/mcp/asset/7049f337-ffa7-4db0-aebc-40a61a68e429";
const CANVAS_ADD_PANEL_IMAGE = "https://www.figma.com/api/mcp/asset/c2c5268c-72d1-4d37-8609-1a5d1f48794c";
const CANVAS_ADD_PANEL_UPLOAD_MASK = "https://www.figma.com/api/mcp/asset/1e40b42b-a49f-438a-9f36-2760b0ec2a4f";
const CANVAS_ADD_PANEL_UPLOAD = "https://www.figma.com/api/mcp/asset/30c12697-f98c-491e-bb65-2c5b717ba2ef";
const CANVAS_ADD_PANEL_LINE = "https://www.figma.com/api/mcp/asset/f7e405a9-3c41-438e-bd81-fad026de7dfb";
const CANVAS_EMPTY_LEFT_ADD = "https://www.figma.com/api/mcp/asset/455ec177-a803-48fe-9419-7ee08748e6d6";
const CANVAS_EMPTY_LEFT_SEARCH = "https://www.figma.com/api/mcp/asset/65aa0313-b1fb-44e1-b816-fa9bfee305d1";
const CANVAS_EMPTY_LEFT_GRID = "https://www.figma.com/api/mcp/asset/5ffa11fe-0a21-41cc-b842-392127e74258";
const CANVAS_EMPTY_LEFT_CLOCK = "https://www.figma.com/api/mcp/asset/880dcaf1-5afc-4165-b18e-7addf5ac29fd";
const CANVAS_EMPTY_LEFT_DELETE = "https://www.figma.com/api/mcp/asset/89b1b107-1a55-4d97-a4f8-90f82807524f";
const CANVAS_LINE = "https://www.figma.com/api/mcp/asset/2e983b04-1ccc-42d9-8f3d-82174c412f13";
const CANVAS_NODE_CREDIT = "https://www.figma.com/api/mcp/asset/75adc873-d8e9-4902-9e47-2d07fc33ee32";
const CANVAS_NODE_BELL = "https://www.figma.com/api/mcp/asset/a2282628-2786-4876-9d81-b529a344d800";
const CANVAS_NODE_AVATAR_BG = "https://www.figma.com/api/mcp/asset/008045bc-f2d1-4e4d-8746-ff619f630107";
const CANVAS_NODE_AVATAR_IMAGE = "https://www.figma.com/api/mcp/asset/099d98f3-45d9-4f9b-b402-a79698456e90";
const CANVAS_NODE_PREVIEW = "https://www.figma.com/api/mcp/asset/f2d35a46-0209-4545-8e65-518ffcff7cab";
const CANVAS_NODE_BACK = "https://www.figma.com/api/mcp/asset/abbcc5fd-0c62-4734-91d3-5e02eff7ce18";
const CANVAS_NODE_SIDE_ADD = "https://www.figma.com/api/mcp/asset/f6010321-fc6d-4602-8d63-25440c9b8445";
const CANVAS_NODE_BRAIN = "https://www.figma.com/api/mcp/asset/5f305e90-97f2-4254-abec-3d23a13d0d1b";
const CANVAS_NODE_COUNT = "https://www.figma.com/api/mcp/asset/90c98c30-75de-4f1f-aa72-783442fa8f50";
const CANVAS_NODE_LIKE = "https://www.figma.com/api/mcp/asset/e6961ea7-c0b3-4da8-9754-8677f824bac6";
const CANVAS_NODE_SEND = "https://www.figma.com/api/mcp/asset/30627cb7-583a-42f9-a34b-a56b7fb954f3";
const CANVAS_NODE_TOOLBAR_FULLSCREEN = "https://www.figma.com/api/mcp/asset/9acd3da2-9418-424b-b4e4-a08542b31655";
const CANVAS_NODE_TOOLBAR_MULTI = "https://www.figma.com/api/mcp/asset/1cc74e61-8dcb-49d8-b348-b8b624a5751a";
const CANVAS_NODE_TOOLBAR_LIGHT = "https://www.figma.com/api/mcp/asset/2243d812-41f0-4c95-bbe7-817143cc3219";
const CANVAS_NODE_TOOLBAR_GRID = "https://www.figma.com/api/mcp/asset/a26d9e33-8bfb-4206-b3df-43f48bc90c63";
const CANVAS_NODE_TOOLBAR_ERASE_MASK = "https://www.figma.com/api/mcp/asset/69df20fb-d7f1-4fd9-a176-c596f4cb28d2";
const CANVAS_NODE_TOOLBAR_ERASE = "https://www.figma.com/api/mcp/asset/776bd198-7cd5-41b0-9863-002484996485";
const CANVAS_NODE_TOOLBAR_SLICE = "https://www.figma.com/api/mcp/asset/b3af10d9-1d28-4a1b-adc7-84552d767e3d";
const CANVAS_NODE_TOOLBAR_MORE = "https://www.figma.com/api/mcp/asset/9b7e5ad5-2b32-4bc3-a81f-ccbe0e3a25ff";
const CANVAS_NODE_TOOLBAR_UPLOAD = "https://www.figma.com/api/mcp/asset/cab18674-eafa-49b5-8313-7244c224bc4a";
const CANVAS_NODE_TOOLBAR_DOWNLOAD = "https://www.figma.com/api/mcp/asset/82038ea0-7537-486c-8f7f-1feb7ea177bb";
const CANVAS_NODE_TOOLBAR_EXPAND = "https://www.figma.com/api/mcp/asset/46520337-8c81-40dc-982d-71149cd4aac5";
const CANVAS_NODE_TOOLBAR_CLOSE = "https://www.figma.com/api/mcp/asset/07dc411a-ccf1-4efc-81bf-1da8d3e93851";
const CANVAS_NODE_LEFT_ADD = "https://www.figma.com/api/mcp/asset/0423360a-92d4-4c2e-878f-9530024545e5";
const CANVAS_NODE_LEFT_SEARCH = "https://www.figma.com/api/mcp/asset/9acd3da2-9418-424b-b4e4-a08542b31655";
const CANVAS_NODE_LEFT_GRID = "https://www.figma.com/api/mcp/asset/c2ae8e8a-66de-460c-b0ed-0e0f56fc3a06";
const CANVAS_NODE_LEFT_CLOCK = "https://www.figma.com/api/mcp/asset/c96201aa-ed5b-406f-ae30-333f85146559";
const CANVAS_NODE_LEFT_DELETE = "https://www.figma.com/api/mcp/asset/51063ac1-dc38-4161-a2ef-8ecfafeb015c";
const CANVAS_NODE_DOCK_GRID = "https://www.figma.com/api/mcp/asset/c2ae8e8a-66de-460c-b0ed-0e0f56fc3a06";
const CANVAS_NODE_DOCK_SCENE = "https://www.figma.com/api/mcp/asset/c96201aa-ed5b-406f-ae30-333f85146559";
const CANVAS_NODE_DOCK_POINTER = "https://www.figma.com/api/mcp/asset/51063ac1-dc38-4161-a2ef-8ecfafeb015c";
const CANVAS_NODE_DOCK_MINUS = "https://www.figma.com/api/mcp/asset/8bb1f196-a3d7-41b1-b6d3-adf531988287";
const CANVAS_NODE_DOCK_PLUS = "https://www.figma.com/api/mcp/asset/483fe804-024b-4214-95ec-c340ac8573f4";
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
  plus:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.667 8h10.666M8 2.667v10.666" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  minus:
    '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 6h7" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  plusSmall:
    '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6.005 2.5v7M2.5 6h7" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  camera:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 5.5 8 3.833h4L13.5 5.5H16A1.5 1.5 0 0 1 17.5 7v8A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5h2.5ZM10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  grid2:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3h6.25v6.25H3V3Zm7.75 0H17v6.25h-6.25V3ZM3 10.75h6.25V17H3v-6.25Zm7.75 0H17V17h-6.25v-6.25Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
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

const projectSeed = [
  {
    id: "p1",
    name: "霓虹魅影：东京",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "16:9 横屏",
    style: "电影感",
    cover: "https://www.figma.com/api/mcp/asset/b1384ae6-6cc3-4a5f-95ab-215d40ebb555",
    canvases: [
      { id: "c1", name: "开场镜头", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER },
      { id: "c2", name: "角色定妆", timestamp: DEFAULT_TIMESTAMP, cover: "https://www.figma.com/api/mcp/asset/06395c9a-4830-4d9e-be4c-61ad5c4beb26" },
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
      { id: "c3", name: "山水画布", timestamp: DEFAULT_TIMESTAMP, cover: "https://www.figma.com/api/mcp/asset/6fb40ad0-e18f-4dc2-a573-61ac6c79c78b" },
      { id: "c4", name: "追踪序列", timestamp: DEFAULT_TIMESTAMP, cover: "https://www.figma.com/api/mcp/asset/5dff791e-9d4a-42c2-8638-5d7dfe171509" },
    ],
  },
  {
    id: "p3",
    name: "Temporal Shift",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "9:16 竖屏",
    style: "赛博朋克",
    cover: "https://www.figma.com/api/mcp/asset/5dff791e-9d4a-42c2-8638-5d7dfe171509",
    canvases: [{ id: "c5", name: "时间裂缝", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
  {
    id: "p4",
    name: "Summit Echoes",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "16:9 横屏",
    style: "写实主义",
    cover: "https://www.figma.com/api/mcp/asset/6fb40ad0-e18f-4dc2-a573-61ac6c79c78b",
    canvases: [{ id: "c6", name: "峰顶全景", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
  {
    id: "p5",
    name: "Infinite Loop",
    timestamp: DEFAULT_TIMESTAMP,
    ratio: "1:1 正方形",
    style: "极简风格",
    cover: "https://www.figma.com/api/mcp/asset/06395c9a-4830-4d9e-be4c-61ad5c4beb26",
    canvases: [{ id: "c7", name: "循环主体", timestamp: DEFAULT_TIMESTAMP, cover: DEFAULT_COVER }],
  },
];

const styleSeed = [
  { id: "realistic", name: "写实主义", image: "https://www.figma.com/api/mcp/asset/f4cb63ab-fb2d-4abe-b46f-37621be5d562" },
  { id: "anime", name: "动漫风格", image: "https://www.figma.com/api/mcp/asset/31f879c8-5fa3-4260-ae84-a6cf6ecc161f" },
  { id: "cyberpunk", name: "赛博朋克", image: "https://www.figma.com/api/mcp/asset/2b80302b-52af-482b-945f-854afe5e91f8" },
  { id: "cinematic", name: "电影感", image: "https://www.figma.com/api/mcp/asset/ac744281-84f4-4397-9a8f-0c7dafdc6646" },
  { id: "three-d", name: "3D风格", image: "https://www.figma.com/api/mcp/asset/ce6f33f4-f0b5-4d97-805e-cfa725c7dc9d" },
];

const styleNameMap = Object.fromEntries(styleSeed.map((style) => [style.id, style.name]));
const NAV_STATE_KEY = "phanty-movie-nav-state";
const PROJECTS_STATE_KEY = "phanty-movie-projects-state";
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

  canvas.connections = Array.isArray(canvas.connections) ? canvas.connections : [];

  if (!canvas.selectedNodeId && canvas.nodes.length) {
    canvas.selectedNodeId = canvas.nodes[0]?.id || null;
  }

  return canvas;
};

const normalizeProject = (project) => {
  project.canvases = (project.canvases || []).map((canvas, index) => normalizeCanvas(canvas, index));
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

const state = {
  projects: loadProjectsState(),
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
  uploadTarget: null,
  uploadNodeTarget: null,
  canvasClipboard: null,
  canvasAddPanelOpen: false,
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
  projectModeTargetId: null,
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
const listView = document.getElementById("list-view");
const detailView = document.getElementById("canvas-detail-view");
const canvasStage = document.getElementById("canvas-stage");
const topbarNav = document.querySelector(".topbar-nav");
const homeProjectCount = document.getElementById("home-project-count");
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
const createLabel = document.getElementById("create-label");
const avatarTrigger = document.getElementById("avatar-trigger");
const avatarPanel = document.getElementById("avatar-panel");
const noticeTrigger = document.getElementById("notice-trigger");
const noticePanel = document.getElementById("notice-panel");
const createModal = document.getElementById("create-modal");
const deleteModal = document.getElementById("delete-modal");
const projectModeModal = document.getElementById("project-mode-modal");
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

const currentProject = () => state.projects.find((project) => project.id === state.currentProjectId) || null;
const currentCanvas = () => currentProject()?.canvases.find((canvas) => canvas.id === state.currentCanvasId) || null;
const currentCanvasNodes = () => currentCanvas()?.nodes || [];
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
  if (state.currentView === "canvas-detail" && state.currentProjectId && state.currentCanvasId) {
    return `#/project/${state.currentProjectId}/canvas/${state.currentCanvasId}`;
  }
  if (state.currentView === "canvases" && state.currentProjectId) {
    return `#/project/${state.currentProjectId}/canvases`;
  }
  if (state.currentView === "projects") {
    return "#/projects";
  }
  if (state.currentView === "home") {
    return "#/home";
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
    if (saved?.currentView === "canvases" && saved.currentProjectId && state.projects.some((project) => project.id === saved.currentProjectId)) {
      state.currentView = "canvases";
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

const syncHeader = () => {
  const inHomeView = state.currentView === "home";
  const inCanvasView = state.currentView === "canvases";
  const inCanvasDetail = state.currentView === "canvas-detail";
  const project = currentProject();
  backTrigger.classList.toggle("is-visible", inCanvasView);
  pageTitle.textContent = inCanvasView ? `${project?.name || ""} · 画布列表` : "我的项目";
  pageSubtitle.textContent = inCanvasView ? "管理项目下的 AI画布创作" : "管理您的 AI影视创作";
  createLabel.textContent = inCanvasView ? "新建画布" : "创建新项目";
  homeView.classList.toggle("is-hidden", !inHomeView);
  listView.classList.toggle("is-hidden", inHomeView || state.currentView === "canvas-detail");
  listView.classList.toggle("canvas-list-mode", state.currentView === "canvases");
  detailView.classList.toggle("is-open", state.currentView === "canvas-detail");
  document.querySelector(".topbar")?.classList.toggle("is-hidden", inCanvasView || inCanvasDetail);
  sidebar.classList.toggle("is-visible", state.currentView === "canvases");
  sidebarProjectName.textContent = project?.name || "测试项目";
  sidebarRatioTag.textContent = project?.ratio || "16:9 横屏";
  sidebarStyleTag.textContent = project?.style || "电影感";
  avatarPanel.classList.toggle("is-open", state.avatarOpen);
  noticePanel.classList.toggle("is-open", state.noticeOpen);
  topbarNav?.querySelectorAll("[data-nav-target]").forEach((item) => {
    const target = item.dataset.navTarget;
    const active =
      (target === "home" && inHomeView) ||
      (target === "projects" && (state.currentView === "projects" || state.currentView === "canvases")) ||
      (target !== "home" && target !== "projects" && false);
    item.classList.toggle("active", active);
  });
  document.title = inHomeView ? "PhanthyMovie" : inCanvasDetail ? (currentCanvas()?.name || "PhanthyMovie 画布") : "PhanthyMovie 项目列表";
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
    return;
  }
  if (state.currentView === "canvas-detail") {
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
                  <img src="https://www.figma.com/api/mcp/asset/e20eb946-0cc4-43be-8ffc-85d58935c03f" alt="" />
                </button>
                <div class="dropdown-menu card-menu${menuOpen ? " is-open" : ""}">
                  <button class="menu-item with-icon" type="button" data-card-action="upload" data-item-id="${item.id}">
                    <img src="https://www.figma.com/api/mcp/asset/fd8f850b-0eb7-4d9c-b7e9-c09926b16096" alt="" />
                    <span>${menuLabels.upload}</span>
                  </button>
                  <button class="menu-item with-icon" type="button" data-card-action="edit" data-item-id="${item.id}">
                    <img src="https://www.figma.com/api/mcp/asset/9590bb09-75ae-4686-9e44-06f680c196db" alt="" />
                    <span>${menuLabels.edit}</span>
                  </button>
                  <button class="menu-item with-icon" type="button" data-card-action="delete" data-item-id="${item.id}">
                    <img src="https://www.figma.com/api/mcp/asset/ba842b94-8675-4214-aef8-3445244416d2" alt="" />
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
      <img src="https://www.figma.com/api/mcp/asset/34e123af-e3dd-41ae-a4c6-22ca1cc9146d" alt="" />
      <span>${emptyLabel}</span>
    </button>`;
};

const renderCanvasDetail = () => {
  const project = currentProject();
  const canvas = currentCanvas();
  if (!project || !canvas) return;
  const hasNodes = canvas.nodes.length > 0;
  const headerBackIcon = hasNodes ? CANVAS_NODE_BACK : CANVAS_EMPTY_BACK;
  const headerCreditIcon = hasNodes ? CANVAS_NODE_CREDIT : CANVAS_EMPTY_CREDIT;
  const headerBellIcon = hasNodes ? CANVAS_NODE_BELL : CANVAS_EMPTY_BELL;
  const headerAvatarBg = hasNodes ? CANVAS_NODE_AVATAR_BG : CANVAS_EMPTY_AVATAR_BG;
  const headerAvatarImage = hasNodes ? CANVAS_NODE_AVATAR_IMAGE : CANVAS_EMPTY_AVATAR_IMAGE;
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
      const selected = node.id === canvas.selectedNodeId;
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
            <div class="canvas-shot-group-title" data-node-drag="true">${escapeHtml(node.name)}</div>
            <div class="canvas-shot-group-panel" data-node-drag="true" style="--shot-columns:${columns};">
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

            <div class="canvas-panorama-head" data-node-drag="true">
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
              <span class="canvas-node-resolution">${escapeHtml(node.resolution)}</span>
            </div>

            <div class="canvas-panorama-viewer-shell">
              <button class="canvas-node-side-anchor is-left" type="button" data-node-action="add-near" data-node-side="left" data-node-id="${node.id}">
                <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
              </button>
              <button class="canvas-panorama-viewer" type="button" data-node-id="${node.id}" data-node-drag="true" data-panorama-drag="true">
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
              <button class="canvas-node-side-anchor is-right" type="button" data-node-action="add-near" data-node-side="right" data-node-id="${node.id}">
                <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
              </button>
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
                  contenteditable="true"
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
                  <button class="canvas-node-send-button" type="button" data-node-action="upload-image" data-node-id="${node.id}"><img src="${CANVAS_NODE_SEND}" alt="" /></button>
                </div>
              </div>
            </div>
          </article>
        `;
      }
      if (node.type === "text") {
        return `
          <article class="canvas-canvas-node canvas-text-node${selected ? " is-selected" : ""}" data-node-id="${node.id}" style="left:${node.x}px; top:${node.y}px;">
            <div class="canvas-text-node-head" data-node-drag="true">
              <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
                <span>${escapeHtml(node.name)}</span>
              </div>
            </div>
            <button class="canvas-node-side-anchor is-left" type="button" data-node-action="add-near" data-node-side="left" data-node-id="${node.id}">
              <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
            </button>
            <button class="canvas-node-side-anchor is-right" type="button" data-node-action="add-near" data-node-side="right" data-node-id="${node.id}">
              <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
            </button>
            <div class="canvas-text-node-card">
              <div class="canvas-text-node-label">反推提示词</div>
              <textarea class="canvas-text-node-editor" data-node-field="text" data-node-id="${node.id}" rows="8">${escapeHtml(node.text)}</textarea>
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

          <div class="canvas-node-titlebar" data-node-drag="true">
            <div class="canvas-node-title-meta">
                <span class="canvas-node-title-icon" aria-hidden="true">${icon.image}</span>
              <span>${escapeHtml(node.name)}</span>
            </div>
            <span class="canvas-node-resolution">${escapeHtml(node.resolution)}</span>
          </div>

          <button class="canvas-node-image-frame${node.panoramaSource ? " is-shot" : ""}" type="button" data-node-id="${node.id}" data-node-drag="true">
            ${
              node.panoramaSource
                ? renderPanoramaShotFrame(node.panoramaSource, node.panoramaOffset, "canvas-image-shot-frame")
                : `<img src="${escapeHtml(node.image)}" alt="${escapeHtml(node.name)}" />`
            }
          </button>

          <button class="canvas-node-side-anchor is-left" type="button" data-node-action="add-near" data-node-side="left" data-node-id="${node.id}">
            <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
          </button>
          <button class="canvas-node-side-anchor is-right" type="button" data-node-action="add-near" data-node-side="right" data-node-id="${node.id}">
            <img src="${CANVAS_NODE_SIDE_ADD}" alt="" />
          </button>

          <div class="canvas-node-prompt-card">
            <textarea class="canvas-node-textarea" data-node-field="prompt" data-node-id="${node.id}" rows="3">${escapeHtml(node.prompt)}</textarea>

            <div class="canvas-node-footer-row">
              <div class="canvas-node-footer-left">
                <div class="canvas-node-model-chip"><img src="${CANVAS_NODE_BRAIN}" alt="" /><span>${escapeHtml(node.model)}</span></div>
                <div class="canvas-node-meta-chip"><span class="canvas-node-ratio-icon"></span><span>${escapeHtml(node.ratio)}</span></div>
                <div class="canvas-node-meta-chip"><img src="${CANVAS_NODE_COUNT}" alt="" /><span>${escapeHtml(node.outputCount)}</span></div>
              </div>
              <div class="canvas-node-footer-right">
                <button class="canvas-node-camera-button${node.cameraControl?.enabled ? " is-active" : ""}" type="button" data-node-action="open-camera-control" data-node-id="${node.id}" aria-label="摄像机控制">${icon.camera}</button>
                <div class="canvas-node-like-chip"><img src="${CANVAS_NODE_LIKE}" alt="" /><span>${escapeHtml(node.likes)}</span></div>
                <button class="canvas-node-send-button" type="button" data-node-action="upload-image" data-node-id="${node.id}"><img src="${CANVAS_NODE_SEND}" alt="" /></button>
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
    : "";

  const contextMenuMarkup = state.canvasContextMenu
    ? `
      <div class="canvas-context-menu" style="left:${state.canvasContextMenu.x}px; top:${state.canvasContextMenu.y}px;">
        <button class="canvas-context-item" type="button" data-context-action="save-asset" data-node-id="${state.canvasContextMenu.nodeId}">保存到资产库</button>
        <div class="canvas-context-divider"></div>
        <button class="canvas-context-item" type="button" data-context-action="duplicate" data-node-id="${state.canvasContextMenu.nodeId}">创建副本</button>
        <button class="canvas-context-item" type="button" data-context-action="copy" data-node-id="${state.canvasContextMenu.nodeId}">复制</button>
        <button class="canvas-context-item" type="button" data-context-action="paste" data-node-id="${state.canvasContextMenu.nodeId}">粘贴</button>
        <div class="canvas-context-divider"></div>
        <button class="canvas-context-item danger" type="button" data-context-action="delete" data-node-id="${state.canvasContextMenu.nodeId}">删除</button>
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
          <button class="canvas-add-button is-audio" type="button" data-canvas-action="create-node"><img src="${CANVAS_ADD_PANEL_IMAGE}" alt="" /><span>音频</span></button>
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
        <button class="canvas-page-crumb" type="button" data-canvas-action="back-to-canvases">
          <span class="canvas-page-back"><img src="${headerBackIcon}" alt="" /></span>
          <span>${escapeHtml(canvas.name)}</span>
        </button>

        <div class="canvas-page-header-right">
          <button class="canvas-page-link" type="button">充值中心</button>
          <span class="canvas-page-balance"><img src="${headerCreditIcon}" alt="" /><span>2000</span></span>
          <button class="canvas-page-icon" type="button" aria-label="提醒"><img src="${headerBellIcon}" alt="" /></button>
          <button class="canvas-page-avatar" type="button" aria-label="用户头像"><img class="canvas-page-avatar-bg" src="${headerAvatarBg}" alt="" /><img class="canvas-page-avatar-image" src="${headerAvatarImage}" alt="" /></button>
        </div>
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

        <div class="canvas-left-tools">
          <button class="canvas-left-tool is-primary" type="button" data-canvas-action="toggle-add-panel" aria-label="添加节点"><img src="${hasNodes ? CANVAS_NODE_LEFT_ADD : CANVAS_EMPTY_LEFT_ADD}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="搜索"><img src="${hasNodes ? CANVAS_NODE_LEFT_SEARCH : CANVAS_EMPTY_LEFT_SEARCH}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="视图"><img src="${hasNodes ? CANVAS_NODE_LEFT_GRID : CANVAS_EMPTY_LEFT_GRID}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="历史"><img src="${hasNodes ? CANVAS_NODE_LEFT_CLOCK : CANVAS_EMPTY_LEFT_CLOCK}" alt="" /></button>
          <button class="canvas-left-tool" type="button" aria-label="删除"><img src="${hasNodes ? CANVAS_NODE_LEFT_DELETE : CANVAS_EMPTY_LEFT_DELETE}" alt="" /></button>
        </div>

        ${addPanelMarkup}
        ${contextMenuMarkup}

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

const closeCanvasPopups = () => {
  state.canvasAddPanelOpen = false;
  state.canvasContextMenu = null;
  state.washConfirmNodeId = null;
  state.reversePromptConfirmNodeId = null;
};

const openCanvasAddPanel = () => {
  state.canvasAddPanelOpen = true;
  state.canvasContextMenu = null;
  state.canvasAddPanelGuardUntil = Date.now() + 250;
  renderCanvasDetail();
};

const toggleCanvasAddPanel = () => {
  state.canvasAddPanelOpen = !state.canvasAddPanelOpen;
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
};

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

const enterProjectMode = (projectId, mode) => {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
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

sidebar?.addEventListener("click", (event) => {
  const openModeModal = event.target.closest("[data-open-mode-modal]");
  if (openModeModal) {
    if (state.currentProjectId) openProjectModeModal(state.currentProjectId);
    return;
  }
  const modeSwitch = event.target.closest("[data-mode-switch]");
  if (!modeSwitch || modeSwitch.disabled) return;
  const mode = modeSwitch.dataset.modeSwitch;
  if (mode === "infinite-canvas") {
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

homeView?.addEventListener("click", (event) => {
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
  if (state.currentView !== "canvas-detail") return;

  const canvasAction = event.target.closest("[data-canvas-action]");
  if (canvasAction) {
    const action = canvasAction.dataset.canvasAction;
    if (action === "back-to-canvases") {
      state.currentView = "canvases";
      state.currentCanvasId = null;
      closeCanvasPopups();
      renderGrid();
    }
    if (action === "toggle-add-panel") {
      event.stopPropagation();
      if (Date.now() < state.canvasAddPanelGuardUntil) return;
      toggleCanvasAddPanel();
    }
    if (action === "close-add-panel") {
      state.canvasAddPanelOpen = false;
      renderCanvasDetail();
    }
    if (action === "create-node") createNodeAtViewportCenter();
    if (action === "create-image-node") createNodeAtViewportCenter(CANVAS_NODE_PREVIEW);
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

  const contextAction = event.target.closest("[data-context-action]");
  if (contextAction) {
    const nodeId = contextAction.dataset.nodeId;
    const action = contextAction.dataset.contextAction;
    if (action === "save-asset") {
      state.canvasContextMenu = null;
      renderCanvasDetail();
    }
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
    if (state.currentView !== "canvas-detail") return;
    if (!event.target.closest("#canvas-board")) return;
    event.preventDefault();
    const factor = Math.exp(-event.deltaY * 0.0012);
    setCanvasZoom((currentCanvas()?.viewport.scale || 1) * factor, event.clientX, event.clientY);
  },
  { passive: false },
);

canvasStage.addEventListener("pointerdown", (event) => {
  if (state.currentView !== "canvas-detail") return;
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
  const canvasAction = event.target.closest('[data-canvas-action="toggle-add-panel"]');
  if (canvasAction) {
    event.stopPropagation();
    event.preventDefault();
    openCanvasAddPanel();
    return;
  }
  if (event.target.closest("[data-node-action]")) return;

  const dragHandle = event.target.closest("[data-node-drag]");
  if (dragHandle) {
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
  if (state.currentView !== "canvas-detail" || canvasRuntime.pointerId !== event.pointerId) return;
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
    if (state.canvasAddPanelOpen || state.canvasContextMenu) {
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
