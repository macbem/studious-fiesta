import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import uuid from 'uuid';

let data = [
  {id: uuid.v4(), author: "Pete Hunt", text: "This is one comment"},
  {id: uuid.v4(), author: "Jordan Walke", text: "This is *another* comment"},
  {id: uuid.v4(), author: "Dave Mustaine", text: "Peace sells, but who's buying?"}
];

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }
  pushData = (entry) => {
    let currentData = this.state.data;
    entry.id = uuid.v4();
    currentData.push(entry);
    this.setState({ data: currentData });
    console.log(this.state);
  }
  render() {
    return (
      <div className="commentBox">
        <CommentForm pushData = {this.pushData}/>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
