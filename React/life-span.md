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
    }
    shouldComponentUpdate(){
        //状态state发生改变触发的钩子函数
        
    }
    componentWillUpdate(){
        
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        //卸载的啥时候触发的钩子函数
    }
    
}

export default Demo;


```

