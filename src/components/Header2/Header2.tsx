import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import UserImage from "./../../assets/user.png";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


export default class Header2 extends Component {
  render() {
    return (
        <>
        <div>
          <section className=" bg-blue-500 w-full fixed top-0 p-4 z-10 h-20  text-white border-b-2 border-white ">
          <div className="h-full flex">
            <section className="h-full w-1/2 flex items-center justify-start">
            
              {/* <h1 className="pl-20 text-4xl font-semibold ">talks.</h1> */}
              <NavLink to={"/Home"} className="pl-20 text-4xl font-semibold">
              talks.
                  </NavLink>

                  
            </section>
  
            <section className="h-full w-1/2 flex justify-end gap-6  pr-6 text-sm items-center">
      
            {/* <NavLink to={"/Ourstory"}>
             Our story
                  </NavLink> */}
            
            <NavLink to={"/Write"}>
             Write
                  </NavLink> 
            
             
              {/* <a href="">Sign In</a> */}
              <NotificationsNoneOutlinedIcon  fontSize="medium" />
            
                  <NavLink to={"/Profile"}>
                  <img src={UserImage} alt="userImage" className="w-10 h-10" />
                </NavLink>
              {/* <button className="bg-black text-white py-2 px-4 rounded-3xl font-semibold">Get started</button> */}
  
             
            </section >
  
           
  
          </div>
        </section>
  
       
  
        </div>
        </>
    )
  }
}
