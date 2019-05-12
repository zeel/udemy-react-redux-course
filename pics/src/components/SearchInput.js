import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {
  static propTypes = {
    onSearchSubmit: PropTypes.func
  };

  state = {
    searchTerm: ""
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Images</label>
            <input
              type="text"
              placeholder="Enter keywords to search images"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchInput;
