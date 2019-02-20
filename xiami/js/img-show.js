
var imgShow=new Vue({
    el:".img-show",
    data: {
        id:0,
        flag:false,
        imgList:"",
        timer:"",
    },
    methods:{
        autoPlay:function () {
            if(this.id===jQuery(".shopimg").length-1){
                this.id=-jQuery(".shopimg").length-1;
            }
            jQuery(".shopimg").eq(this.id+1).stop(true,true).fadeIn(500).siblings("img.shopimg").stop(true,true).fadeOut(500);
            this.id++;
        },
        stopPlay:function () {
            clearInterval(this.timer);
        },
        continuePlay:function () {
            this.timer=setInterval(this.autoPlay,3000);
        },
        backPlay:function () {
            if(this.id===-jQuery(".shopimg").length) {
                this.id = jQuery(".shopimg").length;
            }
            jQuery(".shopimg").eq(this.id-1).stop(true,true).fadeIn(500).siblings("img.shopimg").stop(true,true).fadeOut(500);
            this.id--;
        },
        },
    created:function(){
        this.$http.get("data/imageShow.json").then(function (result) {
            this.flag=true;
            this.imgList = result.body;
        });
    },
    mounted:function(){
               //this.flag=true;
        console.log(new Date());
        this.timer=setInterval(this.autoPlay,3000);

    },
    components:{
        categoryList:{
            data:function() {
                return {
                    cateList: "",
                    cateShop:"",
                    url:"",
                };
            },
            methods:{
               getMsg:function (a) {
                  switch(a){
                      case 1:this.url="data/catePhone.json";break;
                      case 2:this.url="data/cateTv.json";break;
                      case 3:this.url="data/cateJiadian.json";break;
                      case 4:this.url="data/cateOut.json";break;
                      case 5:this.url="data/cateRouter.json";break;
                      case 6:this.url="data/catePeijian.json";break;
                      case 7:this.url="data/cateChild.json";break;
                      case 8:this.url="data/cateMusic.json";break;
                      case 9:this.url="data/cateLife.json";break;
                      case 10:this.url="data/catePc.json";break;
                  }
               },
                show:function (e) {
                   jQuery(e.currentTarget).children("div").show();
                },
                hide:function (e) {
                   jQuery(e.currentTarget).children("div").hide();
                }
            },
            watch:{
               url:function () {
                   this.$http.get(this.url).then(function (result) {
                       this.cateShop=result.body;
                       this.$nextTick(function () {
                           var a=jQuery(".children-list").eq(0).children().length;
                           switch(a){
                               case 2:jQuery(".children-list").css("width","270px");break;
                               case 3:jQuery(".children-list").css("width","550px");break;
                               case 4:jQuery(".children-list").css("width","770px");break;
                               case 5:jQuery(".children-list").css("width","990px");break;
                           }
                           jQuery("img.lazy").lazyload({effect: "fadeIn"});
                       });
                   });
               }
            },
            created:function(){
             this.$http.get("data/cateShow.json").then(function (result) {
                this.cateList=result.body;
             });
            },
            template:"<div class='category'><ul class='category-box'><li class='category-list' v-for='item in cateList' :key='item.id'  @mouseover='show($event)' @mouseout='hide($event)'><a :href='item.link' class='category-list-link' @mouseover='getMsg(item.id)'><span>{{item.cateOne}}</span><span class='cateTwo'>{{item.cateTwo}}</span><span class='icon'><i class=\"iconfont icon-erji\"></i></span></a><div class='children-list'><ul class='children-list-show' v-for='item in cateShop'><li v-for='key in item'><a :href='key.src'><img :data-original='key.image' class='lazy'><span>{{key.content}}</span></a></li></ul><div class='clear'></div></div></li></ul></div>",
        },
        leftBtn:{
            template:"<a href='javascript:' class='left-btn' @click=''><i class=\"iconfont icon-fanhui\"></i></a>"
        },
        rightBtn:{
            template:"<a href='javascript:' class='right-btn'><i class=\"iconfont icon-gengduo\"></i></a>"
        }
    }
});