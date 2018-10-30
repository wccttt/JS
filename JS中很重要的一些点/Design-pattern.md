#### JS中的设计模式
- 什么叫做设计模式？
  - 设计模式
- 单例模式/高级单例模式(函数) 
```js
//一个对象我们还可以叫他叫做命名空间
  //  使用单例模式有一个好处:使用this来代替这个命名空间(对象)
    //在这个命名空间中的函数之间相互调用的时候使用this.函数()
    //有一些函数不需要返回值,此时我们会将当前命名空间返回,就是return this,这样可以实现链式写法
    //项目中使用的一般是高级单例模式，不污染全局变量，将项目或者页面分割成几个单元进行开发，速度快，方便最后的整合
   var Page1Render=(function () {
    //获取当前模块
    var page1=document.getElementById("page1");
    var timer=null;
    return {
        //init:让当前模块显示
        init(){
            page1.style.display="block";
            return this;
        },
        //改变h1内容
        change(){
            timer=window.setInterval(function () {
                //在原来的基础上加一,++会强制转数字
                page1.children[0].innerHTML++;
                //当加到10的时候清除定时器
                if(parseInt(page1.children[0].innerHTML)>2){
                    window.clearInterval(timer);
                    //自己消失
                    page1.style.display="none";
                    //让模块2显示
                    Page2Render.init();
                }
            },1000);
            return this;
        }

    }
})();
Page1Render.init().change();
``` 
- 工厂模式(函数)

- 构造函数模式:自定义类/编写插件(后面的文章有对他的详细解释和案例)
```js
//一般将名字变成大写
 function FF() {
        console.log(this);
        this.a=1;
        this.b=10;
        this.c=function () {
            console.log(1);
        }
    }
//1.当一个函数作为构造函数执行，此时函数的this就变成当前类的实例
//2.通过this.属性的方式给当前实例增加私有属性
//3.默认将当前实例this返回(我们自己不用再写return this)
//4.实例都是对象{属性名:属性值}
//5.返回值:如果return基本数据类型不会影响实例this的结果,如果return一个引用数据类型就会影响实例的结果,此时实例就变成了你return的东西了

```

  