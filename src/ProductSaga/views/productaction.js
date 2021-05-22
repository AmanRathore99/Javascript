import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {getProduct,addProduct,editProduct,searchProduct} from './../../ProductSaga/actions/actions'
import TableComponentContextEvent from './TableComponent'
import {DataContext} from './datacontext';
import {Link} from 'react-router-dom'

const ProductComponent = (props)=>{

let dispatch = useDispatch();    

let prd = useSelector(state=>state.product)
let products = useSelector(state=>state.products)

const[data,setData] = useState({productId:'',productName:'',productType:'',price:0,manufactureRowId:0,categoryId:'',vendorRowId:0,isUpdate:0})
const[file,setFile] = useState(null);
const getData = ()=>{
    dispatch(getProduct());
}

useEffect(()=>{

    dispatch(getProduct());

},[]);

const saveData = ()=>{
 if(data['isUpdate'] === 0){

    dispatch(addProduct(data)) 
    return prd;

 } else {
   
    dispatch(editProduct(data))
 }
   
}

const onChangeFile = (e)=>{
    setFile({file:e.target.files[0]});
   }
 
   const uploadFile = (e)=>{
     e.preventDefault();
     const formData = new FormData();
     formData.append('myImage',file.file);
     formData.append('data',JSON.stringify(data))
    console.log(file)
    
     axios.post(`http://localhost:8081/api/uploadfile`,formData)
         .then((response) => {
             alert("The file is successfully uploaded");
         }).catch((error) => {
             console.log(error);
     });
   }

return(
 
 <>   

{(localStorage.getItem("role") === "vendor")?

<div className="container mb-2">
<div className="row">
    <div className="col-3 col-md-3 offset-md-0">
        <form className="form-outer">

            <div className="form-group">
                <label for="productId" className="mb-0">ProductId</label>
                <input type="text" id="productId" className="form-control"
                value = {data.productId} onChange = {(evt)=> setData({...data,productId:(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <button style = {{marginLeft:"400%",marginTop:"-25%",position:"absolute"}}>
                <Link to="/"> Logout </Link>
                 </button>
            </div>

            <div className="form-group">
                <label for="productName" className="mb-0">ProductName</label>
                <input type="text" id="productName" className="form-control"
                value = {data.productName} onChange = {(evt)=> setData({...data,productName:(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label for="productType" className="mb-0">ProductType</label>
                <input type="text" id="productType" className="form-control"
                value = {data.productType} onChange = {(evt)=> setData({...data,productType:(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label for="price" className="mb-0">Price</label>
                <input type="text" id="price" className="form-control"
                value = {data.price} onChange = {(evt)=> setData({...data,price:parseInt(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label for="manufactureRowId" className="mb-0">ManufactureRowId</label>
                <input type="text" id="manufactureRowId" className="form-control"
                value = {data.manufactureRowId} onChange = {(evt)=> setData({...data,manufactureRowId:parseInt(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label for="categoryId" className="mb-0">CategoryId</label>
                <input type="text" id="categoryId" className="form-control"
                value = {data.categoryId} onChange = {(evt)=> setData({...data,categoryId:(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label for="vendorRowId" className="mb-0">VendorRowId</label>
                <input type="text" id="vendorRowId" className="form-control"
                value = {data.vendorRowId} onChange = {(evt)=> setData({...data,vendorRowId:parseInt(evt.target.value)})}/>
            </div>

       </form>
     </div>
   </div>       
  </div>
:""}


  <div className="form-group">
               <input type="button" value="GET" className="btn btn-primary"
               onClick={getData}/>
               <input type="button" value="Post" className="btn btn-success"
               onClick={saveData}/>
    </div> 

<div>
<form>
<h1>File Upload</h1>
<input type="file" name="myImage" onChange= {onChangeFile} />
  <button type="submit" onClick = {uploadFile}>Upload</button>
</form>
</div>


<div>
    <input type = "search" onChange = {(evt)=>dispatch(searchProduct(evt.target.value))}/>
</div>

   <div className = "form-group">

    <DataContext.Provider value = {{products,setData}}>

      <TableComponentContextEvent></TableComponentContextEvent> 

    </DataContext.Provider>    

    </div> 

 </>
)

}



export default ProductComponent;