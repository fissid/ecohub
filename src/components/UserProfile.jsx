import "../scss/UserProfile.scss";
import Skills from "./Skills";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
import requestImg from "../img/minim/request.png";
const portfolioList = ["Teaching Assistant", "Freelance programmer", "Reasearch", "Student projects"];
const people = [
  { profile: `${p1}`, name: "Mehmet", dep: "Computer Engineering", skills: portfolioList },
  { profile: `${p2}`, name: "John", dep: "Mathematics", skills: portfolioList },
  { profile: `${p3}`, name: "Ana", dep: "Electrical Engineering", skills: portfolioList },
  { profile: `${p4}`, name: "Walter", dep: "Medicine", skills: portfolioList },
];
export default function UserProfile(props) {
  return (
    <div className={`${props.className} pr`}>
      <div className="pr__welcome">
        <h4>Mehmet Memetian</h4>
        <button className="nav__logout">
          <span className="mav__lagout--text">Connect</span>
        </button>
      </div>
      <div className="explore__feed">
        <div className="left">
          <h5 className="feed_title">Skills & Endorsement</h5>
          <div className="body">
            <Skills name="Python" people={people}></Skills>
            <Skills name="Data Structure" people={[...people].reverse()}></Skills>
            <Skills name="Algorithm" people={people}></Skills>
            <Skills name="Mathematik " people={[...people].reverse()}></Skills>
          </div>
          <div className="footer">
            <button className="nav__logout">
              <span className="mav__lagout--text">Endorsment</span>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="portfolio">
            <div className="portfolio__header">
              <h5 className="feed_title">Portfolio / Activities</h5>
            </div>
            <ul className={"portfolio__list"}>
              {portfolioList.map((each, i) => (
                <li key={i} data-id={i}>
                  {each}
                </li>
              ))}
            </ul>
          </div>

          <div className="req">
            <div className="req__header">
              <h5 className="feed_title">Request</h5>
            </div>

            <div className="req__middle">
              <h5>Programming</h5>
              <h5>Artifitial Inteligence</h5>
            </div>
            <div className="req__text">
              <p>I have an AI project that is half done. Currently, I encountered an error that cannot be solved Please experts contact me</p>
            </div>
            <div className="req__img">
              <img src={requestImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
