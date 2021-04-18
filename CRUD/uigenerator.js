class UIGenerator {
  
    constructor(){
     
    var data = getProducts()

    data.then((demo)=>{

        var headers = Object.keys(JSON.parse(demo)[0]);
        var values = Object.values(JSON.parse(demo))
        this.generateTable(headers,values)
    }) 
    }

    loadcategory(){
      
        var loaddata = new ProductLogic();
        var category = loaddata.getCategories();
 
        var opt;
                for(var i=0; i< category.length; i++) {
                    opt+= '<option value="'+category[i]+ '">'+ category[i] +'</option>';    
                }

                document.getElementById('ctgry').innerHTML = opt;

    }

    loadmanufacture(){

        var loadmanufacture = new ProductLogic();
        var manufacturer = loadmanufacture.getmanufacture();

        var opt;
                for(var i=0; i< manufacturer.length; i++) {
                    opt+= '<option value="'+manufacturer[i]+ '">'+ manufacturer[i] +'</option>';    
                }

                document.getElementById('manufacture').innerHTML = opt;

    }

generateTable(headers,values){

        var table="";
        var data = "";
       table+= "<table>";
           table += "<thead><tr>"
       for(var c=0;c<headers.length;c++){
        
         table+= "<th>"+headers[c]+"</th>"; 
           
       } table+= "<th> Delete </th>"    
       table+="</tr></thead>";
       
       data+="<tbody>"
            for(var row=0;row<values.length;row++){
                data+="<tr onmouseover='getFirstTdContent(this);'>"; 
                for(var d=0;d<headers.length;d++){
    

                        data +="<td>"+values[row][headers[d]]+ "</td>"; 
                        
                    } 
                    data +='<td><button id = "delete" class="btn btn-primary" onClick="deleteProduct('+values[row][headers[0]]+')">Delete</button></td>'
                   
                data+="</tr>";
            }
            data+="</tbody>";
            data+="</table>";

     
        document.getElementById('thead').innerHTML = table;
        document.getElementById('tbody').innerHTML = data;
        
    }       
 }
    