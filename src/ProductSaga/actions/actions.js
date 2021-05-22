export const getProduct =()=>{

    return {
        type: 'GET_PRODUCT'
    
    };

}

export const addProduct =(product)=>{

  return{
    type:'ADD_PRODUCT',
    payload:product,
  }

}

export const editProduct =(id) =>{

  return{

    type:'EDIT_PRODUCT',
    payload:id
      
  }

}

export const deleteProduct = (index)=>{
  console.log(index);
  return{
    type:'DELETE_PRODUCT',
    payload:index
  }
}

export const searchProduct = (value) =>{
  return{
    type:'SEARCH_PRODUCT',
    payload:value
  }
}

export const addToCart = (data) =>{
  return{
    type:'CART_PRODUCT',
    payload:data
  }
}
