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

let incriment = (state=initialstate,action)=>{
    switch (action.type) {
        case "Add":
            return {
                ...state,
                count:state.count + 1
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

// store.dispatch({type:"Add"})
// store.dispatch({type:"Add"})
// store.dispatch({type:"Add"})
// console.log(add())
// add()



