import "./howToCard.scss";

import { CardProps } from "@/interfaces";

export default function HowToCards({ title, info, img1, img2 }: CardProps) {
  return (
    <div className="howToCard">
      <img src={img2} alt="Background" className="howToCard-bgImage" />
      <div className="howToCard-iconContainer">
        <img src={img1} alt="Step icon" className="howToCard-icon" />
      </div>
      <div className="howToCard-textContainer">
        <h4 className="howToCard-title">{title}</h4>
        <div className="howToCard-goldDash"></div>
        <p className="howToCard-info">{info}</p>
      </div>
    </div>
  );
}
