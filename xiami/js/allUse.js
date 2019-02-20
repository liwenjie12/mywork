
let jiadianVm=new Vue({
    el:".main-shop-box",
    data:{
        dataAll:"",
        dataNew:"",
        dataPj:"",
        flag1:false,
        flag2:false,
        flag3:false,
    },
    created:function(){
        this.$http.get("data/jiaDian.json").then(function (result) {
            this.dataAll=result.body;
            this.flag1=true;
            jQuery("img.lazy").lazyload({effect: "fadeIn"});
        });
        this.$http.get("data/zhiNeng.json").then(function (result) {
            this.dataNew=result.body;
            this.flag2=true;

        });
        this.$http.get("data/peiJian.json").then(function (result) {
            this.dataPj=result.body;
            this.flag3=true;
            jQuery("img.lazy").lazyload({effect: "fadeIn"});
        });
        // jQuery.ajax({
        //     url: 'data/zhiNeng.json',
        //     async: false,
        //     success: function(result) {
        //         a=result;
        //     }
        // });
        // this.dataNew=a;
        // a=null;
        // jQuery.ajax({
        //     url: 'data/peiJian.json',
        //     async: false,
        //     success: function(result) {
        //         a=result;
        //     }
        // });
        // this.dataPj=a;
        // a=null;
    },
    mounted:function(){
        console.log(this.dataAll);
    },
    methods:{
        jiadianFun:function (val) {
            this.$refs["jiadian"].change(val);
        },
        zhinengFun:function (val) {
            this.$refs["zhineng"].change(val);
        },
        peijianFun:function (val) {
            this.$refs["peijian"].change(val);
        }
    }

})