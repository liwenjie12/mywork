
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
            if(this.id===-jQuery(".shopimg").length)
                this.id=jQuery(".shopimg").length;
            jQuery(".shopimg").eq(this.id-1).stop(true,true).fadeIn(500).siblings("img.shopimg").stop(true,true).fadeOut(500);
            this.id--;
        },
        },
    created:function(){
        this.$http.get("data/imageShow.json").then(function (result) {
            this.flag=true;
            this.imgList = result.body;
        })
    },
    mounted:function(){
               //this.flag=true;
        console.log(new Date());
        setTimeout(()=>{
            console.log(1);
            this.timer=setInterval(this.autoPlay,3000);
        },0)
    },
    components:{
        categoryList:{
            data:function() {
                return {
                    cateList: "",
                }
            },
            created:function(){
             this.$http.get("data/cateShow.json").then(function (result) {
                this.cateList=result.body;
             })
            },
            template:"<div class='category'><ul class='category-box'><li class='category-list' v-for='item in cateList' :key='item.id'><a :href='item.link'><span>{{item.cateOne}}</span><span class='cateTwo'>{{item.cateTwo}}</span><span class='icon'><i class=\"iconfont icon-erji\"></i></span><div></div></a></li></ul></div>",
        },
        leftBtn:{
            template:"<a href='javascript:' class='left-btn' @click=''><i class=\"iconfont icon-fanhui\"></i></a>"
        },
        rightBtn:{
            template:"<a href='javascript:' class='right-btn'><i class=\"iconfont icon-gengduo\"></i></a>"
        }
    }
});