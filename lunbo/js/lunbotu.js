function lunbo(el,previous,next) {
    this.$el=document.getElementById(el);
    this.$previous=document.getElementById(previous);
    this.$next=document.getElementById(next);
    this.$item=this.$el.getElementsByClassName("item");
    this.$ul=this.$el.getElementsByClassName("list-box")[0];
    this.$list=this.$el.getElementsByClassName("list");
    this.$this=this;
    this.index=0;
    this.flag=0;
    this.$next.onclick=function (e) {
      if(navigator.appName === "Microsoft Internet Explorer") {
          if (this.flag == 1) {
              return false;
          }
          this.flag=1;
      }
      e.preventDefault();
      e.stopPropagation();
      this.$this.fadeIn();

    }.bind(this);
    this.$previous.onclick=function (e) {
    if(navigator.appName === "Microsoft Internet Explorer") {
        if (this.flag == 1) {
            return false;
        }
        this.flag=1;
    }
    e.preventDefault();
    e.stopPropagation();
        this.previous();
    }.bind(this);
    this.$ul.onclick=function (event) {
    this.listClick(event.target);
    }.bind(this);
}
lunbo.prototype= {
    defaultTime:2000,//轮播默认间隔时间
    // default参数主要是最外部div的默认样式，可将自己设置的样式作为css函数的第一个参数传入，替换默认样式
    default:{
        width: "300px",
        height: "300px",
        border: "1px solid red"
    },
    // button参数主要是两个点击按钮的默认样式，可将自己设置的样式作为css函数的第二个参数传入，替换默认样式
    button:{
       width:"30px",
       height:"30px",
       borderRadius:"50%",
       backgroundColor:"rgba(68,68,68,0.5)",
        lineHeight:"30px",
        fontSize:"20px",
        fontWeight:"1000"
    },
    ul:{
        background:"#999",
        borderRadius: "10px",
        padding:"0px 10px"
    },
    list:{
        width:"10px",
        height:"10px",
        borderRadius: "50%",
    },
    //css函数主要用来完成用户自定义样式的处理，如果未传入任何参数，则采用默认样式
    css: function (val,value,value1,value2) {
        val = val || this.default;
        value=value ||this.button;
        value1=value1 ||this.ul;
        value2=value2 ||this.list;
        for (var item in val) {
            this.$el.style[item] = val[item];
            if (item === "width" || item === "height") {
                for (var e in this.$item) {
                    if (e < this.$item.length) {
                        this.$item[e].children[0].style[item] = val[item];
                    }
                }
            }
        }
        for (var item1 in value) {
            this.$previous.style[item1] = value[item1];
            this.$next.style[item1] = value[item1];
        }
        for(var item2 in value1){
                this.$ul.style[item2]=value1[item2];
        }
        var length=this.$list.length;
        for(var item3 in value2){
            for(var i=0;i<length;i++) {
                this.$list[i].style[item3] = value2[item3];
            }
        }
        return this;
    },
    //time函数主要用于开始图片轮播和两个按钮的显示与隐藏，可传入参数指定间隔时间,默认为2s
    time: function (num) {
        num=num || this.defaultTime;
        var $this = this.$this;
        var time = setInterval($this.fadeIn.bind($this), num);
        this.$el.onmouseenter = function () {
            $this.$previous.style.opacity="1";
            $this.$next.style.opacity="1";
            clearInterval(time);
        };
        this.$el.onmouseleave = function (event) {
            if(!event.relatedTarget){
                return false;
            }
            $this.$previous.style.opacity="0";
            $this.$next.style.opacity="0";
            time = setInterval($this.fadeIn.bind($this), num);
        };
        return this;
    },
    //fadeIn用来实现图片切换和前进按钮的功能
    fadeIn: function () {
        var color=" "+"color";
            for ( var item in this.$list){
                this.$list[item].className="list";
            }
        if(navigator.appName === "Microsoft Internet Explorer")
        {
            var opacity=parseInt(window.getComputedStyle(this.$item[this.index]).opacity);
            var num1=this.index;
            var time1=setInterval(function () {
                opacity-=0.02;
                if(opacity<=0){
                    opacity=0;
                    this.flag=0;
                    clearInterval(time1);
                }
                this.$item[num1].style.opacity = opacity+"";
            }.bind(this),20,num1);
            if (this.index == this.$item.length - 1) {
                this.index = -1;
            }
            this.index++;
            this.$list[this.index].className += color;
            var opacity1=parseInt(window.getComputedStyle(this.$item[this.index]).opacity);
            var num2=this.index;
            var time2=setInterval(function () {
                opacity1+=0.02;
                if(opacity1>=1){
                    opacity=1;
                    clearInterval(time2);
                }
                this.$item[num2].style.opacity = opacity1+"";
            }.bind(this),20,num2);
        }
        else {
            this.$item[this.index].style.opacity = 0;
            this.$item[this.index].style.transition = "opacity 1s ease";
            this.$item[this.index].style.webkitTransition = "opacity 1s ease";
            if (this.index == this.$item.length - 1) {
                this.index = -1;
            }
            this.index++;
            this.$list[this.index].className += color;
            this.$item[this.index].style.opacity = 1;
            this.$item[this.index].style.webkitTransition = "opacity 1s ease";
            this.$item[this.index].style.transition = "opacity 1s ease";
        }
    },
    //previous实现后退功能
    previous:function () {
        var color=" "+"color";
        for ( var item in this.$list){
            this.$list[item].className="list";
        }
        if(navigator.appName === "Microsoft Internet Explorer")
        {
            var opacity=parseInt(window.getComputedStyle(this.$item[this.index]).opacity);
            var num1=this.index;
            var time1=setInterval(function () {
                opacity-=0.02;
                if(opacity<=0){
                    opacity=0;
                    this.flag=0;
                    clearInterval(time1);
                }
                this.$item[num1].style.opacity = opacity+"";
                console.log(this.$item[num1].style.opacity);
            }.bind(this),20,num1);
            this.index--;
            if (this.index === - 1) {
                this.index =this.$item.length - 1;
            }
            this.$list[this.index].className += color;
            var opacity1=parseInt(window.getComputedStyle(this.$item[this.index]).opacity);
            var num2=this.index;
            var time2=setInterval(function () {
                opacity1+=0.02;
                if(opacity1>=1){
                    opacity=1;
                    clearInterval(time2);
                }
                this.$item[num2].style.opacity = opacity1+"";
            }.bind(this),20,num2);
        }
        else {
            this.$item[this.index].style.opacity = 0;
            this.$item[this.index].style.transition = "opacity 1s ease";
            this.$item[this.index].style.webkitTransition = "opacity 1s ease";
            this.index--;
            if (this.index === -1) {
                this.index = this.$item.length - 1;
            }
            this.$list[this.index].className += color;
            this.$item[this.index].style.opacity = 1;
            this.$item[this.index].style.transition = "opacity 1s ease";
        }
    },
    listClick:function (e) {
        if(e===this.$ul){
            return false;
        }
        for ( var item in e.parentNode.children){
            e.parentNode.children[item].className="list";
        }
        var color=" "+"color";
        var index;
        if(navigator.appName === "Microsoft Internet Explorer"){
            index=e.getAttribute("data-id");
            console.log(index);
        }
        else {
            index=e.dataset.id;
        }
        e.parentNode.children[index].className+=color;
        this.$item[this.index].style.opacity = 0;
        this.$item[this.index].style.transition= "opacity 1s ease";
        this.$item[index].style.opacity = 1;
        this.$item[index].style.transition= "opacity 1s ease";
        this.index=index;
    },
};
