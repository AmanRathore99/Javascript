import React, { useState } from 'react'
import axios from 'axios'
const CustomerInfo = () =>{

const[data,setData] = useState({customerId:'',customerName:'',email:'',address:'',postalCode:0,phone:0});

const placeOrder = ()=>{

    axios.post(`http://localhost:8081/api/customer`,data).then((response)=>{

        alert("Customer added successfully");
        
    })

}

return(
  <>

<div class="container">
  <div class="row">
    <div class="col">

 <h2> Customer Information </h2>

    <form className="form-outer">

<div className="form-group">
    <label for="customerId" className="mb-0">CustomerId</label>
    <input type="text" id="customerId" className="form-control"
    value = {data.customerId} onChange = {(evt)=> setData({...data,customerId:(evt.target.value)})}
    />
</div>

<div className="form-group">
    <label for="customerName" className="mb-0">Customer Name</label>
    <input type="text" id="customerName" className="form-control"
    value = {data.customerName} onChange = {(evt)=> setData({...data,customerName:(evt.target.value)})}
    />
</div>

<div className="form-group">
    <label for="email" className="mb-0">Email</label>
    <input type="text" id="email" className="form-control"
     value = {data.email} onChange = {(evt)=> setData({...data,email:(evt.target.value)})}
    />
</div>

<div className="form-group">
    <label for="address" className="mb-0">Address</label>
    <input type="text" id="address" className="form-control"
     value = {data.address} onChange = {(evt)=> setData({...data,address:(evt.target.value)})}
    />
</div>

<div className="form-group">
    <label for="postalCode" className="mb-0">PostalCode</label>
    <input type="text" id="postalCode" className="form-control"
    value = {data.postalCode} onChange = {(evt)=> setData({...data,postalCode:parseInt(evt.target.value)})}
    />
</div>

<div className="form-group">
    <label for="phone" className="mb-0">Phone</label>
    <input type="text" id="phone" className="form-control"
    value = {data.phone} onChange = {(evt)=> setData({...data,phone:parseInt(evt.target.value)})}
    />
</div>

<button className ="btn btn-primary" onClick = {placeOrder}>Place Order</button>

</form>
    </div>
    <div class="col">

      <h2> Payment Information </h2>
      <form className="form-outer">

    <div className="form-group">
    <label for="vendorRowId" className="mb-0">PaymentId</label>
    <input type="text" id="vendorRowId" className="form-control" />

    <div className="form-group">
    <label for="vendorRowId" className="mb-0">PaymentMode</label>
    <input type="text" id="vendorRowId" className="form-control"/>
</div>

<div className="form-group">
    <label for="vendorRowId" className="mb-0">Card Number</label>
    <input type="text" id="vendorRowId" className="form-control"/>
</div>
 </div>

</form>    

    </div>
  </div>
 </div> 
</>
 )

}

export default CustomerInfo;