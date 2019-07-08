import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.auth2
        .init({
          clientId:
            "863144181362-mvmd36v5gtdtun77bmfcqkve1h6col6p.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/cloud-platform"
        })
        .then(gAuth => {
          this._gAuth = gAuth;
          gAuth.isSignedIn.listen(this.onAuthChange);
          this.onAuthChange();
        });
    });
  }
  onAuthChange = () => {
    const signedIn = this._gAuth.isSignedIn.get();
    if (signedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };
  onSignInClick = () => {
    this._gAuth
      .signIn()
      .then(gUser => {
        console.log("signed in with user");
        console.log(gUser);
      })
      .catch(({ error }) => {
        console.log("signed in failed with error");
        console.log(error);
      });
  };
  onSignOutClick = () => {
    this._gAuth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else {
      return this.props.isSignedIn ? (
        <button onClick={this.onSignOutClick} className="ui google red button">
          <i className="google icon" />
          Sign out
        </button>
      ) : (
        <button onClick={this.onSignInClick} className="ui google red button">
          <i className="google icon" /> Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export default connect(
  state => ({
    isSignedIn: state.auth.isSignedIn
  }),
  { signIn, signOut }
)(GoogleAuth);
