import "../scss/MainNavbar.scss";
import MenuBtn from "./MenuBtn";
import profile from "../img/pro.PNG";
import logoWhite from "../img/logoWhite.PNG";
import icons from "../icons/sprite.svg";
export default function MainNavbar() {
  const menuBtns = [
    {
      name: "Dashboard",
      icon: `${icons}#icon-dashboard`,
      selected: true,
    },
    {
      name: "Profile",
      icon: `${icons}#icon-person`,
      selected: false,
    },
    {
      name: "My Projects",
      icon: `${icons}#icon-fact_check`,
      selected: false,
    },
    {
      name: "Messages",
      icon: `${icons}#icon-textsms`,
      selected: false,
    },
    {
      name: "Notifications",
      icon: `${icons}#icon-notifications`,
      selected: false,
    },
    {
      name: "Community",
      icon: `${icons}#icon-group`,
      selected: false,
    },
    {
      name: "Setting",
      icon: `${icons}#icon-settings`,
      selected: false,
    },
  ];
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
        {menuBtns.map((each) => (
          <MenuBtn name={each.name} icon={each.icon} key={each.name} selected={each.selected} />
        ))}
      </div>
      <button className="nav__logout">Log Out</button>
    </div>
  );
}
