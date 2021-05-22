import React from 'react'
import ProductCard from './productCard'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {searchProduct} from './../actions/actions'

const Header = ()=>{ 

 let dispatch = useDispatch(); 

 let count = useSelector(state=>state.count);   

    return(
        <div>
        <nav class="navbar navbar-light bg-light">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/register">Register</a>
    
    </div>
  </div>
  
</nav>
       
 <div>
 
 </div>

         <form class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
         onChange = {(evt)=>dispatch(searchProduct(evt.target.value))}
         />
  
         <ul class="navbar-right">
      <li><a href="#" id="cart"><i class="fa fa-shopping-cart"  ></i>
      
      <Link to = "/addtocart"> {count} </Link>
       
        <span class="badge"></span></a></li>
    </ul>
       
         </form>
       </nav>
       <ProductCard ></ProductCard>
      </div>
    )

}

export default Header;