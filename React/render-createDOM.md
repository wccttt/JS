### 虚拟DOM和render函数
- 与Vue不同的是React是着重构建UI视图层，其中第一个重要的原理就是虚拟DOM和render函数的渲染
- React创造了JSX这种特殊的JavaScript对象格式，可以在其中同时写入JS代码和html标签
- React框架的安装和使用方法也及其简单
   - 安装方法(保证网络畅通，由很多时候安装错误是网络不好为而导致的文件丢失)
```js
///- npm install -g create-react-app
//- create-react-app    'my-react'(必须英文)
//- cd my-react
//- npm start/yarn start
```   
   - 使用方法
      - 将src的多余文件都删掉，保留index.js文件，新建components文件夹，在里面写组件
      - 在文件中引入react文件，就可以在里面写代码了
      - 由于我们主要写的时JSX和JS代码，JS前面已经写了，这里主要介绍JSX语法的问题
          - 1.JSX元素不是一个真实的DOM；JSX元素是一个虚拟的DOM元素；是一个对象数据类型的；
          - 2.JSX元素必须被一个闭合的标签包裹起来；
          - 3.JSX元素中采用{}进行获取值的操作；
          - 4.JSX 元素取值时，{}不能放对象；但是可以放数组;如果放的是数组的话；会把数组每一项转换成字符串进行连接，一起放进元素中；
          - 5.如果小括号中的值是true\false\null\undefined;那么这些值将不再显示；
          - 6.JSX中的{} 支持三元表达式；
          - 7.支持函数的执行结果；
          - 8.style 不支持字符串的类型；需要转成{{}}；
          - 9.如果是class===> className   for===> htmlFo
- 重点来了，我们来简单实现一下React里的render函数

```js
// 定义一Element的类；
class Element{
    constructor(type,attr,children){
        // 将函数createElement传过来的实参，都放到当前实例私有属性上；
        this.type = type;
        this.attr = attr;
        this.children = children;
    }
    ren(){
        // 将虚拟的DOM转真实的DOM；this===> element的实例
        // this.attr:{a:1,b:2}
        let  ele = document.createElement(this.type);
        for(let key in this.attr){
            // 遍历attr,将属性设置到行间属性上；
            let val=key;

            if(key==="className"){
                val="class";
            }
            if(key==="htmlFor"){
                val="for"
            }
            ele.setAttribute(val,this.attr[key])
        }
        this.children.forEach((item,index)=>{
            // 如果该数组成员是一个虚拟的DOM元素；需要继续调用ren方法；
            let newEle = item instanceof Element ?item.ren():document.createTextNode(item);
            ele.appendChild(newEle);
        });
        return ele;
    }
}
let React = {
    createElement(type,attr,...children){// 把第三个以及之后的参数都放进children的数组中；
        return new Element(type,attr,children)
    }
};
let ReactDOM = {
    render(element,container){
        // element : 虚拟DOM；
        // appendChild : 必须接受一个真实的DOM节点；
        // 需要将虚拟的DOM元素转换成真实的DOM元素；
        container.appendChild(element.ren());
    }
};

let a = React.createElement("div",{a:1,b:2},"前端工程师",React.createElement("span",null,6666));
ReactDOM.render(a,window.root);

```   
    