import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          className={`search-box ${this.props.className}`}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
