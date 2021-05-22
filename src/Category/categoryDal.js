const {Sequelize} = require('sequelize');
const path  =require('path');
//database Connection
const sequelize = new Sequelize('eshopping', 'root', 'aman',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000 // 10 minuts of the idle time
    },
    define:{
        timestamps:false
    }
});


class CategoryDal {
    constructor(model_name) { 
        this.AppModel = require(path.join(__dirname, `./../../models/${model_name}`))(sequelize,Sequelize.DataTypes);
    }
    getAllRecord = async(request,response)=>{
        try {
            await sequelize.sync({force:false});
            let rows =  await this.AppModel.findAll();
            if(rows){
                return response.status(200)
                .send({
                    statusMessage: 'Data is Read Successfully',
                    rowCount:rows.length,
                    rows:rows
                });
            }
        } catch (error) {
            return  response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
        }
    }
    getRecordById = async(request,response)=>{
        try {
            await sequelize.sync({force:false});
            let id = parseInt(request.params.id);
            let row =  await this.AppModel.findOne({where:{RowId:id}});
            if(row){
                return response.status(200).send({
                message:'Record Read Successfully',
                rowCount:row.length,
                rows:row
            });
        }
        } catch (error) {
            return response.status(500).send({
                message:'Error Coccured'
            });
        }
    }
    addRecord = async (request,response)=>{
        try {
            const productObject = request.body;
            await sequelize.sync({force:false});
            let record =  await this.AppModel.create(productObject)
            if(record){
                return response.status(200).send({
                    message:'Record Added Successfully',
                    rowCount:record.length
                });
            }
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
    updateRecord = async (request,response)=>{
        try {
            let id = parseInt(request.params.id);
            const productObject = request.body;
            await sequelize.sync({force:false});
            let record =  await this.AppModel.update(productObject,{where:{RowId:id}})
            if(record){
                return response.status(200).send({
                    message:'Record Updated'
                });
            }
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
    deleteRecord = async (request,response)=>{
        try {
            let id = parseInt(request.params.id);
            await sequelize.sync({force:false});
            let record =  await this.AppModel.destroy({where:{RowId:id}})
            if(record){
                return response.status(200).send({
                    message:"Record Deleted"
                });
            }
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
}

module.exports = CategoryDal;