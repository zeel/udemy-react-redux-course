import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {
  static propTypes = {
    onInputSubmit: PropTypes.func
  };

  state = {
    searchTerm: ""
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onInputKeyDown = e => {
    if (e.key === "Enter") {
      this.props.onInputSubmit(this.state.searchTerm);
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              placeholder="Enter keywords to search images"
              onChange={this.onInputChange}
              onKeyDown={this.onInputKeyDown}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;
