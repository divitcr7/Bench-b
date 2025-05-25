import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

interface MeetingType {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const BookingScheduler: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const meetingTypes: MeetingType[] = [
    {
      id: 'strategy',
      title: 'Strategy Call',
      duration: '30 minutes',
      description: 'Discuss your insurance needs and get expert advice',
      icon: <EventIcon />,
    },
    {
      id: 'review',
      title: 'Annual Review',
      duration: '60 minutes',
      description: 'Comprehensive review of your current coverage',
      icon: <AccessTimeIcon />,
    },
    {
      id: 'claims',
      title: 'Claims Consultation',
      duration: '45 minutes',
      description: 'Get help with filing or managing a claim',
      icon: <PersonIcon />,
    },
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking submission logic
    console.log('Booking submitted:', {
      date: selectedDate,
      time: selectedTime,
      meetingType,
      name,
      email,
      notes,
    });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Meeting Type</InputLabel>
                <Select
                  value={meetingType}
                  label="Meeting Type"
                  onChange={(e) => setMeetingType(e.target.value)}
                >
                  {meetingTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.title} ({type.duration})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
        );
      case 1:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Time</InputLabel>
                <Select
                  value={selectedTime}
                  label="Time"
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {availableTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>
        );
      case 2:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </GridItem>
            <GridItem xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                multiline
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </GridItem>
          </GridContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Schedule a Meeting
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          <Step>
            <StepLabel>Select Meeting Type</StepLabel>
          </Step>
          <Step>
            <StepLabel>Choose Date & Time</StepLabel>
          </Step>
          <Step>
            <StepLabel>Your Information</StepLabel>
          </Step>
        </Stepper>

        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            {activeStep === 2 ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Book Meeting
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default BookingScheduler; 