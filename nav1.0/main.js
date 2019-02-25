
var xiaomi={
    data:[
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
    ],
    listStyle:{"lineHeight":"40px","padding":"0px 5px"},
    fengexian:{color:"#424242"},
};
var nav =createNav("nav").list(xiaomi.data,true).css(xiaomi.listStyle,xiaomi.fengexian).hover("xiaomi-hover");
var game={
    data:[
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
    ],
    listStyle:{lineHeight:"26px",fontSize:"14px","padding":"0px 5px",borderRadius:"3px",marginRight:"5px"},
};
var youxi=createNav("game").list(game.data).css(game.listStyle).hover("game-hover").addClass(0,"game-hover");
var qidian={
    data:[
        {name:"作品分类",href:"#"},
        {name:"全部作品",href:"#"},
        {name:"排行",href:"#"},
        {name:"完本",href:"#"},
        {name:"免费",href:"#"},
        {name:"作家专区",href:"#"},
        {name:"客户端",href:"#"},
    ],
    listStyle:{lineHeight:"36px",fontSize: "16px",padding:"0px 32px"},
    firstStyle:{backgroundColor:"#313035","border":"2px solid #313035",paddingRight:"100px",marginRight: "30px"},
    icon:{display:"inline-block",paddingRight:"4px"},
};
var xiaoshuo=createNav("qidian").list(qidian.data).css(qidian.listStyle).hover("qidian-hover").addClass(0,qidian.firstStyle).addClass(0,"iconfont").addClass(6,"iconfont").icon(0,"&#xe64d;",true,qidian.icon).icon(6,"&#xe686;",true,qidian.icon);
var kugou={
    data:[
        {name:"首页",href:"#"},
        {name:"榜单",href:"#"},
        {name:"下载客户端",href:"#"},
        {name:"更多",href:"#"},
        {name:"音乐直播",href:"#"},
        {name:"音乐LIVE",href:"#"},
        {name:"音乐人",href:"#"},
        {name:"有声电台",href:"#"},
        {name:"商城",href:"#"}
    ],
    listStyle:{
        lineHeight:"55px",
        fontSize:"16px",
        padding:"0 20px",
        verticalAlign:"top",
        boxSizing:"border-box"
    },
    iconStyle:{
        paddingLeft:"10px",
        fontWeight:"500"
    },
    teshu:{
        fontSize:"14px",
        backgroundColor: "#2c323b",
        padding:"0px 12px"
    },
    little:{
        paddingRight:"5px"
    }
};
var music=createNav("kugou").list(kugou.data).css(kugou.listStyle).hover("kugou-hover").addClass(0,"kugou-hover");
music.addClass(3,{marginRight:"80px"}).addClass(3,"iconfont").icon(3,"&#xe62d;",false,kugou.iconStyle);
music.addClass(4,kugou.teshu).addClass(5,kugou.teshu).addClass(6,kugou.teshu).addClass(7,kugou.teshu).addClass(8,kugou.teshu);
music.addClass(4,"iconfont").addClass(5,"iconfont").addClass(6,"iconfont").addClass(7,"iconfont").addClass(8,"iconfont");
music.icon(4,"&#xe643;",true,kugou.little).icon(5,"&#xe625;",true,kugou.little).icon(6,"&#xe63f;",true,kugou.little).icon(7,"&#xeb61;",true,kugou.little).icon(8,"&#xe65a;",true,kugou.little);
var video= {
    data: [
        {name: "首页", href: "#"},
        {name: "电视剧", href: "#"},
        {name: "电影", href: "#"},
        {name: "综艺", href: "#"},
        {name: "动漫", href: "#"},
        {name: "资讯", href: "#"},
        {name: "X分钟", href: "#"},
        {name: "网络自制", href: "#"},
        {name: "搞笑", href: "#"},
        {name: "直播", href: "#"},
        {name: "专题", href: "#"},
        {name: "体育直播", href: "#"},
        {name: "游戏直播", href: "#"},
        {name: "更多", href: "#"}
    ],
    listStyle:{
        lineHeight:"40px",
        color:"#fff",
        padding:"0px 10px"
    },
    iconStyle: {
        fontSize:"10px",
        verticalAlign: "top"
    }
};
var hao=createNav("hao").list(video.data).css(video.listStyle).hover("hao-hover").addClass(13,"iconfont").icon(13,"&#xe62d;",false,video.iconStyle);