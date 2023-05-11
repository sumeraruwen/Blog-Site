import React, { Component } from 'react'
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'


export default class SignIn extends Component {
  render() {
    return (
       
      <div className="py-8 px-6 min-h-screen flex justify-center items-center ">

      <div className="bg-white rounded px-6 py-16 w-[40%] text-center shadow-xl">
         <h4>Sign In</h4>
         <form className="w-full flex flex-col space-y-3 mt-3">
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     placeholder="Enter your email"
     fullWidth={true}
     required
   />
   <TextField
     label="Password"
     type="password"
     variant="outlined"
     placeholder="Enter your password"
     fullWidth={true}
     required
   />

      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />


   <NavLink to={"/Profile"}>
     <button className="w-full bg-yellow-500 text-white py-3 rounded">
       Sign In
     </button>
   </NavLink>

   <Grid container>
              <Grid item >
                <NavLink  to={"/Home"}  >
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item xs> 
                <NavLink   to={"/SignUp"} >
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
 </form>
      </div>
   </div>
    )
  }
}
