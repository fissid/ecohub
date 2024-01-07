import "../scss/Suggestions.scss";
import StudentCard from "./StudentCard";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpeg";
import Icon from "./Icon";
const portfolioList = ["Teaching Assistant", "Freelance programmer", "Reasearch", "Student projects"];
const people = [
  { profile: `${p1}`, name: "Mehmet", dep: "Computer Engineering", skills: portfolioList },
  { profile: `${p2}`, name: "John", dep: "Mathematics", skills: portfolioList },
  { profile: `${p3}`, name: "Ana", dep: "Electrical Engineering", skills: portfolioList },
  { profile: `${p4}`, name: "Walter", dep: "Medicine", skills: portfolioList },
];
export default function Suggestion(props) {
  return (
    <div className={`${props.className} sggs`}>
      <div className="sggs__welcome">
        <h4>Suggested Students</h4>
      </div>
      <div className="sggs__feed">
        <StudentCard people={people[0]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[1]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[2]} visitProfile={props.visitProfile}></StudentCard>

        <StudentCard people={people[0]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[1]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[2]} visitProfile={props.visitProfile}></StudentCard>

        <StudentCard people={people[0]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[1]} visitProfile={props.visitProfile}></StudentCard>
        <StudentCard people={people[2]} visitProfile={props.visitProfile}></StudentCard>
      </div>
      <div className="sggs__footer">
        <button className="nav__logout">
          <span className="mav__lagout--text">Show More</span>
          <Icon name="keyboard_arrow_right" height={25} width={25}></Icon>
        </button>
      </div>
    </div>
  );
}
