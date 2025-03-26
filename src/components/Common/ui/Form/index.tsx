import React from "react";
import "./form.scss";

export interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  error,
  value,
  onChange,
  onBlur,
  className = "",
}) => {
  const isTextArea = type === "textarea";
  const Component = isTextArea ? "textarea" : "input";

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={name} className="form-field__label">
        {label}
        {required && <span className="form-field__required">*</span>}
      </label>
      <Component
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-field__input ${
          error ? "form-field__input--error" : ""
        }`}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
};

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className = "",
  ...props
}) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`} {...props}>
      {children}
    </form>
  );
};

export default {
  Form,
  Field: FormField,
};
