import { useState } from "react";

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
];

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      {questions.map((q) => (
        <div key={q.id} className="border-b">
          <button
            onClick={() => toggleAccordion(q.id)}
            className="w-full text-left flex justify-between items-center p-4 text-lg font-semibold"
          >
            {q.question}
            <span>{openId === q.id ? "▲" : "▼"}</span>
          </button>
          {openId === q.id && (
            <div className="p-4 text-gray-700">{q.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
