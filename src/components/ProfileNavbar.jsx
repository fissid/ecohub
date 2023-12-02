import "../scss/ProfileNavbar.scss";
import pro from "../img/p4.jpeg";
import Icon from "./Icon";

const user = {
  profile: pro,
  name: "Saeed Salehi",
  dep: "Computer Engineering",
  uni: "Medipol University",
  skills: ["Html", "Css", "Js", "React", "Oop"],
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, officia. Quod aspernatur nostrum exercitationem et delectus unde quasi suscipit ea! Deleniti odio animi, nesciunt officiis nobis alias accusamus porro fuga?",
  email: "salehisaeed30@outlook.com",
  link: "https://www.linkedin.com/in/saeed-salehi-06481a194/",
  git: "https://github.com/fissid",
  site: "www.google.com",
};
export default function ProfileNavbar() {
  return (
    <div className="navbar">
      <div className="nav-item first">
        <div className="profile">
          <img src={user.profile} alt="" />
          <Icon name="add" height={30} width={30}></Icon>
        </div>
        <div className="info">
          <div className="info__name">
            <h4>{user.name}</h4>
            <Icon name="create"></Icon>
          </div>
          <p>{user.dep}</p>
        </div>
      </div>
      <div className="nav-item second">
        <div className="uni line">
          <Icon name="school"></Icon>
          <p>{user.uni}</p>
          <Icon name="create"></Icon>
        </div>

        <div className="skills line">
          <Icon name="book"></Icon>
          {user.skills.map((each) => (
            <p key={each}>{each}</p>
          ))}
          <Icon name="create"></Icon>
        </div>
      </div>
      <div className="nav-item third line">
        <Icon name="message"></Icon>
        {user.bio}
        <Icon name="create"></Icon>
      </div>
      <div className="nav-item forth">
        <div className="mail line">
          <Icon name="mail4"></Icon>
          {user.email}
          <Icon name="create"></Icon>
        </div>

        <div className="site line">
          <Icon name="sphere"></Icon>
          {user.site}
          <Icon name="create"></Icon>
        </div>

        <div className="link line">
          <Icon name="linkedin-square"></Icon>
          {user.link}
          <Icon name="create"></Icon>
        </div>

        <div className="git line">
          <Icon name="github-square"></Icon>
          {user.git}
          <Icon name="create"></Icon>
        </div>
      </div>
    </div>
  );
}
