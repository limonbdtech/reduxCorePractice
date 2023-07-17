let redux = require("redux")
// define state
// action
// store
// dispatch


let initialstate = {
    porduct:[],
    count:0
}

const addProduct = "AddProduct"
const removeProduct = "RemoveProduct"

let add = (value)=>{
    return{
        type:addProduct,
        payload:value
    }
}
let remove = (value)=>{
    return{
        type:removeProduct,
        payload:value
    }
}

let countingProduct = (state=initialstate,action)=>{
    switch (action.type) {
        case addProduct:
            return{
                ...state,
                porduct:[...state.porduct,action.payload],
                count:state.count + 1
            }
        case removeProduct:
            return{
                ...state,
                porduct:state.porduct.filter(item=> item !== action.payload),
                count:state.count - 1
            }
            
    
        default:
            return state
    }
}


let store = redux.createStore(countingProduct)


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(add("limon"))
store.dispatch(add("sakib"))
store.dispatch(add("rakib"))
store.dispatch(add("akib"))
store.dispatch(remove("akib"))
store.dispatch(remove("limon"))