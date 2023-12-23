import { useEffect, useState } from "react";
import "../scss/Quiz.scss";
import Icon from "./Icon";
const acceptedSVG = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 29C5.20435 29 4.44129 28.6839 3.87868 28.1213C3.31607 27.5587 3 26.7956 3 26V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H22C22.2652 3 22.5196 3.10536 22.7071 3.29289C22.8946 3.48043 23 3.73478 23 4C23 4.26522 22.8946 4.51957 22.7071 4.70711C22.5196 4.89464 22.2652 5 22 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H26C26.2652 27 26.5196 26.8946 26.7071 26.7071C26.8946 26.5196 27 26.2652 27 26V16C27 15.7348 27.1054 15.4804 27.2929 15.2929C27.4804 15.1054 27.7348 15 28 15C28.2652 15 28.5196 15.1054 28.7071 15.2929C28.8946 15.4804 29 15.7348 29 16V26C29 26.7956 28.6839 27.5587 28.1213 28.1213C27.5587 28.6839 26.7956 29 26 29H6Z"
      fill="#112D4E"
    />
    <path
      d="M16.708 20.708L30.708 6.70804C30.801 6.61507 30.8748 6.50469 30.9251 6.38321C30.9754 6.26173 31.0013 6.13153 31.0013 6.00004C31.0013 5.86855 30.9754 5.73835 30.9251 5.61688C30.8748 5.4954 30.801 5.38502 30.708 5.29204C30.6151 5.19907 30.5047 5.12531 30.3832 5.075C30.2617 5.02468 30.1315 4.99878 30 4.99878C29.8686 4.99878 29.7384 5.02468 29.6169 5.075C29.4954 5.12531 29.385 5.19907 29.292 5.29204L16 18.586L10.708 13.292C10.6151 13.1991 10.5047 13.1253 10.3832 13.075C10.2617 13.0247 10.1315 12.9988 10 12.9988C9.86856 12.9988 9.73835 13.0247 9.61688 13.075C9.4954 13.1253 9.38502 13.1991 9.29204 13.292C9.19907 13.385 9.12531 13.4954 9.075 13.6169C9.02468 13.7384 8.99878 13.8686 8.99878 14C8.99878 14.1315 9.02468 14.2617 9.075 14.3832C9.12531 14.5047 9.19907 14.6151 9.29204 14.708L15.292 20.708C15.3849 20.8012 15.4953 20.8751 15.6168 20.9255C15.7383 20.9759 15.8685 21.0018 16 21.0018C16.1316 21.0018 16.2618 20.9759 16.3833 20.9255C16.5048 20.8751 16.6152 20.8012 16.708 20.708Z"
      fill="#112D4E"
    />
  </svg>
);
const notAcceptedSVG = (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.686 7.31395C22.5467 7.17456 22.3813 7.06398 22.1992 6.98854C22.0172 6.9131 21.8221 6.87427 21.625 6.87427C21.4279 6.87427 21.2328 6.9131 21.0507 6.98854C20.8687 7.06398 20.7033 7.17456 20.564 7.31395L15 12.8799L9.43599 7.31495C9.1546 7.03355 8.77294 6.87547 8.37499 6.87547C7.97704 6.87547 7.59539 7.03355 7.31399 7.31495C7.0326 7.59634 6.87451 7.978 6.87451 8.37595C6.87451 8.7739 7.0326 9.15555 7.31399 9.43695L12.88 14.9999L7.31499 20.5639C7.17566 20.7033 7.06514 20.8687 6.98973 21.0507C6.91432 21.2328 6.87551 21.4279 6.87551 21.6249C6.87551 22.0229 7.0336 22.4046 7.31499 22.6859C7.59639 22.9673 7.97804 23.1254 8.37599 23.1254C8.77394 23.1254 9.1556 22.9673 9.43699 22.6859L15 17.1199L20.564 22.6849C20.8454 22.9663 21.227 23.1244 21.625 23.1244C22.0229 23.1244 22.4046 22.9663 22.686 22.6849C22.9674 22.4036 23.1255 22.0219 23.1255 21.6239C23.1255 21.226 22.9674 20.8443 22.686 20.5629L17.12 14.9999L22.685 9.43595C22.8244 9.29665 22.935 9.13125 23.0104 8.94919C23.0858 8.76714 23.1247 8.57201 23.1247 8.37495C23.1247 8.17788 23.0858 7.98275 23.0104 7.8007C22.935 7.61865 22.8244 7.45325 22.685 7.31395H22.686Z"
      fill="#112D4E"
    />
    <path
      d="M5 0C4.34339 0 3.69321 0.129329 3.08658 0.380602C2.47995 0.631876 1.92876 1.00017 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V25C0 26.3261 0.526784 27.5979 1.46447 28.5355C1.92876 28.9998 2.47995 29.3681 3.08658 29.6194C3.69321 29.8707 4.34339 30 5 30H25C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25V5C30 4.34339 29.8707 3.69321 29.6194 3.08658C29.3681 2.47995 28.9998 1.92876 28.5355 1.46447C28.0712 1.00017 27.52 0.631876 26.9134 0.380602C26.3068 0.129329 25.6566 0 25 0H5ZM2 5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H25C25.7956 2 26.5587 2.31607 27.1213 2.87868C27.6839 3.44129 28 4.20435 28 5V25C28 25.7956 27.6839 26.5587 27.1213 27.1213C26.5587 27.6839 25.7956 28 25 28H5C4.20435 28 3.44129 27.6839 2.87868 27.1213C2.31607 26.5587 2 25.7956 2 25V5Z"
      fill="#112D4E"
    />
  </svg>
);
const unDoneSVG = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667Z" stroke="#112D4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

