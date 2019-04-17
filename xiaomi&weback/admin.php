<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/15
 * Time: 13:26
 */
session_start();
$ip="127.0.0.1";
$user="liwenjie12";
$pswd="m19961217";
$data=$_SESSION["admin"];
$status=$_SESSION["status"];
$mysql=new mysqli($ip,$user,$pswd,"liwenjie12");
$check="SELECT * FROM admin where username='$data'";
$result=$mysql->query($check);
//对登录状态进行判断
if($result->num_rows===1){
    while($rows=$result->fetch_assoc()){
        if($rows["status"]!=$status){
            header("location:login.php");
        }
    }
}
else{
    header("location:login.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台管理系统</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <script src="js/public.js"></script>
    <script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./style/admin.css" />
</head>
<body>
    <div id="box" class="box">
        <h1 class="header">小米商城后台管理系统</h1>
        <ul class="pull-left list text-center nav-list">
            <router-link to="/" tag="li">全部商品</router-link>
            <router-link to="/add" tag="li">商品添加</router-link>
            <router-link to="/manage" tag="li">网站栏目</router-link>
        </ul>
        <div class="content pull-left">
            <router-view></router-view>
        </div>
<script src="js/admin.js"></script>
</body>
</html>
