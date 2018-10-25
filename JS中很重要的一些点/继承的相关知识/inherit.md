### 要了解继承首先要了解一下原型及原型链
- JS中的原型指的是什么？(三句话)
  - 原型:任何一个函数都有一个prototype属性,这个属性就是原型,而且这个属性是一个对象,此时浏览器就会给他开辟开一个堆内存去存储(存储所有公有属性和方法)
  - 并且浏览器默认开辟的这个堆内存中有个天生自带的属性叫constructor,这个constructor属性指向当前函数本身
  - 只要是对象都会有一个天生自带的属性叫__proto__,指向所属类的原型
```js
let f=new FF();
f.__proto__=FF.prototype;
```  
- 原型链：当一个对象获取属性值的时候,遇到属性先看是不是自己的私有属性,如果私有的没有就通过__proto__往所属类的原型(prototype)上去找,没有继续通过__proto__找,一直找到Object类的原型,还没有就是undefined,这个查找过程就是原型链
  - 具体解释以下就是:原型是一个对象,浏览器默认开辟的堆内存中有constructor但是如果你给prototype重新赋值一个对象,此时constructor就丢失了,我们可以手动加上constructor值为当前函数
  - __proto__是浏览器加上,存在兼容问题,IE的问题
```js
function FF() {
        this.x="xx";
    }
    FF.prototype={
        getX:function () {},
        constructor:FF
    };


Function.__proto__=Function.protoype;//->true
Function.__proto__.__proto__=Object.prototype;//->true
Function.prototype.__proto__=Object.prototype;//->true

```
  - 原型指向
```js

 function sum() {
        //  强制改变arguments的原型指向,这样arguments就能使用Array上的方法了
        arguments.__proto__=Array.prototype;
        arguments.push(10);
        //arguments.__proto__-->Array.prototype-->push()
        console.log(arguments);
    }
```  
  - 5.数组上的原型扩展
```js
    Array.prototype.remove=function(){
    
    }
```  
  - 6.数组原型上的方法重写
```js

Array.prototype.pop=function () {
        //this :当前实例
        var num=this[this.length-1];
        this.length--;
        return num;
    };
Array.prototype.push=function () {
        for (var i=0;i<arguments.length;i++){
            this[this.length]=arguments[i]
        }
        return this.length;
    };
Array.prototype.shift=function () {
        var num=this[0];
        for(var i=1;i<this.length;i++){
            this[i-1]=this[i];
        }
        this.length--;
        return num;
    };
Array.prototype.unshift=function () {
        var ary=[...arguments,...this];
        this.length=ary.length;
        for(var i=0;i<ary.length;i++){
            this[i]=ary[i];
        }
        return ary.length;
    };
```  