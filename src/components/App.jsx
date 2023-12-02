import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
function App() {
  return (
    <main className="app">
      <section className="top">
        <MainNavbar></MainNavbar>
        <Explore></Explore>
        <ProfileNavbar></ProfileNavbar>
      </section>
      <section className="bottom"></section>
    </main>
  );
}

export default App;
