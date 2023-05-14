import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Post from '../../components/Post'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
                <Post _id="fhfghfg" title="fghf" description="fghfgh" hoursCount={4} lecturerName="fghfh" />
                
            </div>
        )
    }
}
