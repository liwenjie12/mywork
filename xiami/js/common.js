
$.noConflict();
window.onload=function() {
    jQuery("img.lazy").lazyload({effect: "fadeIn"});
};
Vue.component("allList",{
    data:function(){
        return {
            getShow:"",
            listOne:"",
            listTwo:"",
            listOnetext:"",
            listTwotext:"",
            listThree:{},
            shanList:"",
            xiList:"",
        };
    },
    props:["one","text"],
    created:function(){
        this.shanList=this.one.listOne;
        this.listOne=this.one.listOne;
        this.listTwo=this.one.listTwo;
        this.xiList=this.one.listOnetext;
        this.listOnetext=this.one.listOnetext;
        this.listTwotext=this.one.listTwotext;
    },
    methods:{
            change:function(val) {
                switch (val) {
                    case "listOne": {this.shanList = this.listOne;this.xiList = this.listOnetext;}break;
                    case "listTwo": {this.shanList = this.listTwo;this.xiList = this.listTwotext;}break;
                }
            }
    },
    components:{
        showMore:{
            props:["small"],
            data:function(){
                return {
                    lastStyle:{width:"234px",height:"300px",float:"left",marginLeft:"14px",boxSizing:"border-box"},
                    divStyle: {width:"234px",height:"143px",backgroundColor:"white",marginBottom: "14px",position:"relative"},
                    pOne:{position:"absolute",top:"40px",left:"30px",width:"94px"},
                    pTwo:{position:"absolute",top:"70px",left:"30px",width:"94px",color:"#ff6709"},
                    img:{position:"absolute",top:"30px",left:"130px",width:"80px",height:"80px"},
                    aText:{position:"absolute",top:"50px",left:"30px",width:"94px"},
                    iconText:{position:"absolute",top:"50px",left:"150px",color:"#ff6709"}
                };
            },
            created:function(){
            },
            template:"<li :style='lastStyle'><div :style='divStyle'><a :style='pOne' href='javascript:'>{{small.name}}</a><p :style='pTwo'>{{small.pri}}</p><img :src='small.path' :style='img'/></div><div :style='divStyle'><a href='javascript:' :style='aText'><p style='fontSize:18px'>浏览更多</p><p style='fontSize:14px'>{{small.lei}}</p></a><a href='javascript:' :style='iconText'><i class=\"iconfont icon-right-circle\" style='fontSize:50px'></i></a></div></li>",
        }
    },
    template: "<div class='all-list-box' @chuan='change'><ul id='shop-alllist'><li v-for='item in shanList' class='main-li'><img :data-original='item.path' class='small-img lazy'/><p v-html='item.name' class='shangou-name'></p><p v-html='item.content' class='shangou-content'></p><p class='shangou-price'><span v-html='item.newprice'></span><span v-html='item.oldprice'></span></p><p class='shangou-biaoqian' :style='item.style' v-html='item.biaoqian'></p></li><show-more :small='xiList'></show-more><div class='clear'></div></ul></div>"
});
Vue.component("listImg",{
    props:["two"],
    data:function() {
        return {
            twoImg:"",
            divStyle: {width: "234px", height: "614px",fontSize:"0px",overflow:"hidden",float:"left"},
            imgStyle: {width: "234px", height: "300px",marginBottom:"14px",}
        };
    },
    template:"<div :style='divStyle'><img v-for='item in two.twoImg' :data-original='item' :style='imgStyle' class='lazy'/></div>",
});
Vue.component("allNav",{
    props:["three"],
    data:function(){
        return {
            index:0,
            liStyle:{float:"left",fontSize:"16px",marginRight:"20px",height:"26px",lineHeight:"26px",cursor:"pointer"},
            ulStyle:{position:"absolute",right:"0px",top:"-40px"}
        };
    },
    methods:{
        childMsg:function (e,value) {
            console.log(jQuery(e.target).siblings());
            jQuery(e.target).addClass("setorange").siblings().removeClass("setorange");
            this.$emit("get",value);
        },
    },
    mounted:function(){
        jQuery(".clearorangeall li[index=0]").addClass("setorange");
        // document.querySelectorAll(".clearorangeall li")[this.index].setAttribute("class","setorange");
    },
    template:"<ul :style='ulStyle'  class='clearorangeall'><li v-for='item in three.lishan' :style='liStyle' @mouseover='childMsg($event,item.event)' :ref='item.event' :key='item.id' :index='item.id'>{{item.word}}</li></ul>"
});