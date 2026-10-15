WidgetMetadata = {
    id: "space4.shdr",
    title: "上海迪士尼度假区片单",
    description: "按从入园开始的建议浏览动线，分主题园区整理相关影视作品",
    author: "Space4",
    site: "https://github.com/space4yyy/rex-widgets",
    version: "1.5.5",
    requiredVersion: "0.0.1",
    modules: [
        {
            id: "disneyRoaming",
            title: "🎬｜迪士尼漫游",
            description: "每次随机抽取10部迪士尼相关影视作品",
            requiresWebView: false,
            functionName: "loadDisneyRoaming",
            cacheDuration: 0,
            params: [],
        },
        {
            id: "mickeyAvenue",
            title: "🎠｜米奇大街",
            description: "入园第一站：米奇与朋友们",
            requiresWebView: false,
            functionName: "loadMickeyAvenue",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "gardensOfImagination",
            title: "🌳｜奇想花园",
            description: "中央广场：幻想曲、小飞象与漫威",
            requiresWebView: false,
            functionName: "loadGardensOfImagination",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "tomorrowland",
            title: "🚀｜明日世界",
            description: "科幻、巴斯光年、复仇者联盟、史迪奇与皮克斯奇旅",
            requiresWebView: false,
            functionName: "loadTomorrowland",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "toyStoryLand",
            title: "🧸｜迪士尼·皮克斯玩具总动员",
            description: "玩具总动员系列及特别篇",
            requiresWebView: false,
            functionName: "loadToyStoryLand",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "fantasyland",
            title: "🏰｜梦幻世界",
            description: "奇幻童话城堡、迪士尼公主与经典童话",
            requiresWebView: false,
            functionName: "loadFantasyland",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "zootopia",
            title: "🐰｜疯狂动物城",
            description: "全球首个疯狂动物城主题园区相关影视作品",
            requiresWebView: false,
            functionName: "loadZootopia",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "treasureCove",
            title: "🏴‍☠️｜宝藏湾",
            description: "加勒比海盗系列",
            requiresWebView: false,
            functionName: "loadTreasureCove",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "adventureIsle",
            title: "🌴｜探险岛",
            description: "飞屋环游记、海底探险与丛林探险题材",
            requiresWebView: false,
            functionName: "loadAdventureIsle",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "halloweenVillains",
            title: "🎃｜万圣节反派",
            description: "唐老鸭万圣夜反派巡游相关影视，年度阵容以官方公告为准",
            requiresWebView: false,
            functionName: "loadHalloweenVillains",
            cacheDuration: 86400,
            params: [],
        },
        {
            id: "castleLightShow",
            title: "🏰｜城堡灯光秀",
            description: "按2026年《奇妙之心》城堡秀影片登场顺序整理，末尾附《星愿》幻影秀新篇章",
            requiresWebView: false,
            functionName: "loadCastleLightShow",
            cacheDuration: 86400,
            params: [],
        },
    ],
};

function tmdbItem(id, title, mediaType) {
    var resolvedMediaType = mediaType || "movie";
    return {
        id: id,
        type: "tmdb",
        mediaType: resolvedMediaType,
        title: title,
    };
}

// 片单按园区的官方项目、演出和角色体验整理；同一 IP 在多个园区有不同体验时允许重复。
var MICKEY_AVENUE_ITEMS = [
    tmdbItem(15400, "米奇的圣诞节"),
    tmdbItem(21385, "米奇、唐老鸭、高飞：三个火枪手"),
];

