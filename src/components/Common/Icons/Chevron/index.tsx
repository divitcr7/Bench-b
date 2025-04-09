import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import "./chevron.scss";
import { ChevronProps } from "@/interfaces";

export default function Chevron({
  direction,
  color,
  border = "transparent",
  hoverColor
}: ChevronProps) {
  return (
    <>
      {direction === "left" && (
        <ChevronLeft
          className="chevron-icon"
          style={
            {
             
              "--icon-color": color,
              "--icon-border": border ? `1px solid ${border}` : "none",
              "--icon-hover-color": hoverColor ? hoverColor : color,
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
              "--icon-border": border ? "1px solid" : "none",
              "--icon-hover-color": hoverColor ? hoverColor : color,
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
              "--icon-border": border ? "1px solid" : "none",
              "--icon-hover-color": hoverColor ? hoverColor : color,
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
              "--icon-border": border ? "1px solid" : "none",
              "--icon-hover-color": hoverColor ? hoverColor : color,
            } as React.CSSProperties
          }
        />
      )}
    </>
  );
}
