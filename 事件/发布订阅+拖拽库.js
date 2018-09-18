function Callbacks() {};
Callbacks.prototype.has=function (type,fn) {
    return !!this[type]&&this[type].includes(fn);
};
Callbacks.prototype.add=function (type,...arg) {
    if(!this[type]){
        //如果没有这个类型先给实例增加一个这个类型的数组,过滤掉arg中的非函数,将arg直接赋值给这个类型
        this[type]=arg.filter(item=>typeof item=="function");
    }else {
        arg.forEach((item)=>{
            if(typeof item=="function"&&!this[type].includes(item)){
                this[type].push(item);
            }
        })
    }
    return this;
};
Callbacks.prototype.remove=function (type,...arg) {
    //先判断有没有这个类型的数组,然后再去判断arg中每一项
    if(this[type]){
        arg.forEach((item)=>{
            if(this.has(type,item)){
                this[type][this[type].indexOf(item)]=null;
            }
        })
    }
    return this
};
Callbacks.prototype.fire=function (type,...arg) {
    if(this[type]){
      for(let i=0;i<this[type].length;i++){
          var cur=this[type][i];
          if(typeof cur=='function'){
              cur.apply(this,arg);
          }else{
              this[type].splice(i,1);
              i--;
          }
      }


    }
    return this
};
Object.assign(Drag.prototype,Callbacks.prototype);
function Drag(ele) {
    this.ele=ele;
    let down=(e)=>{
        this.x=e.clientX-this.ele.offsetLeft;
        this.y=e.clientY-this.ele.offsetTop;
        document.addEventListener("mousemove",move);
        document.addEventListener("mouseup",up);
        this.fire("down",e);
    };
    let move=(e)=>{
        let minL=0,minT=0;
        let maxL=(document.documentElement.clientWidth||document.body.clientWidth)-this.ele.offsetWidth;
        let maxT=(document.documentElement.clientHeight||document.body.clientHeight)-this.ele.offsetHeight;
        let L=e.clientX-this.x;
        let T=e.clientY-this.y;
        L=L<minL?minL:L>maxL?maxL:L;
        T=T<minT?minT:T>maxT?maxT:T;
        this.ele.style.left=L+'px';
        this.ele.style.top=T+'px';
        e.preventDefault();
        this.fire("move",e);
    };
    let up=(e)=>{
        document.removeEventListener("mousemove",move);
        document.removeEventListener("mouseup",up);
        this.fire("up",e);
    };
    this.ele.addEventListener("mousedown",down);
}