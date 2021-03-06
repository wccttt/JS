### React的生命周期
- 在react实例生成的过程中会不断调用一些函数，这些函数是这个生命周期的钩子函数
- 每一个组件都有自己的生命周期
- 首先我们来看一个完整的组件该有哪些东西
```js

import React,{Component} from "react";
import propTypes from 'prop-types';
class  Demo extends Component{
    getDefaultProps(){
        //设置默认的props，也可以用dufaultProps设置组件的默认属性.
    };
    getInitialState(){
        //在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
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
        //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
        
    }
    render(){
        //react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了
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
        //nextProps 更新之后的属性
        //nextState 更新之后的状态
        //可以在这里处理更新后的数据是不是符合要求
        //react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
        return true;
        
    }
    componentWillUpdate(){
        //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
        
        
    }
    componentDidUpdate(){
        //在render之后执行
      // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
        
        
    }
    componentWillUnmount(){
        //卸载的啥时候触发的钩子函数
        //组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
        //那怎么卸载呢，看下面
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
- 组件怎么卸载
```js
ReactDOM.unmountComponentAtNode(document.querySelector("#root"));   
```

