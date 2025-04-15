import { useState, useEffect } from "react";
import "./questions.scss";
import { Chevron } from "@/components/Common";

const questions = [
  {
    id: 1,
    question:
      "I can't find my country in the search criteria. What does this mean?",
    answer:
      "If your country is not listed in the search criteria, it means that Benchmark currently does not have a presence in that country...",
  },
  {
    id: 2,
    question: "How do I apply for a job?",
    answer:
      "You can apply by visiting our careers page and submitting your resume.",
  },
  {
    id: 3,
    question: "What are the benefits of joining?",
    answer:
      "We offer competitive salaries, flexible work hours, and many more benefits.",
  },
  {
    id: 4,
    question: "What is the work culture like?",
    answer:
      "We have a collaborative and innovative work culture with a focus on growth.",
  },
  {
    id: 5,
    question: "Do you offer remote work options?",
    answer: "Yes, we have hybrid and fully remote positions available.",
  },
  {
    id: 6,
    question: "How does the hiring process work?",
    answer:
      "Our hiring process includes an initial screening, interviews, and an assessment.",
  },
  {
    id: 7,
    question: "What are the growth opportunities?",
    answer: "We provide mentorship, training, and career development programs.",
  },
  {
    id: 8,
    question: "Do you offer internships?",
    answer: "Yes, we offer internships across multiple domains.",
  },
  {
    id: 9,
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Node.js, and cloud services.",
  },
  {
    id: 10,
    question: "How can I contact support?",
    answer: "You can reach out to us via our contact page or support email.",
  },
];

export default function Questions() {
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth >= 768 ? 5 : 2
  );
  const [openId, setOpenId] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth >= 768;
      setIsLargeScreen(largeScreen);
      setVisibleCount(largeScreen ? 5 : 2); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + (isLargeScreen ? 5 : 2), questions.length)
    );
  };

  return (
    <section className="questions-container">
      <div className="questions padding-container">
        <h2>Frequently Asked Questions</h2>
        <h4>Have a question? We've got you covered.</h4>
        {questions.slice(0, visibleCount).map((q) => (
          <div key={q.id} className="questions-table">
            <button onClick={() => toggleAccordion(q.id)}>
              <h6>{q.question}</h6>
              <span>
                {openId === q.id ? (
                  <Chevron direction="up" />
                ) : (
                  <Chevron direction="down" />
                )}
              </span>
            </button>
            {openId === q.id && <div>{q.answer}</div>}
          </div>
        ))}
        {visibleCount < questions.length && (
          <div className="questions-load-more" onClick={loadMore}>
            <span>
              Load More <Chevron direction="down" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
