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


const custModel = require(path.join(__dirname, './../../models/customer'))(sequelize,Sequelize.DataTypes);

class CustomerDal {
    async getAllCustomers(request,response){
       try{ 
        await sequelize.sync({force:false}); // connect to database
        let rows =  await custModel.findAll(); // return the resolverd data
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
 async getCustomerById(request,response){
    let id = parseInt(request.params.id);
    sequelize.sync({force:false})
            .then(()=>
            custModel.findOne({where:
                        {customerRowId:id}
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

    async addCustomer(request,response){
        try{
        const objectToCreate = request.body;

        await sequelize.sync({force:false});
       
        let record =  await custModel.create(objectToCreate)
        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'Customer Added Successfully',
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

    async updateCustomer(req,res){
        let id  =parseInt(req.params.id);

    const objectToUpdate = req.body;

    sequelize.sync({force:false})
    .then(()=>
    custModel.update({
        customerRowId:objectToUpdate.customerRowId,
        customerId: objectToUpdate.customerId,
        customerName:objectToUpdate.customerName,
        email:objectToUpdate.email,
        address:objectToUpdate.address,
        postalCode:objectToUpdate.postalCode,
        phone:objectToUpdate.phone
        }, {where: {customerRowId:id}})
    )  
    .then((data)=>{
        res.status(200)
            .send({
                statusMessage: 'Customer Updated Successfully',
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

    async deleteCustomer(requset,response){
        let id  =parseInt(requset.params.id);


    sequelize.sync({force:false})
    .then(()=>
    custModel.destroy({where:
                {customerRowId:id}
            }))  
    .then((data)=>{
        // 'data' is the recordSet
        response.status(200)
            .send({
                statusMessage: 'Customer is Deleted Successfully'
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

module.exports = CustomerDal;