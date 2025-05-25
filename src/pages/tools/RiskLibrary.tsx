import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Search as SearchIcon,
  Security as SecurityIcon,
  Business as BusinessIcon,
  HealthAndSafety as HealthIcon,
  Construction as ConstructionIcon,
  LocalPolice as LegalIcon,
} from '@mui/icons-material';

interface RiskCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  risks: Risk[];
}

interface Risk {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  mitigation: string[];
}

const RiskLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<Risk | null>(null);

  const categories: RiskCategory[] = [
    {
      id: 'security',
      title: 'Security Risks',
      description: 'Physical and cyber security threats to your business',
      icon: <SecurityIcon />,
      risks: [
        {
          id: 'sec-1',
          title: 'Data Breach',
          description: 'Unauthorized access to sensitive business or customer data',
          impact: 'High',
          mitigation: [
            'Implement strong access controls',
            'Regular security audits',
            'Employee training on data security',
          ],
        },
        {
          id: 'sec-2',
          title: 'Physical Security',
          description: 'Unauthorized access to business premises',
          impact: 'Medium',
          mitigation: [
            'Install security cameras',
            'Access control systems',
            'Security personnel',
          ],
        },
      ],
    },
    {
      id: 'business',
      title: 'Business Risks',
      description: 'Operational and financial risks to your business',
      icon: <BusinessIcon />,
      risks: [
        {
          id: 'bus-1',
          title: 'Market Competition',
          description: 'Increased competition affecting market share',
          impact: 'Medium',
          mitigation: [
            'Regular market analysis',
            'Product differentiation',
            'Customer loyalty programs',
          ],
        },
        {
          id: 'bus-2',
          title: 'Supply Chain Disruption',
          description: 'Interruptions in supply chain affecting operations',
          impact: 'High',
          mitigation: [
            'Multiple suppliers',
            'Inventory management',
            'Supply chain monitoring',
          ],
        },
      ],
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.risks.some((risk) =>
        risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        risk.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory = !selectedCategory || selectedCategory === category.id;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Risk Library
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <GridContainer spacing={3}>
          <GridItem xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search risks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </GridItem>
          <GridItem xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <Chip
                  key={category.id}
                  icon={category.icon}
                  label={category.title}
                  onClick={() => setSelectedCategory(category.id)}
                  color={selectedCategory === category.id ? 'primary' : 'default'}
                  variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                />
              ))}
            </Box>
          </GridItem>
        </GridContainer>
      </Paper>

      <GridContainer spacing={3}>
        {filteredCategories.map((category) => (
          <GridItem key={category.id} xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                <List>
                  {category.risks.map((risk) => (
                    <React.Fragment key={risk.id}>
                      <ListItem
                        sx={{
                          cursor: 'pointer',
                          bgcolor: selectedRisk?.id === risk.id ? 'action.selected' : 'inherit',
                        }}
                        onClick={() => setSelectedRisk(risk)}
                      >
                        <ListItemText
                          primary={risk.title}
                          secondary={risk.description}
                        />
                        <Chip
                          label={risk.impact}
                          color={
                            risk.impact === 'High'
                              ? 'error'
                              : risk.impact === 'Medium'
                              ? 'warning'
                              : 'success'
                          }
                          size="small"
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

      {selectedRisk && (
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            {selectedRisk.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {selectedRisk.description}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Impact: {selectedRisk.impact}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Mitigation Strategies:
          </Typography>
          <List>
            {selectedRisk.mitigation.map((strategy, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <SecurityIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={strategy} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setSelectedRisk(null)}
            >
              Close
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default RiskLibrary; 