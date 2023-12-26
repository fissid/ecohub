import "../scss/MenuBtn.scss";
import Icon from "./Icon";
export default function MenuBtn({ data, ...props }) {
  return (
    <button className={`menu-btn ${data.selected ? "selected" : ""}`} {...props} data-id={data.id}>
      <div className="each">
        <Icon name={data.icon} className="menu-btn__icon"></Icon>
        <span className="menu-btn__name">{data.name}</span>
      </div>
    </button>
  );
}
