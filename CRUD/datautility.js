function getData(){
    return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            
            xhr.onload = function(){
                if(xhr.status === 200){
                    resolve(xhr.response);
                }
            };

            xhr.onerror = function(e){
               reject(`Error Occured ${e}`);
            };

            xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
            xhr.send();
    });    
}

async function getProducts(){
    let result = await getData();
    return result;
}

function postData(prd){
    return new Promise((resolve,reject)=>{

            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200){
                    console.log(`Resolved ${xhr.response}`);
                    resolve(xhr.response);
                }
            };

            xhr.onerror = function(e){
               reject(`Error Occured ${e}`);
            };
            xhr.open('POST', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products',false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(prd));
    });
    
}

function deleteProduct(row){

    let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products/' + row,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    });
    
    return response;
    
}
    