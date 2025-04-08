import "./tools.scss";
import { ArrowRight } from "lucide-react";

import {ToolCardType} from "@/interfaces";

const data = [
  {
    id: 1,
    imgSrc: "/assets/icons/mortgage.png",
    title: "Mortgage Calculator",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
  {
    id: 2,
    imgSrc: "/assets/icons/calculator.png",
    title: "Rental Calculator",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
  {
    id: 3,
    imgSrc: "/assets/icons/report.png",
    title: "Hazard Report",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  },
];

const ToolCard = ({ item }: { item: ToolCardType }) => {
  return (
    <div className="tools-cards">
      <img src={item.imgSrc} />
      <h4>{item.title}</h4>
      <p>{item.info}</p>
      <span>
        <ArrowRight />
      </span>
    </div>
  );
};
export default function Tools() {
  return (
    <section className="tools-container">
      <div className="tools padding-container">
        <h2>Tools</h2>
        <h5>Select a link to our optimized tools for your benefit</h5>
        <div className="tools-cards-container">
          {data.map((item) => {
            return <ToolCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
