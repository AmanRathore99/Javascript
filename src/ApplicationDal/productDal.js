const {Sequelize} = require('sequelize');
const path  =require('path');

const sequelize = new Sequelize('eshopping', 'root', 'aman',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0,
        max:5,
        idle:10000  
    },
    define:{
        timestamps:false
    }
});


const prodModel = require(path.join(__dirname, './../../models/product'))(sequelize,Sequelize.DataTypes);

class ProductDal {
    async getAllProducts(request,response){
       try{ 
        await sequelize.sync({force:false}); // connect to database
        let rows =  await prodModel.findAll(); // return the resolverd data
        if(rows){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rowCount:rows.length,
                rows:rows
            });
           }
         }
        catch(error){
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    }
 }
 async getProductsById(request,response){
    let id = parseInt(request.params.id);
    sequelize.sync({force:false})
            .then(()=>
            prodModel.findOne({where:
                        {productRowId:id}
                    })) // process read operation
            .then((data)=>{
                // 'data' is the recordSet
                response.status(200)
                    .send({
                        statusMessage: 'Data is Read By Id Successfully',
                        rowCount:data.length,
                        rows:data
                    });
            })
            .catch((error)=>{
                response.status(500)
                .send({
                    statusMessage: 'Error Occured',
                    ErrorDetails: error.message
                });
            });
}

    async addProduct(request,response){
        try{
        const objectToCreate = request.body;

        await sequelize.sync({force:false});
       
        let record =  await prodModel.create(objectToCreate)
        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'Record Added Successfully',
                    record:record
                });
        }
    } catch(error){
       
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
     
    }
}

    async updateProduct(req,res){
        let id  =parseInt(req.params.id);

    const objectToUpdate = req.body;

    sequelize.sync({force:false})
    .then(()=>
    prodModel.update({
        productRowId:objectToUpdate.productRowId,
        productId: objectToUpdate.productId,
        productName:objectToUpdate.productName,
        productType:objectToUpdate.productType,
        price:objectToUpdate.price,
        manufacturerRowId:objectToUpdate.manufacturerRowId,
        categoryId:objectToUpdate.categoryId,
        vendorRowId:objectToUpdate.vendorRowId
        }, {where: {productRowId:id}})
    )  
    .then((data)=>{
        res.status(200)
            .send({
                statusMessage: 'Record Updated Successfully',
                record:data
            });
    })
    .catch((error)=>{
        res.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    });
    }

    async deleteProduct(requset,response){
        let id  =parseInt(requset.params.id);


    sequelize.sync({force:false})
    .then(()=>
    prodModel.destroy({where:
                {productRowId:id}
            }))  
    .then((data)=>{
        // 'data' is the recordSet
        response.status(200)
            .send({
                statusMessage: 'Data is Deleted Successfully'
            });
    })
    .catch((error)=>{
        response.status(500)
        .send({
            statusMessage: 'Error Occured',
            ErrorDetails: error.message
        });
    });
    }
    }

module.exports = ProductDal;