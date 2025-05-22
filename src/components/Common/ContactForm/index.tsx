import React, { useState } from "react";
import "./contactForm.scss";

interface ContactFormProps {
  onSubmit: (success: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this with your actual API call
      const response = await mockApiCall(formData);
      
      if (response.success) {
        onSubmit(true); // Show success modal
        setFormData({  // Reset form on success
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        onSubmit(false); // Show error modal
      }
    } catch (error) {
      console.error("Submission error:", error);
      onSubmit(false); // Show error modal
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock API call function - replace with your actual API call
  const mockApiCall = async (data: typeof formData) => {
    console.log("Submitting data:", data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate random success/failure for demonstration
    // In real app, this would be your actual API response
    const randomSuccess = Math.random() > 0.3; // 70% success rate for demo
    return { success: randomSuccess };
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
          required
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
          required
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
          required
        />
      </div>

      {/* Submit Button */}
      <div className="contact-button">
        <button 
          type="submit" 
          className="submit-btn btn btn-filled"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;