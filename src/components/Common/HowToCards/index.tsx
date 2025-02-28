import "./howToCard.scss"

interface CardProps {
  title: string;
  info: string;
  img1: string;
  img2: string;
}

export default function HowToCards({ title, info, img1, img2 }: CardProps) {
  return (
    <div className="howToCard">
      <img src={img2} alt="Background" className="bgImage" />
      <div className="iconContainer">
        <img src={img1} alt="Step icon" className="icon" />
      </div>
      <div className="textContainer">
        <h3 className="title">{title}</h3>
        <div className="goldDash"></div>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}


