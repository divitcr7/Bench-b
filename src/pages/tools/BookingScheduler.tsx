import React, { useEffect } from "react";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { CalendarMonth as CalendarIcon } from "@mui/icons-material";

const BookingScheduler: React.FC = () => {
  useEffect(() => {
    // Open the external booking portal in a new tab
    window.open(
      "https://outlook.office365.com/book/BenchmarkBusinessDevelopmentTeam@benchmarkbroker.com/?ismsaljsauthenabled=true",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleOpenBooking = () => {
    window.open(
      "https://outlook.office365.com/book/BenchmarkBusinessDevelopmentTeam@benchmarkbroker.com/?ismsaljsauthenabled=true",
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
          <CalendarIcon sx={{ fontSize: 80, color: "var(--green, #10b981)" }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Booking Scheduler
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            Schedule a meeting with our Business Development Team. The booking
            scheduler should have opened in a new tab.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenBooking}
            sx={{
              mt: 2,
              backgroundColor: "var(--green, #10b981)",
              "&:hover": {
                backgroundColor: "var(--green-dark, #059669)",
              },
            }}
          >
            Open Booking Scheduler
          </Button>
          <Typography variant="body2" color="text.secondary">
            If the scheduler didn't open automatically, click the button above
            or{" "}
            <a
              href="https://outlook.office365.com/book/BenchmarkBusinessDevelopmentTeam@benchmarkbroker.com/?ismsaljsauthenabled=true"
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

export default BookingScheduler;
