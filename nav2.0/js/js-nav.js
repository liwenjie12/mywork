function createNav(el) {
    function nav(el) {
        this.$el = document.getElementById(el);
        this.$list=this.$el.childNodes;
        this.$hasFengexian=false;
        this.$fengexian=this.$el.getElementsByTagName("span");
        this.$hasIconfont=false;
        this.$icon=this.$el.getElementsByTagName("span");
        console.log(this.$list);
    }
    nav.prototype = {
        constructor: nav,
        data:[
            {name:"首页",href:"#"},
            {name:"榜单",href:"#"},
            {name:"下载客户端",href:"#"},
            {name:"更多",href:"#",child:{"电台":"#","MV":"#","歌单":"#","歌手":"#"}}
        ],
        style:{
           box:'nav-main-box',
            tag:"nav-parent-list",
            fengexian:"nav-parent-fenge",
            parentHover:"nav-parent-hover",
            icon:"nav-parent-icon",
            child:"nav-child-box",
            childTag:"nav-child-tag",
            childHover:"nav-child-hover",
            childShow:"nav-child-show"
        },
        list: function (arr,boo,code) {
            this.$hasFengexian=boo;
            var list=arr || this.data;
            list.forEach(function (e) {
                var tag=document.createElement("a");
                tag.href=e.href;
                var text=document.createTextNode(e.name);
                tag.appendChild(text);
                if(e.child){
                    var child=document.createElement("div");
                    child.style.position="absolute";
                    for(var k in e.child){
                        var a=document.createElement("a");
                        a.setAttribute("href",e.child[k]);
                        a.style.whiteSpace="nowrap";
                        var dat=document.createTextNode(k);
                        a.appendChild(dat);
                        child.appendChild(a);
                    }
                    tag.appendChild(child);
                }
                if(this.$hasFengexian){
                    var cut=document.createElement("span");
                    var txt=document.createTextNode(code);
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
        box:function(css){
            var css=css || this.style.box;
            var str=this.$el.classList;
            str.add(css);
            return this;
        },
        tag:  function (a,f) {
            var a=a || this.style.tag;
            this.$list.forEach(function (e) {
                e.classList.add(a);
            })
            if(this.$hasFengexian){
            var f=f || this.style.fengexian;
            console.log(this.$fengexian);
            for(var i=0;i<this.$fengexian.length;i++){
                for(var key in f){
                    this.$fengexian[i].style[key]=f[key];
                }
            }
            }
            return this;
        },
        parentHover:function (css,animate) {
            var animate=animate || this.style.childShow;
            var css=css || this.style.parentHover;
            for(var k in this.$list){
                if(k<this.$list.length){
                    this.$list[k].onmouseover=function (e) {
                        e.currentTarget.classList.add(css);
                        e.currentTarget.childNodes.forEach(function (f) {
                            if(f.nodeName==="DIV"){
                                f.classList.add(animate);
                            }
                        })
                    };
                    this.$list[k].onmouseout=function (e) {
                       e.currentTarget.classList.remove(css);
                        e.currentTarget.childNodes.forEach(function (f) {
                            if(f.nodeName==="DIV"){
                                f.classList.remove(animate);
                            }
                        })
                    }
                }
            }
            return this;
        },
        css:function (index,css) {
            if(css.constructor===Object){
                for(var key in css){
                    this.$list[index].style[key]=css[key]
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
            var css=css || this.style.icon;
            var icon=this.$list[index].getElementsByTagName("span");
            for(var i=0;i<icon.length;i++){
                icon[i].classList.add(css);
            }
        },
        childTag:function (box,tag,hover) {
            var box=box || this.style.child;
            var tag=tag || this.style.childTag;
            var hover=hover ||this.style.childHover;
            for(var i=0;i<this.$list.length;i++){
                this.$list[i].childNodes.forEach(function (e) {
                    if(e.nodeName==="DIV"){
                        e.classList.add(box);
                        e.childNodes.forEach(function (f) {
                            f.classList.add(tag);
                            f.onmouseover=function (e) {
                                e.currentTarget.classList.add(hover);
                            };
                            f.onmouseout=function (e) {
                                e.currentTarget.classList.remove(hover);
                            }
                        })
                    };
                });
            }
        },
    };
        return new nav(el);
}



