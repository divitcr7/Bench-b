import "./career.scss";
import { Link } from "react-router-dom";
import { Arrow,Chevron } from "@/components/Common";

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
            <Link 
              key={index} 
              to="https://riseconstructiontx.bamboohr.com/careers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="job-item hover-arrow-parent"
            >
              <h4 className="job-dept">{job.department}</h4>
              <h5 className="job-type">{job.type}</h5>
              <h5 className="job-position">{job.position}</h5>
              <div className="arrow-cell">
                <Arrow
                  direction="right"
                  color="var(--indigo)"
                  hoverColor="var(--green)"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="career-allJobs">
          <Link to="/careers">
            SEE ALL JOBS <Chevron direction="right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
