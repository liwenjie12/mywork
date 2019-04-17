<?php
$ip="127.0.0.1";
$user="liwenjie12";
$pass="m19961217";
$mysql=new mysqli($ip,$user,$pass,"liwenjie12");
$id=@$_GET["id"];
if($mysql){
    $check="SELECT * FROM xiaomi WHERE id=$id";
    $mysql->query("SET NAMES UTF8");
    $resource=$mysql->query($check);
    if($resource->num_rows>0){
        while($rows=$resource->fetch_assoc()){
            $response=$rows;
        }
    }
    else{
        echo "我没找到数据，难受";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
    <title><?php echo $response["title"];?>-小米商城</title>
    <link rel="stylesheet" type="text/css" href="font/iconfont.css">
    <link rel="stylesheet" type="text/css" href="style/item.css"/>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="./js/public.js"></script>
</head>
<body>
<div id="top-bar" class="top-box">
    <!--顶部导航条 -->
    <div class="top-container">
        <top-list :list="navList"></top-list>
        <top-shop :shop="shopList"></top-shop>
        <top-msg :msg="msgList"></top-msg>
        <div class="clear"></div>
    </div>
</div>
<div class="nav-container">
    <div class="header-logo">
        <a href="https://www.mi.com/index.html"></a>
    </div>
    <nav-list :flag="flag" :nav="navData" @get="change"></nav-list>
    <search-button></search-button>
    <div class='clear'></div>
</div>
<div class="box">
    <my-item v-if="flag" :position="position"></my-item>
</div>
<template id="item">
    <div>
        <div class="item-box">
            <div class="item-header">
                <p class="item-header-title"><?php echo $response["title"];?></p>
                <p class="item-header-help">
                    <a href="https://order.mi.com/service/serviceAgreement?id=41">安装售后服务须知 </a>
                    <span style="padding:0px 10px;color:#ccc">|</span>
                    <a href="https://order.mi.com/queue/f2code">F码通道</a>
                </p>
            </div>
        </div>
        <div class="item-content">
            <div>
                <div class="item-content-img">
                    <img src="<?php echo $response["pic"];?>" />
                </div>
            </div>
            <div>
                <div class="item-content-message">
                    <h1><?php echo $response["title"];?></h1>
                    <p class="item-message-p1"><?php echo $response["description"];?></p>
                    <p class="item-message-p2"><?php echo $response["newprice"];?></p>
                    <p class="item-message-p3"><span>赠品</span>赠米粉卡，最高含100元话费</p>
                    <div class="item-message-position">
                        <p><span>{{position.province}}</span><span>{{position.city}}</span><span>{{position.district}}</span><span style="color:#ff6700">有货</span></p>
                    </div>
                    <a class="item-message-car" @click="buyerCart" :style="{userSelect:'none'}">加入购物车({{num}})</a>
                    <a class="item-message-car" :style="{userSelect:'none'}">立即购买</a>
                </div>
            </div>
        </div>
        <div class="item-contact">
            <div class="item-contact-container">
                <h1>特别说明</h1>
                <div>
                    <img src="./image/item/aaee9db8790426631abc3b76fa3da617.jpg" />
                </div>
            </div>
            <div class="item-contact-container">
                <h1>官方微信</h1>
                <div>
                    <img src="./image/item/1a84b2b629512205bf528aae91361efb.jpg" />
                </div>
            </div>
            <div class="item-contact-container">
                <h1>价格说明</h1>
                <div>
                    <img src="./image/item/a482afa34053b1b32ece1023475af7fb.jpeg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./js/item.js"></script>
<script>
var item=new Vue({
    el:".box",
    data:{
      position:"",
      flag:true,
    },
    components:{
        myItem:{
            template:"#item",
            data:function(){
                return {
                    cart:"加入购物车",
                    num:0,
                    cart:[]
                }
            },
            props:["position"],
            store:store,
            methods:{
                buyerCart:function () {
                    if(localStorage.getItem("cart")){
                        this.set();
                        this.$store.state.status=!this.$store.state.status;
                    }
                    else{
                        localStorage.setItem("cart","[]");
                        this.set();
                    }
        },
                set:function () {
                    for(var key in this.cart){
                        if(this.cart[key]["id"]==<?php echo json_encode($response["id"]) ?>){
                            this.num++;
                            this.cart[key]["num"]=this.num;
                            localStorage.setItem("cart",JSON.stringify(this.cart));
                            return false;
                        }
                    }
                    this.cart.push({id:<?php echo json_encode($response["id"]) ?>,pic:<?php echo json_encode($response["pic"])?>,title:<?php echo json_encode($response["title"]) ?>,price:<?php echo json_encode($response["newprice"]) ?>,num:++this.num});
                    localStorage.setItem("cart",JSON.stringify(this.cart));
                }
            },
            created:function () {
                if(!localStorage.getItem("cart")){
                    localStorage.setItem("cart","[]");
                }
                else{
                    this.cart=JSON.parse(localStorage.getItem("cart"));
                    for(var key in this.cart){
                        if(this.cart[key]["id"]==<?php echo json_encode($response["id"]) ?>){
                            this.num=this.cart[key]["num"];
                        }
                    }
                }
            }
        }
    }
});
</script>
<script>
    function success(result) {
        item.position=result.content.address_detail;
        item.flag=true;
    }
</script>
<script src="http://api.map.baidu.com/location/ip?ak=aj1y8EB2fidZZaBP7deRSh1VbuVL9yIT&callback=success"></script>
</body>
</html>