import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Description,
  Add,
  Remove,
  Chat,
  Notifications,
  Download,
  Security,
  Assessment,
  Payment,
  History,
  Settings,
  Message,
  Close,
} from '@mui/icons-material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Assignment as AssignmentIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Payment as PaymentIcon,
  Description as DescriptionIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

interface Policy {
  id: string;
  number: string;
  type: string;
  status: 'active' | 'pending' | 'expired';
  startDate: string;
  endDate: string;
  premium: number;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  unread: boolean;
}

const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState(3);

  // Mock data
  const policies: Policy[] = [
    {
      id: '1',
      number: 'POL-2023-001',
      type: 'Commercial Property',
      status: 'active',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      premium: 12000,
    },
    {
      id: '2',
      number: 'POL-2023-002',
      type: 'General Liability',
      status: 'active',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      premium: 5000,
    },
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Support Team',
      content: 'Your policy renewal is coming up in 30 days.',
      timestamp: '2023-12-01 10:00 AM',
      unread: true,
    },
    {
      id: '2',
      sender: 'Claims Department',
      content: 'Your recent claim has been approved.',
      timestamp: '2023-11-28 02:30 PM',
      unread: true,
    },
    {
      id: '3',
      sender: 'Account Manager',
      content: 'Welcome to your new dashboard!',
      timestamp: '2023-11-25 09:15 AM',
      unread: true,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Implement message sending logic
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Client Dashboard
      </Typography>

      <GridContainer spacing={3}>
        <GridItem xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Active Policies
              </Typography>
              <Typography variant="h3" color="primary">
                {policies.length}
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Open Claims
              </Typography>
              <Typography variant="h3" color="error">
                {policies.length}
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Tasks
              </Typography>
              <Typography variant="h3" color="warning.main">
                {policies.length}
              </Typography>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Premium
              </Typography>
              <Typography variant="h3" color="success.main">
                ${policies.reduce((sum, policy) => sum + policy.premium, 0)}
              </Typography>
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Active Policies
            </Typography>
            <List>
              {policies.map((policy) => (
                <React.Fragment key={policy.id}>
                  <ListItem>
                    <ListItemIcon>
                      <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={policy.type}
                      secondary={`Policy ID: ${policy.id} | Renewal: ${policy.endDate}`}
                    />
                    <Typography variant="body2" color="text.secondary">
                      ${policy.premium}
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="primary">
                View All Policies
              </Button>
            </Box>
          </Paper>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Claims
            </Typography>
            <List>
              {policies.map((policy) => (
                <React.Fragment key={policy.id}>
                  <ListItem>
                    <ListItemIcon>
                      <AssignmentIcon color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary={policy.type}
                      secondary={`Claim ID: ${policy.id} | Date: ${policy.endDate}`}
                    />
                    <Typography variant="body2" color="text.secondary">
                      ${policy.premium}
                    </Typography>
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

        <GridItem xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pending Tasks
            </Typography>
            <List>
              {policies.map((policy) => (
                <React.Fragment key={policy.id}>
                  <ListItem>
                    <ListItemIcon>
                      {policy.status === 'active' ? (
                        <CheckCircleIcon color="primary" />
                      ) : (
                        <WarningIcon color="error" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={policy.type}
                      secondary={`Due: ${policy.endDate} | Priority: ${policy.status === 'active' ? 'Low' : 'High'}`}
                    />
                    <Button variant="outlined" size="small">
                      Complete
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="primary">
                View All Tasks
              </Button>
            </Box>
          </Paper>
        </GridItem>
      </GridContainer>

      <Dialog
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Chat with Support
            <IconButton onClick={() => setChatOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ height: 300, overflowY: 'auto', mb: 2 }}>
            {/* Chat messages would go here */}
          </Box>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setChatOpen(false)}>Close</Button>
          <Button
            variant="contained"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ClientDashboard; 
 