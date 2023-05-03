import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <div className="py-8 px-6 min-h-screen flex justify-center items-center ">

      <div className="bg-white rounded px-6 py-16 w-[40%] text-center shadow-xl">
         <h4>Sign Up</h4>
         <form className="w-full flex flex-col space-y-3 mt-3">
        
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>

   <NavLink to={"/Home"}>
     <button className="w-full bg-yellow-500 text-white py-3 rounded">
       Sign Up
     </button>
   </NavLink>

   <Grid container>
             
              <Grid item>
                <NavLink   to={"/SignIn"} >
                  {"Already have an account? Sign In"}
                </NavLink>
              </Grid>
            </Grid>
 </form>
      </div>
   </div>
        )
    }
}
