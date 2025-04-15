import { useEffect, useState } from "react";
import { Chevron } from "@/components/Common";
import "./appdownload.scss";

const data = [
  { id: 1, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 2, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 3, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 4, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 5, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 6, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 7, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 8, title: "Aircraft Insurance Application", type: "Aviation" },
  { id: 9, title: "Aircraft Insurance Application", type: "Aviation" },
];

export default function AppDownload() {
  const [sliceCount, setSliceCount] = useState(5);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const setSlice = () => {
      if (window.innerWidth > 768) {
        setSliceCount(5);
      } else if (window.innerWidth > 465) {
        setSliceCount(3);
      } else {
        setSliceCount(2);
      }
      setInitial(0);
    };

    setSlice();
    window.addEventListener("resize", setSlice);

    return () => window.removeEventListener("resize", setSlice);
  }, []);

  const getNextItems = () => {
    const nextIndex = initial + sliceCount;
    if (nextIndex < data.length) {
      setInitial(nextIndex);
    }
  };

  const getPrevItems = () => {
    const prevIndex = initial - sliceCount;
    if (prevIndex >= 0) {
      setInitial(prevIndex);
    }
  };

  return (
    <section className="app-container">
      <div className="app padding-container">
        <h2>Application Download</h2>
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </h5>

        {/* Side Image */}
        <div className="app-image">E</div>

        {/* App Download Table */}
        <div className="app-table">
          <div className="app-table-content app-content">
            <span>Title</span>
            <span>Coverage</span>
          </div>
          <div>
            {data.slice(initial, initial + sliceCount).map((item) => (
              <div key={item.id} className="app-download app-content">
                <div>
                  {item.id}. {item.title}
                </div>
                <div>{item.type}</div>
                <div>
                  <span>DOWNLOAD</span> <img src="/assets/icons/download.png" />
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="app-table-buttons">
            <span
              onClick={getPrevItems}
              style={{
                opacity: initial === 0 ? 0.5 : 1,
                pointerEvents: initial === 0 ? "none" : "auto",

                cursor: initial === 0 ? "not-allowed" : "pointer",
              }}
            >
              <Chevron direction="left"  />
            </span>
            <span
              onClick={getNextItems}
              style={{
                opacity: initial + sliceCount >= data.length ? 0.5 : 1,
                pointerEvents:
                  initial + sliceCount >= data.length ? "none" : "auto",

                cursor:
                  initial + sliceCount >= data.length
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <Chevron direction="right" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
