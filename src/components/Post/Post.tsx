import React, { Component } from 'react'
import Tag from '../Tag';
import DeleteIcon from "@mui/icons-material/Delete";

type PostProps = {
    _id: string;
    title: string;
    description: string;
    category?: string;
    tags: string[];
    // removePostFromList?: (postId: string) => void;
  };
  
  type PostState = {};

export default class Post extends Component<PostProps,PostState> {
  render() {
    return (
        <div className="p-6 border border-slate-400 w-full rounded mt-24">
        <h3 className="text-2xl font-bold">{this.props.title}</h3>
        {this.props.description}
        <span className="flex space-x-5">
        
          {this.props.category ? (
            <p className="text-blue-500">
               {this.props.category}
            </p>
          ) : null}
        </span>

        <div className="w-full flex justify-between items-center">
          <span className="w-full mt-3 flex space-x-3">
            {this.props.tags.map((tagText, index) => (
              <Tag key={index} text={tagText} />
            ))}
          </span>
          <button>
            <DeleteIcon />
          </button>
        </div>

        
        
      </div>
    )
  }
}
