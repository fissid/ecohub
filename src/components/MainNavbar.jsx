import "../scss/MainNavbar.scss";
import MenuBtn from "./MenuBtn";
import profile from "../img/pro.PNG";
import logoWhite from "../img/logoWhite.PNG";
import icons from "../icons/sprite.svg";
import { useState } from "react";
export default function MainNavbar({ menu }) {
  const [sideMenu, editSideMenu] = useState(menu);
  // console.log(sideMenu);
  function menuClickHandler(e) {
    editSideMenu((prev) => {
      prev[e.target.closest("button").dataset.id] = { ...prev[e.target.closest("button").dataset.id], selected: true };
      console.log(prev);
      return prev;
    });
    // console.log(sideMenu[e.target.closest("button").dataset.id]);
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
