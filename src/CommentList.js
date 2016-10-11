import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    console.log(this.props.data);
    let commentNodes = this.props.data.map( (item) => (<Comment author={item.author} key={item.id}>{item.text}</Comment>) )
    return (
        <div className="CommentList">
          <p>Just a simple comment list.</p>
          {commentNodes}
        </div>
      )
  }
}

export default CommentList;
