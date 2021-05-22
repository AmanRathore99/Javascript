const {Sequelize} = require('sequelize');
const jwt =  require('jsonwebtoken')
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
 
const jwtSecreteSettings = {
    jwtSecret : 'mi16james007700semaj61m'
};

const userModel = require(path.join(__dirname, './../../models/userregister'))(sequelize,Sequelize.DataTypes);

class LoginDal{

    // async getUser(request,response){
    //     try{

    //     await sequelize.sync({force:false}); // connect to database
    //     let rows =  await loginModel.findAll(); // return the resolverd data
    //     if(rows){
    //         return response.status(200)
    //         .send({
    //             statusMessage: 'Data is Read Successfully',
    //             rowCount:rows.length,
    //             rows:rows
    //         });
    //     }
    // }  catch(error){
    //     return  response.status(500)
    //     .send({
    //         statusMessage: 'Error Occured',
    //         errorDetails: error.message
    //     });
    //  }  
    // }


    async createUser(request,response){
    
        const user = request.body;

        const token = jwt.sign({user}, jwtSecreteSettings.jwtSecret, {
            expiresIn: 3600
        }); 
        
        await sequelize.sync({force:false});

        const find = await userModel.findOne({where:{userName:user.userName}});
 
        // const role = await userModel.findAll(role);

        if(find !== null && find.password === user.password) 
        {
            return response.status(200).send({message: `User is present`,token:token,find:find});
        } 
         else {
            return response.status(200).send({message: `User is not present`});
         }
        
}

}

module.exports = LoginDal;