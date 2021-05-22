let price = 0;
let count = 0;
const reducer = (state=[],action)=>{
  
    switch(action.type){

      case 'GET_PRODUCT':
          //console.log(action)
          return {...state}
        
      case 'GET_PRODUCT_SUCCESS':
          //console.log(action)
        return {...state, products:action.products};  
       
      case 'ADD_PRODUCT':
         // console.log(action.payload)
            return {...state}
          
       case 'ADD_PRODUCT_SUCCESS':
          return {...state, product:action.product}; 
          
       case 'EDIT_PRODUCT':
         return {...state}
         
       case 'EDIT_PRODUCT_SUCCESS':{
         
         return{...state,product:action.product}
       }  


       case 'DELETE_PRODUCT':
         
        return {...state}

       case 'DELETE_PRODUCT_SUCCESS':
         
       return {...state,product:action.product};

       case 'SEARCH_PRODUCT':
         //console.log(state)
         return {...state}

       case 'SEARCH_PRODUCT_SUCCESS':
        
       return {...state,products:action.products};
      
          
       case 'CART_PRODUCT':
      
          if(state.prd){

            price = price + action.payload.price;
           // console.log(price)
            count = count + 1;
           // console.log(count);
            state.prd.push(action.payload);
        
            return {...state,price:price,count:count}

          } else {

            price = action.payload.price;
            count = 1;
            const cart = [];
            cart.push(action.payload);
            return{...state,prd:cart,price:price,count:count}
          
          }
      
      default: return state    
    }

}

export default reducer;