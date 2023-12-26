import { useState } from "react";
import "../scss/Projects.scss";
import Icon from "./Icon";

const acceptedSVG = (
  <svg className="sit-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const unDoneSVG = (
  <svg className="sit-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667Z" stroke="#112D4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const projectsData = [
  { id: 0, name: "Phyton", cat: "programming", completed: false },
  { id: 1, name: "linear algebra", cat: "Mathematics", completed: true },
  { id: 2, name: "machine learning", cat: "programming", completed: false },
  { id: 3, name: "algorithm", cat: "programming", completed: true },
  { id: 4, name: "artifitial inteligence", cat: "programming", completed: true },
  { id: 5, name: "database", cat: "programming", completed: true },
  { id: 6, name: "java", cat: "programming", completed: true },
];

const request = {
  cat: "programming",
  name: "artifitial inteligence",
  text: "I have an AI project that is half done. Currently, I encountered an error that cannot be solved Please experts contact me",
};

export default function Projects(props) {
  const [editMode, setEditMode] = useState(false);
  const [requestItem, setRequestItem] = useState(request);
  function edit(e, where) {
    switch (where) {
      case "cat":
        setRequestItem((prev) => {
          return {
            ...prev,
            cat: e.target.value,
          };
        });
        break;
      case "name":
        setRequestItem((prev) => {
          return {
            ...prev,
            name: e.target.value,
          };
        });
        break;
      case "text":
        setRequestItem((prev) => {
          return {
            ...prev,
            text: e.target.value,
          };
        });
        break;
      default:
    }
  }
  return (
    <div className={`${props.className} projects`}>
      <div className="projects__sec">
        <h4>In Progress</h4>
        <ul className="list">
          {projectsData.map((each) => {
            if (!each.completed) {
              return (
                <li key={each.id}>
                  {unDoneSVG}
                  <span>
                    {each.name} / {each.cat}
                  </span>
                  <button>
                    <a href="https://github.com/fissid" target="_blank" rel="noreferrer">
                      <Icon name="arrow-up-right2"></Icon>
                    </a>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="projects__sec">
        <h4>Completed</h4>
        <ul className="list">
          {projectsData.map((each) => {
            if (each.completed) {
              return (
                <li key={each.id}>
                  {acceptedSVG}
                  <span>
                    {each.name} / {each.cat}
                  </span>
                  <button>
                    <a href="https://github.com/fissid" target="_blank" rel="noreferrer">
                      <Icon name="arrow-up-right2"></Icon>
                    </a>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="projects__req">
        <div className="projects__req-header">
          <h5 className="feed_title">Request</h5>
          <Icon name={editMode ? "clipboard" : "create"} onClick={() => setEditMode((prev) => !prev)}></Icon>
        </div>

        <div className="projects__req-middle">
          {editMode ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditMode((prev) => !prev);
              }}
            >
              <input type="text" value={requestItem.cat} onChange={(e) => edit(e, "cat")} />
            </form>
          ) : (
            <h5>{requestItem.cat}</h5>
          )}
          {editMode ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditMode((prev) => !prev);
              }}
            >
              <input type="text" value={requestItem.name} onChange={(e) => edit(e, "name")} />
            </form>
          ) : (
            <h5>{requestItem.name}</h5>
          )}
        </div>
        <div className="projects__req-text">
          {editMode ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditMode((prev) => !prev);
              }}
            >
              <textarea value={requestItem.text} onChange={(e) => edit(e, "text")} cols="120" rows="3" />
            </form>
          ) : (
            <p>{requestItem.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}
