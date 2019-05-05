import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      errorObj => {
        this.setState({ errorMessage: errorObj.message });
      }
    );
  }
  isWinter = () => {
    const currentMonth = new Date().getMonth();
    const isOtoM = currentMonth >= 2 && currentMonth <= 9;
    return this.state.latitude > 0 && isOtoM;
  };
  render() {
    return (
      <div>
        {this.state.latitude ? (
          <SeasonDisplay isNorthearn={this.isWinter} />
        ) : (
          this.state.errorMessage || "Loading..."
        )}
      </div>
    );
  }
}
export default App;
