class ValidateData {
    constructor(){
        
      this.ProductId = '';
      this.ProductName = '';
      this.BasePrice = '';

    }
}

const handler = {
    set(target, prop,value) {

    var error = document.getElementById("error")
    var nameerror = document.getElementById("nameerror");
    var priceerror = document.getElementById("priceerror");

     if(prop == 'ProductId'){
        
        if(value.substring(0,4)!='Prd-'){
            
            error.innerHTML = "<span style='color: red;'>"+
            "Please enter a valid number</span>"

        } 
        else{
            error.innerHTML = ""
            target[prop] = value;
            return true;
        }
     }

     if(prop == 'ProductName'){

        if(value.match(/[^a-zA-Z0-9]/)){
            nameerror.innerHTML = "<span style='color: red;'>"+
            "Input is not alphanumeric</span>"
        } else {
            nameerror.innerHTML = ""
            target[prop] = value;
            return true;
        }
     }

     if(prop == 'BasePrice'){

        if(parseInt(value) < 0){

            priceerror.innerHTML = "<span style='color: red;'>"+
            "Base Price only accept + values</span>"
        } else {
            priceerror.innerHTML = ""
            target[prop] = value;
            return true;
        }
     }
   }
}

const product = new ValidateData();
const productProxy = new Proxy(product,handler);

function GetProductInfo(){

    productProxy.ProductId = document.getElementById('prdId').value;
    productProxy.ProductName = document.getElementById('prdName').value;
    productProxy.BasePrice = document.getElementById('price').value;
       
}

try{
    GetProductInfo();
}catch(e){
    console.log(e.message);
}