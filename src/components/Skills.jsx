import "../scss/Skills.scss";
export default function Skills({ name, people }) {
  return (
    <div className="skill">
      <div className="topping">
        <span className="topping__name">{name}</span>
        <small>.</small>
        <span className="topping__rates">{people.length}</span>
      </div>
      <div className="people">
        {people.map((each, i) => {
          if (i >= 3) return;
          return <img src={each.profile} alt="" className={`people__img people__img--${i}`} key={each.name} />;
        })}
        <p className="people__text">
          {people[0].name} and {people.length - 1} others endorsed
        </p>
      </div>
    </div>
  );
}
