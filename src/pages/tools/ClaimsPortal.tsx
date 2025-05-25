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
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Assignment as AssignmentIcon,
  Description as DescriptionIcon,
  AttachFile as AttachFileIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface Claim {
  id: string;
  type: string;
  status: 'pending' | 'in-progress' | 'approved' | 'denied';
  date: string;
  amount: number;
  description: string;
  documents: string[];
}

const ClaimsPortal: React.FC = () => {
  const [formData, setFormData] = useState({
    claimType: '',
    incidentDate: '',
    description: '',
    amount: '',
    documents: [] as File[],
  });

  const [claims, setClaims] = useState<Claim[]>([
    {
      id: 'CLM-2023-001',
      type: 'Property Damage',
      status: 'in-progress',
      date: '2023-12-01',
      amount: 5000,
      description: 'Water damage from burst pipe',
      documents: ['Incident Report', 'Photos', 'Repair Estimate'],
    },
    {
      id: 'CLM-2023-002',
      type: 'Liability',
      status: 'pending',
      date: '2023-11-28',
      amount: 2500,
      description: 'Customer injury claim',
      documents: ['Incident Report', 'Medical Records'],
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement claim submission logic
    console.log('Submitting claim:', formData);
  };

  const getStatusColor = (status: Claim['status']) => {
    switch (status) {
      case 'approved':
        return 'success';
      case 'in-progress':
        return 'primary';
      case 'pending':
        return 'warning';
      case 'denied':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: Claim['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon color="success" />;
      case 'in-progress':
        return <AssignmentIcon color="primary" />;
      case 'pending':
        return <WarningIcon color="warning" />;
      case 'denied':
        return <ErrorIcon color="error" />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Claims Portal
      </Typography>

      <GridContainer spacing={3}>
        <GridItem xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Submit New Claim
            </Typography>
            <form onSubmit={handleSubmit}>
              <GridContainer spacing={3}>
                <GridItem xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Claim Type</InputLabel>
                    <Select
                      value={formData.claimType}
                      label="Claim Type"
                      onChange={(e) => setFormData({ ...formData, claimType: e.target.value })}
                    >
                      <MenuItem value="property">Property Damage</MenuItem>
                      <MenuItem value="liability">Liability</MenuItem>
                      <MenuItem value="auto">Auto</MenuItem>
                      <MenuItem value="workers">Workers Compensation</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Incident Date"
                    type="date"
                    value={formData.incidentDate}
                    onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </GridItem>
                <GridItem xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    multiline
                    rows={4}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Claim Amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<AttachFileIcon />}
                  >
                    Upload Documents
                    <input
                      type="file"
                      hidden
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        setFormData({ ...formData, documents: files });
                      }}
                    />
                  </Button>
                </GridItem>
                <GridItem xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Submit Claim
                    </Button>
                  </Box>
                </GridItem>
              </GridContainer>
            </form>
          </Paper>
        </GridItem>

        <GridItem xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Recent Claims
            </Typography>
            <List>
              {claims.map((claim) => (
                <React.Fragment key={claim.id}>
                  <ListItem>
                    <ListItemIcon>
                      {getStatusIcon(claim.status)}
                    </ListItemIcon>
                    <ListItemText
                      primary={claim.type}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            {claim.date} | ${claim.amount}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {claim.description}
                          </Typography>
                        </>
                      }
                    />
                    <Chip
                      label={claim.status}
                      color={getStatusColor(claim.status)}
                      size="small"
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="primary">
                View All Claims
              </Button>
            </Box>
          </Paper>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default ClaimsPortal; 