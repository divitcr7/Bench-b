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
  Chip,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Description as DescriptionIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface PolicyCheck {
  id: string;
  type: string;
  status: 'compliant' | 'warning' | 'non-compliant';
  description: string;
  recommendation: string;
}

const PolicyChecker: React.FC = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    policyType: '',
    effectiveDate: '',
  });

  const [checkResults, setCheckResults] = useState<PolicyCheck[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock policy check results
    setCheckResults([
      {
        id: '1',
        type: 'Coverage Limits',
        status: 'compliant',
        description: 'Your coverage limits meet industry standards',
        recommendation: 'No action required',
      },
      {
        id: '2',
        type: 'Deductible',
        status: 'warning',
        description: 'Your deductible is higher than recommended',
        recommendation: 'Consider reducing deductible for better coverage',
      },
      {
        id: '3',
        type: 'Exclusions',
        status: 'non-compliant',
        description: 'Missing critical coverage exclusions',
        recommendation: 'Review and update policy exclusions',
      },
    ]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Policy Compliance Checker
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <GridContainer spacing={3}>
            <GridItem xs={12} md={4}>
              <TextField
                fullWidth
                label="Policy Number"
                value={formData.policyNumber}
                onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                required
              />
            </GridItem>
            <GridItem xs={12} md={4}>
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
            <GridItem xs={12} md={4}>
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
            <GridItem xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Check Policy
                </Button>
              </Box>
            </GridItem>
          </GridContainer>
        </form>
      </Paper>

      {checkResults.length > 0 && (
        <GridContainer spacing={3}>
          {checkResults.map((check) => (
            <GridItem key={check.id} xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ListItemIcon>
                      {check.status === 'compliant' ? (
                        <CheckCircleIcon color="success" />
                      ) : check.status === 'warning' ? (
                        <WarningIcon color="warning" />
                      ) : (
                        <ErrorIcon color="error" />
                      )}
                    </ListItemIcon>
                    <Typography variant="h6">
                      {check.type}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {check.description}
                  </Typography>
                  <Chip
                    label={check.status}
                    color={
                      check.status === 'compliant'
                        ? 'success'
                        : check.status === 'warning'
                        ? 'warning'
                        : 'error'
                    }
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="subtitle2" gutterBottom>
                    Recommendation:
                  </Typography>
                  <Typography variant="body2">
                    {check.recommendation}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

export default PolicyChecker; 