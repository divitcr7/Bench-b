import React, { useState } from "react";
import "./contactForm.scss";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Name Field */}
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
      </div>

      {/* Telephone Number Field */}
      <div className="form-group">
        <label>Telephone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Telephone Number"
        />
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Comment"
          rows={3}
        />
      </div>

      {/* Submit Button */}
      <div className=" contact-button">
        <button type="submit" className="submit-btn btn btn-filled">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
