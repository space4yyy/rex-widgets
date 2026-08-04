WidgetMetadata = {
    id: "space4.shdr",
    title: "上海迪士尼度假区片单",
    description: "按上海迪士尼度假区主题园区整理相关影视作品",
    author: "Space4",
    site: "https://github.com/space4yyy",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    modules: [
        {
            id: "treasureCove",
            title: "宝藏湾",
            description: "加勒比海盗系列电影",
            requiresWebView: false,
            functionName: "loadTreasureCove",
            cacheDuration: 86400,
            params: [],
        },
    ],
};

var TREASURE_COVE_MOVIES = [
    {
        id: 22,
        type: "tmdb",
        mediaType: "movie",
        title: "加勒比海盗1：黑珍珠号的诅咒",
    },
    {
        id: 58,
        type: "tmdb",
        mediaType: "movie",
        title: "加勒比海盗2：聚魂棺",
    },
    {
        id: 285,
        type: "tmdb",
        mediaType: "movie",
        title: "加勒比海盗3：世界的尽头",
    },
    {
        id: 1865,
        type: "tmdb",
        mediaType: "movie",
        title: "加勒比海盗4：惊涛怪浪",
    },
    {
        id: 166426,
        type: "tmdb",
        mediaType: "movie",
        title: "加勒比海盗5：死无对证",
    },
];

async function loadTreasureCove(params = {}) {
    return TREASURE_COVE_MOVIES;
}
