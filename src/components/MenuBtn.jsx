import "../scss/MenuBtn.scss";
export default function MenuBtn({ icon, name, notif, selected }) {
  return (
    <button className={`menu-btn ${selected && ""}`}>
      <svg className="menu-btn__icon">
        <use xlinkHref={icon}></use>
      </svg>
      <span className="menu-btn__name">{name}</span>
      <span className="menu-btn__notif">{notif}</span>
    </button>
  );
}
