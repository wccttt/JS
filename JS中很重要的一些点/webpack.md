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
    //入口，可以是单页面应用也可以是多页面输出
    //使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle
    entry:{
        pageOne: './src/pageOne/index.js',
            pageTwo: './src/pageTwo/index.js',
            pageThree: './src/pageThree/index.js'
    },
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
            {text:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {text:/\.less$/,use:"less-loader"},
            {text:/\.txt$/,use:"raw-loader"}
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
- plugin(自定义一个plugin需要包括以下几点)
```js
//官方的例子
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
```
   - 一个javascript命名函数
   - 插件函数的prototype上要有一个apply方法
   - 指定一个绑定到webpack自身的事件钩子
   - 注册一个回调函数来处理webpack实例中的指定数据
   - 处理完成后调用webpack提供的回调
- webpack在重要的生命周期节点上都提供了事件钩子，我们可以借此加入一些自定义的功能。我们来编写一个插件，直观地看看webpack中涉及的钩子：
```js

//check-compiler-hooks-plugin.js
const pluginName = 'checkCompilerHooksPlugin';
module.exports = class checkCompilerHooksPlugin {
    apply(compiler){
        //打印出entryOption执行完毕时Compiler暴露的钩子
        for(var hook of Object.keys(compiler.hooks)){
            console.log(hook);
        }
    }
}
```