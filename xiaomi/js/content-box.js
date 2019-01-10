let contentBox=new Vue({
    el:".content-container",
    data:{
        booklist:"",
        miuilist:"",
        youxilist:"",
        applist:"",
        key:false,
    },
    created:function(){
        this.$http.get("data/contentList.json").then(function (result) {
            this.booklist=result.body.book;
            this.miuilist=result.body.miui;
            this.youxilist=result.body.youxi;
            this.applist=result.body.app;
            contentBox.$mount(".content-container");
        })
    },
    methods:{
       childFun:function (val) {
           switch (val) {
               case "book":
                   this.$refs.book.show();
                   break;
               case "miui":
                   this.$refs.miui.show();
                   break;
               case "youxi":
                   this.$refs.youxi.show();
                   break;
               case "app":
                   this.$refs.app.show();
                   break;
           }
       }
    },
    components:{
        contentList:{
            methods:{
               move:function (e,val) {
                   console.log(contentBox.$children[0].$data.flag);
                   if(contentBox.$children[0].$data.flag==1)
                       return;
                   contentBox.$children[0].$data.flag=1;
                   console.log(contentBox.$children[0].$data.flag);
                   let loc=jQuery(e.target).siblings("ul");
                   let max=-(loc.children().length-1)*296+"px";
                       switch (val) {
                           case "add":
                               if (loc.css("left")==="0px") {
                                   contentBox.$children[0].$data.flag = 0;
                                   return;
                               }
                               loc.stop(true,true).animate({left: "+=296px", transition: "all 1s"},function () {
                                   contentBox.$children[0].$data.flag=0;
                               });
                               break;
                           case "minus":
                               if (loc.css("left")===max) {
                                   contentBox.$children[0].$data.flag = 0;
                                   return;
                               }
                               loc.stop(true,false).animate({left: "+=-296px", transition: "all 1s"},function () {
                                   contentBox.$children[0].$data.flag=0;});
                               break;
                       }
               //     console.log(jQuery(e.target).parent().parent().css("left"));

                },
                show:function () {
                    this.switched=!this.switched;
                }
            },
            props:["book"],
            data:function(){
                return{
                    flag:0,
                    switched:false,
                    first:{fontSize:"20px",fontWeight:"400",lineHeight:"25px",margin:"0px 20px",height:"30px",color:"#333",whiteSpace:"nowrap",padding:"0px 10px 0px"},
                    twice:{padding:"0px 40px 0px",fontSize:"12px",height:"50px"},
                    twicea:{lineHeight: "17px",textAlign:"center",color:"#b0b0b0"},
                    thirth:{height:"40px"},
                    divStyle:{position:"relative",width:"296px",height:"340px"},
                    ulStyle:{position:"absolute"},
                    liStyle:{width:"296px",float:"left",position:"relative"},
                    imgStyle:{width:"216px",height:"154px"},
                    leftBtn:{display:"block",backgroundColor:"rgba(0,0,0,0.3)",color:"white",width:"20px",height:"50px",lineHeight:"50px",position:"absolute",top:"30%"},
                    rightBtn:{display:"block",backgroundColor:"rgba(0,0,0,0.3)",color:"white",width:"20px",height:"50px",lineHeight:"50px",position:"absolute",top:"30%",right:"0%"}
                }
            },
            template:"<div :style='divStyle'><ul :style='ulStyle'><li v-for='item in book' :style='liStyle'><h4 :style='first'><a>{{item.header}}</a></h4><p :style='twice'><a :style='twicea'>{{item.content}}</a></p><p :style='thirth'><a>{{item.price}}</a></p><img :src='item.path' :style='imgStyle'/></li></ul><a href='javascript:' :style='leftBtn' @click='move($event,\"add\")' v-show='switched'><</a><a href='javascript:' :style='rightBtn' @click='move($event,\"minus\")' v-if='switched'>></a></div>"
        }
    }
})