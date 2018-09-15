//创建一个事件池
//按照顺序将事件依次添加到事件池中
//只要指令触发，事件池中所有方法依次执行

//on 将方法添加到事件池当中
//off 判断方法是否存在事件池中，如果存在就移除
//fire 将事件池当中的方法，按照顺序依次执行

//第一版基础版
function on(ele,type,fn) {
    ele[type]=ele[type]||[];
    if(ele[type].includes(fn)){
        ele[type].push(fn);

    }
}
function off(ele,type,fn) {
    if(ele[type]&&ele[type].includes(fn)){
        var oIndex=ele[type].indexOf(fn);
        ele[type].splice(oIndex,1);
    }

}
function fire(ele,type) {
    if(ele[type] instanceof Array){
        ele[typr].forEach((item)=>{
            if(typeof item =='function'){
                item();
            }
        })
    }
}