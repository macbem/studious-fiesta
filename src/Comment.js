import React, { Component } from 'react';
import remarkable from './remarkable.min.js';
class Comment extends Component {
  rawMarkup() {
    let markdown = new remarkable();
    let markup = markdown.render(this.props.children.toString())
    return { __html: markup};
  }
  render() {
    return (
        <div className="Comment">
            <h2 className="commentAuthor">{this.props.author}</h2>
            <p dangerouslySetInnerHTML={this.rawMarkup()}></p>
        </div>
      )
  }
}

export default Comment;
