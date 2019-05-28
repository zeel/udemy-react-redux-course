import React from "react";
import { connect } from "react-redux";

import { fetchPostAndUsers } from "../actions";

import UserName from "./UserName";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.posts.map(post => (
          <div key={post.id} className="item">
            <i className="huge user middle aligned icon" />
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <UserName userId={post.userId} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(
  ({ posts }) => ({ posts }),
  { fetchPostAndUsers }
)(PostList);
