import { TextField } from '@mui/material'
import React, { Component } from 'react'
import Header3 from '../../components/Header3'

export default class Write extends Component {
  render() {
    return (
      <div>
       <Header3/>
           <div className="w-full mt-16 cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                  <form
                    className="flex flex-col space-y-3 w-full "
                    // onSubmit={this.handleSubmit}
                  >
                    <TextField
                      label="Post Title"
                      type="text"
                      variant="outlined"
                      name="title"
                      placeholder="Enter post title"
                    // //   onChange={this.handleInputChange}
                    //   value={this.state.title}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Category"
                      type="text"
                      variant="outlined"
                      name="categoryName"
                      placeholder="Enter Category Name"
                    //   onChange={this.handleInputChange}
                    //   value={this.state.categoryName}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Post Description"
                      type="text"
                      variant="outlined"
                      name="description"
                      placeholder="Enter post description"
                    //   value={this.state.description}
                    //   onChange={this.handleInputChange}
                      fullWidth={true}
                      multiline
                      minRows={5}
                      maxRows={Infinity}
                      required
                    />
                    <TextField
                      label="Hours Count"
                      type="number"
                      variant="outlined"
                      name="hoursCount"
                      placeholder="Enter hours count"
                    //   onChange={this.handleInputChange}
                    //   value={this.state.hoursCount}
                      fullWidth={true}
                    />
                    <TextField
                      label="Lecturer Name"
                      type="text"
                      variant="outlined"
                      placeholder="Enter Lecturer Name"
                      name="lecturerName"
                    //   onChange={this.handleInputChange}
                    //   value={this.state.lecturerName}
                      fullWidth={true}
                    />
                    <TextField
                      label="Tags (Comma separated tags)"
                      type="text"
                      variant="outlined"
                      name="tagString"
                      placeholder="Enter comma separated tags"
                    //   onChange={this.handleInputChange}
                    //   value={this.state.tagString}
                      fullWidth={true}
                      required
                    />
                    <button className="py-2 bg-green-600 text-white rounded">
                      <h6>Publish Post</h6>
                    </button>
                  </form>
                </div>
        
      </div>
    )
  }
}
