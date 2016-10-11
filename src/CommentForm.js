import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: '' };
  }
  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value })
  }
  handleTextChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushData({ author: this.state.author, text: this.state.text });
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Quote's author" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Quote" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

export default CommentForm;
