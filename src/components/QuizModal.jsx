import { useEffect, useReducer } from "react";
import "../scss/Quiz.scss";
import Icon from "./Icon";

const SEC_PER_QUESTION = 15;
const INITIALSTATE = {
  questions: [],
  status: "loading",
  currentQuestion: 0,
  answer: null,
  points: 0,
  secondsRemained: null,
};
function reducer(state, action) {
  // status:
  // loading, error, ready, active, finish

  // state.types:
  // dataRecieved, dataFailed, quizStarted, questionAnswer, nextQuestion, quizFinished, reset
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "reday",
      };
    default:
      throw new Error("smt happened");
  }
}
export default function QuizModal({ onClose, selectedSkill }) {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  const { questions, status, currentQuestion, answer, points, secondsRemained } = state;
  const numQuestions = questions.length;

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const resp = await fetch("http://localhost:8000/questions");
        const data = await resp.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.log(err);
      }
    }
    fetchQuestions();
  }, []);
  console.log(questions.at(currentQuestion));

  return (
    <div className="modal">
      {status === "loading" && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading questions...</p>
        </div>
      )}
      {status === "error" && <p className="error">There was an error fecthing questions.</p>}
      {status === "reday" && (
        <div className="modal-content">
          <div className="header">
            <div className="time">
              <span>15:00</span>
              <Icon name="timer" height={25} width={25}></Icon>
            </div>
            <h3>{selectedSkill}</h3>
            <Icon name="cross" className="close" onClick={() => onClose(false)}></Icon>
          </div>
          <div className="body">
            <div className="bar-container">
              <div className="bar" style={{ width: `${currentQuestion + 1 * 10}%` }}></div>
            </div>
            <div className="question">
              <p className="count">
                <span>{currentQuestion + 1}</span>/{numQuestions}
              </p>
              <p className="text">{questions.at(currentQuestion).question}</p>
            </div>
            <ul className="answers">
              {questions.at(currentQuestion).options.map((each) => (
                <li key={each}>
                  <span>{each}</span>
                </li>
              ))}
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
      )}
    </div>
  );
}
