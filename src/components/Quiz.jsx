import "../scss/Quiz.scss";
import Icon from "./Icon";
export default function Quiz(props) {
  return (
    <div className={`${props.className} quiz`}>
      <div className="quiz__explanation">
        <p>This quiz is to verify the skills you have mentioned in your profile. If you want to be shown in your skill categories, you must take the quiz for each skill. First, specify the skill so that the exam questions related to it will be given.</p>
        <p>Each quiz has 10 multiple choice questions that you have to answer in a certain time.</p>
        <ul>
          <li>
            <Icon name="check_circle1" className="acc" height={25} width={25}></Icon>
            <p>accepted</p>
          </li>
          <li>
            <Icon name="add_circle" className="nacc" height={25} width={25}></Icon>
            <p>not accepted</p>
          </li>
          <li>
            <Icon name="spinner7" height={22} width={22} className="undone"></Icon>
            <p>undoone</p>
          </li>
        </ul>
      </div>
      <div className="skills"></div>
    </div>
  );
}
