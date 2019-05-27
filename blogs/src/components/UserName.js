import React from "react";
import { connect } from "react-redux";

import { fetchUserName } from "../actions";

class UserName extends React.Component {
  componentDidMount() {
    if (!this.props.userName) {
      this.props.fetchUserName(this.props.userId);
    }
  }
  render() {
    return <h4>{this.props.userName}</h4>;
  }
}
export default connect(
  (state, ownProps) => {
    const user =
      state.users.find(user => user.userId === ownProps.userId) || {};
    return { userName: user.name };
  },
  { fetchUserName }
)(UserName);
