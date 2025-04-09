import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import "./arrow.scss";
import { ArrowProps } from "@/interfaces";

export default function arrow({
  direction,
  color,
  border ,
  hoverColor,
}: ArrowProps) {
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
              "--icon-border": border ? "1px solid" : "none",
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
              "--icon-border": border ? "1px solid" : "none",
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
              "--icon-border": border ? "1px solid" : "none",
              "--icon-hover-color": hoverColor,
            } as React.CSSProperties
          }
        />
      )}
    </>
  );
}
