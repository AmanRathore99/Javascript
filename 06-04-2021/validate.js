var ValidateForm = function(){
    this.checkNumeric = function(value){
        console.log('Received Values is = ' + value);
        if(!parseInt(value)){
            alert('Value must be number');
            return "";
        }

        if(value < 0){
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

    this.notNumber = function(Name){
        var regex = /^[A-Za-z]+$/; 
        return regex.test(Name);
    }
};
