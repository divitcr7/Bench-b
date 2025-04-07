import "./association.scss";
const data = [
  {
    id: 1,
    imgSrc: "/assets/images/WSA.png",
  },
  {
    id: 2,
    imgSrc: "/assets/images/WSA.png",
  },
  {
    id: 3,
    imgSrc: "/assets/images/WSA.png",
  },
  {
    id: 4,
    imgSrc: "/assets/images/WSA.png",
  },
  {
    id: 5,
    imgSrc: "/assets/images/WSA.png",
  },
  {
    id: 6,
    imgSrc: "/assets/images/WSA.png",
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
          {data.map((item) => {
            return (
              <span>
                <img src={item.imgSrc} />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
