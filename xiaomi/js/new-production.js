var newproduction=new Vue({
    el:".hot-image",
    data:{
    },
    components: {
        businessList: {
            data: function () {
              return {
                  iconList: [
                      {iconClass: ["iconfont","icon-phone"], content: "选购手机",link:"http://www.mi.com/compare/"},
                      {iconClass: ["iconfont","icon-zhuyetuangou"], content: "企业团购",link:"https://qiye.mi.com/"},
                      {iconClass: ["iconfont","icon-fu"], content: "F码通道",link:"https://order.mi.com/f"},
                      {iconClass: ["iconfont","icon-qiaquan"], content: "米粉卡",link:"https://www.mi.com/mimobile/"},
                      {iconClass: ["iconfont","icon-shoujihao"], content: "以旧换新",link:"https://huanxin.mi.com/"},
                      {iconClass: ["iconfont","icon-huafei"], content: "话费充值",link:"https://www.mi.com/index.html"},
                  ],
                  flag:0,
              }
            },
                template: "<ul class='hot-image-ul' v-show=\"flag\" v-cloak='v-cloak'><div class='clear'></div><li v-for='item in iconList'><a :href='item.link' target='_blank'><i :class=\"item.iconClass\"></i><span>{{item.content}}</span></a></li></ul>",
             beforeMount:function () {
                 this.flag=1;
             }
            }
        }
});