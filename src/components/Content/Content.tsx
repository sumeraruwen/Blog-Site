import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'

export default class Content extends Component {
    render() {
        return (
            <div>
                 <Routes>
                  
                    <Route path="/SignIn" element={<SignIn/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                   

                </Routes>
                
            </div>
        )
    }
}
