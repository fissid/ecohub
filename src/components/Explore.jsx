import icons from "../icons/sprite.svg";
import Skills from "./Skills";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
import quizImg from "../img/minim/quiz.png";
import "../scss/Explore.scss";
import StudentCard from "./StudentCard";
import { useState } from "react";
import Icon from "./Icon";
const portfolioList = ["Teaching Assistant", "Freelance programmer", "Reasearch", "Student projects"];
const people = [
  { profile: `${p1}`, name: "Mehmet", dep: "Computer Engineering", skills: portfolioList },
  { profile: `${p2}`, name: "John", dep: "Mathematics", skills: portfolioList },
  { profile: `${p3}`, name: "Ana", dep: "Electrical Engineering", skills: portfolioList },
  { profile: `${p4}`, name: "Walter", dep: "Medicine", skills: portfolioList },
];

export default function Explore() {
  const [addable, changeAddadble] = useState(false);
  const [addedPortfolio, changeAddedPortfolio] = useState("");

  function addBtnHandler() {
    if (!addedPortfolio) {
      changeAddadble((prev) => !prev);
    } else {
      portfolioList.push(addedPortfolio);
      changeAddadble((prev) => !prev);
      changeAddedPortfolio("");
    }
  }
  function deleteHandler(e) {
    // delete portfolio is not working
    portfolioList.splice(e.target.closest("li").dataset.id, 1);
    changeAddadble(false);
  }
  return (
    <div className="explore">
      <div className="explore__welcome">
        <h4>Welcome back Saeed!</h4>
      </div>
      <div className="explore__feed">
        <div className="skills left">
          <h5 className="feed_title">Skills & Endorsement</h5>
          <Skills name="Python" people={people}></Skills>
          <Skills name="Data Structure" people={[...people].reverse()}></Skills>
          <Skills name="Algorithm" people={people}></Skills>
          <Skills name="Mathematik " people={[...people].reverse()}></Skills>
        </div>
        <div className="right">
          <div className="portfolio">
            <div className="portfolio__header">
              <h5 className="feed_title">Portfolio / Activities</h5>
              <div>
                <button className="edit" onClick={addBtnHandler}>
                  <Icon
                    name={addable.second ? "clipboard" : "create"}
                    className="icon"
                    onClick={() => {
                      changeAddadble((prev) => !prev);
                      addBtnHandler();
                    }}
                  ></Icon>
                </button>
              </div>
            </div>
            <ul className={`${addable ? "portfolio__list portfolio__list--addable" : "portfolio__list"}`}>
              {portfolioList.map((each, i) => (
                <li key={i} data-id={i}>
                  <Icon name="add" className={`${addable ? "delete" : "none"}`} height={14} width={14} onClick={deleteHandler}></Icon>
                  {each}
                </li>
              ))}
              {addable && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    changeAddedPortfolio(e.target.querySelector(".portfolio__list--input").value);
                    addBtnHandler();
                  }}
                >
                  <li>
                    <input type="text" className="portfolio__list--input" value={addedPortfolio} onChange={(e) => changeAddedPortfolio(e.target.value)}></input>
                  </li>
                </form>
              )}
            </ul>
            {/* <div className={`${addable ? "portfolio__btns" : "none"}`}>
              <button className="add" onClick={addBtnHandler}>
                Add
              </button>

              <button className="cancel" onClick={cancelPortfolioHandler}>
                Cancel
              </button>
            </div> */}
          </div>
          <button className="quiz">
            <div className="quiz__img">
              <img src={quizImg} alt="" />
            </div>
            <div className="quiz__box">
              <h2>Take the quiz to test your skills</h2>
              <svg className="icon">
                <use xlinkHref={`${icons}#icon-keyboard_arrow_right`}></use>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="explore__suggestions">
        <div className="explore__suggestions--head">
          <h5 className="feed_title">Suggested Students</h5>
          <button className="allStudents">See all</button>
        </div>
        <div className="explore__suggestions--body">
          <StudentCard people={people[0]}></StudentCard>
          <StudentCard people={people[1]}></StudentCard>
          <StudentCard people={people[2]}></StudentCard>
        </div>
      </div>
    </div>
  );
}
