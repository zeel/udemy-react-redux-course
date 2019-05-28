import React from "react";
import { connect } from "react-redux";

class UserName extends React.Component {
  render() {
    return <h4>{this.props.userName}</h4>;
  }
}
export default connect((state, ownProps) => {
  const user = state.users.find(user => user.userId === ownProps.userId) || {};
  return { userName: user.name };
})(UserName);
