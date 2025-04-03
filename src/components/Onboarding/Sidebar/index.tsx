import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./sidebar.scss";

const userInfo = {
  name: "Martin",
  designation: "Real Estate Specialist",
  imgSrc: "./assets/icons/martin.png",
};
const application = [
  {
    name: "INSURANCE TYPE",
    value: 5,
  },
  {
    name: "INDUSTRY",
    value: 15,
  },
  {
    name: "BUSINESS INFO",
    value: 35,
  },
  {
    name: "LOCATIONS",
    value: 45,
  },
  {
    name: "PROPERTY INFO",
    value: 75,
  },
  {
    name: "QUOTE",
    value: 100,
  },
];
export default function Sidebar() {
  const [percentage, setPercentage] = useState(0);

  return (
    <aside className="onboarding-sidebar">
      {/* images section */}
      <div className="onboarding-sidebar-images">
        <img src="./assets/icons/blue-ellipse.png" />
        <img src="./assets/images/border.png" />
      </div>

      {/* logo and other info */}
      <div className="onboarding-sidebar-info">
        {/* logo  */}
        <img src="./assets/icons/benchmark.svg" />

        {/* user info */}
        <div className="onboarding-sidebar-user">
          <span>
            <img src={userInfo.imgSrc} />
          </span>
          <h5>{userInfo.name}</h5>
          <p>{userInfo.designation}</p>
          <div>
            <div>
              <span>
                <img src="./assets/icons/call-white.png" />
              </span>
              <p>Phone</p>
            </div>
            <div>
              <span>
                <img src="./assets/icons/chat-white.png" />
              </span>
              <p>Chat</p>
            </div>
            <div>
              <span>
                <img src="./assets/icons/mail-white.png" />
              </span>
              <p>Email</p>
            </div>
          </div>
        </div>

        {/* application status */}
        <div className="onboarding-sidebar-status">
          <h5>
            Application <span>{percentage}%</span> completed
          </h5>
          <div>
            {application.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    {percentage >= item.value ? (
                      <img src="./assets/icons/arrow-green.png" />
                    ) : (
                      <img src="./assets/icons/white-dot.png" />
                    )}
                  </span>
                  <p>{item.name}</p>
                  <ChevronDown />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
