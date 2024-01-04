import "../scss/App.scss";
import MainNavbar from "./MainNavbar";
import Explore from "./Explore";
import ProfileNavbar from "./ProfileNavbar";
import Quiz from "./Quiz";
import { useState } from "react";
import Suggestion from "./Suggestions";
import UserProfile from "./UserProfile";
import Projects from "./Projects";
import Login from "./Login";
import SignUp from "./SignUp";
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
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displaySignup, setDisplaySignup] = useState(false);

  // useEffect(
  //   function () {
  //     sideMenu.forEach((each) => {
  //       if (each.selected) {
  //         document.title = `Ecohub | ${each.name}`;
  //       }
  //     });
  //     return function () {
  //       document.title = "Ecohub";
  //     };
  //   },
  //   [sideMenu]
  // );

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

  function userLoginHandler(email, pass) {
    console.log(email, pass);
  }

  function userSignUpHandler(email, pass) {
    setDisplayLogin(false);
    setDisplaySignup(false);
    console.log(email, pass);
  }

  function loginPageHandler() {
    setDisplayLogin(true);
    setDisplaySignup(false);
  }

  function signUpPageHandler() {
    setDisplaySignup(true);
    setDisplayLogin(false);
  }

  let tag;
  let profileNav;
  /* without who is for user */
  /* with who is for me */
  /* whne quiz is shown, profileNavbar is invisible */
  sideMenu.forEach((each) => {
    if (each.selected) {
      switch (each.id) {
        case 0:
          tag = (
            <Explore
              className="middle"
              onCommunity={() => {
                editSideMenu((prev) => {
                  return prev.map((each) => {
                    if (each.id === 2) {
                      return { ...each, selected: true };
                    } else {
                      return { ...each, selected: false };
                    }
                  });
                });
              }}
              onQuiz={() => {
                editSideMenu((prev) => {
                  return prev.map((each) => {
                    if (each.id === 3) {
                      return { ...each, selected: true };
                    } else {
                      return { ...each, selected: false };
                    }
                  });
                });
              }}
            ></Explore>
          );
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
      <section className="not-ok">
        <h4>Regrettably, this application is currently not accessible on mobile and tablet devices ;(</h4>
      </section>
      {displaySignup ? (
        <section className="top">
          <SignUp loginPageHandler={loginPageHandler} userSignUpHandler={userSignUpHandler}></SignUp>
        </section>
      ) : displayLogin ? (
        <section className="top">
          <Login userLoginHandler={userLoginHandler} signUpPageHandler={signUpPageHandler}></Login>
        </section>
      ) : (
        <section className="top">
          <MainNavbar menu={sideMenu} onClick={menuClickHandler} logoutHandler={loginPageHandler}></MainNavbar>
          {tag}
          <UserProfile className="none middle"></UserProfile>
          {profileNav}
        </section>
      )}
    </main>
  );
}

export default App;
