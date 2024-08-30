import { type } from "@testing-library/user-event/dist/type"
import{createStore} from "redux"
const userData={
    name:"",
    phoneNumber:null,
    balance:null
}

 export function name(state=userData,action) {
  if (action.type=="name") {
        return{... state,name:action.payload}
    }
   else if (action.type=="phoneNumber") {
        return{... state,phoneNumber:action.payload}
    }
   else if (action.type=="deposit") {
        return{... state,balance:state.balance+ +action.payload}
    }
    else if (action.type=="withdraw") {
        return{... state,balance:state.balance- +action.payload}
    }

    else
    return state
}


const store = createStore(name)
console.log(store.getState());
store.dispatch({type:"id",payload:null})
store.dispatch({type:"name",payload:""})
store.dispatch({type:"phoneNumber",payload:null})
store.dispatch({type:"deposit",payload:null})
store.dispatch({type:"withdraw",payload:null})
console.log(store.getState());
 export default store