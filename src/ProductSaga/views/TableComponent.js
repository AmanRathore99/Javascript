import React, {useContext, useState} from 'react';
import {DataContext} from './datacontext';

import {useDispatch} from 'react-redux';
import {deleteProduct} from './../actions/actions'

const TableComponentContextEvent=()=>{

const[btnDisabled,setbtnDisabled] = useState(1)   

    const dispatch = useDispatch();

    const subscriber = useContext(DataContext); 
    console.log(`The values in DataContext = ${JSON.stringify(subscriber)}`);
    const dataSource  = subscriber[Object.keys(subscriber)[0]]; // array
    const event = subscriber[Object.keys(subscriber)[1]]; // event

    if(dataSource === undefined ||dataSource.length === 0){
        return (
            <div className="container">No Recrds to show</div>
        );
    } else {
    return (  
        <div className="container">

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            Object.keys(dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
   
                        }
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index} onClick={()=>event({...rows,isUpdate:1})}>
                                {
                                  Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }

                                <td>
                              <button className="btn btn-danger" onClick = {()=>dispatch(deleteProduct(rows.productRowId))} disabled = {(localStorage.getItem("role") === "customer")?btnDisabled:""} >
                                  Delete
                             </button>   
                           </td>  
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponentContextEvent;