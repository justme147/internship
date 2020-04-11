import React from "react";
import PropTypes from "prop-types";

function ModelItem({ car, onMenuItemClick, selectItem }) {
  const classes = ["body-main-model__item"];

  if (car.id === selectItem) {
    classes.push("body-main-model__item--active");
  }

  function modelItemClick() {
    onMenuItemClick(
      car.id,
      car.model,
      car.name,
      car.number,
      car.fuel,
      car.color,
      car.img
    );
  }

  return (
    <div className={classes.join(" ")} onClick={modelItemClick}>
      <h5 className="body-main-model__title">{car.model}</h5>
      <p className="body-main-model__price">{car.price}</p>
      <img src={car.img} className="body-main-model__image" />
    </div>
  );
}

ModelItem.propTypes = {
  car: PropTypes.object,
  onMenuItemClick: PropTypes.func,
  selectItem: PropTypes.number,
};

export default ModelItem;
