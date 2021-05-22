import React, {useState} from 'react';
import axios from 'axios'
import './login.css'

import {TextField,Button,InputLabel,InputAdornment,IconButton,Input,FormControl} from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const LoginUser = (props) =>{

const [data,setData] = useState({userName:'',password:''}); 

const [values, setValues] = React.useState({
  amount: "",
  password: "",
  weight: "",
  weightRange: "",
  showPassword: false,
});


const loginUser = () =>{

axios.post(`http://localhost:8081/api/login`,data).then((response)=>{

    console.log(response.data);
    console.log("message",response.data.message);
    
    if(response.data.message === `User is present`){
      console.log("role",response.data.find.role);
      localStorage.setItem("role",response.data.find.role);

       if(localStorage.getItem("role") === "customer"){

         props.history.push('/');

       } else {

        props.history.push('/addproduct')
       }
           
        

    } else {
     
    var error = document.getElementById("error")

    error.innerHTML = "<span style='color: red;'>"+
    "Please enter valid Username and Password</span>"
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
              <h4 className="formHeading"> E-Commerce Login </h4>
            </div>
            <div>
              <form noValidate autoComplete="off">
                <TextField
                  id="userName"
                  name="userName"
                  label="Username"
                  className="LoginInputField"
                 // helperText={data.userName === "" ? "username cannot be empty" : ""}
                 value = {data.userName} onChange = {(evt)=>setData({...data,userName:(evt.target.value)})}
                  fullWidth
                />
              </form>
            </div>
            <div className="fieldSpace"> </div>

            <div>
              <FormControl style={{width : "100%", marginBottom:"2%"}} >
                <InputLabel htmlFor="standard-adornment-password"  >
                  Password
                </InputLabel>
                <Input
                 noValidate autoComplete="off"
                  id="standard-adornment-password"
                  value = {data.password} onChange = {(evt)=>setData({...data,password:(evt.target.value)})}
                  className="fullWidth"
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
            <div>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={loginUser}
              >
                {" "}
                Login
              </Button>
              <p id="error" style = {{paddingTop:"2%"}}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
 
  )
}

export default LoginUser;