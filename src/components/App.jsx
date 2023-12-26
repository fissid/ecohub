import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
import Quiz from "./Quiz";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestions";
import UserProfile from "./UserProfile";
import Projects from "./Projects";
const menuBtns = [
  {
    id: 0,
    name: "Dashboard",
    icon: `dashboard`,
    selected: true,
    page: "dashboard",
  },
  {
    id: 1,
    name: "My Projects",
    icon: `fact_check`,
    selected: false,
    page: "projects",
  },
  {
    id: 2,
    name: "Community",
    icon: `group`,
    selected: false,
    page: "community",
  },
  {
    id: 3,
    name: "Quiz",
    icon: `developer_mode`,
    selected: false,
    page: "quiz",
  },
];
function App() {
  const [sideMenu, editSideMenu] = useState(menuBtns);

  // const [selectedMenuBtn, setSelectedMenuBtn] = useState(0);
  useEffect(
    function () {
      sideMenu.forEach((each) => {
        if (each.selected) {
          document.title = `Ecohub | ${each.name}`;
        }
      });
      return function () {
        document.title = "Ecohub";
      };
    },
    [sideMenu]
  );

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

  let tag;
  let profileNav;
  sideMenu.forEach((each) => {
    if (each.selected) {
      switch (each.id) {
        case 0:
          tag = <Explore className="middle"></Explore>;
          profileNav = <ProfileNavbar who="me"></ProfileNavbar>;
          break;
        case 1:
          tag = <Projects className="middle"></Projects>;
          profileNav = <ProfileNavbar who="me"></ProfileNavbar>;
          break;
        case 2:
          tag = <Suggestion className="middle"></Suggestion>;
          profileNav = <ProfileNavbar who="me"></ProfileNavbar>;
          break;
        case 3:
          tag = <Quiz className="middle"></Quiz>;
          profileNav = null;
          break;
        default:
      }
    }
  });

  return (
    <main className="app">
      <section className="top">
        <MainNavbar menu={sideMenu} onClick={menuClickHandler}></MainNavbar>
        {tag}
        {/* whne quiz is shown, profileNavbar is invisible */}
        <UserProfile className="none middle"></UserProfile>
        {profileNav}
        {/* without who is for user */}
        {/* <ProfileNavbar className={`${sideMenu[3].selected ? "none" : !sideMenu[0].selected ? "" : "none"}`}></ProfileNavbar> */}
        {/* with who is for me */}
        {/* <ProfileNavbar className={`${sideMenu[3].selected ? "none" : sideMenu[0].selected ? "" : "none"}`} who="me"></ProfileNavbar> */}
      </section>
    </main>
  );
}

export default App;
