import React from "react";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      errorObj => this.setState({ errorMessage: errorObj.message })
    );
  }
  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div className="container">
          <SeasonDisplay lat={this.state.latitude} />
        </div>
      );
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return this.state.errorMessage;
    }

    return <Loader message="Please accept location request" />;
  }
}
export default App;
