import icons from "../icons/sprite.svg";
export default function Icon({ name, height, width }) {
  !height ? (height = 17) : (height = height);
  !width ? (width = 17) : (width = width);
  return (
    <svg className="icon" style={{ height: height, width: width }}>
      <use xlinkHref={`${icons}#icon-${name}`}></use>
    </svg>
  );
}
