import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './productCard.css'
import { addToCart} from '../actions/actions';

const ProductCard = () =>{
 
let products = useSelector(state=>state.products)  


console.log(products)

const[product,setProduct] = useState([])    

let dispatch = useDispatch();




useEffect(()=>{


    axios.get(`http://localhost:8081/api/product`).then((response)=>{
        setProduct(response.data.rows);
        console.log(response.data.rows)
    })

},[])


if(product.length === 0) {
    return(
        <div>No product available</div>
    )
} 

else{

return(
    
    <>
    
   <div class="container d-flex justify-content-center mt-50 mb-50">
    <div class="row">
      {product.map((prd)=>(

        <div class="col-md-3 mt-4">
            <div class="card">
                <div class="card-body">
                    <div class="card-img-actions"> <img src={`http://localhost:8081/static/${prd.imageName}`} class="card-img img-fluid" width="96" height="350" alt="" /> </div>
                </div>
                <div class="card-body bg-light text-center">
                    <div class="mb-2">
                        <h6 class="font-weight-semibold mb-2"> <a href="#" class="text-default mb-2" data-abc="true">{prd.productName}</a> </h6> <a href="#" class="text-muted" data-abc="true">{prd.productType}</a>
                    </div>
                    <h3 class="mb-0 font-weight-semibold">{prd.price}</h3>
                    <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
                    <div class="text-muted mb-3"></div> <button type="button" class="btn bg-cart" 
                    
                    onClick = {()=>{
                        dispatch(addToCart({productId:prd.productId,productName:prd.productName,price:prd.price}))
                    }
                    }

                    ><i class="fa fa-cart-plus mr-2"></i> 
                     
                     Add to cart 
                     
                     </button>
                </div>
            </div>
        </div>
       ))}

    </div>
</div>
</>
)
}
}

export default ProductCard