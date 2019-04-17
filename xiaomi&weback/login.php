<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/15
 * Time: 11:22
 */
if(!empty($_POST["user"]) && !empty($_POST["pswd"])){
    session_start();
    $_SESSION["admin"]=$_POST["user"];
    $data=@$_POST["user"];
    $ip="127.0.0.1";
    $user="liwenjie12";
    $pswd="m19961217";
    $status=rand(1,10000);
    $_SESSION["status"]=$status;
    $mysql=new mysqli($ip,$user,$pswd,"liwenjie12");
    if($mysql){
       $check="SELECT * FROM admin WHERE username='$data'";
       $result=$mysql->query("SET NAMES UTF8");
       $result=$mysql->query($check);
       if($result->num_rows===1){
           while($rows=$result->fetch_assoc()){
               if($_POST["pswd"]===$rows['password']){
                   $update="UPDATE admin SET status=$status WHERE username='$data'";
                   $mysql->query($update);
                   header('location:admin.php');
               }
               else{
                   $error="密码输入错误";
               }
           }
       }
       else{
           $error="用户名输入错误";
       }
    }
    else{
        die("数据库连接失败，请稍后访问");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>网站后台管理登录</title>
    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./style/login.css" />
</head>
<body>
<div class="box">
    <h3 class="text-center">后台管理系统</h3>
    <div>
        <form role="form" method="post">
            <div class="form-group">
                <label for="user">用户名:</label>
                <input type="text" name="user" id="user" class="form-control">
            </div>
            <div class="form-group">
                <label for="pswd">密码:</label>
                <input type="password" name="pswd" id="pswd" class="form-control">
            </div>
            <button class="btn btn-primary btn-block">登录</button>
            <p><?php echo @$error ?></p>
        </form>
    </div>
</div>
</body>
</html>
