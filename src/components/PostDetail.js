import React from 'react';

export default function PostDetail({ match }) {
  const postId = match.params.id;
  return <h1>Post Detail: {postId}</h1>;
}
