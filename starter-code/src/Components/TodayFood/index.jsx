import React from "react";

export default function TodayFood(props) {
  return (
    <div>
      <span>{props.amount}</span>
      <span> </span>
      <strong>{props.name}</strong>
      <br />
      <small>Total Calories: {props.amount * props.calories}</small>
    </div>
  );
}
