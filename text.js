let myPromise=require('./Promise');
//console.log(myPromise);
let p1=new myPromise((resolve,reject)=>{
   
    setTimeout(()=>{
       Math.random()>0.5?resolve(100):reject(200);
        //console.log(100);
    })
})
let p2=new myPromise((res,rej)=>{
    setTimeout(()=>{
        res(100);
    },0);
})
myPromise.all([p1,p2]).then(res=>{
    console.log(res);
},rej=>{
    console.log(rej);
})