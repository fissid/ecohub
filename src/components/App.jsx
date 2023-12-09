import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
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
  return (
    <main className="app">
      <section className="top">
        <MainNavbar menu={menuBtns}></MainNavbar>
        <Explore></Explore>
        <ProfileNavbar></ProfileNavbar>
      </section>
      <section className="bottom"></section>
    </main>
  );
}

export default App;
