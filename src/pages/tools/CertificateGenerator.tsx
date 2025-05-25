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
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';

const CertificateGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    insuredName: '',
    coverageType: '',
    effectiveDate: '',
    expirationDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement certificate generation logic
    console.log('Generating certificate with data:', formData);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Certificate of Insurance Generator
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Policy Number"
                value={formData.policyNumber}
                onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Insured Name"
                value={formData.insuredName}
                onChange={(e) => setFormData({ ...formData, insuredName: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Coverage Type</InputLabel>
                <Select
                  value={formData.coverageType}
                  label="Coverage Type"
                  onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                >
                  <MenuItem value="general">General Liability</MenuItem>
                  <MenuItem value="auto">Auto Liability</MenuItem>
                  <MenuItem value="workers">Workers Compensation</MenuItem>
                  <MenuItem value="property">Property</MenuItem>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Effective Date"
                type="date"
                value={formData.effectiveDate}
                onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
                InputLabelProps={{ shrink: true }}
                required
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Expiration Date"
                type="date"
                value={formData.expirationDate}
                onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                InputLabelProps={{ shrink: true }}
                required
              />
            </GridItem>
            <GridItem xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Generate Certificate
                </Button>
              </Box>
            </GridItem>
          </GridContainer>
        </form>
      </Paper>
    </Container>
  );
};

export default CertificateGenerator; 