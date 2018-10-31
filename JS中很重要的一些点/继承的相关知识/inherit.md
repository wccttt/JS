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
### 内置类和instanceof
   - 实例创建主要有字面量创建和构造函数方式创建
   - 提一下构造函数创建函数的方式
```js
var fn=new Function("参数","函数体");

```   
   - 注意:对于基本数据类型使用字面量创建方式和构造函数创建方式结果不一样,字面量创建方式结果为一个值,构造函数创建方式结果将其变成一个对象，对于引用数据类型两种创建方式没有区别
   - 那么instanceof：判断实例是不是当前类的实例
   - 语法:实例 instanceof 类
### 私有属性和狗有属性
   - 实例既可以通过构造函数中this.属性的方式得到私有属性,
     还可以通过__proto__拿到所属类的原型上的公有属性
   - 问题来了怎么判断共有方法和私有方法？
      - 1.in:共有属性和私有属性都可以判断
      - 2.hasOwnProperty:判断是不是自己的私有属性
      - 3.判断共有属性：有in和hasOwnProerty两者同时判断
      - 4.xx.constructor.name:用来检测xx的数据类型 
   - 问题又来了(...) 封装一个方法不是更好？
```js
//封装一个方法，检测当前属性值是否是对象的一个公有属性
          function hasPubProperty (obj,key){
              // 判断当前属性名是否是对象的一个属性
              if(key in obj){
                  // 返回值是true 你是我的属性，不确定公有或者私有
                  if(obj.hasOwnProperty(key)){
                      // 返回true
                      // console.log('私有属性')
                      return false
                  }else{
                      // console.log('公有属性')
                      return true
                  }
              }else{
                  //console.log('sorry 你不是我的属性')
                  return false
              }
              return key in obj && !obj.hasOwnProperty(key)
          }


```     
### ES6里面的类(class)

### 终于到正文了，我们常用到及继承的几种方式

   