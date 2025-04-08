import "./howToCard.scss";

import { CardProps } from "@/interfaces";

export default function HowToCards({ title, info, img1, img2 }: CardProps) {
  return (
    <div className="howToCard">
      <img src={img2} alt="Background" className="bgImage" />
      <div className="iconContainer">
        <img src={img1} alt="Step icon" className="icon" />
      </div>
      <div className="textContainer">
        <h4 className="title">{title}</h4>
        <div className="goldDash"></div>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}
