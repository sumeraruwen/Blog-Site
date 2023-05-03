import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <>
      <div>
        <section className=" bg-yellow-400 w-full fixed h-20 p-3 text-Black border-b-2 border-black ">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
          
            <h1 className="pl-20 text-4xl font-semibold ">talks.</h1>
          </section>

          <section className="h-full w-1/2 flex justify-center gap-8 items-center pr-6 text-sm">
    
            <a href="">Our story</a>
            <a href="">Membership</a>
            <a href="">Write</a>
            {/* <a href="">Sign In</a> */}
            <NavLink to={"/SignIn"}>
                  Sign In
                </NavLink>
            <button className="bg-black text-white py-2 px-4 rounded-3xl font-semibold">Get started</button>

           
          </section >

         

        </div>
      </section>

     

      </div>
      </>
    )
  }
}
