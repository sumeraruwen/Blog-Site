import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import SignIn from '../../pages/SignIn'

export default class Content extends Component {
    render() {
        return (
            <div>
                 <Routes>
                  
                    <Route path="/SignIn" element={<SignIn/>}></Route>
                   

                </Routes>
                
            </div>
        )
    }
}
