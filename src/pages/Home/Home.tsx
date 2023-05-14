import React, { Component } from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default class Home extends Component {
  render() {
    return (

        <div>
        
         <Header/>

         <div className="bg-yellow-400 h-96 w-full pt-48 relative">
             <section >
             <h1 className=" text-6xl pl-20 font-semibold">Let's Create talks.</h1>
             <h2 className="pl-20  text-lg  ">Discover stories, thinking, and expertise from writers on any topic.</h2>
             <button className="bg-black text-white text-lg py-2 px-7 ml-20 mt-3 rounded-3xl font-semibold">Start reading </button>
           
        
             </section>

             <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
             <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
             <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
             <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
             <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
            
             
         </div>
         
       

        </div>
      
      
    )
  }
}
