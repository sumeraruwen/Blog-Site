import React, { Component } from 'react'


type PostProps = {
    _id: string;
    title: string;
    description: string;
    hoursCount?: number;
    lecturerName?: string;
    // tags: string[];
    // removePostFromList?: (postId: string) => void;
  };
  
  type PostState = {};

export default class Post extends Component<PostProps,PostState> {
  render() {
    return (
        <div className="p-6 border border-slate-400 w-full rounded mt-24">
        <h3 className="text-center">{this.props.title}</h3>
        {this.props.description}
        <span className="flex space-x-5">
          {this.props.hoursCount ? (
            <p>
              <strong>Hours count</strong> : {this.props.hoursCount}
            </p>
          ) : null}
          {this.props.lecturerName ? (
            <p>
              <strong>Lecturer Name</strong> : {this.props.lecturerName}
            </p>
          ) : null}
        </span>
        
      </div>
    )
  }
}
