$.fn.createNav=function (o) {
    o=$.extend(true,{},$.fn.nav,o);
    $(this).navProto.direction(o,$(this));
    if(o.boxStyle){
        if(o.boxStyle.constructor===Object){
            $(this).css(o.boxStyle);
        }
    }
    return this;
}
$.fn.navProto={
    constructor:$.fn.createNav,
    direction:function (value,that) {
        if(value.direction=="row"){
            this.row(value,that);
        }
        else if(value.direction=="col"){
            console.log("平行");
        }
    },
    row:function (o,that) {
        that.append("<ul></ul>");
        $.each(o.data,function (index,data) {
            that.children("ul").append("<li style='display:inline-block;position:relative'><a href="+data.href+">"+data.parent+"</a></li>");
            if(data.child!="") {
                var own = that.children("ul").children("li").eq(index);
                own.append("<ul></ul>");
                $.each(data.child, function (e, f) {
                    own.children("ul").append("<li><a href="+f.href+">"+f.list+"</a></li>");
                })
            }
        });
        this.rowStyle(o,that);
        this.addIcon(o,that);
    },
    rowStyle:function (o,that) {
        var own=that.children("ul").children("li");
        own.css(o.parentStyle);
        own.children("ul").css(o.childUl);
        own.on("mouseenter",function () {
            $(this).children("ul").stop().slideDown();
        });
        own.on("mouseleave",function () {
            $(this).children("ul").stop().slideUp();
        })
        own.each(function () {
            $(this).children("a").css(o.parentTag);
            $(this).on("mouseenter",function () {
                $(this).children("a").css(o.parentHover);
            });
            $(this).on("mouseleave",function () {
                $(this).children("a").css(o.parentOut);
            });
        });
        own.find("li").css(o.childStyle);
        own.find("li").find("a").each(function () {
            $(this).css(o.childTag);
            $(this).on("mouseenter",function () {
                $(this).css(o.childHover);
            });
            $(this).on("mouseleave",function () {
                $(this).css(o.childOut);
            })
        })
    },
    addIcon:function (o,that) {
        $.each(o.icon,function (e,f) {
            var own=that.children("ul").children("li").eq(f.index);
            own.children("a").append("<span style='font-family: iconfont;display:inline-block;vertical-align: center'>"+f.code+"</span>");
            own.find("span").css(f.style);
            console.log(own.find("span"));
        })
    }
};
$.fn.nav={
    direction:"row",
    data:[
        {
            parent:"动画",
            child:[
                    {
                        list:"MAD-AMV",
                        href:"#"
                    },
                    {
                    list:"MMD-3D",
                    href:"#"
                }
                    ],
            href:"#"
        },
        {
            parent:"番剧",
            child:[
                {
                    list:"连载动画",
                    href:"#"
                },
                {
                    list:"完结动画",
                    href:"#"
                }
            ],
            href:"#"
        },
        {
            parent:"国创",
            child:[
                {
                    list:"国产动画",
                    href:"#"
                },
                {
                    list:"布袋戏",
                    href:"#"
                }
            ],
            href:"#"
        }
    ],
    boxStyle:{
        "width":"100%",
        "height":"55px",
        "backgroundColor":"#2c323b",
        "padding":"0px 175px"
    },
    parentStyle:{
        lineHeight:"55px",
        boxSizing: "border-box"
    },
    parentTag:{
        display:"block",
        color:"#ddd",
        fontSize:"16px",
        padding:"0px 30px",
    },
    parentHover:{
        backgroundColor: "#0c8ed9",
        color:"#fff"
    },
    parentOut:{
        backgroundColor: "#2c323b",
        color:"#ddd"
    },
    childUl:{
        position:"absolute",
        display:"none",
        top:"100%"
    },
    childStyle:{
        "backgroundColor":"#2c323b",
        "lineHeight":"30px",
    },
    childTag:{
        display:"inline-block",
        color:"#ddd",
        fontSize: "15px",
        padding:"10px 0 10px 30px",
        boxSizing:"border-box"
    },
    childHover:{
        backgroundColor:"#383d44",
    },
    childOut:{
        backgroundColor:"#2d343d",
    },
    icon:[
        {index:3,code:'&#xe62d;',style:{marginLeft:"15px"}}
    ]
};
var nav={
    data:[
        {
            parent:"首页",
            child:"",
            href:"#"
        },
        {
            parent:"榜单",
            child:"",
            href:"#"
        },
        {
            parent:"下载客户端",
            child:"",
            href:"#"
        },
        {
            parent:"更多",
            child:[
                {
                    list:"电台",
                    href:"#"
                },
                {
                    list:"歌单",
                    href:"#"
                },
               {
                   list:"MV",
                       href:"#"
               },
                {
                    list:"歌手",
                    href:"#"
                },
            ],
            href:"#"
        }
    ],
    childStyle:{
        width:"123px"
    },
    childTag:{
        width:"123px",
        textAlign:"center",
        paddingRight:"30px"
    },
    parentHover:{
        height:"55px"
    },
}
$("#nav").createNav(nav).children("ul").children("li").eq(0).css({color:"#fff",backgroundColor:'#0c8ed9'});
var test={
    data:[
        {
            parent:"首页",
            child:"",
            href:"#"
        },
        {
            parent:"产品列表",
            child:[
                {list:"云桌面",href:"#"},
                {list:"云盘",href:"#"},
                {list:"云应用",href:"#"},
                {list:"云协同",href:"#"},
                {list:"云服务器",href:"#"},
                {list:"产品架构",href:"#"},
            ],
            href:"#"
        },
        {
            parent:"经典案例",
            child:[
                {list:"四川省建筑科学研究院",href:"#"},
                {list:"中国十九冶集团有限公司",href:"#"},
                {list:"希望教育集团",href:"#"},
                {list:"西南交通大学",href:"#"},
                {list:"四川万锦建设集团有限公司",href:"#"},
                {list:"成都同新房地产开发有限公司",href:"#"},
                {list:"省政府投资非经营性项目代建中心",href:"#"},
                {list:"四川利翔建设项目管理有限公司",href:"#"},
                {list:"西南交通大学希望学院",href:"#"},
                {list:"众恒建筑设计有限公司",href:"#"},
            ],
            href:"#"
        },
        {
            parent:"解决方案",
            child:[
                {list:"RCBIM解决方案",href:"#"},
                {list:"RCEDU解决方案",href:"#"},
                {list:"RCOFC解决方案",href:"#"},
                {list:"RCHOTEL解决方案",href:"#"}
            ],
            href:"#"
        },
        {
            parent:"如何购买",
            child:[
                {list:"联系方式",href:"#"},
                {list:"免费试用",href:"#"},
                {list:"授权申请",href:"#"}
            ],
            href:"#"
        },
        {
            parent:"合作发展",
            child:[
                {list:"申请合作",href:"#"},
                {list:"技术认证",href:"#"}
            ],
            href:"#"
        },
        {
            parent:"关于我们",
            child:[
                {list:"公司",href:"#"},
                {list:"人才招聘",href:"#"},
                {list:"荣誉与资质",href:"#"}
            ],
            href:"#"
        },
    ],
    boxStyle: {
        "height":"70px",
        backgroundColor:"#fff",
        boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        color:"#777",
        position:"fixed",
        top:"0%"
    },
    parentStyle: {
        lineHeight:"70px",
    },
    parentTag: {
        color:"#555",
        padding:"0px 15px",
    },
    parentHover:{
        color:"#000",
        backgroundColor:"#fff",
    },
    parentOut: {
        backgroundColor: "#fff",
        color:"#555"
    },
    childUl:{
        top:"90%",
        border:"5px solid #fff",
        borderRadius:"5px",
        overflow:"hidden",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
    },
    childStyle:{
        color:"#555",
        padding:"0px",
        display:"block",
        height:"30px",
        width:"160px",
    },
    childTag:{
        width:"100%",
        padding:"5px 10px",
        verticalAlign:"center",
        backgroundColor:"#fff",
        color:"#555",
        fontSize:"13px"
    },
    childHover: {
        backgroundColor:"#fff",
        color:"#000"
    },
    childOut: {
        backgroundColor:"#fff",
        color:"#555"
    },
    icon:[
        {index:1,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}},
        {index:2,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}},
        {index:3,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}},
        {index:4,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}},
        {index:5,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}},
        {index:6,code:'&#xe62d;',style:{marginLeft:"5px",fontSize:"12px",verticalAlign: "top"}}
    ]
}
$("#test").createNav(test);