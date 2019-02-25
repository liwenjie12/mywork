
var nav=createNav("nav").list().box().tag().parentHover().icon(3,"&#xe62d",false).childTag();
var newData=[
    {name:"首页",href:"#"},
    {name:"电影",href:"#",child:{"最近上映":"#","热度最高":"#"}},
    {name:"电视剧",href:"#",child:{"神话剧":"#","军事剧":"#","生活剧":"#"}},
    {name:"短视频",href:"#"}
];
var newNav=createNav("new").list(newData).box().tag().parentHover().icon(2,"&#xe62d",false).icon(1,"&#xe62d",false).childTag();
var xiaoshuo=[
    {name:"作品分类",href:"#"},
    {name:"全部作品",href:"#"},
    {name:"排行",href:"#"},
    {name:"完本",href:"#"},
    {name:"免费",href:"#"},
    {name:"作家专区",href:"#"},
    {name:"客户端",href:"#"}
];
var qidian=createNav("qidian").list(xiaoshuo).box("qidian-main-box").tag("qidian-parent-list").parentHover("qidian-parent-hover").icon(6,"&#xe686;",true,"qidian-parent-icon").icon(0,"&#xe64d;",true,"qidian-parent-icon1").css(0,{backgroundColor:"#313035",borderTop:"#313035",marginRight:"20px"});
var xiaoyouxi=[
    {name:"首页",href:"#"},
    {name:"动作",href:"#"},
    {name:"体育",href:"#"},
    {name:"益智",href:"#"},
    {name:"射击",href:"#"},
    {name:"冒险",href:"#"},
    {name:"棋牌",href:"#"},
    {name:"策略",href:"#"},
    {name:"休闲",href:"#"},
    {name:"女生",href:"#"},
    {name:"装扮",href:"#"},
    {name:"儿童",href:"#"},
    {name:"过关",href:"#"},
    {name:"双人",href:"#"},
    {name:"桌趣",href:"#"},
    {name:"漫画",href:"#"},
    {name:"闪艺小说",href:"#"},
    {name:"手机游戏",href:"#"}
];
var youxi=createNav("youxi").list(xiaoyouxi).box("game-main-box").tag("game-parent-list").parentHover("game-parent-hover").css(0,{backgroundColor: "#fff",borderRadius:"5px",color:"#6daf05",fontWeight:"bold",marginRight: "5px"});
var video=[
    {name:"首页",href:"#"},
    {name:"电视剧",href:"#"},
    {name:"电影",href:"#"},
    {name:"综艺",href:"#"},
    {name:"动漫",href:"#"},
    {name:"资讯",href:"#"},
    {name:"X分钟",href:"#"},
    {name:"网络自制",href:"#"},
    {name:"搞笑",href:"#"},
    {name:"直播",href:"#"},
    {name:"专题",href:"#"},
    {name:"体育直播",href:"#"},
    {name:"游戏直播",href:"#"},
    {name:"更多",href:"#",child:{"美女":"#","萌主页":"#","排行榜":"#","视频名站":"#","周末影院":"#","视点":"#",}},
];
var hao=createNav("haobo").list(video).box("hao-main-box").tag("hao-parent-list").parentHover("hao-parent-hover","hao-child-show").icon(13,"&#xe600;",false,"hao-parent-icon").childTag("hao-child-box","hao-child-tag","hao-child-hover");
var xiaomi=[
    {name:"小米商城",href:"#"},
    {name:"MIUI",href:"#"},
    {name:"IoT",href:"#"},
    {name:"云服务",href:"#"},
    {name:"金融",href:"#"},
    {name:"有品",href:"#"},
    {name:"小爱开放平台",href:"#"},
    {name:"政企服务",href:"#"},
    {name:"资质证照",href:"#"},
    {name:"协议规则",href:"#"},
    {name:"下载app",href:"#"},
    {name:"Select Region",href:"#"}
];
var shop=createNav("xiaomi").list(xiaomi,true,"|").box("xiaomi-main-box").tag("xiaomi-parent-tag",{color:"#424242",padding:"0"}).parentHover("xiaomi-parent-hover");
