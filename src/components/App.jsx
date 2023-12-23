import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
import Quiz from "./Quiz";
import { useState } from "react";
import Suggestion from "./Suggestions";
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
        <Quiz className="none middle"></Quiz>
        <Suggestion className="middle"></Suggestion>
        <ProfileNavbar className=""></ProfileNavbar>
      </section>
    </main>
  );
}

export default App;
