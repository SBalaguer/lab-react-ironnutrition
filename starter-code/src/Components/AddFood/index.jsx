import React from "react";

import "./styles.css";

function AddFood(props) {
  function passData(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const calories = event.target.calories.value;
    const image = event.target.image.value;
    const data = {
      name,
      calories,
      image
    };
    props.add(data);
  }

  if (props.show) {
    return (
      <form className="add-form" action="" onSubmit={passData}>
        <input type="text" name="name" />
        <input type="number" name="calories" />
        <input type="text" name="image" />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  } else {
    return null;
  }
}

export default AddFood;
