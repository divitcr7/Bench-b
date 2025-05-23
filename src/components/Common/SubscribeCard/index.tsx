import { useState } from "react";
import "./subscribe-card.scss";

export default function SubscribeCard() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isChecked) {
      // Here you would typically send the email to your backend
      // For now, we'll just simulate a successful subscription
      setIsSubscribed(true);
    }
  };

  if (isSubscribed) {
    return (
      <div className="subscribe-card">
        <div className="subscribe-card__content">
          <div className="subscribe-card__success">
            <h3>Thanks for subscribing!</h3>
            <div className="subscribe-card__success-icon">
            <img src="/assets/icons/arrow-green.png" alt="Arrow Green" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="subscribe-card">
      <div className="subscribe-card__content">
        <div className="subscribe-card__header">
          <h3>Subscribe to our newsletter</h3>
          <div className="subscribe-card__icon">
            <img src="/assets/icons/paper-plane.png" alt="Send Icon" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="subscribe-card__input-wrapper">
            <input
              type="email"
              placeholder="Enter email"
              className="subscribe-card__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="subscribe-card__checkbox">
            <input
              type="checkbox"
              id="accept"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label htmlFor="accept">
              I have read and accept the <a href="#">Terms of Service</a> &{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="subscribe-card__button btn btn-filled">
            <button type="submit">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </div>
  );
}