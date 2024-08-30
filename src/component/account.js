import { useSelector } from "react-redux";
import React from 'react'
import { name } from "./task1";
 export function Account() {
    const data= useSelector((state)=>{
        return state
    })
return(
    <div>
        <center>
            <table>
                <tr>
                    <th>
                        balance
                    </th>
                    <th>userName</th>
                    <th>mobile</th>
                </tr>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.balance}</td>
                </tr>
            </table>
        </center>
    </div>
)

}