import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import "./arrow.scss";
import { ArrowProps } from "@/interfaces";
import { useEffect, useState } from "react";

export default function Arrow({
  direction,
  color = "black",
  border,
  hoverColor,
}: ArrowProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div className="arrow-icon" style={{ width: "20px", height: "20px" }} />;
  }

  return (
    <>
      {direction === "left" && (
        <ArrowLeft
          className="arrow-icon"
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
        <ArrowRight
          className="arrow-icon"
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
        <ArrowUp
          className="arrow-icon"
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
        <ArrowDown
          className="arrow-icon"
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
