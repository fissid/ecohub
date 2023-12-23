import "../scss/UserProfile.scss";
import Skills from "./Skills";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
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
        <div className="right"></div>
      </div>
    </div>
  );
}
