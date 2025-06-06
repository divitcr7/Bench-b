import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import "./chevron.scss";
import { ChevronProps } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Chevron({
  direction,
  color = "black",
  border,
  hoverColor,
}: ChevronProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div className="chevron-icon" style={{ width: "20px", height: "20px" }} />;
  }

  return (
    <>
      {direction === "left" && (
        <ChevronLeft
          className="chevron-icon"
          style={
            {
              "--icon-color": color,
              "--icon-border": border ? `1px solid ${border}` : "none",
              "--icon-hover-color": hoverColor,
            } as React.CSSProperties
          }
        />
      )}
      {direction === "right" && (
        <ChevronRight
          className="chevron-icon"
          style={
            {
              "--icon-color": color,
              "--icon-border": border ? `1px solid ${border}` : "none",
              "--icon-hover-color": hoverColor,
            } as React.CSSProperties
          }
        />
      )}
      {direction === "up" && (
        <ChevronUp
          className="chevron-icon"
          style={
            {
              "--icon-color": color,
              "--icon-border": border ? `1px solid ${border}` : "none",
              "--icon-hover-color": hoverColor,
            } as React.CSSProperties
          }
        />
      )}
      {direction === "down" && (
        <ChevronDown
          className="chevron-icon"
          style={
            {
              "--icon-color": color,
              "--icon-border": border ? `1px solid ${border}` : "none",
              "--icon-hover-color": hoverColor,
            } as React.CSSProperties
          }
        />
      )}
    </>
  );
}
