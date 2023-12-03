import "../scss/ProfileNavbar.scss";
import pro from "../img/p4.jpeg";
import Icon from "./Icon";

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
export default function ProfileNavbar() {
  return (
    <div className="navbar">
      <div className="nav-item first">
        <Icon name="create" className="edit"></Icon>
        <div className="profile">
          <img src={user.profile} alt="" />
          {/* <Icon name="add" height={30} width={30}></Icon> */}
        </div>
        <div className="info">
          <div className="info__name line">
            <Icon name="person" className="line__icon" height={20} width={20}></Icon>
            <h4>{user.name}</h4>
          </div>
          <div className="line">
            <Icon name="book1" className="line__icon" height={19} width={19}></Icon>
            <p>{user.dep}</p>
            {/* <Icon name="create"></Icon> */}
          </div>
        </div>
      </div>

      <div className="nav-item second">
        <Icon name="create" className="edit"></Icon>

        <div className="uni line">
          <div>
            <Icon name="school" className="line__icon" height={20} width={20}></Icon>
          </div>
          <p>{user.uni}</p>
        </div>

        <div className="skills line">
          <Icon name="search" className="line__icon" height={20} width={20}></Icon>
          <ul>
            {user.skills.map((each) => (
              <li>
                <p key={each}>{each}</p>
              </li>
            ))}
          </ul>
          {/* <Icon name="create"></Icon> */}
        </div>
      </div>

      <div className="nav-item third line">
        <Icon name="create" className="edit"></Icon>
        <Icon name="notebook-text" className="line__icon" height={21} width={22}></Icon>
        <p>{user.bio}</p>
      </div>

      <div className="nav-item forth">
        <Icon name="create" className="edit"></Icon>

        <div className="mail line">
          <Icon name="alternate_email" className="line__icon" height={20} width={20}></Icon>
          <p>{user.email}</p>
        </div>

        <div className="site line">
          <Icon name="globe" className="line__icon" height={20} width={20}></Icon>
          <p>{user.site}</p>
        </div>

        <div className="link line">
          <Icon name="linkedin-with-circle" className="line__icon" height={20} width={20}></Icon>
          <p>{user.link}</p>
        </div>

        <div className="git line">
          <Icon name="github" className="line__icon" height={20} width={20}></Icon>
          <p>{user.git}</p>
        </div>
      </div>
    </div>
  );
}
