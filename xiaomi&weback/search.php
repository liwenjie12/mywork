<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
    <title>小米商城</title>
    <link rel="stylesheet" type="text/css" href="font/iconfont.css">
    <link rel="stylesheet" type="text/css" href="style/search.css"/>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="js/public.js"></script>
</head>
<body>
<?php
$ip="127.0.0.1";
$user="liwenjie12";
$pass="m19961217";
$mysql=new mysqli($ip,$user,$pass,"liwenjie12");
$search=$_GET["search"];
$response=array();
if(empty($search)){
    echo htmlspecialchars_decode("<script>alert('输入为空')</script>");
    die();
}
if($mysql){
    $mysql->query("SET NAMES UTF8");
    $check="SELECT * FROM xiaomi WHERE title LIKE '%$search%'";
    $resource=$mysql->query($check);
    if($resource->num_rows>0){
        while($rows=$resource->fetch_assoc()){
            array_push($response,$rows);
        }
    }
    else{
        echo htmlspecialchars_decode("<script>alert('未找到数据');history.back();</script>");
    }
    $response=json_encode($response);
    $search=strval($search);
    echo htmlspecialchars_decode("<script>var response=$response;var search='$search'</script>");
}
?>
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
<div class="container">
    <div style="overflow:hidden">
        <div class="box">
            <p>
                <a href="http://www.liwenjie12.tk">首页</a>
                <span class="search-result-lg">></span>
                <a>全部结果</a>
                <span class="search-result-lg">></span>
                <a>{{mes}}</a>
            </p>
            <ul class="search-result-order">
                <li>排序</li>
                <li style="color:#aaa">|</li>
                <li>新品</li>
                <li style="color:#aaa">|</li>
                <li>价格</li>
            </ul>
            <my-result :list="list"></my-result>
            <page-list :page="page" @change="pagemove"></page-list>
        </div>
    </div>
</div>
<template id="sear">
    <ul class="search-result-box">
        <li class="search-result-content" v-for="item in list" :key="item.id">
            <a :href="item.php" target="_blank" :data-id="item.id" @click="push($event)" style="cursor:pointer">
                <img :src="item.pic" />
                <p class="title">{{item.title}}</p>
                <p><span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
            </a>
        </li>
    </ul>
</template>
<template id="page">
    <div class="search-result-page">
        <a><</a>
        <a v-for="item in page" @click="change($event,item)">{{item}}</a>
        <a>></a>
    </div>
</template>
<script src="js/search.js"></script>
<script>
    var search=new Vue({
        el:".box",
        data:{
            list:[],
            mes:search,
            page:[]
        },
        methods:{
            pagemove:function (f) {
                this.list=response.slice((f-1)*8,f*8);
            }
        },
        components:{
            myResult:{
                template:"#sear",
                props:["list"],
                methods:{
                    push:function (e) {
                        var href="item.php?id="+jQuery(e.target).parent("a").attr("data-id");
                        jQuery(e.target).parent("a").attr("href",href);
                    }
                }
            },
            pageList:{
                template:page,
                props: ["page"],
                methods:{
                    change:function (e,f) {
                        this.$emit("change",f);
                        document.body.scrollTop=document.documentElement.scrollTop=0;
                    }
                }
            }
        },
        created:function () {
            var a=1;
            var b=Math.ceil(response.length/8);
            for(var i=0;i<b;i++){
                this.page.push(a);
                a++;
            }
            this.list=response.slice(0,8);
            console.log(this.page);
        }
    });
</script>
</body>
</html>