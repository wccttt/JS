setTimeout(() => {


    console.log(200);
}, 0);

new Promise((res, rej) => {
    setTimeout(() => {
        // res(100);
    }, 0)
}).then(res => {
    console.log(res);
});


async function fn() {
    await function () {
        console.log(300);
    };
    return 100;
}
fn().then(res=>{
    console.log(res);
});