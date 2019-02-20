var nav=new Vue({
    el:".nav-container",
    data:{
        flag:false,
        navData:"",
        allData:""
    },
    created:function(){
       this.$http.get("data/navShop.json").then(function (result) {
           this.allData=result.body;
           this.flag=true;
           console.log(this.allData);
       });
    },
    methods:{
        change:function (e,event) {
           switch(e){
               case "mix":this.navData=this.allData.mix;break;
               case "redmi":this.navData=this.allData.redmi;break;
               case "tv":this.navData=this.allData.tv;break;
               case "pc":this.navData=this.allData.pc;break;
               case "jiadian":this.navData=this.allData.jiadian;break;
               case "new":this.navData=this.allData.new;break;
               case "router":this.navData=this.allData.router;break;
               case "zhineng":this.navData=this.allData.zhineng;break;
               case "close":this.$children[1].hide();break;
           }
        }
    },
    components:{
        navList:{
            props:["nav"],
            data:function(){
                return {
                    list:[
                        {name:"小米手机",link:"javascript:void(0)","msg":"mix"},
                        {name:"红米",link:"javascript:void(0)","msg":"redmi"},
                        {name:"电视",link:"javascript:void(0)","msg":"tv"},
                        {name:"笔记本",link:"javascript:void(0)","msg":"pc"},
                        {name:"家电",link:"javascript:void(0)","msg":"jiadian"},
                        {name:"新品",link:"javascript:void(0)","msg":"new"},
                        {name:"路由器",link:"javascript:void(0)","msg":"router"},
                        {name:"智能硬件",link:"javascript:void(0)","msg":"zhineng"},
                        {name:"服务",link:"https://www.mi.com/service/","msg":"close"},
                        {name:"社区",link:"http://www.xiaomi.cn/","msg":"close"}
                    ]
                };
            },
            methods:{
                show:function () {
                    jQuery(".nav-shop").stop(false,false).slideDown();
                },
                hide:function () {
                    jQuery(".nav-shop").stop(false,false).slideUp();
                },
                toggle:function (e,event) {
                    this.$emit("get", e, event);
                },
                back:function (e) {
                    if(e==="close"){
                        this.show();
                    }
                }
            },
            updated:function(){
                this.$nextTick(function () {
                    jQuery("img.lazy").lazyload({effect: "fadeIn"});
                });
                   jQuery(".nav-list-content").each(function(){
                       if(!jQuery(this).html()){
                           jQuery(this).css("border","none");
                       }
                   });
                   jQuery(".nav-link-one:last").css("border","none");
            },
            template:"<div @mouseenter='show' @mouseleave='hide'><a v-for='item in list':href='item.link' class='nav-list' target='_blank' @mouseenter='toggle(item.msg,$event)' @mouseleave='back(item.msg)'>{{item.name}}</a><div class='nav-shop'><ul class='nav-shop-box'><li class='nav-shop-list' v-for='item in nav'><a href='javascript:' class='nav-link-one'><img :data-original='item.src' class='lazy'></a><a href='javascript:' class='nav-link-two'><p class='nav-list-header'>{{item.header}}</p></a><p class='nav-list-price'>{{item.price}}</p><p class='nav-list-content'>{{item.content}}</p></li></ul></div></div>"
        },
        searchButton:{
            template:"<div class='nav-bar-search'><input type='text' id='content'/><label for='serch' id='search-icon'><input type=\"button\" id=\"search\" /><i class=\"iconfont icon-sousuo\"></i></label></div>",
        }
    }
});