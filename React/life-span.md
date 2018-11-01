### React的生命周期
- 在react实例生成的过程中会不断调用一些函数，这些函数是这个生命周期的钩子函数
- 每一个组件都有自己的生命周期
- 首先我们来看一个完整的组件该有哪些东西
```js

import React,{Component} from "react";
import propTypes from 'prop-types';
class  Demo extends Component{
    getDefaultProps(){
        
    };
    getInitialState(){
        
    }
   static defaultProps={
       //该对象会把属性放到了实例上
       //如果有值不会使用默认值，没有才使用默认值
   };
    constructor(){
        super();
    }
    componentWillMount(){
        //子组件将要挂载
        //setState在这里只执行同步的，
        
    }
    render(){
        //组件正在挂载
       
         
    }
    componentDidMount(){
        //组件挂载结束所用的钩子函数
        //经常在这里面操作DOM
        
    }
    componentWilReceiveProps(){
        //属性props改变触发
        //第一次接收父组件传过来的数据时不触发，之后只要父组件状态发生变化就会触发该钩子函数
    }
    shouldComponentUpdate(nextProps,nextState){
        //state数据发生改变触发的钩子函数,如果该函数返回false那么不再调用下面的钩子函数，返回true继续调用下面的钩子函数
        //nextProps 更新之后的属性
        //nextState 更新之后的状态
        //可以在这里处理更新后的数据是不是符合要求
        return true;
        
    }
    componentWillUpdate(){
        //组件将要更新的时候触发，在render的前面触发和写现在哪里没有关系
        
    }
    componentDidUpdate(){
        //在render之后执行
        //所有的子组件更新完成之后才会触发父组件身上的钩子函数
        
        
    }
    componentWillUnmount(){
        //卸载的啥时候触发的钩子函数
    }
    
}

export default Demo;


```

- 组件初始化
   - defaultProps
   - constructor
   - compnentWillMount
   - render
   - componentDidMount
- 数据更新
   - shouldComponentUpdate
   - componentWillUpdate
   - render
   - componentDidUpdate

