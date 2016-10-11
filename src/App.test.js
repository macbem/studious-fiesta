import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox />, div);
});
