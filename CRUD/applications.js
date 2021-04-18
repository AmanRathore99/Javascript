class ProductLogic {
    #manufacture=[];
    #categories = [];

    constructor(){
        this.#manufacture = ['HP','CCC','DDDD','KKKK']; 
        this.#categories = ['Electronics', 'Electrical', 'Furniture','Bajaj'];

    }
    getCategories(){
        return this.#categories;
    }
    getmanufacture(){
        return this.#manufacture;
    }
}