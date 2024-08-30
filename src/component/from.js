import { useState } from "react";
import { useDispatch } from "react-redux";
export function From(paams) {
    const dispatch=useDispatch()
    const [name,setName]= useState("")
    const[number,setNumber] = useState(null)
    const[account,setAccount] = useState(null)
    const onChange =(e)=>{
        setName(e.target.value)
    }
    const onChange1 =(e)=>{
        setNumber(e.target.value)
    }
    const onChange2 =(e)=>{
        setAccount(e.target.value)
    }
    const onClick=()=>{
        dispatch({type:"name",payload:name})
        setName()
    }
    const onClick1=()=>{
        dispatch({type:"phoneNumber",payload:number})
        setNumber()
    }
    const onClick2=()=>{
        dispatch({type:"deposit",payload:account})
        setAccount()
    } 
     const onClick3=()=>{
        dispatch({type:"withdraw",payload:account})
        setAccount()
    }
    return(
        <div><center>
            <from>
            <input type="text" placeholder="userName" value={name} name="name" onChange={onChange}/>
            </from>
            <button onClick={onClick}>upData</button><br/>
            <from>
            <input type="number" placeholder="userPhoneNumber" value={number} name="number" onChange={onChange1}/>
            </from>
            <button onClick={onClick1}>upData</button><br/>
            <from>
            <input type="number" placeholder="account" value={account} name="account" onChange={onChange2}/>
            </from>
            <button onClick={onClick2}>deposit</button>
            <button onClick={onClick3}>withdraw</button>
            </center>
            </div>
    )
}