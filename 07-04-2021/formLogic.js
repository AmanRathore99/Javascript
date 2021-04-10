var ProductLogic = function(){
    
    this.category = ['ECT','ECL','FOD-FAST', 'FOD-DRK'];
   
    this.manufacturer = ['HP','IBM','TATA','BAJAJ','PARLE'];
    
    this.deleteProduct = function(index){
        let products = JSON.parse(localStorage.getItem("Products"));
        products.splice(index,1);
        localStorage.setItem("Products" , JSON.stringify(products));
        return products;
    }
};