import icons from "../icons/sprite.svg";
import Skills from "./Skills";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
import "../scss/Explore.scss";
import { useState } from "react";

export default function Explore() {
  const [editable, changeEditable] = useState(false);
  const [addable, changeAddadble] = useState(false);
  const people = [
    { profile: `${p1}`, name: "Mehmet" },
    { profile: `${p2}`, name: "John" },
    { profile: `${p3}`, name: "Ana" },
    { profile: `${p4}`, name: "Walter" },
  ];
  const portfolioList = ["Teaching Assistant", "Freelance programmer", "Reasearch", "Student projects"];
  function editPortfolioHandler() {
    // editing (delete btn) is not completed
    changeAddadble(false);
    changeEditable((prev) => !prev);
  }
  function addPortfolioHandler() {
    // adding is not completed
    changeEditable(false);
  }
  return (
    <div className="explore">
      <div className="explore__search">
        <h4>Welcome back Saeed!</h4>
        <div className="explore__search--box">
          <input type="text" name="search" id="" className="box" placeholder="Search" />
          <svg className="icon">
            <use xlinkHref={`${icons}#icon-search`}></use>
          </svg>
        </div>
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
                <button className="edit" onClick={addPortfolioHandler}>
                  <svg className="icon">
                    <use xlinkHref={`${icons}#icon-add`}></use>
                  </svg>
                </button>
                <button className="edit" onClick={editPortfolioHandler}>
                  <svg className="icon">
                    <use xlinkHref={`${icons}#icon-create`}></use>
                  </svg>
                </button>
              </div>
            </div>
            <ul className={`${editable ? "portfolio__list portfolio__list--editable" : "portfolio__list"}`}>
              {portfolioList.map((each, i) => (
                <li key={i}>
                  <input type="checkbox" name={each} className={`${editable ? "delete" : "none"}`}></input>
                  {each}
                </li>
              ))}
            </ul>
            <div className={`${editable ? "portfolio__btns" : "none"}`}>
              <button className="save">Delete</button>
              <button className="cancel" onClick={editPortfolioHandler}>
                Cancel
              </button>
            </div>
          </div>
          <div className="quiz">
            <h5 className="feed_title">Quiz</h5>
          </div>
        </div>
      </div>
      <div className="explore__suggestions"></div>
    </div>
  );
}
