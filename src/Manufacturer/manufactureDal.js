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


const manufactureModel = require(path.join(__dirname, './../../models/manufacture'))(sequelize,Sequelize.DataTypes);

class ManufactureDal {
    async getAllData(request,response){

        try{

        await sequelize.sync({force:false}); // connect to database
        let rows =  await manufactureModel.findAll(); // return the resolverd data
        if(rows){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rowCount:rows.length,
                rows:rows
            });
        }
    }  catch(error){
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
     }  
    }

    async getAllDataById(request,response){
        try{
        let id = parseInt(request.params.id);
        await sequelize.sync({force:false}); // connect to database
        let row =  await manufactureModel.findOne({where:{manufactureRowId:id}}); // return the resolverd data
        if(row){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rows:row
            });
        }
    } catch(error)
      { 
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
      }
    }

    async createRecord(request,response){

        try{
        const objectToCreate = request.body;

        await sequelize.sync({force:false});
        
        let record =  await manufactureModel.create(objectToCreate)
        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'Record Added Successfully',
                    record:record
                });
        }
    }  catch(error){
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
      
    }
}

   async updateRecord(request,response){
   
   try{


    let id  =parseInt(request.params.id);

    const objectToUpdate = request.body;

    await sequelize.sync({force:false});

    let record = await manufactureModel.update({
        manufactureRowId: objectToUpdate.manufactureRowId,
        manufactureId : objectToUpdate.manufactureId,
        manufactureName : objectToUpdate.manufactureName,
        city : objectToUpdate.city,
        email:objectToUpdate.email,
        phone:objectToUpdate.phone
    },{where: {manufactureRowId:id}})

    if(record){
        return response.status(200)
        .send({
            statusMessage: 'Record updated Successfully',
            record:record
            });
    }
 }  catch(error){ 
    return response.status(500)
    .send({
        statusMessage: 'Error Occured',
        errorDetails: error.message
    });
    }
   }

   async deleteRecord(request,response){
       try{
       let id = parseInt(request.params.id);
       await sequelize.sync({force:false});

      // const objectToDelete = request.body;

       let record = await manufactureModel.destroy({where:{manufactureRowId:id}})

       if(record){
        response.status(200)
        .send({
            statusMessage: 'Data is Deleted Successfully'
        });
       }
    }
     catch(error){
       return response.status(500)
        .send({
        statusMessage: 'Error Occured',
        errorDetails: error.message
    });

   }
}
}

module.exports = ManufactureDal;