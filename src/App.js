import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  constructor(props) {
    super(props);
    let isLoading = false;

    this.state = {
      isLoading,
      latitude: null
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        isLoading = true;
        this.setState({ latitude: position.coords.latitude, isLoading });
      },
      errorObj => {
        isLoading = true;
        this.setState({ errorMessage: errorObj.message, isLoading });
      }
    );
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          this.state.latitude ? (
            <SeasonDisplay isNorthearn={this.state.latitude > 0} />
          ) : (
            this.state.errorMessage
          )
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}
export default App;
