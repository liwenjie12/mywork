<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/10
 * Time: 16:20
 */
//    $ip="119.29.193.147";
//    $user="m19961217";
//    $password="m19961217";
//    $mysql=new mysqli($ip,$user,$password,"m19961217");
//    $mysql->query('SET NAMES UTF8');
//    if(!$mysql){
//        echo "数据库连接失败";
//    }
//    else{
//        $res=array("mix"=>array(),"redmi"=>array(),"tv"=>array(),"pc"=>array(),"jiadian"=>array(),"new"=>array(),"router"=>array(),"zhineng"=>array());
//        $check="SELECT * FROM xiaomi";
//        $result=$mysql->query($check);
//        if($result->num_rows>0){
//            while($rows=$result->fetch_assoc()){
//                array_push($res[$rows["class"]],$rows);
//            }
//        }
//        else{
//            echo "获取失败";
//        }
//    }
//        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    class data{
        function __construct(){
            $this->ip="127.0.0.1";
            $this->user="liwenjie12";
            $this->password="m19961217";
            $this->mysql=new mysqli($this->ip,$this->user,$this->password,"liwenjie12");
            $this->check="SELECT * FROM xiaomi";
        }
        public function get($data){
            $this->set($data);
            $response=array();
           $this->mysql->query('SET NAMES UTF8') ;
           $resource=$this->mysql->query($this->check);
           if($resource->num_rows>0){
               while($rows=$resource->fetch_assoc()){
                   if(!array_key_exists($rows["class"],$response)) {
                       $response=array_merge($response, array($rows["class"] => array()));
                   }
                   array_push($response[$rows["class"]],$rows);
               }
           }
           else{
               echo "失败";
           }
           $response=json_encode($response);
           echo $response;
        }
        public function set($data){
            switch($data){
                case "nav":$this->check.=" "."WHERE class in ('mix','redmi','tv','pc','jiadian','new','router','zhineng')";break;
                case "shangou":$this->check.=" "."WHERE class='shangou'";break;
                case "phone": $this->check.=" "."WHERE class='phone'";break;
                case "jiadian":$this->check.=" "."WHERE class in ('tv','pc')";break;
                case "zhineng":$this->check.=" "."WHERE class in ('router','out')";break;
                case "peijian":$this->check.=" "."WHERE class in ('ear','power')";break;
            }
        }
    }
    $mysql=new data();
    $mysql->get(@$_GET["module"]);
?>