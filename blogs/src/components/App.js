import React from "react";
import PostList from "./PostList.js";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <PostList />
      </div>
    );
  }
}
export default App;
