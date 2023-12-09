import "../scss/ProfileNavbar.scss";
import pro from "../img/p4.jpeg";
import Icon from "./Icon";
import { useState } from "react";

const user = {
  profile: pro,
  name: "Saeed Salehi",
  dep: "Computer Engineering",
  uni: "Medipol University",
  skills: ["Html", "Css", "Js", "React", "Oop"],
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, officia. Quod dvdv aspernatur nostrum exercitationem et nesciunt officiis nobis",
  email: "salehisaeed30@outlook.com",
  link: "https://www.linkedin.com/in/saeed-salehi-06481a194/",
  git: "https://github.com/fissid",
  site: "www.google.com",
};
export default function ProfileNavbar(props) {
  const [editableMode, editEditableMode] = useState({
    first: false,
    second: false,
    third: false,
    forth: false,
  });

  const [userInfo, editUserInfo] = useState(user);

  function edit(e, element) {
    editUserInfo((prev) => {
      const updatedUserInfo = { ...prev };
      updatedUserInfo[element] = e.target.value;
      return updatedUserInfo;
    });
  }

  function editSkills(val, element = "skills") {
    if (!val) return;
    editUserInfo((prev) => {
      const updatedUserInfo = { ...prev };
      updatedUserInfo[element].push(val);
      return updatedUserInfo;
    });
  }

  function deleteHandler(e) {
    editUserInfo((prev) => {
      const updatedUserInfo = { ...prev };
      updatedUserInfo.skills.splice(e.target.closest("li").dataset.id, 1);
      return updatedUserInfo;
    });
    editEditableMode((prev) => {
      return { ...prev, second: !prev.second };
    });
  }

  return (
    <div className={`${props.className} navbar`}>
      <div className="nav-item first">
        <Icon
          name={editableMode.first ? "clipboard" : "create"}
          className="edit"
          onClick={() =>
            editEditableMode((prev) => {
              return { ...prev, first: !prev.first };
            })
          }
        ></Icon>
        <div className="profile">
          <img src={userInfo.profile} alt="" />
          {/* <button className="profile__edit">
            <Icon name="add" height={30} width={30} className={editableMode.first ? "icon" : "none"}></Icon>
          </button> */}
          <label className="profile__edit">
            <input type="file" />
            <Icon name="add" height={30} width={30} className={editableMode.first ? "icon" : "none"}></Icon>
          </label>
        </div>
        <div className="info">
          <div className="info__name line">
            <Icon name="person" className="line__icon" height={20} width={20}></Icon>
            {editableMode.first ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editEditableMode((prev) => {
                    return { ...prev, first: !prev.first };
                  });
                }}
              >
                <input type="text" value={userInfo.name} onChange={(e) => edit(e, "name")} />
              </form>
            ) : (
              <h4>{userInfo.name}</h4>
            )}
          </div>
          <div className="line">
            <Icon name="book1" className="line__icon" height={19} width={19}></Icon>
            {editableMode.first ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editEditableMode((prev) => {
                    return { ...prev, first: !prev.first };
                  });
                }}
              >
                <input type="text" value={userInfo.dep} onChange={(e) => edit(e, "dep")} />
              </form>
            ) : (
              <p>{userInfo.dep}</p>
            )}
          </div>
        </div>
      </div>

      <div className="nav-item second">
        <Icon
          name={editableMode.second ? "clipboard" : "create"}
          className="edit"
          onClick={() =>
            editEditableMode((prev) => {
              return { ...prev, second: !prev.second };
            })
          }
        ></Icon>

        <div className="uni line">
          <Icon name="school" className="line__icon" height={20} width={20}></Icon>
          {editableMode.second ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editEditableMode((prev) => {
                  return { ...prev, second: !prev.second };
                });
              }}
            >
              <input type="text" value={userInfo.uni} onChange={(e) => edit(e, "uni")} />
            </form>
          ) : (
            <p>{userInfo.uni}</p>
          )}
        </div>

        <div className="skills line">
          <Icon name="search" className="line__icon" height={20} width={20}></Icon>
          <ul>
            {!editableMode.second ? (
              userInfo.skills.map((each) => (
                <li key={each}>
                  <p>{each}</p>
                </li>
              ))
            ) : (
              <form
                className="skills__list"
                onSubmit={(e) => {
                  e.preventDefault();
                  editSkills(e.target.querySelector(".portfolio__list--input").value);
                  editEditableMode((prev) => {
                    return { ...prev, second: !prev.second };
                  });
                }}
              >
                {userInfo.skills.map((each, i) => (
                  <li key={i} data-id={i} style={editableMode && { marginLeft: "2.5rem" }}>
                    <Icon name="add" className={`${editableMode ? "delete" : "none"}`} height={14} width={14} onClick={deleteHandler}></Icon>
                    {each}
                  </li>
                ))}
                <li>
                  <input type="text" className="portfolio__list--input" placeholder="New Skill"></input>
                </li>
              </form>
            )}
          </ul>
        </div>
      </div>

      <div className="nav-item third line">
        <Icon
          name={editableMode.third ? "clipboard" : "create"}
          className="edit"
          onClick={() =>
            editEditableMode((prev) => {
              return { ...prev, third: !prev.third };
            })
          }
        ></Icon>
        <Icon name="notebook-text" className="line__icon" height={21} width={22}></Icon>
        {editableMode.third ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editEditableMode((prev) => {
                return { ...prev, third: !prev.third };
              });
            }}
          >
            <textarea value={userInfo.bio} onChange={(e) => edit(e, "bio")} cols="25" rows="6" />
          </form>
        ) : (
          <p>{userInfo.bio}</p>
        )}
      </div>

      <div className="nav-item forth">
        <Icon
          name={editableMode.forth ? "clipboard" : "create"}
          className="edit"
          onClick={() =>
            editEditableMode((prev) => {
              return { ...prev, forth: !prev.forth };
            })
          }
        ></Icon>

        <div className="mail line">
          <Icon name="alternate_email" className="line__icon" height={20} width={20}></Icon>
          {editableMode.forth ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editEditableMode((prev) => {
                  return { ...prev, forth: !prev.forth };
                });
              }}
            >
              <input type="text" value={userInfo.email} onChange={(e) => edit(e, "email")} />
            </form>
          ) : (
            <p>{userInfo.email}</p>
          )}
        </div>

        <div className="site line">
          <Icon name="globe" className="line__icon" height={20} width={20}></Icon>
          {editableMode.forth ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editEditableMode((prev) => {
                  return { ...prev, forth: !prev.forth };
                });
              }}
            >
              <input type="text" value={userInfo.site} onChange={(e) => edit(e, "site")} />
            </form>
          ) : (
            <p>{userInfo.site}</p>
          )}
        </div>

        <div className="link line">
          <Icon name="linkedin-with-circle" className="line__icon" height={20} width={20}></Icon>
          {editableMode.forth ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editEditableMode((prev) => {
                  return { ...prev, forth: !prev.forth };
                });
              }}
            >
              <input type="text" value={userInfo.link} onChange={(e) => edit(e, "link")} />
            </form>
          ) : (
            <p>{userInfo.link}</p>
          )}
        </div>

        <div className="git line">
          <Icon name="github" className="line__icon" height={20} width={20}></Icon>
          {editableMode.forth ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editEditableMode((prev) => {
                  return { ...prev, forth: !prev.forth };
                });
              }}
            >
              <input type="text" value={userInfo.git} onChange={(e) => edit(e, "git")} />
            </form>
          ) : (
            <p>{userInfo.git}</p>
          )}
        </div>
      </div>
    </div>
  );
}
