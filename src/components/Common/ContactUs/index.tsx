import { useState } from "react";
import "./contact.scss";
import { ContactForm } from "..";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ContactUs() {
  const [active, setActive] = useState<string>("customer");
  const [openModal, setOpenModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (success: boolean) => {
    setIsSuccess(success);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
          {/* contact info */}
          <div className="contact-info">
            <img
              className="contact-border-image"
              src="./assets/images/border2.png"
              alt="border decoration"
            />
            <div className="contact-info-content">
              <img
                className="opacity-0 md:opacity-100"
                src="./assets/icons/rectangle.png"
                alt="blue triangle"
              />
              <div>
                <img src="./assets/icons/ic_phone.png" alt="phone icon" />
                <span>PHONE</span>
                <h4>281-569-4353</h4>
              </div>
              <div>
                <img src="./assets/icons/ic_email.png" alt="email icon" />
                <span>EMAIL</span>
                <h4>info@benchmarkbroker.com</h4>
              </div>
              <div>
                <img src="./assets/icons/ic_pin.png" alt="location icon" />
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

      {/* MUI Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: "700px",
            height: "500px",
            maxWidth: "none",
            maxHeight: "none",
            borderRadius: "12px",
            position: "relative",
            borderTopLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopRightRadius: "16px",
            borderBottomLeftRadius: "16px",
            padding: "0", // remove internal padding
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 24,
            top: 24,
            color: "var(--light-grey)",
            zIndex: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: "1.8rem" }} />
        </IconButton>

        <DialogContent
          sx={{
            padding: "60px 40px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          {/* ICON SECTION */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
              mt: 1,
              position: "relative",
            }}
          >
            {isSuccess ? (
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <MailIcon
                  sx={{
                    fontSize: "100px",
                    color: "var(--green)",
                  }}
                />
                <CheckCircleIcon
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    fontSize: "30px",
                    color: "var(--green)",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <MailIcon
                  sx={{
                    fontSize: "100px",
                    color: "#f44336",
                  }}
                />
                <CloseIcon
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    fontSize: "30px",
                    color: "#f44336",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    border: "3px solid #f44336",
                    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            )}

          </Box>

          {/* TEXT SECTION */}
          <Typography variant="h6" sx={{ mb: 4, maxWidth: "80%" }}>
            {isSuccess
              ? "Your message has been successfully sent"
              : "Your message was not successfully sent. Please try again."}
          </Typography>

          {/* BUTTON */}
          <Box sx={{ mt: 2 }}>
            <button
              onClick={handleCloseModal}
              style={{
                padding: "12px 32px",
                backgroundColor: isSuccess ? "var(--green)" : "var(--green)",
                color: "white",
                border: "none",
                borderTopLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopRightRadius: "16px",
                borderBottomLeftRadius: "16px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "180px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {isSuccess ? "OK" : "Try Again"}
            </button>
          </Box>
        </DialogContent>
      </Dialog>

    </section>
  );
}