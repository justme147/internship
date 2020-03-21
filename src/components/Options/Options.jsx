import React from "react";

import OptionColor from "./OptionsColor.jsx";
import OptionDate from "./OptionsDate.jsx";
import OptionTariff from "./OptionsTariff.jsx";
import OptionServices from "./OptionsServices.jsx";

export default function Options(props) {
  return (
    <div className="body-main-options__inner">
      <div className="body-main-options">
        <h4 className="body-main-options__subtitle">Цвет</h4>
        <OptionColor menuColorChange={props.onMenuColorChange} />
        <h4 className="body-main-options__subtitle">Дата аренды</h4>
        <OptionDate inputDateChange={props.onInputDateChange} />
        <h4 className="body-main-options__subtitle">Тариф</h4>
        <OptionTariff menuTariffChange={props.onMenuTarifChange} />
        <h4 className="body-main-options__subtitle">Доп услуги</h4>
        <OptionServices menuServicesChange={props.onMenuServicesChange} />
      </div>
    </div>
  );
}