import React from "react";

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}
// Either the function component above
// or the arrow function syntax below 
// would give you the same outcome
// const Comment = () => <div>Naturally, I agree with this article.</div>

// class component like below works the same but it's legacy now
// class Comment extends React.Component {
//   render() {
//     return<div>Naturally, I agree with this article.</div>
//   }
// }

export default Comment;
