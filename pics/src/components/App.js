import React from "react";
import SearchInput from "./SearchInput";

import "./App.css";

class App extends React.Component {
  onInputChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div className="ui container">
        <SearchInput onChange={this.onInputChange} />
      </div>
    );
  }
}

export default App;
