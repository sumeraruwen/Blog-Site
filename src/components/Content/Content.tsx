import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Ourstory from '../../pages/Ourstory'
import Profile from '../../pages/Profile'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import Write from '../../pages/Write'

export default class Content extends Component {
    render() {
        return (
            <div>
                 <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/SignIn" element={<SignIn/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                    <Route path="/Ourstory" element={<Ourstory/>}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/Write" element={<Write />}></Route>
                   

                </Routes>
                
            </div>
        )
    }
}
