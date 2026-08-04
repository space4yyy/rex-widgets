WidgetMetadata = {
    id: "space4.shdr",
    title: "上海迪士尼度假区片单",
    description: "按上海迪士尼度假区主题园区整理相关影视作品",
    author: "Space4",
    site: "https://github.com/space4yyy",
    version: "1.1.0",
    requiredVersion: "0.0.1",
    modules: [
        {
            id: "treasureCove",
            title: "宝藏湾",
            description: "宝藏湾相关影视作品",
            requiresWebView: false,
            functionName: "loadTreasureCove",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "toyStoryLand",
            title: "迪士尼·皮克斯玩具总动员",
            description: "迪士尼·皮克斯玩具总动员主题园区相关影视作品",
            requiresWebView: false,
            functionName: "loadToyStoryLand",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "zootopia",
            title: "疯狂动物城",
            description: "疯狂动物城主题园区相关影视作品",
            requiresWebView: false,
            functionName: "loadZootopia",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "fantasyland",
            title: "梦幻世界",
            description: "梦幻世界相关影视作品",
            requiresWebView: false,
            functionName: "loadFantasyland",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "tomorrowland",
            title: "明日世界",
            description: "明日世界相关影视作品",
            requiresWebView: false,
            functionName: "loadTomorrowland",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "gardensOfImagination",
            title: "奇想花园",
            description: "奇想花园相关影视作品",
            requiresWebView: false,
            functionName: "loadGardensOfImagination",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "mickeyAvenue",
            title: "米奇大街",
            description: "米奇大街相关影视作品",
            requiresWebView: false,
            functionName: "loadMickeyAvenue",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "adventureIsle",
            title: "探险岛",
            description: "探险岛相关影视作品",
            requiresWebView: false,
            functionName: "loadAdventureIsle",
            cacheDuration: 86400,
            params: [],
        },
    ],
};

function tmdbItem(id, title, mediaType) {
    return {
        id: id,
        type: "tmdb",
        mediaType: mediaType || "movie",
        title: title,
    };
}

var TREASURE_COVE_ITEMS = [
    tmdbItem(22, "加勒比海盗1：黑珍珠号的诅咒"),
    tmdbItem(58, "加勒比海盗2：聚魂棺"),
    tmdbItem(285, "加勒比海盗3：世界的尽头"),
    tmdbItem(1865, "加勒比海盗4：惊涛怪浪"),
    tmdbItem(166426, "加勒比海盗5：死无对证"),
];

var TOY_STORY_LAND_ITEMS = [
    tmdbItem(862, "玩具总动员"),
    tmdbItem(863, "玩具总动员2"),
    tmdbItem(10193, "玩具总动员3"),
    tmdbItem(301528, "玩具总动员4"),
    tmdbItem(256835, "玩具总动员：遗忘的时光"),
];

var ZOOTOPIA_ITEMS = [
    tmdbItem(269149, "疯狂动物城"),
];

var FANTASYLAND_ITEMS = [
    tmdbItem(12155, "爱丽丝梦游仙境"),
    tmdbItem(10020, "美女与野兽"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(10144, "小美人鱼"),
    tmdbItem(27022, "魔法师的学徒"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(812, "阿拉丁"),
    tmdbItem(408, "白雪公主"),
    tmdbItem(10693, "小飞侠彼得潘"),
    tmdbItem(51162, "小熊维尼"),
    tmdbItem(109445, "冰雪奇缘"),
];

var TOMORROWLAND_ITEMS = [
    tmdbItem(862, "玩具总动员"),
    tmdbItem(11544, "星际宝贝"),
    tmdbItem(97, "创"),
    tmdbItem(20526, "创：战纪"),
];

var GARDENS_OF_IMAGINATION_ITEMS = [
    tmdbItem(756, "幻想曲"),
    tmdbItem(1726, "钢铁侠"),
    tmdbItem(10195, "雷神"),
    tmdbItem(1771, "美国队长"),
    tmdbItem(24428, "复仇者联盟"),
    tmdbItem(118340, "银河护卫队"),
    tmdbItem(557, "蜘蛛侠"),
    tmdbItem(11360, "小飞象"),
    tmdbItem(2062, "美食总动员"),
    tmdbItem(44293, "保罗·班扬"),
    tmdbItem(81310, "小熊维尼与大风吹"),
    tmdbItem(269149, "疯狂动物城"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(9325, "森林王子"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(433, "欢乐满人间"),
    tmdbItem(812, "阿拉丁"),
    tmdbItem(11886, "罗宾汉"),
    tmdbItem(327494, "糊涂交响曲", "tv"),
    tmdbItem(862, "玩具总动员"),
    tmdbItem(408, "白雪公主"),
    tmdbItem(109445, "冰雪奇缘"),
    tmdbItem(10144, "小美人鱼"),
    tmdbItem(62177, "勇敢传说"),
];

var MICKEY_AVENUE_ITEMS = [
    tmdbItem(109445, "冰雪奇缘"),
    tmdbItem(278927, "奇幻森林"),
    tmdbItem(277834, "海洋奇缘"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(269149, "疯狂动物城"),
    tmdbItem(10198, "公主与青蛙"),
];

var ADVENTURE_ISLE_ITEMS = [
    tmdbItem(14160, "飞屋环游记"),
    tmdbItem(9325, "森林王子"),
    tmdbItem(8587, "狮子王"),
];

async function loadTreasureCove(params = {}) {
    return TREASURE_COVE_ITEMS;
}

async function loadToyStoryLand(params = {}) {
    return TOY_STORY_LAND_ITEMS;
}

async function loadZootopia(params = {}) {
    return ZOOTOPIA_ITEMS;
}

async function loadFantasyland(params = {}) {
    return FANTASYLAND_ITEMS;
}

async function loadTomorrowland(params = {}) {
    return TOMORROWLAND_ITEMS;
}

async function loadGardensOfImagination(params = {}) {
    return GARDENS_OF_IMAGINATION_ITEMS;
}

async function loadMickeyAvenue(params = {}) {
    return MICKEY_AVENUE_ITEMS;
}

async function loadAdventureIsle(params = {}) {
    return ADVENTURE_ISLE_ITEMS;
}
