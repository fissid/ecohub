import "../scss/MainNavbar.scss";
import MenuBtn from "./MenuBtn";
import profile from "../img/pro.PNG";
import logoWhite from "../img/logoWhite.PNG";
import icons from "../icons/sprite.svg";
import { useState } from "react";
export default function MainNavbar({ menu }) {
  const [sideMenu, editSideMenu] = useState(menu);

  function menuClickHandler(e) {
    const clickedId = e.target.closest("button").dataset.id;
    editSideMenu((prev) => {
      return prev.map((each) => {
        if (each.id === +clickedId) {
          return { ...each, selected: true };
        } else {
          return { ...each, selected: false };
        }
      });
    });
  }
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logoWhite} alt="" className="nav__logo--img" />
      </div>
      <div className="nav__card">
        <img src={profile} alt="profile" className="nav__card--pro" />
        <h5 className="nav__card--name">Saeed Salehi</h5>
        <p className="nav__card--dep">Computer engineering</p>
      </div>
      <div className="nav__menu">
        {sideMenu.map((each) => (
          <MenuBtn data={each} onClick={menuClickHandler} key={each.id} />
        ))}
      </div>
      <button className="nav__logout">
        <svg className="nav__logout--icon">
          <use xlinkHref={`${icons}#icon-logout`}></use>
        </svg>
        <span className="mav__lagout--text">Log Out</span>
      </button>
    </div>
  );
}
