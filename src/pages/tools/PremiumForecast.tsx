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
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

interface ForecastResult {
  id: string;
  year: number;
  premium: number;
  change: number;
  factors: string[];
}

const PremiumForecast: React.FC = () => {
  const [formData, setFormData] = useState({
    policyType: '',
    currentPremium: '',
    claimsHistory: '',
    riskFactors: '',
  });

  const [forecastResults, setForecastResults] = useState<ForecastResult[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock forecast results
    setForecastResults([
      {
        id: '1',
        year: 2024,
        premium: 12000,
        change: 5,
        factors: ['Market conditions', 'Claims history', 'Risk profile'],
      },
      {
        id: '2',
        year: 2025,
        premium: 12600,
        change: 5,
        factors: ['Inflation', 'Industry trends', 'Regulatory changes'],
      },
      {
        id: '3',
        year: 2026,
        premium: 13230,
        change: 5,
        factors: ['Economic outlook', 'Loss experience', 'Coverage changes'],
      },
    ]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Premium Forecast
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <GridContainer spacing={3}>
            <GridItem xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Policy Type</InputLabel>
                <Select
                  value={formData.policyType}
                  label="Policy Type"
                  onChange={(e) => setFormData({ ...formData, policyType: e.target.value })}
                >
                  <MenuItem value="general">General Liability</MenuItem>
                  <MenuItem value="property">Property</MenuItem>
                  <MenuItem value="auto">Auto</MenuItem>
                  <MenuItem value="workers">Workers Compensation</MenuItem>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Annual Premium"
                type="number"
                value={formData.currentPremium}
                onChange={(e) => setFormData({ ...formData, currentPremium: e.target.value })}
                required
                InputProps={{
                  startAdornment: <MoneyIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Claims History (Last 3 Years)"
                value={formData.claimsHistory}
                onChange={(e) => setFormData({ ...formData, claimsHistory: e.target.value })}
                required
                multiline
                rows={3}
              />
            </GridItem>
            <GridItem xs={12} md={6}>
              <TextField
                fullWidth
                label="Risk Factors"
                value={formData.riskFactors}
                onChange={(e) => setFormData({ ...formData, riskFactors: e.target.value })}
                required
                multiline
                rows={3}
                placeholder="List any significant risk factors..."
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
                  Generate Forecast
                </Button>
              </Box>
            </GridItem>
          </GridContainer>
        </form>
      </Paper>

      {forecastResults.length > 0 && (
        <GridContainer spacing={3}>
          {forecastResults.map((result) => (
            <GridItem key={result.id} xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">
                      {result.year} Forecast
                    </Typography>
                  </Box>
                  <Typography variant="h4" color="primary" gutterBottom>
                    ${result.premium.toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={result.change >= 0 ? 'error' : 'success'}
                    sx={{ mb: 2 }}
                  >
                    {result.change >= 0 ? '+' : ''}{result.change}% change
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Contributing Factors:
                  </Typography>
                  <List dense>
                    {result.factors.map((factor, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={factor} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

export default PremiumForecast; 