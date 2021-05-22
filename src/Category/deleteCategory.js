import React, {useEffect} from 'react'
import axios from 'axios';

const DeleteCategoryComponent = (props) =>{

    useEffect(()=>{
      
       let id = props.match.params.id;  
        axios.delete(`http://localhost:8081/api/category/${id}`).then((response)=>{
            console.log(response);
            props.history.push("/listCategory")
        }).catch((error)=>{
            console.log(error);
        })

    },[])
    
    return(
        <>
        </>
    )

}

export default DeleteCategoryComponent;