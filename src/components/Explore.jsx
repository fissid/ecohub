import icons from "../icons/sprite.svg";
import Skills from "./Skills";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
import "../scss/Explore.scss";

export default function Explore() {
  const people = [
    { profile: `${p1}`, name: "Mehmet" },
    { profile: `${p2}`, name: "John" },
    { profile: `${p3}`, name: "Ana" },
    { profile: `${p4}`, name: "Walter" },
  ];
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
          <h5>Skills & Endorsement</h5>
          <Skills name="Python" people={people}></Skills>
          <Skills name="Data Structure" people={[...people].reverse()}></Skills>
          <Skills name="Algorithm" people={people}></Skills>
          <Skills name="Mathematik " people={[...people].reverse()}></Skills>
        </div>
        <div className="right">
          <div className="portfolio">
            <div className="portfolio__header">
              <h5>Portfolio / Activities</h5>
              <svg className="icon">
                <use xlinkHref={`${icons}#icon-add`}></use>
              </svg>
              <svg className="icon">
                <use xlinkHref={`${icons}#icon-create`}></use>
              </svg>
            </div>
            <ul className="portfolio__list">
              <li>Teaching Assistant</li>
              <li>Freelance programmer</li>
              <li>Reasearch</li>
              <li>Student projects</li>
            </ul>
          </div>
          <div className="quiz">QUIZ</div>
        </div>
      </div>
      <div className="explore__suggestions"></div>
    </div>
  );
}
