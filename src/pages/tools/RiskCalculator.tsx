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
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Slider,
  Chip,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Security as SecurityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Business as BusinessIcon,
  LocationOn as LocationIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';

interface RiskFactor {
  id: string;
  name: string;
  value: number;
  weight: number;
  description: string;
}

type RiskLevel = {
  level: string;
  color: 'error' | 'warning' | 'success';
};

const RiskCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    location: '',
    annualRevenue: '',
    employeeCount: '',
  });

  const [riskFactors, setRiskFactors] = useState<RiskFactor[]>([
    {
      id: '1',
      name: 'Industry Risk',
      value: 50,
      weight: 0.3,
      description: 'Risk level based on industry type',
    },
    {
      id: '2',
      name: 'Location Risk',
      value: 40,
      weight: 0.2,
      description: 'Risk level based on geographical location',
    },
    {
      id: '3',
      name: 'Operational Risk',
      value: 60,
      weight: 0.3,
      description: 'Risk level based on business operations',
    },
    {
      id: '4',
      name: 'Financial Risk',
      value: 30,
      weight: 0.2,
      description: 'Risk level based on financial stability',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement risk calculation logic
    console.log('Calculating risk with data:', formData);
  };

  const calculateTotalRisk = () => {
    return riskFactors.reduce((total, factor) => total + (factor.value * factor.weight), 0);
  };

  const getRiskLevel = (value: number): RiskLevel => {
    if (value >= 70) return { level: 'High', color: 'error' };
    if (value >= 40) return { level: 'Medium', color: 'warning' };
    return { level: 'Low', color: 'success' };
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Risk Calculator
      </Typography>

      <GridContainer spacing={3}>
        <GridItem xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Business Information
            </Typography>
            <form onSubmit={handleSubmit}>
              <GridContainer spacing={3}>
                <GridItem xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Business Type</InputLabel>
                    <Select
                      value={formData.businessType}
                      label="Business Type"
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <MenuItem value="retail">Retail</MenuItem>
                      <MenuItem value="manufacturing">Manufacturing</MenuItem>
                      <MenuItem value="services">Professional Services</MenuItem>
                      <MenuItem value="construction">Construction</MenuItem>
                      <MenuItem value="technology">Technology</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Annual Revenue"
                    type="number"
                    value={formData.annualRevenue}
                    onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: <BusinessIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
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
                <GridItem xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Calculate Risk
                    </Button>
                  </Box>
                </GridItem>
              </GridContainer>
            </form>
          </Paper>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Risk Assessment
            </Typography>
            <List>
              {riskFactors.map((factor) => (
                <React.Fragment key={factor.id}>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={factor.name}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            {factor.description}
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <Slider
                              value={factor.value}
                              onChange={(_, value) => {
                                setRiskFactors(prev =>
                                  prev.map(f =>
                                    f.id === factor.id ? { ...f, value: value as number } : f
                                  )
                                );
                              }}
                              valueLabelDisplay="auto"
                              valueLabelFormat={(value) => `${value}%`}
                            />
                          </Box>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>

            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Overall Risk Score
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h3" color="primary" sx={{ mr: 2 }}>
                    {calculateTotalRisk().toFixed(0)}%
                  </Typography>
                  <Chip
                    label={getRiskLevel(calculateTotalRisk()).level}
                    color={getRiskLevel(calculateTotalRisk()).color}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Based on weighted average of all risk factors
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default RiskCalculator; 