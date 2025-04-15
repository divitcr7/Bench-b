import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Linkedin,
  Mail,
  Calendar,
} from "lucide-react";
import "./ourteam.scss";
import { Chevron } from "@/components/Common";

const teamMembers = [
  {
    id: 1,
    name: "Krista",
    position: "Owner / CEO",
    image: "/assets/images/krista.png",
    linkedin: "",
    email: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 2,
    name: "Johan",
    position: "Senior Agent Manager",
    image: "/assets/images/johan.png",
    linkedin: "",
    email: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    name: "David Agyei",
    position: "Manager",
    image: "/assets/images/david.png",
    linkedin: "",
    email: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 4,
    name: "Sophia Lee",
    position: "Agent",
    image: "/assets/images/david.png",
    linkedin: "",
    email: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    name: "Michael Scott",
    position: "Senior Consultant",
    image: "/assets/images/david.png",
    linkedin: "",
    email: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const OurTeam = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const nextSlide = () => {
    if (startIndex + 3 < teamMembers.length) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const loadMore = () => {
    if (startIndex + 3 < teamMembers.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const loadLess = () => {
    setStartIndex(0); // resets to the initial 3 members
  };

  return (
    <section className="our-team-container">
      <div className="our-team padding-container">
        <h2>Our Team</h2>
        <h5>
          With over 50 years of combined insurance industry expertise, our team
          of proven agents is here to assist you at any level.
        </h5>

        <div className="team-carousel">
          {/* on bigger screens */}
          <div className="team-grid">
            {teamMembers.slice(startIndex, startIndex + 3).map((member) => (
              <div
                key={member.id}
                className="team-member"
                onMouseEnter={() => setHovered(member.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="image-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>

                <div
                  className={`hover-info ${
                    hovered === member.id ? "show" : ""
                  }`}
                >
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <p>{member.description}</p>
                  <div className="icons">
                    <span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a href={`mailto:${member.email}`}>
                        <Mail size={20} />
                      </a>
                    </span>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Calendar size={20} />
                      <span>Schedule a Meeting</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* on smaller screens */}
          <div className="team-grid-small">
            {teamMembers.slice(0, startIndex + 3).map((member) => (
              <div key={member.id} className="team-member">
                <div className="image-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p className="mt-sixteen mb-sixteen">{member.description}</p>
                <div className="icons">
                  <span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <Mail size={20} />
                    </a>
                  </span>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Calendar size={20} />
                    <span>Schedule a Meeting</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows On Bigger Screens */}
        <div>
          <button
            className="nav-arrow left"
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
            <Chevron direction="left" color="white" />
          </button>
          <button
            className="nav-arrow right"
            onClick={nextSlide}
            disabled={startIndex + 3 >= teamMembers.length}
          >
            <Chevron direction="right" color="white" />
          </button>
        </div>

        {/* Load More / Load Less Buttons for Smaller Screens */}
        <div className="load-buttons">
          {startIndex + 3 < teamMembers.length && (
            <div className="load-more" onClick={loadMore}>
              Load More
              <Chevron direction="down" color="white" />
            </div>
          )}
          {startIndex > 0 && (
            <div className="load-less" onClick={loadLess}>
              Load Less <Chevron direction="up" color="white" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
