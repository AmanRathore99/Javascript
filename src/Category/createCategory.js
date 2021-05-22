import axios from 'axios'
import React, {useState} from 'react'


const CreateCategoryComponent = (props) =>{
   
const[Category,setCategory] = useState({categoryId:'',categoryName:''})


const clear = ()=>{
    setCategory({categoryId:'',categoryName:''})

}

const save = () =>{

    console.log("in save");
    axios.post(`http://localhost:8081/api/category`,Category).then((response)=>{
        console.log(response.data.rows);
        console.log(response.data);
       // setProduct(response.data.rows);
        console.log(props);
        props.history.push("/listCategory");

    }).catch((error)=>{
        console.log(`error occured ${error}`);


});
}

return(
    <>
     <div className="container mb-2">
           <div className="row">
               <div className="col-3 col-md-3 offset-md-0">
                   <form className="form-outer">
   
                       <div className="form-group">
                           <label for="CategoryId" className="mb-0">CategoryId</label>
                           <input type="text" id="CategoryId" className="form-control"
                           value = {Category.categoryId} onChange = {(evt)=> setCategory({...Category,categoryId:(evt.target.value)})}/>
                       </div>
   
                       <div className="form-group">
                           <label for="CategoryName" className="mb-0">CategoryName</label>
                           <input type="text" id="CategoryName" className="form-control"
                           value = {Category.categoryName} onChange = {(evt)=> setCategory({...Category,categoryName:(evt.target.value)})}/>
                       </div>
                  </form>
                </div>
              </div>       
             </div> 
             <div className="form-group">
               <input type="button" value="Clear" className="btn btn-primary"
               onClick={clear}/>
               <input type="button" value="Save" className="btn btn-success"
               onClick={save}/>
    </div> 
    </>
)

}

export default CreateCategoryComponent;