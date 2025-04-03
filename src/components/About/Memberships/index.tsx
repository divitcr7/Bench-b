import "./memberships.scss";
const images = [
  "independent-insurance",
  "pia",
  "hba",
  "ric",
  "lui",
  "ghp",
  "hcs",
  "cren-commercial",
  "narpm",
  "supplyers",
  "ghra",
];

export default function Memberships() {
  const imageBasePath = "/assets/icons/";
  return (
    <section className="membership-container">
      <div className="membership padding-container">
        <h2>Our Memberships</h2>
        <h5>
          Benchmark Insurance Group works in collaboration with these membership
          organizations for the benefit of our customers.
        </h5>
        <div >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={`${imageBasePath}${image}.png`}
                alt={image}
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
