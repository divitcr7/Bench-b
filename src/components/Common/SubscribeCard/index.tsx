import "./subscribe-card.scss";

export default function SubscribeCard() {
  return (
    <div className="subscribe-card">
      <div className="subscribe-card__content">
        <div className="subscribe-card__header">
          <h3>
            Subscribe to our
            newsletter
          </h3>
          <div className="subscribe-card__icon">
            <img src="/assets/icons/paper-plane.png" alt="Send Icon" />
          </div>
        </div>

        <div className="subscribe-card__input-wrapper">
          <input
            type="email"
            placeholder="Enter email"
            className="subscribe-card__input"
          />
        </div>

        <div className="subscribe-card__checkbox">
          <input type="checkbox" id="accept" />
          <label htmlFor="accept">
            I have read and accept the <a href="#">Terms of Service</a> &{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <div className="subscribe-card__button btn btn-filled">
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}
