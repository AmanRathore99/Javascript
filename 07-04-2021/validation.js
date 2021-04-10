var ValidateForm = function(){
    this.checkNumeric = function(value){

        if(!parseInt(value)){
            alert("value must be non-negative")
            return "";
        }

        return value;
    };

    this.checkEmpName = function(Name){
        if(!Name.length ){
            return false;

        }
       return true;
    }
}