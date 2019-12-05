import React, { Component } from "react";

import "./styles.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.startSearch = this.startSearch.bind(this);
  }

  startSearch(event) {
    // console.log(this.state.search);
    const search = event.target.value;
    this.setState({
      search
    });
    this.props.search(search);
  }

  render() {
    return (
      <div className="search-box">
        <form>
          <span>Search:</span>
          <input
            type="search"
            name="search"
            value={this.state.search}
            onChange={this.startSearch}
          />
        </form>
      </div>
    );
  }
}

export default Search;
