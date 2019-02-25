function createNav(el) {
    function nav(el) {
        this.$el = document.getElementById(el);
        this.$list=this.$el.childNodes;
        this.$hasFengexian=false;
        this.$fengexian=this.$el.getElementsByTagName("span");
        this.$hasIconfont=false;
        this.$icon=this.$el.getElementsByTagName("span");
    }
    nav.prototype = {
        constructor: nav,
        data:[
            {name:"item",href:"#"},
            {name:"item1",href:"#"},
            {name:"item2",href:"#"},
            {name:"item3",href:"#"}
        ],
        style:{
            display:"inline-block",
            lineHeight:"80px",
            textAlign:"center",
        },
        extend:function(obj){
            for(var k in obj){
                this.style[k]=obj[k];
            }
        },
        list: function (arr,boo) {
            this.$hasFengexian=boo;
            var list=arr || this.data;
            list.forEach(function (e) {
                var tag=document.createElement("a");
                tag.href=e.href;
                // tag.className="li";
                var text=document.createTextNode(e.name);
                tag.appendChild(text);
                if(this.$hasFengexian){
                    var cut=document.createElement("span");
                    var txt=document.createTextNode("|");
                    cut.appendChild(txt);
                    this.$el.appendChild(tag);
                    this.$el.appendChild(cut);
                }
                else{
                    this.$el.appendChild(tag);
                }
            }.bind(this));
            if(this.$hasFengexian){
                var num=this.$fengexian.length;
                this.$fengexian[0].parentNode.removeChild(this.$fengexian[num-1]);
            }
            return this;
        },
        css:  function (obj,obj1) {
            this.extend(obj);
            for(var k in this.style){
                for(var e in this.$list){
                    if(e<this.$list.length) {
                        this.$list[e].style[k] = this.style[k];
                    }
                }
            };
            if(this.$hasFengexian){
                for(var key in obj1){
                    for(var val in this.$fengexian){
                        if(val<this.$fengexian.length){
                            this.$fengexian[val].style[key] = obj1[key];
                        }
                    }
                }
            }
            return this;
        },
        hover:function (css) {
            for(var k in this.$list){
                if(k<this.$list.length){
                    this.$list[k].onmouseover=function (e) {
                        e.currentTarget.className+=" "+css;
                    };
                    this.$list[k].onmouseout=function (e) {
                        e.currentTarget.className=e.currentTarget.className.replace(css,"");
                    }
                }
            }
            return this;
        },
        addClass:function (index,css) {
            console.log(typeof css=="string");
            if(typeof css==="string") {
                this.$list[index].className += " " + css;
                return this;
            }
            else{
                for(var key in css){
                    this.$list[index].style[key]=css[key];
                }
            }
            return this;
        },
        icon:function (index,code,boo,css) {
            if(boo) {
                    this.$list[index].innerHTML = "<span>" + code + "</span>" + this.$list[index].innerHTML;
                    this.iconCss.bind(this,index,css)();
            }
            else {
                this.$list[index].innerHTML = this.$list[index].innerHTML+"<span>" + code + "</span>";
                this.iconCss.bind(this,index,css)();
            }
            return this;
        },
        iconCss:function (index,css) {
            console.log(index);
            console.log(this.$list[index]);
            var icon=this.$list[index].getElementsByTagName("span");
            for(var value in css){
                for(var key in icon){
                    if(key<icon.length){
                        icon[key].style[value]=css[value];
                    }
                }
            }
        },
        // childLi:function (index,o,css) {
        //     var child=document.createElement("div");
        //         for(var k in o){
        //             var a=document.createElement("a");
        //             a.setAttribute("href",o[k]);
        //             a.style.whiteSpace="nowrap";
        //             for(var e in css){
        //                 a.style[e]=css[e];
        //             }
        //             var dat=document.createTextNode(k);
        //             a.appendChild(dat);
        //             child.appendChild(a);
        //         }
        //         this.$list[index].style.position="relative";
        //         this.$list[index].appendChild(child);
        //         child.style.position="absolute";
        //         child.style.top="100%";
        //     return this;
        // }
    };
        return new nav(el);
}



