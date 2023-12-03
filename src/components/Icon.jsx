import icons from "../icons/sprite.svg";
export default function Icon({ name, height = 17, width = 17, ...props }) {
  return (
    <svg className="icon" {...props} style={{ height: height, width: width }}>
      <use xlinkHref={`${icons}#icon-${name}`}></use>
    </svg>
  );
}
