import "./styles.css";

import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.controlCount = this.controlCount.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  controlCount(event) {
    const count = event.target.value;
    this.setState({
      count
    });
  }

  addToList(event) {
    event.preventDefault();
    const data = {
      name: this.props.name,
      calories: this.props.calories,
      amount: this.state.count
    };
    this.props.list(data);
    // console.log(this.state.count);
  }

  render() {
    return (
      <div className="media">
        <img
          src={this.props.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: "10em" }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories} cal</small>
        </div>
        <form className="row align-self-center" onSubmit={this.addToList}>
          <input
            className="form-control col-9"
            type="number"
            value={this.state.count}
            onChange={this.controlCount}
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default FoodBox;
