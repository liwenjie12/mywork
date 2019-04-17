<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/30
 * Time: 13:49
 */
class app{
    public function __construct()
    {
        $this->mysql=new mysqli("127.0.0.1","liwenjie12","m19961217","liwenjie12");
        if(!$this->mysql){
            die("数据库连接失败");
        }
        $this->mysql->query("SET NAMES UTF8");
        header("content-type","application/json");
    }
    public function init(){
        $this->get();
        switch ($this->word){
            case "id":$this->detail();break;
            case "keyword":$this->search();break;
        }
    }
    public function get(){
        if(is_array($_GET)&&count($_GET)>0){
            if(isset($_GET["id"])){
                $this->word="id";
            }
            elseif (isset($_GET["keyword"])){
                $this->word="keyword";
            }
        }
        else{
            die("未获取到数据");
        }
    }
    public function detail(){
        $id=$_GET["id"];
        $check="SELECT * FROM xiaomi where id=$id";
        $result=$this->mysql->query($check);
        if($result->num_rows>0){
            while($row=$result->fetch_assoc()){
                echo(json_encode(array($row)));
            }
        }
    }
    public function search(){
        $keyword=$_GET["keyword"];
        $check="SELECT * FROM xiaomi where title like '%$keyword%'";
        $result=$this->mysql->query($check);
        if($result->num_rows>0){
            $response=array();
            while($row=$result->fetch_assoc()){
                array_push($response,$row);
            }
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }
    }
}
$app=new app;
$app->init();
?>