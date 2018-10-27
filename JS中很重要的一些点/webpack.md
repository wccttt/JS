### webpack
- 它是一个打包，编译工具，可以让我们的页面上的代码全部打包成一个文件【包括js,css,html】,
- 也可以将ES6，ES7编译成浏览器可识别的ES5，
- 还可以为项目起一个服务【webpack-dev-server】实现页面热加载，
- 还可以作为跨域的一种方式【通过proxy】

```js
//下面是webpack.config.js文件的具体代码
const path=require('path');//node的内置模块，专门处理路径的问题
const webpack=require('webpack');//用于访问内置插件
const HtmlWebpackPlugin=require('html-webpack-plugin');//通过npm安装
module.exports={
    //入口
    entry:"",
    //出口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //loader将所有类型的文件，转化为应用程序可以直接应用的模块
    //loader又两个属性
    //text:，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
    //user:表示进行转换时，应该使用哪个 loader
    module:{
        rules:[
            {text:/\.less$/,user:"less-loader"},
            {text:/\.txt$/,user:"raw-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
        template:'./src/index.html'
        })
    ]
}

module.exports={
    //模式:production生产模式  development开发模式  
    mode:'production'
}
```
- 入口起点
   - 