import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="bg-yellow-400 w-full fixed h-20 p-3 text-Black">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
          
            <h1 className="pl-20 text-4xl font-semibold ">talks.</h1>
          </section>

          <section className="h-full w-1/2 flex justify-end gap-10 items-center pr-6 text-sm">
    
            <a href="">Our story</a>
            <a href="">Membership</a>
            <a href="">Write</a>
            <a href="">Sign In</a>
            <button className="bg-black text-white py-2 px-4 rounded-3xl font-semibold">Get started</button>

           
          </section>

        </div>
      </section>
      </div>
    )
  }
}
