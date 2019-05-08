import React from "react";
import axios from "axios";

import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

import "./App.css";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = keyWord => {
    const trimmedKeyword = keyWord.trim();

    if (trimmedKeyword) {
      axios
        .get(`https://api.unsplash.com/search/photos?query=${trimmedKeyword}`, {
          headers: {
            Authorization:
              "Client-ID 8870f5e8c899280cd06c8cd318c973513a396f317c29bc2844b9de45f563540b"
          }
        })
        .then(response => {
          if (response.status === 200) {
            const images = [];
            response.data.results.forEach(result => {
              images.push({
                url: result.urls.regular,
                alt: result.alt_description
              });
            });
            this.setState({ images });
          } else {
            this.setState({ errorMsg: response.data.errors.join(", ") });
          }
        })
        .catch(function(error) {
          this.setState({ errorMsg: error });
        });
    }
  };
  render() {
    return (
      <div className="ui container">
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        {this.state.images ? (
          <ImageList images={this.state.images} />
        ) : (
          this.state.errorMsg
        )}
      </div>
    );
  }
}

export default App;
