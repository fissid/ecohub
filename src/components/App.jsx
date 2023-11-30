import "../scss/App.scss";
import MainNavbar from "./MainNavbar";

function App() {
  return (
    <main className="app">
      <section className="top">
        <MainNavbar></MainNavbar>
      </section>
      <section className="middle"></section>
      <section className="bottom"></section>
    </main>
  );
}

export default App;
