import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ListCategoryComponent = () =>{

const [Category,updateCategory] = useState([]);


useEffect(()=>{

    axios.get(`http://localhost:8081/api/category`).then((response)=>{
     
      updateCategory(response.data.rows);

    }).catch((error)=>{
        console.log(`error occured ${error}`);
    })

},[])


if(Category=== undefined || Category.length === 0){
    return (
        <div className="container">No Category to show</div>
    );
  }


  return (
    <div className="container">
    <div>
    <button className = "btn btn-warning" >        
    <Link to = "/createCategory">Create</Link>    
    </button>
    </div>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
                {
                    Object.keys(Category[0]).map((col,idx)=>(
                        <th key={idx}>{col}</th>
                       
                    ))
                   
                }
                 <th>Edit</th>
                 <th>Delete</th>
            </tr>
        </thead>
        <tbody>
             {
                 Category.map((rows,index)=>(
                    <tr key={index}>
                        {
                          Object.keys(Category[0]).map((col,idx)=>(
                            <td key={idx}>{rows[col]}</td>
                           
                        ))  
                             
                        }

                        <td>
                            <button className="btn btn-warning">
                                 <Link to={`updateCategory/${rows.RowId}`}>Edit</Link>
                            </button>   
                        </td>  

                        <td>
                            <button className="btn btn-danger">
                                 <Link to={`deleteCategory/${rows.RowId}`}>Delete</Link>
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

export default ListCategoryComponent;