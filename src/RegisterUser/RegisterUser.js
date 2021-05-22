import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import {TextField,Button,InputLabel,InputAdornment,IconButton,Input,FormControl} from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const RegisterUser = () =>{

const[user,setUser] = useState({userName:'',password:'',email:'',role:''});


const [values, setValues] = React.useState({
  amount: "",
  password: "",
  weight: "",
  weightRange: "",
  showPassword: false,
});


useEffect(()=>{

    axios.get(`http://localhost:8081/api/user`).then((response)=>{
        
      console.log(response.data.rows);
      setUser(response.data.rows);

    });

},[])


const registerUser = () =>{
  var nameerror = document.getElementById("nameerror");
            axios.post(`http://localhost:8081/api/user`,user).then((response)=>{
               
               if(response.data.message === `User ${user.userName} is already present`){
                var error = document.getElementById("error")
                error.innerHTML = "<span style='color: red;'>"+
                "User is already registered,Please Login</span>"
               } else {
                nameerror.innerHTML = "<span style='color: green;'>"+
                "User is successfully registered</span>"
               }
            })

}
const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};


  return(
    
     <> 
      <div className="mainLoginContainer">
      <div className="loginContainer">
      <div className="loginblock">
     <div className="loginSubBlock">
       <div className="formTitle">
         <h4 className="formHeading"> E-Commerce Register </h4>
         <p id = "error"></p>
         <p id = "nameerror"></p>
       </div>
       <div>
         <form noValidate autoComplete="off">
           <TextField
             id="userName"
             name="userName"
             label="Username"
             className="LoginInputField"
            // helperText={pname === "" ? "username cannot be empty" : ""}
            value = {user.userName} onChange = {(evt)=>setUser({...user,userName:(evt.target.value)})}
             fullWidth
           />
         </form>
       </div>
       <div className="fieldSpace1"> </div>

       <div>
         <FormControl style={{width : "100%", marginBottom:"2%"}}>
           <InputLabel htmlFor="standard-adornment-password" >
             Password
           </InputLabel>
           <Input
            noValidate autoComplete="off"
             id="standard-adornment-password"
             className="fullWidth"
             value = {user.password} onChange = {(evt)=>setUser({...user,password:(evt.target.value)})}
             type={values.showPassword ? "text" : "password"}
             endAdornment={
               <InputAdornment>
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                 >
                   {values.showPassword ? (
                     <Visibility />
                   ) : (
                     <VisibilityOff />
                   )}
                 </IconButton>
               </InputAdornment>
             } 
           />
         </FormControl>
       </div>

       <div className="fieldSpace1"> </div>

       <div>
         <form noValidate autoComplete="off">
           <TextField
             id="email"
             name="email"
             label="Email"
             className="LoginInputField"
             value = {user.email} onChange = {(evt)=>setUser({...user,email:(evt.target.value)})}
             fullWidth
           />
         </form>
       </div>

       <div className="fieldSpace1"> </div>

  <div>
  <form noValidate autoComplete="off">
    <TextField

      id="role"
      name="role"
      label="Role"
      className="LoginInputField"
      value = {user.role} onChange = {(evt)=>setUser({...user,role:(evt.target.value)})}
      fullWidth
      style = {{marginBottom:"2%"}}
    />
  </form>
</div>
       <div>
         
         <Button
           type="submit"
           variant="contained"
           color="primary"
           onClick={registerUser}
         >
           {" "}
           Register
         </Button>
          
         <Button
          type = "submit"
          variant = "contained"
          color = "primary"
          style = {{marginLeft:"40%"}}
          >
         <Link to ="/login" style = {{color:"white"}}>Login</Link>
        </Button>
      
       </div>
     </div>
   </div>
 </div>
</div>
</>
  )
 }
export default RegisterUser;