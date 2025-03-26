import React from "react";
import "./button.scss";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  size = "medium",
  color = "primary",
  fullWidth = false,
  startIcon,
  endIcon,
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const buttonClasses = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    `btn-${color}`,
    fullWidth ? "btn-full-width" : "",
    isLoading ? "btn-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="btn-loader">
          <span className="btn-loader-spinner" />
        </span>
      )}
      {!isLoading && startIcon && (
        <span className="btn-start-icon">{startIcon}</span>
      )}
      {!isLoading && <span className="btn-content">{children}</span>}
      {!isLoading && endIcon && <span className="btn-end-icon">{endIcon}</span>}
    </button>
  );
};

export default Button;
