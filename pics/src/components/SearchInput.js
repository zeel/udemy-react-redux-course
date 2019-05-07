import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    searchTerm: ""
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onInputKeyDown = e => {
    if (e.key === "Enter") {
      this.props.onChange(this.state.searchTerm);
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
            <label>User Input</label>
            <input
              type="text"
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
