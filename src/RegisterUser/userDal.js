const {Sequelize} = require('sequelize');

const path = require('path')

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

const userModel = require(path.join(__dirname, './../../models/userregister'))(sequelize,Sequelize.DataTypes);

class UserDal{

    async getUser(request,response){
        try{

        await sequelize.sync({force:false}); // connect to database
        let rows =  await userModel.findAll(); // return the resolverd data
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


    async createUser(request,response){
        try{
        const user = request.body;
        await sequelize.sync({force:false});

        const find = await userModel.findOne({where:{userName:user.userName}});
        if(find !== null) 
            // returning conflict
            return response.status(200).send({message: `User ${user.userName} is already present`});

        
        let record =  await userModel.create(user)
        if(record){
            return response.status(200)
                .send({
                    statusMessage: 'User Created Successfully',
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

}

module.exports = UserDal;