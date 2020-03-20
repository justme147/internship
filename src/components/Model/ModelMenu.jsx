import React, { useState } from "react";

import ModelMenuItem from "./ModelMenuItem.jsx";

export default function ModelMenu(props) {
  const [menu, setMenu] = useState([
    { id: 1, name: "all", title: "Все модели" },
    { id: 2, name: "eco", title: "Эконом" },
    { id: 3, name: "premium", title: "Премиум" }
  ]);
  return (
    <ul className="body-main-model__ul">
      {menu.map(item => {
        return (
          <ModelMenuItem
            item={item}
            filter={props.filter}
            key={item.id}
            menuClick={props.onMenuClick}
          />
        );
      })}
    </ul>
  );
}