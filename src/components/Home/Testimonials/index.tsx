import { Link } from "react-router-dom";
import { ArrowRightCircle, ArrowLeftCircle, ArrowRight } from "lucide-react";
import "./testimonials.scss";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  tags: string[];
  image: string;
}

interface ReviewCardProps {
  item: Review;
}

// ReviewCard Component
function ReviewCard({ item }: ReviewCardProps) {
  return (
    <div className="testimonial-reviews">
      <div className="apostrophe">
        <img src="/assets/icons/apostrophe.png" alt="apostrophe" />
        <span></span>
      </div>
      <div className="rating">
        {Array.from({ length: item.rating }).map((_, index) => (
          <img key={index} src="/assets/icons/Star.png" alt="star" />
        ))}
      </div>
      <div className="tags">
        POSITIVE{" "}
        {item.tags.map((tag, index) => (
          <span key={index}>{tag},</span>
        ))}
      </div>
      <p className="review-text">{item.review}</p>
      <div className="reviewer">
        <img src={item.image} alt={item.name} />
        <div>
          <span className="name">{item.name}</span>
          <span className="date">{item.date}</span>
        </div>
      </div>
    </div>
  );
}

// Testimonials Component
export default function Testimonials() {
  const [reviewsDisplayed, setReviewsDisplayed] = useState<number>(
    window.innerWidth <= 768 ? 1 : 2
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Review[] = [
    {
      id: 1,
      name: "Theresa Valsin",
      date: "2025-03-01",
      rating: 5,
      review:
        "Benchmark did a remarkable job in helping me get the insurance needed to complete a project with the City of Houston Permit Department. Thank you so much for your help!",
      tags: ["PROFESSIONALISM", "QUALITY", "RESPONSIVENESS", "VALUE"],
      image: "/assets/icons/avatar1.png",
    },
    {
      id: 2,
      name: "Douglas Hoffman",
      date: "2023-07-10",
      rating: 4,
      review:
        "Benchmark did an exceptional job for me on a commerical property where I couldn't find a carrier that would insure the property, they were quick and efficent and I would reccomend them to anyone needing insurance services.",
      tags: ["EXCELLENT SERVICE", "HELPFUL STAFF"],
      image: "/assets/icons/avatar2.png",
    },
    {
      id: 3,
      name: "Sarah Smith",
      date: "2023-06-15",
      rating: 5,
      review:
        "Quick response time and professional approach. The entire process was seamless and efficient.",
      tags: ["FAST SERVICE", "PROFESSIONAL"],
      image: "/assets/icons/avatar3.png",
    },
    {
      id: 4,
      name: "Michael Brown",
      date: "2023-05-20",
      rating: 3,
      review:
        "Decent service, but communication could be improved. Overall, a satisfactory experience.",
      tags: ["GOOD EXPERIENCE", "COMMUNICATION"],
      image: "/assets/icons/avatar4.png",
    },
  ];

  useEffect(() => {
    const updateReviewsDisplayed = () => {
      setReviewsDisplayed(window.innerWidth <= 425 ? 1 : 2);
    };

    window.addEventListener("resize", updateReviewsDisplayed);
    return () => window.removeEventListener("resize", updateReviewsDisplayed);
  }, []);

  const nextReview = () => {
    if (currentIndex + reviewsDisplayed < testimonials.length) {
      setCurrentIndex(currentIndex + reviewsDisplayed);
    }
  };

  const prevReview = () => {
    if (currentIndex - reviewsDisplayed >= 0) {
      setCurrentIndex(currentIndex - reviewsDisplayed);
    }
  };

  return (
    <section className="testimonial-container ">
      <div className="testimonial padding-container">
        {/* TESTIMONIALS SECTION */}
        <div className="testimonial-header ">
          <h2>Testimonials</h2>
          <img
            className="googleLogo"
            src="/assets/icons/google.png"
            alt="Google logo"
          />
          <p>112 VERIFIED GOOGLE REVIEWS</p>
          <span className="overall-rating">
            4.6
            {Array.from({ length: 5 }).map((_, index) => (
              <img key={index} src="/assets/icons/Star.png" alt="star" />
            ))}
          </span>
          <Link className="allReviewLink" to="">
            {" "}
            <div>
              ALL REVIEWS <ArrowRight />
            </div>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="testimonial-navigation ">
          <ArrowLeftCircle
            onClick={prevReview}
            className={`nav-arrow ${currentIndex === 0 ? "disabled" : ""}`}
          />
          <ArrowRightCircle
            onClick={nextReview}
            className={`nav-arrow ${
              currentIndex + reviewsDisplayed >= testimonials.length
                ? "disabled"
                : ""
            }`}
          />
        </div>

        {/* Reviews Display */}
        <div className="testimonial-reviews-container ">
          {testimonials
            .slice(currentIndex, currentIndex + reviewsDisplayed)
            .map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
