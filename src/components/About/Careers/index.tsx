import { ArrowRight, ChevronRight } from "lucide-react";
import "./career.scss";
import { Link } from "react-router-dom";

export default function Careers() {
  const data = [
    {
      department: "Business Development",
      type: "Full-time",
      position: "Sales Development Representative",
    },
    {
      department: "Marketing",
      type: "Full-time",
      position: "Sr. Manager",
    },
    {
      department: "Account Executive, Logistics",
      type: "Full-time",
      position: "Sr. Manager",
    },
  ];
  return (
    <section className="career-container">
      <div className="career padding-container">
        <h2>Careers</h2>
        <h5>Open Positions</h5>
        <div className="job-container">
          {data.map((job, index) => (
            <div key={index} className="job-item">
              <h4 className="job-dept">{job.department}</h4>
              <h5 className="job-type">{job.type}</h5>
              <h5 className="job-position">{job.position}</h5>
              <div className="arrow-cell">
                <ArrowRight className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
        <div className="career-allJobs">
          <Link to="#">SEE ALL JOBS <ChevronRight/></Link>
        </div>
      </div>
    </section>
  );
}
