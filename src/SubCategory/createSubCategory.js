import axios from 'axios'
import React, {useState} from 'react'


const CreateSubCategoryComponent = (props) =>{
   
const[subCategory,setSubCategory] = useState({subCategoryId:'',subCatName:'',categoryId:''})


const clear = ()=>{
    setSubCategory({subCategoryId:'',subCatName:'',categoryId:''})

}

const save = () =>{

    console.log("in save");
    axios.post(`http://localhost:8081/api/subcategories`,subCategory).then((response)=>{
        console.log(response.data.rows);
        console.log(response.data);
       // setProduct(response.data.rows);
        console.log(props);
        props.history.push("/listSubCategory");

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
                           <label for="subCategoryId" className="mb-0">subCategoryId</label>
                           <input type="text" id="subCategoryId" className="form-control"
                           value = {subCategory.subCategoryId} onChange = {(evt)=> setSubCategory({...subCategory,subCategoryId:(evt.target.value)})}/>
                       </div>
   
                       <div className="form-group">
                           <label for="subCatName" className="mb-0">subCatName</label>
                           <input type="text" id="subCatName" className="form-control"
                           value = {subCategory.subCatName} onChange = {(evt)=> setSubCategory({...subCategory,subCatName:(evt.target.value)})}/>
                       </div>

                       <div className="form-group">
                           <label for="categoryId" className="mb-0">categoryId</label>
                           <input type="text" id="categoryId" className="form-control"
                           value = {subCategory.categoryId} onChange = {(evt)=> setSubCategory({...subCategory,categoryId:(evt.target.value)})}/>
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

export default CreateSubCategoryComponent;