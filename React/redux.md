### Redux:统一数据管理
- redux不仅仅可以在react项目中使用，只要涉及到较为复杂的数据管理的时候都可以使用
- 很简单的项目不需要使用redux来管理数据，但是当项目复杂度增加，就需要讲数据状态统一管理

```js
//readux的第一个重要模块
function createStore(reducer) {
    let state;
    //获取状态的方法
    //克隆对象
    let getState=()=>JSON.parse(JSON.stringify(state));
    //订阅的函数
    let listeners=[];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter((item,index)=>  item!==fn)
        }
    }
    function dispatch(action) {
        state=reducer(state,action);
        //发布订阅好的方法
        listeners.forEach((item,index)=>{
            item();
        })
      
    }
    dispatch({});
    
    return{
        getState,
        dispatch,
        subscribe
    }
    
  
}
//上面的函数是react写好的模块，使用的方式在下面

//实现一个简单的count方法，实现加减的效果
    let count = document.getElementById('count');
    let add = document.getElementById('add');
    let min = document.getElementById('min');
    const ADD_COUNT = "ADD_COUNT";
    const MIN_COUNT = "MIN_COUNT";
    let initState = {num: 0};

    function reducer(state = initState, action) {

        switch (action.type) {
            case ADD_COUNT:
                return {num: state.num + action.count};
            case MIN_COUNT:
                return {num: state.num - action.count}
        }

        return state;

    }

    let store = createStore(reducer);

    function renderApp() {
        count.innerHTML = store.getState().num;
    }

    renderApp();
    store.subscribe(renderApp);
    add.onclick = function () {
        store.dispatch({type: ADD_COUNT, count: 1})
    };
    min.onclick = function () {
        store.dispatch({type: MIN_COUNT, count: 1})
    }

```