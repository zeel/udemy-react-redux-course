import React from "react";
import unsplash from "../api/unsplash";

import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

import "./App.css";

class App extends React.Component {
  state = {
    images: null
  };

  onSearchSubmit = async keyWord => {
    const trimmedKeyword = keyWord.trim();

    // if the keyword exists
    if (trimmedKeyword) {
      const response = await unsplash.get("search/photos", {
        params: { query: trimmedKeyword }
      });

      try {
        if (response.status === 200) {
          const images = [];
          response.data.results.forEach(result => {
            images.push({
              id: result.id,
              url: result.urls.regular,
              alt: result.alt_description
            });
          });
          this.setState({ images });
        } else {
          this.setState({ errorMsg: response.data.errors.join(", ") });
        }
      } catch (Error) {
        this.setState({ errorMsg: Error.response.data.errors.join(", ") });
      }
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
