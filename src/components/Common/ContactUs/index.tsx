import { useState } from "react";
import "./contact.scss";
import { ContactForm } from "..";

export default function ContactUs() {
  const [active, setActive] = useState<string>("customer");
  return (
    <section className="contact-container">
      <div className="contact padding-container">
        <h2>Contact Us</h2>
        <h5>Please, send a message, we will answer ASAP.</h5>
        <div className="contact-content">
          {/* buttons */}
          <div className="contact-buttons">
            <h5
              className={active === "customer" ? "active" : ""}
              onClick={() => setActive("customer")}
            >
              I'm a customer
            </h5>
            <h5
              className={active === "lender" ? "active" : ""}
              onClick={() => setActive("lender")}
            >
              Lenders / Mortgages
            </h5>
          </div>
          {/* form */}
          <div className="contact-form-container">
            <ContactForm />
          </div>
          {/* contact */}
          <div className="contact-info">
            {/* border design */}
            <img
              className="contact-border-image"
              src="/assets/images/border2.png"
            />
            <div className="contact-info-content">
              {/* blue triangle image */}
              <img
                className="opacity-0 md:opacity-100"
                src="/assets/icons/rectangle.png"
              />

              <div>
                <img src="/assets/icons/ic_phone.png" />
                <span>PHONE</span>
                <h4>281-569-4353</h4>
              </div>
              <div>
                <img src="/assets/icons/ic_email.png" />
                <span>EMAIL</span>
                <h4>info@benchmarkbroker.com</h4>
              </div>
              <div>
                <img src="/assets/icons/ic_pin.png" />
                <span>ADDRESS</span>
                <h4>
                  827 N Loop W,
                  <br /> Houston, TX 77008,
                  <br /> United States
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