var GARDENS_OF_IMAGINATION_ITEMS = [
    tmdbItem(756, "幻想曲"),
    tmdbItem(11360, "小飞象"),
    tmdbItem(2062, "美食总动员"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(9325, "森林王子"),
    tmdbItem(51162, "小熊维尼"),
    tmdbItem(1726, "钢铁侠"),
    tmdbItem(10195, "雷神"),
    tmdbItem(1771, "美国队长"),
    tmdbItem(24428, "复仇者联盟"),
    tmdbItem(118340, "银河护卫队"),
    tmdbItem(557, "蜘蛛侠"),
];

var TOMORROWLAND_ITEMS = [
    tmdbItem(97, "创"),
    tmdbItem(20526, "创：战纪"),
    tmdbItem(11544, "星际宝贝"),
    tmdbItem(862, "玩具总动员"),
    tmdbItem(718789, "光年正传"),
    tmdbItem(24428, "复仇者联盟"),
    // “皮克斯奇旅”官方公布的七部影片。
    tmdbItem(150540, "头脑特工队"),
    tmdbItem(585, "怪兽电力公司"),
    tmdbItem(12, "海底总动员"),
    tmdbItem(508947, "青春变形记"),
    tmdbItem(354912, "寻梦环游记"),
    tmdbItem(14160, "飞屋环游记"),
    tmdbItem(508442, "心灵奇旅"),
];

var TOY_STORY_LAND_ITEMS = [
    tmdbItem(862, "玩具总动员"),
    tmdbItem(863, "玩具总动员2"),
    tmdbItem(10193, "玩具总动员3"),
    tmdbItem(301528, "玩具总动员4"),
    tmdbItem(1084244, "玩具总动员5"),
    tmdbItem(213121, "玩具总动员之惊魂夜"),
    tmdbItem(256835, "玩具总动员：遗忘的时光"),
];

var FANTASYLAND_ITEMS = [
    tmdbItem(12092, "爱丽丝梦游仙境（1951）"),
    tmdbItem(12155, "爱丽丝梦游仙境（2010）"),
    tmdbItem(10020, "美女与野兽"),
    tmdbItem(11224, "灰姑娘"),
    tmdbItem(10882, "睡美人"),
    tmdbItem(408, "白雪公主"),
    tmdbItem(10693, "小飞侠彼得潘"),
    tmdbItem(10144, "小美人鱼"),
    tmdbItem(812, "阿拉丁"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(51162, "小熊维尼"),
    tmdbItem(109445, "冰雪奇缘"),
    tmdbItem(330457, "冰雪奇缘2"),
];

var ZOOTOPIA_ITEMS = [
    tmdbItem(269149, "疯狂动物城"),
    tmdbItem(1084242, "疯狂动物城2"),
    tmdbItem(114463, "疯狂动物城+", "tv"),
];

var TREASURE_COVE_ITEMS = [
    tmdbItem(22, "加勒比海盗1：黑珍珠号的诅咒"),
    tmdbItem(58, "加勒比海盗2：聚魂棺"),
    tmdbItem(285, "加勒比海盗3：世界的尽头"),
    tmdbItem(1865, "加勒比海盗4：惊涛怪浪"),
    tmdbItem(166426, "加勒比海盗5：死无对证"),
];

var ADVENTURE_ISLE_ITEMS = [
    tmdbItem(14160, "飞屋环游记"),
    tmdbItem(12, "海底总动员"),
    tmdbItem(37135, "泰山"),
    tmdbItem(9325, "森林王子"),
    tmdbItem(8587, "狮子王"),
];

// 近年“唐老鸭万圣夜反派巡游”的核心反派，以及当前官方反派角色名单中的相关作品。
var HALLOWEEN_VILLAINS_ITEMS = [
    tmdbItem(11970, "大力士"),
    tmdbItem(10882, "睡美人"),
    tmdbItem(10198, "公主与青蛙"),
    tmdbItem(12092, "爱丽丝梦游仙境（1951）"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(408, "白雪公主"),
    tmdbItem(12230, "101忠狗"),
    tmdbItem(10693, "小飞侠彼得潘"),
    tmdbItem(10144, "小美人鱼"),
];

// 按2026年“奇妙之心”城堡秀官方公布的影片顺序排列；《星愿》为同期幻影秀新增篇章。
var CASTLE_LIGHT_SHOW_ITEMS = [
    tmdbItem(11224, "灰姑娘"),
    tmdbItem(51162, "小熊维尼"),
    tmdbItem(38757, "魔发奇缘"),
    tmdbItem(10674, "花木兰"),
    tmdbItem(11970, "大力士"),
    tmdbItem(109445, "冰雪奇缘"),
    tmdbItem(862, "玩具总动员"),
    tmdbItem(354912, "寻梦环游记"),
    tmdbItem(508947, "青春变形记"),
    tmdbItem(1022796, "星愿"),
];

function buildDisneyRoamingPool() {
    var source = [].concat(
        MICKEY_AVENUE_ITEMS,
        GARDENS_OF_IMAGINATION_ITEMS,
        TOMORROWLAND_ITEMS,
        TOY_STORY_LAND_ITEMS,
        FANTASYLAND_ITEMS,
        ZOOTOPIA_ITEMS,
        TREASURE_COVE_ITEMS,
        ADVENTURE_ISLE_ITEMS,
        HALLOWEEN_VILLAINS_ITEMS,
        CASTLE_LIGHT_SHOW_ITEMS
    );
    var seen = {};
    var result = [];
    for (var i = 0; i < source.length; i++) {
        var item = source[i];
        if (seen[item.id]) {
            continue;
        }
        seen[item.id] = true;
        result.push(item);
    }
    return result;
}

var DISNEY_ROAMING_POOL = buildDisneyRoamingPool();
var TMDB_IMAGE_CACHE_PREFIX = "space4.shdr.tmdb-images.v2:";

function itemWithImages(item, images) {
    var result = Object.assign({}, item);
    if (images.posterPath) {
        result.posterPath = images.posterPath;
    }
    if (images.backdropPath) {
        result.backdropPath = images.backdropPath;
    }
    return result;
}

async function loadItemsWithImages(items) {
    if (!Widget.tmdb || typeof Widget.tmdb.get !== "function") {
        return items;
    }

    var result = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var cacheKey = TMDB_IMAGE_CACHE_PREFIX + item.id;
        var cached = null;

        if (Widget.storage && typeof Widget.storage.get === "function") {
            cached = Widget.storage.get(cacheKey);
        }
        if (cached && cached.resolved) {
            result.push(itemWithImages(item, cached));
            continue;
        }

        var tmdbId = String(item.id).replace(/^(movie|tv)\./, "");
        var images = { resolved: true };
        var resolved = false;
        try {
            var detail = await Widget.tmdb.get(item.mediaType + "/" + tmdbId, {
                params: { language: "zh-CN" },
            });
            images.posterPath = detail && detail.poster_path;
            images.backdropPath = detail && detail.backdrop_path;
            resolved = true;
        } catch (error) {
            console.error("获取 TMDB 封面失败:", item.id, error);
        }

        if (resolved && Widget.storage && typeof Widget.storage.set === "function") {
            Widget.storage.set(cacheKey, images);
        }
        result.push(itemWithImages(item, images));
    }
    return result;
}

function randomItems(items, count) {
    var pool = items.slice();
    for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pool[i];
        pool[i] = pool[j];
        pool[j] = temp;
    }
    return pool.slice(0, Math.min(count, pool.length));
}

async function loadDisneyRoaming(params = {}) {
    return loadItemsWithImages(randomItems(DISNEY_ROAMING_POOL, 10));
}

async function loadMickeyAvenue(params = {}) {
    return loadItemsWithImages(MICKEY_AVENUE_ITEMS);
}

async function loadGardensOfImagination(params = {}) {
    return loadItemsWithImages(GARDENS_OF_IMAGINATION_ITEMS);
}

async function loadTomorrowland(params = {}) {
    return loadItemsWithImages(TOMORROWLAND_ITEMS);
}

async function loadToyStoryLand(params = {}) {
    return loadItemsWithImages(TOY_STORY_LAND_ITEMS);
}

async function loadFantasyland(params = {}) {
    return loadItemsWithImages(FANTASYLAND_ITEMS);
}

async function loadZootopia(params = {}) {
    return loadItemsWithImages(ZOOTOPIA_ITEMS);
}

async function loadTreasureCove(params = {}) {
    return loadItemsWithImages(TREASURE_COVE_ITEMS);
}

async function loadAdventureIsle(params = {}) {
    return loadItemsWithImages(ADVENTURE_ISLE_ITEMS);
}

async function loadHalloweenVillains(params = {}) {
    return loadItemsWithImages(HALLOWEEN_VILLAINS_ITEMS);
}

async function loadCastleLightShow(params = {}) {
    return loadItemsWithImages(CASTLE_LIGHT_SHOW_ITEMS);
}
