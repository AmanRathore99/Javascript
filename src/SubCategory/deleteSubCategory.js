import React, {useEffect} from 'react'
import axios from 'axios';

const DeleteSubCategoryComponent = (props) =>{

    useEffect(()=>{
      
       let id = props.match.params.id;  
        axios.delete(`http://localhost:8081/api/subcategories/${id}`).then((response)=>{
            console.log(response);
            props.history.push("/listSubCategory")
        }).catch((error)=>{
            console.log(error);
        })

    },[])
    
    return(
        <>
        </>
    )

}

export default DeleteSubCategoryComponent;