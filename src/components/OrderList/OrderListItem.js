import React from "react";
import PropTypes from "prop-types";

function OrderListItem(props) {
  return (
    <div className="body-main__item">
      <div className="body-main__car">
        <img
          src={`http://api-factory.simbirsoft1.com${props.order.carId.thumbnail.path}`}
          alt=""
          className="body-main__image body-main__image--width"
        />
        <div className="body-main__descr">
          <p className="body-main__text body-main__text--light">
            <font>{props.order.carId.name.split(", ")[1]}</font> в
            <font>{" " + props.order.cityId.name}</font>,{" "}
            {props.order.pointId.address}
          </p>
          <p className="body-main__text body-main__text--light">
            12.06.2019 12:00 — 13.06.2019 12:00
          </p>
          <p className="body-main__text body-main__text--light">
            Цвет: <font>{props.order.color}</font>
          </p>
        </div>
      </div>
      <div className="body-main__checkbox-group">
        {/* {options.map((item) => {
          return <AdminCheckbox text={item.text} key={item.id} border />;
        })} */}
      </div>
      <div className="body-main__price">{props.order.price} ₽</div>
      <div className="body-main__btn-group">
        <button className="body-main__action body-main__action--accept">
          <img src={props.approveIcon} alt="accept_icon" />
          Готово
        </button>
        <button className="body-main__action body-main__action--decline">
          <img src={props.rejectIcon} alt="decline_icon" />
          Отмена
        </button>
        <button className="body-main__action body-main__action--change">
          <img src={props.editIcon} alt="edit_icon" />
          Изменить
        </button>
      </div>
    </div>
  );
}

OrderListItem.propTypes = {
  order: PropTypes.object,
  approveIcon: PropTypes.string,
  rejectIcon: PropTypes.string,
  editIcon: PropTypes.string,
};

export default OrderListItem;