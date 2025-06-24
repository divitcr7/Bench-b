import React, { useEffect } from "react";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { Payment as PaymentIcon } from "@mui/icons-material";

const PaymentPortal: React.FC = () => {
  useEffect(() => {
    // Open the external payment portal in a new tab
    window.open(
      "https://portal.useascend.com/benchmark_broker",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleOpenPayment = () => {
    window.open(
      "https://portal.useascend.com/benchmark_broker",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <PaymentIcon sx={{ fontSize: 80, color: "var(--green, #10b981)" }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Payment Portal
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            Access your secure payment portal to manage your insurance payments.
            The portal should have opened in a new tab.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenPayment}
            sx={{
              mt: 2,
              backgroundColor: "var(--green, #10b981)",
              "&:hover": {
                backgroundColor: "var(--green-dark, #059669)",
              },
            }}
          >
            Open Payment Portal
          </Button>
          <Typography variant="body2" color="text.secondary">
            If the portal didn't open automatically, click the button above or{" "}
            <a
              href="https://portal.useascend.com/benchmark_broker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green, #10b981)", textDecoration: "none" }}
            >
              click here
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentPortal;
