const express = require('express');
const cors = require('cors');
const {Sequelize} = require('sequelize');
const path = require('path');
const multer = require('multer');


let instance = express();

instance.use(express.urlencoded({extended:false}));

instance.use(express.json());
instance.use(cors());


let router = express.Router();
instance.use(router);


const UserDal = require('./../RegisterUser/userDal');

let userDal = new UserDal()

instance.get('/api/user',userDal.getUser);
instance.post('/api/user',userDal.createUser);

const LoginDal = require('./../LoginUser/loginDal');

let loginDal = new LoginDal();

instance.post('/api/login',loginDal.createUser);


const ProductDal = require('./../Products/productDal');

let prodDal = new ProductDal('Product');
instance.get('/api/product',prodDal.getAllProducts)
instance.get('/api/product/:id',prodDal.getProductsById)
instance.post('/api/product',prodDal.addProduct)
instance.put('/api/product/:id',prodDal.updateProduct)
instance.delete('/api/product/:id',prodDal.deleteProduct)
instance.use('/static', express.static(path.join(__dirname, './../../public/uploads/')))


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


const storage = multer.diskStorage({
    destination: "./../../public/uploads/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });


 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
 

router.post('/api/uploadfile',function(req,res){  
    upload(req,res,async function(err) {  

        console.log(req.body);
        if(err) {  
            return res.send("Error uploading file.");  
        }  

        const productObject = JSON.parse(req.body['data'])
        productObject['imagePath'] = req.file.path;
        productObject['imageName'] = req.file.filename;
        console.log(productObject);
        let prod = await prodModel.create(productObject);
        console.log("********",req.file);
        return res.status(200).send({
            // record:prod,
            message:"Record Added"
        }); 
    });  
});  
 


const CategoryDal = require('./../Category/categoryDal');
const ManufactureDal = require('../Manufacturer/manufactureDal');


let CatDal = new CategoryDal('category');

instance.get('/api/category', CatDal.getAllRecord);
instance.get('/api/category/:id', CatDal.getRecordById);
instance.post('/api/category', CatDal.addRecord);
instance.put('/api/category/:id', CatDal.updateRecord);
instance.delete('/api/category/:id', CatDal.deleteRecord);



let SubCatDal = new CategoryDal('subcategory');

instance.get('/api/subcategories', SubCatDal.getAllRecord);
instance.get('/api/subcategories/:id', SubCatDal.getRecordById);
instance.post('/api/subcategories', SubCatDal.addRecord);
instance.put('/api/subcategories/:id', SubCatDal.updateRecord);
instance.delete('/api/subcategories/:id', SubCatDal.deleteRecord);


let manufactureDal = new ManufactureDal();
 
instance.get('/api/manufacture', manufactureDal.getAllData);
instance.get('/api/manufacture/:id', manufactureDal.getAllDataById);
instance.post('/api/manufacture', manufactureDal.createRecord);
instance.put('/api/manufacture/:id',manufactureDal.updateRecord);
instance.delete('/api/manufacture/:id',manufactureDal.deleteRecord);

let CustomerDal = require('./../Products/customerDal');

let customerDal = new CustomerDal();

instance.get('/api/customer',customerDal.getAllCustomers);
instance.get('/api/customer/:id',customerDal.getCustomerById);
instance.post('/api/customer',customerDal.addCustomer);
instance.put('/api/customer/:id',customerDal.updateCustomer)
instance.delete('/api/customer/:id',customerDal.deleteCustomer);


instance.listen(8081,()=>{
    console.log('server started on port 8081');
});