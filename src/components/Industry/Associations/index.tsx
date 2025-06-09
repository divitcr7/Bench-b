import "./association.scss";
import OptimizedImage from "../../Common/OptimizedImage";

const data = [
  {
    id: 1,
    imgSrc: "/assets/icons/aig.png",
    alt: "Zurich Insurance",
  },
  {
    id: 2,
    imgSrc: "/assets/icons/zurich.png",
    alt: "WSA Association",
  },
  {
    id: 3,
    imgSrc: "/assets/icons/liberty.png",
    alt: "WSA Association",
  },
  {
    id: 4,
    imgSrc: "/assets/icons/berkshire.png",
    alt: "WSA Association",
  },
];

export default function Associations() {
  return (
    <section className="association-container">
      <div className="association padding-container">
        <h2>Our Customers and Associations</h2>
        <h5>
          Feel free to schedule an appointment with one of our experienced
          specialists or with a Department
        </h5>
        <div>
          {data.map((item) => (
            <span key={item.id}>
              <OptimizedImage
                src={item.imgSrc}
                alt={item.alt}
                aspectRatio="3/2"
                className="association-logo"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
