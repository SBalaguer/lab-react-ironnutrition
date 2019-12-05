import React, { Component } from "react";
import "./App.scss";

import foods from "./foods";
import FoodBox from "./Components/FoodBox";
import AddFood from "./Components/AddFood";
import Search from "./Components/Search";
import TodayFood from "./Components/TodayFood";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false,
      search: "",
      eatenFood: []
    };
    this.renderForm = this.renderForm.bind(this);
    this.addItem = this.addItem.bind(this);
    this.searchFood = this.searchFood.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  addItem(newFood) {
    // console.log(newFood);
    const foods = [...this.state.foods, newFood];
    this.setState({
      foods,
      showForm: false
    });
  }

  searchFood(word) {
    // console.log(word)
    // let foodsFiltered = [...foods];
    // foodsFiltered = foods.filter(food => {
    //   if (food.name.includes(word)) {
    //     return food;
    //   }
    // });
    this.setState({
      search: word
    });
  }

  renderList(eaten) {
    const eatenFood = [...this.state.eatenFood, eaten];
    // const eatenFood = [...this.state.eatenFood];

    this.setState({
      eatenFood
    });
  }

  renderForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div>
        <h1 className="display-4">IronNutrition</h1>
        <Search search={this.searchFood} />
        <button className="add-food btn btn-primary" onClick={this.renderForm}>
          Add new Food
        </button>
        <AddFood show={this.state.showForm} add={this.addItem} />
        <div className="food-display">
          <div>
            {/* FoodBox being rendered here */}
            {this.state.foods.map(food => {
              if (food.name.toLowerCase().includes(this.state.search)) {
                return (
                  <FoodBox
                    {...food}
                    addItem={this.addItem}
                    list={this.renderList}
                  />
                );
              }
            })}
          </div>
          <div>
            {this.state.eatenFood.map(food => {
              return <TodayFood {...food} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
