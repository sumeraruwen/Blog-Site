import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <>
      <div>
        <section className=" bg-yellow-400 w-full fixed top-0 p-4 z-10 h-20  text-Black border-b-2 border-black ">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
          
            {/* <h1 className="pl-20 text-4xl font-semibold ">talks.</h1> */}
            <NavLink to={"/Home"} className="pl-20 text-4xl font-semibold">
            talks.
                </NavLink>
          </section>

          <section className="h-full w-1/2 flex justify-center gap-8 items-center pr-6 text-sm">
    
          <NavLink to={"/Ourstory"}>
                 Our story
                </NavLink>
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
