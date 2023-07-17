let redux = require("redux")
// define state
// action
// store
// dispatch

// simple counter

let initialstate = {
    count:0
}

let add =()=>{
    return{
        type:"Add"
    }
}

let sub = ()=>{
    return{
        type:"Sub"
    }
}

let reset = ()=>{
    return{
        type:"Reset"
    }
}
let incriment = (state=initialstate,action)=>{
    switch (action.type) {
        case "Add":
            return {
                ...state,
                count:state.count + 1
            }
        case "Sub":
            return{
             ...state,
             count:state.count-1
            };
        case "Reset":
            return{
             ...state,
             count: state.count = 0
            }
            
        default:
           return state
    }
}

let store = redux.createStore(incriment)


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
store.dispatch(sub())
store.dispatch(reset())

store.dispatch(add())





