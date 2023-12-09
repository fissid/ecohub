import { useState } from "react";
import "../scss/MenuBtn.scss";
import Icon from "./Icon";
export default function MenuBtn({ data, ...props }) {
  // console.log(data);
  return (
    <button className={`menu-btn ${data.selected ? "selected" : ""}`} {...props} data-id={data.id}>
      <a href={`#${data.page}`}>
        <Icon name={data.icon} className="menu-btn__icon"></Icon>
        <span className="menu-btn__name">{data.name}</span>
      </a>
    </button>
  );
}
