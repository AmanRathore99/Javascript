import axios from 'axios';
import {takeLatest,all,call,put} from "redux-saga/effects"

 function  fetchProduct(){
 //console.log("in fetch")
   const result =  axios.get(`http://localhost:8081/api/product`).then((response)=>response.data.rows)

   return Promise.resolve(result);
    
}

function* dispatchGetProductSuccess(){

    const resolvedResponse = yield call(fetchProduct);

    yield put({
        type:'GET_PRODUCT_SUCCESS',
        products:resolvedResponse || {error:'GET_PRODUCT_FAILED'}
    })

}

function* listenGetProduct(){
    yield takeLatest('GET_PRODUCT',dispatchGetProductSuccess)
}

function postProduct(prd){

    //console.log(manf);

    const result = axios.post(`http://localhost:8081/api/product`,prd).then((response)=>response.data.record)
    return Promise.resolve(result);
}

function* dispatchAddProductSuccess(action){

    const inputData = action.payload;

   // console.log(inputData);

    const resolvedResponse = yield call(postProduct,inputData);

    yield put ({
        type: 'ADD_PRODUCT_SUCCESS',
        product:resolvedResponse
    })

}

function* listenAddProduct(){
    yield takeLatest('ADD_PRODUCT',dispatchAddProductSuccess)
}

function editProduct(id,data){
    console.log(id);
    const result = axios.put(`http://localhost:8081/api/product/${id}`,data).then((response)=>response.data.rows)
    return Promise.resolve(result);
}

function* dispatchEditProductSuccess(action){

    const id = action.payload.productRowId;
     console.log(id);

     const data = action.payload;

    const resolvedResponse = yield call(editProduct,id,data);

    yield put({
        type:'EDIT_PRODUCT_SUCCESS',
        product : resolvedResponse
    })
} 

function* listenEditProduct(){
    yield takeLatest('EDIT_PRODUCT',dispatchEditProductSuccess)
}


function deleteProduct(data){
    console.log(data)
    const result = axios.delete(`http://localhost:8081/api/product/${data}`).then((response)=>response.data.rows)
    return Promise.resolve(result);

}

function* dispatchDeleteProductSuccess(action){

    const data = action.payload;

    console.log("in delete",data);

    const resolvedResponse = yield call(deleteProduct,data);

    yield put ({
        type: 'DELETE_PRODUCT_SUCCESS',
        product:resolvedResponse
    })
}

function* listenDeleteProduct(){
    yield takeLatest('DELETE_PRODUCT',dispatchDeleteProductSuccess)
}


function searchProduct(data){


let search = axios.get(`http://localhost:8081/api/product`).then((response)=>{
   
   const results = response.data.rows.filter(
       (info)=> 

       info.productName.toString().toLowerCase().includes(data.toLowerCase()),
      
       );

       console.log(results);
        
      return results;
 
      } 
    )
    return Promise.resolve(search); 
    
 }

function* dispatchSearchProductSuccess(action){

    const data = action.payload;

    const resolvedResponse = yield call(searchProduct,data);
    
    // const getResponse = yield call(fetchProduct);

    yield put({
        type:'SEARCH_PRODUCT_SUCCESS',
        products:resolvedResponse
    },
    )

}

function* listenSearchProduct(){
    yield takeLatest('SEARCH_PRODUCT',dispatchSearchProductSuccess);
}


export default function* rootSaga(){
    yield all([listenGetProduct(),listenAddProduct(),listenEditProduct(),listenDeleteProduct(),listenSearchProduct()]);
}