// const skills = ["Python", "Data structure", "Algorithm", "Numerical Analysis", "Linear Algebra", "Artifitial inteligence"];
const skills = [
  { id: 0, name: "python", situation: 1 },
  { id: 1, name: "Data structure", situation: 0 },
  { id: 2, name: "Algorithm", situation: 1 },
  { id: 3, name: "Numerical Analysis", situation: 0 },
  { id: 4, name: "Linear Algebra", situation: 0 },
  { id: 5, name: "Artifitial inteligence", situation: 3 },
];

export default function Quiz(props) {
  const [selectedSkill, setSelectedSkill] = useState();
  const [quizMode, setQuizMode] = useState(false);
  function clickedSkill(skillId) {
    setSelectedSkill(skillId);
  }
  function startQuiz(id) {
    setQuizMode(true);
  }
  return (
    <div className={`${props.className} quiz`}>
      {quizMode && <Modal>Data Structure</Modal>}
      <div className="quiz__explanation">
        <p>This quiz is to verify the skills you have mentioned in your profile. If you want to be shown in your skill categories, you must take the quiz for each skill. First, specify the skill so that the exam questions related to it will be given.</p>
        <p>Each quiz has 10 multiple choice questions that you have to answer in a certain time.</p>
        <ul>
          <li>
            {acceptedSVG}
            <p>accepted</p>
          </li>
          <li>
            {notAcceptedSVG}
            <p>not accepted</p>
          </li>
          <li>
            {unDoneSVG}
            <p>undone</p>
          </li>
        </ul>
      </div>
      <div className="quiz__skills">
        <div className="quiz__skills-box">
          <div className="box__header">
            <h4>Select Skill</h4>
          </div>
          <ul className="box__body">
            {skills.map((each) => {
              let skillSituation;
              if (each.situation === 0) skillSituation = notAcceptedSVG;
              else if (each.situation === 1) skillSituation = acceptedSVG;
              else skillSituation = unDoneSVG;

              return (
                <li key={each.id} onClick={() => clickedSkill(each.id)}>
                  <span className={each.id === selectedSkill ? "selected" : ""}>{each.name}</span> {skillSituation}
                </li>
              );
            })}
          </ul>
          <div className="box__footer">
            <button className="nav__logout" onClick={() => startQuiz(selectedSkill)}>
              <span className="mav__lagout--text">Start</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal({ children }) {
  const percentage = 50;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header">
          <div className="time">
            <span>15:00</span>
            <Icon name="timer" height={25} width={25}></Icon>
          </div>
          <h3>{children}</h3>
          <Icon name="cross" className="close"></Icon>
        </div>
        <div className="body">
          <div className="bar-container">
            <div className="bar" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="question">
            <p className="count">
              <span>4</span>/10
            </p>
            <p className="text">Which data structure is needed to convert infix notation to postfix notation?</p>
          </div>
          <ul className="answers">
            <li>
              <span>Tree</span>
            </li>
            <li>
              <span>Branch</span>
            </li>
            <li>
              <span>Stack</span>
            </li>
            <li>
              <span>Queue</span>
            </li>
          </ul>
        </div>
        <div className="footer">
          <button className="nav__logout">
            <span className="mav__lagout--text">
              <Icon name="arrow-left2" height={25} width={25}></Icon>
            </span>
          </button>
          <button className="nav__logout">
            <span className="mav__lagout--text">
              <Icon name="arrow-right2" height={25} width={25}></Icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
