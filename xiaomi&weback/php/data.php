<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/15
 * Time: 15:58
 */
class admin{
    function __construct(){
        $this->ip="127.0.0.1";
        $this->user="liwenjie12";
        $this->password="m19961217";
        $this->mysql=new mysqli($this->ip,$this->user,$this->password,"liwenjie12");
        $this->check="SELECT * FROM xiaomi";
        $this->pic=@$_POST["pic"];
        header('Cache-Control:no-cache,must-revalidate');
        header('Pragma:no-cache');
    }
    //入口函数
    public function init(){
        switch(@$_POST["admin"]){
            case "all":$this->all();break;
            case "add":$this->add();break;
            case "img":$this->img();break;
            case "imgchange":$this->change();break;
            case "delectimg":$this->shanchu();break;
        }
    }
    //查询所有数据函数
    public function all(){
        $this->mysql->query('SET NAMES UTF8');
        $result=$this->mysql->query($this->check);
        $response=array();
        if($result->num_rows>0){
            while($rows=$result->fetch_assoc()){
                array_push($response,$rows);
            }
        }
        $response=json_encode($response);
        echo $response;
    }
    //对添加数据进行处理的函数
    public function handel(){
        $x=["title","content","newprice","oldprice","biaoqian","class","description"];
        for($i=0;$i<5;$i++){
            $_POST[$x[$i]]=trim($_POST[$x[$i]]);
        }
    }
    //保存图片函数
    public function upload(){
       if($_FILES["pic"]["size"]<2048000){
           if(file_exists("../upload/".$_FILES["pic"]["name"])){
               $this->pic="./upload/".$_FILES["pic"]["name"];
           }
           else{
               move_uploaded_file($_FILES["pic"]["tmp_name"],"../upload/".$_FILES["pic"]["name"]);
               $this->pic="./upload/".$_FILES["pic"]["name"];
           }
       }
       else{
           die("添加失败:图片大小超过2M");
       }
    }
    //数据添加入数据库
    public function add(){
        $this->handel();
        $this->upload();
        $title=@$_POST["title"];
        $content=@$_POST["content"];
        $newprice=@$_POST["newprice"];
        $oldprice=@$_POST["oldprice"];
        $des=@$_POST["description"];
        $biaoqian=@$_POST["biaoqian"];
        $class=@$_POST["class"];
        $insert="INSERT INTO xiaomi(title,content,newprice,oldprice,biaoqian,pic,description,class)
            VALUES('$title','$content','$newprice','$oldprice','$biaoqian','$this->pic','$des','$class')";
        $this->mysql->query("SET NAMES UTF8");
        $msg=$this->mysql->query($insert);
        if($msg){
            echo "添加成功";
        }
        else{
            echo "添加失败";
        }
    }
    public function img(){
        $this->upload();
        if(empty($_POST["id"]) || empty($_POST["link"])){
            die("添加失败");
        }
        $file=file_get_contents("../data/imageShow.json");
        $result=json_decode($file);
        $data=new stdClass();
        $data->id=intval(@$_POST["id"]);
        $data->link=@$_POST["link"];
        $data->path=$this->pic;
        array_push($result,$data);
        file_put_contents("../data/imageShow.json",json_encode($result));
        echo "添加成功";
    }
    public function change(){
        if(empty($_POST["id"]) || empty($_POST["link"]) || empty($_POST["pic"])){
            die("修改失败");
        }
        else{
            $file=file_get_contents("../data/imageShow.json");
            $result=json_decode($file);
            foreach($result as $key=>$value){
                if($value->id==$_POST["id"]){
                    $value->path=$_POST["pic"];
                    $value->link=$_POST["link"];
                }
            }
            file_put_contents("../data/imageShow.json",json_encode($result));
            echo "修改成功";
        }
    }
    public function shanchu(){
        if(empty($_POST["id"])){
            echo "删除失败";
        }
        else{
            $file=file_get_contents("../data/imageShow.json");
            $result=json_decode($file);
            echo $_POST["id"];
            var_dump($_POST["id"]);
            foreach($result as $key=>$value){
                if($value->id==$_POST["id"]){
                    echo $key;
                    array_splice($result,--$value->id,1);
                }
                if($value->id>intval($_POST["id"])){
                    $value->id--;
                }
            }
            file_put_contents("../data/imageShow.json",json_encode($result));
            echo "删除成功";

        }
    }
}
$admin=new admin();
$admin->init();
ini_set("display_errors","On");
error_reporting(E_ALL);
?>