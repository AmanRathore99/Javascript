import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AddCart = () =>{
    
const[prodData,setProdData]= useState([]);
let prod_cart =  useSelector(state=>state.prd); 
let totalPrice = useSelector(state=>state.price);

console.log(totalPrice);

console.log(prodData)

useEffect(()=>{

    setProdData(prod_cart);

},[prod_cart])


if(prodData.length === 0 ){
   
    return(
        <div>No records</div>
    );  
}

else {

    return(
        <>                 
        
        <div className="container">

<table className="table table-bordered table-striped">
    <thead>
        <tr>
            {
                Object.keys(prodData[0]).map((col,idx)=>(
                    <th key={idx}>{col}</th>
                )) 
            }
        </tr>
    </thead>
    <tbody>
         {
             prodData.map((rows,index)=>(
                <tr key={index}>
                    {
                      Object.keys(prodData[0]).map((col,idx)=>(
                        <th key={idx}>{rows[col]}</th>
                    ))  
                    } 
                </tr>
             ))
         }       
    </tbody>
</table>
</div>

<button className = "btn btn-primary" style = {{marginLeft:"1%"}}>
   <Link to="/customerinfo" style ={{color:"whitesmoke"}}>Get Checkout</Link> 
    </button>

    <div>
       <h2 className = "text-right">Total Amount : {totalPrice}</h2> 
    </div>
</> 
 )} 
}

export default AddCart;