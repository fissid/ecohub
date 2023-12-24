import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
import Quiz from "./Quiz";
import { useState } from "react";
import Suggestion from "./Suggestions";
import UserProfile from "./UserProfile";
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
  const [selectedMenuBtn, setSelectedMenuBtn] = useState(0);

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
    <main className="app">
      <section className="top">
        <MainNavbar menu={sideMenu} onClick={menuClickHandler}></MainNavbar>
        <Explore className="none middle"></Explore>
        {/* whne quiz is shown, profileNavbar is invisible */}
        <Quiz className=" middle"></Quiz>
        <Suggestion className="none middle"></Suggestion>
        <UserProfile className="none middle"></UserProfile>
        {/* without who is for user */}
        <ProfileNavbar className="none"></ProfileNavbar>
        {/* with who is for me */}
        <ProfileNavbar className="none" who="me">
          {" "}
        </ProfileNavbar>
      </section>
    </main>
  );
}

export default App;
