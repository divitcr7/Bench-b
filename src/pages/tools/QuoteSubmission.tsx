import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';

const QuoteSubmission: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    industry: '',
    annualRevenue: '',
    employeeCount: '',
    coverageType: '',
    deductible: '',
    coverageLimit: '',
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the quote application
    window.open('https://app.benchmarkbroker.com', '_blank');
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Business Type</InputLabel>
                <Select
                  value={formData.businessType}
                  label="Business Type"
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                >
                  <MenuItem value="sole">Sole Proprietorship</MenuItem>
                  <MenuItem value="partnership">Partnership</MenuItem>
                  <MenuItem value="corporation">Corporation</MenuItem>
                  <MenuItem value="llc">LLC</MenuItem>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Industry</InputLabel>
                <Select
                  value={formData.industry}
                  label="Industry"
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <MenuItem value="retail">Retail</MenuItem>
                  <MenuItem value="manufacturing">Manufacturing</MenuItem>
                  <MenuItem value="services">Professional Services</MenuItem>
                  <MenuItem value="construction">Construction</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Annual Revenue"
                type="number"
                value={formData.annualRevenue}
                onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Number of Employees"
                type="number"
                value={formData.employeeCount}
                onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                required
              />
            </GridItem>
          </GridContainer>
        );
      case 1:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12}>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Coverage Type</FormLabel>
                <RadioGroup
                  value={formData.coverageType}
                  onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                >
                  <FormControlLabel
                    value="general"
                    control={<Radio />}
                    label="General Liability"
                  />
                  <FormControlLabel
                    value="professional"
                    control={<Radio />}
                    label="Professional Liability"
                  />
                  <FormControlLabel
                    value="commercial"
                    control={<Radio />}
                    label="Commercial Property"
                  />
                  <FormControlLabel
                    value="workers"
                    control={<Radio />}
                    label="Workers Compensation"
                  />
                </RadioGroup>
              </FormControl>
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Desired Deductible"
                type="number"
                value={formData.deductible}
                onChange={(e) => setFormData({ ...formData, deductible: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Coverage Limit"
                type="number"
                value={formData.coverageLimit}
                onChange={(e) => setFormData({ ...formData, coverageLimit: e.target.value })}
                required
              />
            </GridItem>
          </GridContainer>
        );
      case 2:
        return (
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Business Name"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Name"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={4}>
              <TextField
                fullWidth
                label="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={4}>
              <TextField
                fullWidth
                label="State"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={4}>
              <TextField
                fullWidth
                label="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                required
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
        Request a Quote
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          <Step>
            <StepLabel>Business Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Coverage Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Contact Information</StepLabel>
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
                Submit Quote Request
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

export default QuoteSubmission; 