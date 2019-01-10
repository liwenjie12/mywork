var phoneList=new Vue({
    el: "#phone",
    data: {
    },
    components: {
        iphoneList: {
            data: function () {
                return {
                    shanList: [
                        {
                            path: "image/phone/phone-list-1.jpg",
                            name: "小米8&nbsp青春版&nbsp4GB+64GB",
                            content: "潮流镜面渐变色&nbsp，&nbsp2400万自拍旗舰",
                            newprice: "1399元&nbsp",
                            oldprice: "",
                            biaoqian: "新品",
                            style: {backgroundColor: "#83c44e"}
                        },
                        {
                            path: "image/phone/phone-list-2.png",
                            name: "小米8&nbsp屏幕指纹版&nbsp8GB+128GB",
                            content: "全球首款压感屏幕指纹&nbsp，&nbsp双频GPS超精准定位",
                            newprice: "3599元&nbsp",
                            oldprice: "",
                            biaoqian: "新品",
                            style: {backgroundColor: "#83c44e"}
                        },
                        {
                            path: "image/phone/phone-list-3.jpg",
                            name: "小米8 SE 6GB+64GB",
                            content: "AI 超感光双摄，三星 AMOLED 屏幕",
                            newprice: "1699元&nbsp",
                            oldprice: "1999元",
                            biaoqian: "减300元",
                            style: {backgroundColor: "#e53935"}
                        },
                        {
                            path: "image/phone/phone-list-4.jpg",
                            name: "小米MIX 2S 8GB+256GB",
                            content: "骁龙845 年度旗舰处理器，艺术品般陶瓷机身",
                            newprice: "3399元&nbsp",
                            oldprice: "3999元",
                            biaoqian: "减600元",
                            style: {backgroundColor: "#e53935"}
                        },
                        {
                            path: "image/phone/phone-list-5.jpg",
                            name: "小米6X 6GB+128GB",
                            content: "轻薄美观的拍照手机",
                            newprice: "1599元&nbsp",
                            oldprice: "1999元",
                            biaoqian: "享8折",
                            style: {backgroundColor: "#e53935"}
                        },
                        {
                            path: "image/phone/phone-list-6.jpg",
                            name: "小米Max 3 4GB+64GB",
                            content: "",
                            newprice: "1599元&nbsp",
                            oldprice: "1699元",
                            biaoqian: "减100元",
                            style: {backgroundColor: "#e53935"}
                        },
                        {
                            path: "image/phone/phone-list-7.jpg",
                            name: "红米6 Pro 3GB+32GB",
                            content: "",
                            newprice: "869元&nbsp",
                            oldprice: "999元",
                            biaoqian: "减130元",
                            style: {backgroundColor: "#e53935"}
                        },
                        {
                            path: "image/phone/phone-list-8.jpg",
                            name: "红米6A 2GB+16GB",
                            content: "",
                            newprice: "569元&nbsp",
                            oldprice: "599元",
                            biaoqian: "减30元",
                            style: {backgroundColor: "#e53935"}
                        }
                    ],
                }
            },
            template: "<div class='phone-list-box'><ul id='phone-alllist'><li v-for='item in shanList' class='main-li'><img :src='item.path' class='small-img'/><p v-html='item.name' class='shangou-name'></p><p v-html='item.content' class='shangou-content'></p><p class='shangou-price'><span v-html='item.newprice'></span><span v-html='item.oldprice'></span></p><p class='shangou-biaoqian' :style='item.style' v-html='item.biaoqian'></p></li><div class='clear'></div></ul></div>"
        }
    }
})