import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    const currentMonth = new Date().getMonth();
    if( (currentMonth >= 2) && (currentMonth <= 9) )  {
      this.setState({text: "Burr, It's Chilly!"});
    } else {
      this.setState({text: "Let's hit the beach!"});
    }

  }
  render() {

    return (
      <div className="App">
        <div className="season-text">
          <div>{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default App;
