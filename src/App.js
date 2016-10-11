import React, { Component } from 'react';
import './App.css';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

class App extends Component {
  render() {
    return (
      <div className="commentBox">
      I'm just a plain comment box, dawg.
      <CommentList />
      <CommentForm />
      </div>
    );
  }
}

export default App;
