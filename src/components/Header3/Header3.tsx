import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import UserImage from "./../../assets/user.png";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default class Header3 extends Component {
    render() {
        return (
            <>
            
            <div className="relative">
              <section className=" bg-white w-full fixed top-0 p-4 z-10 h-20  text-Black border-b-2 border-black ">
              <div className="h-full flex">
                <section className="h-full w-1/2 flex items-center">
                
                  {/* <h1 className="pl-20 text-4xl font-semibold ">talks.</h1> */}
                  <NavLink to={"/Profile"} className="pl-20 text-4xl font-semibold">
                  talks.
                      </NavLink>
                </section>
      
                <section className="h-full w-1/2 flex justify-end gap-8 items-center pr-6 text-sm">
          
                <NotificationsNoneOutlinedIcon  fontSize="medium" />
            
            <NavLink to={"/Profile"}>
            <img src={UserImage} alt="userImage" className="w-10 h-10" />
          </NavLink>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-3xl font-semibold">Get started</button>
      
                 
                </section >
      
               
      
              </div>
            </section>
      
           
      
            </div>
            </>
        )
    }
}
