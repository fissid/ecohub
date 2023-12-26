import "../scss/StudentCard.scss";
export default function StudentCard({ people, visitProfile }) {
  return (
    <div className="card">
      <div className="card__header">
        <img src={people.profile} alt="" className="card__header--img" />
        <div className="card__header--skill">
          <h6>{people.skills[0]}</h6>
          <p>{people.skills[1]}</p>
        </div>
      </div>
      <div className="card__body">
        <h6>{people.name}</h6>
        <p>{people.dep}</p>
      </div>
      <div className="card__footer">
        <button className="connect" onClick={visitProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
}
