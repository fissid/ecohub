import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";

function App() {
  return (
    <main className="app">
      <section className="top">
        <MainNavbar></MainNavbar>
        <Explore></Explore>
      </section>
      <section className="middle"></section>
      <section className="bottom"></section>
    </main>
  );
}

export default App;
