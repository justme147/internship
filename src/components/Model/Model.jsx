import React, { useState } from "react";

import ModelMenu from "./ModelMenu.jsx";
import ModelList from "./ModelList.jsx";

export default function Model(props) {
  const [car, setCar] = useState([
    {
      id: 1,
      model: "ELANTRA",
      price: "12 000 - 15 000 Р",
      class: "eco",
      name: "Hyndai",
      number: "К 761 НА 73",
      fuel: "36%",
      color: ["Красный", "Белый", "Коричневый"]
    },
    {
      id: 2,
      model: "i30 N",
      price: "10 000 - 32 000 Р",
      class: "premium",
      name: "Hyndai",
      number: "Л 235 ЛК 73",
      fuel: "85%",
      color: ["Зеленый", "Красный", "Синий"]
    },
    {
      id: 3,
      model: "CRETA",
      price: "12 000 - 25 000 Р",
      class: "premium",
      name: "Hyndai",
      number: "Р 359 ВО 73",
      fuel: "91%",
      color: ["Желтый", "Белый", "Красный"]
    },
    {
      id: 4,
      model: "SONATA",
      price: "10 000 - 32 000 Р",
      class: "eco",
      name: "Hyndai",
      number: "А 193 МН 73",
      fuel: "3%",
      color: ["Черный", "Красный", "Голубой"]
    },
    {
      id: 5,
      model: "ELANTRA",
      price: "12 000 - 15 000 Р",
      class: "premium",
      name: "Hyndai",
      number: "А 111 БВ 73",
      fuel: "100%",
      color: ["Красный", "Оранжевый", "Зеленый"]
    },
    {
      id: 6,
      model: "i30 N",
      price: "10 000 - 32 000 Р",
      class: "premium",
      name: "Hyndai",
      number: "Б 222 ГД 73",
      fuel: "55%",
      color: ["Белый", "Красный", "Серый"]
    },
    {
      id: 7,
      model: "CRETA",
      price: "12 000 - 25 000 Р",
      class: "eco",
      name: "Hyndai",
      number: "Д 333 ЕК 73",
      fuel: "86%",
      color: ["Красный", "Оранжевый", "Белый"]
    },
    {
      id: 8,
      model: "SONATA",
      price: "10 000 - 32 000 Р",
      class: "eco",
      name: "Hyndai",
      number: "Е 444 УК 73",
      fuel: "30%",
      color: ["Красный", "Черный", "Белый"]
    }
  ]);

  const [select, setSelect] = useState(null);

  const [filter, setFilter] = useState("all");

  function handleMenuClick(name) {
    setFilter(name);
  }

  function handleItemClick(id, model, name, number, fuel, colors) {
    const color = ["Любой"];
    setSelect(id);
    props.onMenuItemClick("value", model, 1);
    props.onMenuItemClick("name", name, 1);
    props.onMenuItemClick("number", number, 1);
    props.onMenuItemClick("fuel", fuel, 1);
    props.onModelClick(color.concat(colors));
  }

  return (
    <div className="body-main-model__inner">
      <div className="body-main-model">
        <ModelMenu filter={filter} onMenuClick={handleMenuClick} />
        <ModelList
          cars={car}
          filter={filter}
          onMenuItemClick={handleItemClick}
          selectItem={select}
        />
      </div>
    </div>
  );
}
