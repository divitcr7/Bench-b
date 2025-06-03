import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Rating,
} from '@mui/material';
import { GridContainer, GridItem } from '@/components/Grid';
import {
  Search as SearchIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  Gavel as GavelIcon,
  Construction as ConstructionIcon,
  LocalHospital as HealthIcon,
} from '@mui/icons-material';

interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  specialties: string[];
}

const VendorMarketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Vendors', icon: <BusinessIcon /> },
    { id: 'security', label: 'Security', icon: <SecurityIcon /> },
    { id: 'legal', label: 'Legal', icon: <GavelIcon /> },
    { id: 'construction', label: 'Construction', icon: <ConstructionIcon /> },
    { id: 'healthcare', label: 'Healthcare', icon: <HealthIcon /> },
  ];

  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'Secure Solutions Inc.',
      category: 'security',
      rating: 4.8,
      reviews: 124,
      description: 'Professional security services for businesses of all sizes.',
      image: '/images/vendors/security.jpg',
      specialties: ['Access Control', 'Surveillance', 'Risk Assessment'],
    },
    {
      id: '2',
      name: 'Legal Partners LLP',
      category: 'legal',
      rating: 4.9,
      reviews: 89,
      description: 'Expert legal services specializing in insurance law.',
      image: '/images/vendors/legal.jpg',
      specialties: ['Insurance Law', 'Claims', 'Compliance'],
    },
    {
      id: '3',
      name: 'BuildRight Construction',
      category: 'construction',
      rating: 4.7,
      reviews: 156,
      description: 'Quality construction and renovation services.',
      image: '/images/vendors/construction.jpg',
      specialties: ['Renovation', 'Safety', 'Project Management'],
    },
  ];

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Vendor Marketplace
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <GridContainer spacing={3}>
          <GridItem xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search vendors..."
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
                  label={category.label}
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
        {filteredVendors.map((vendor) => (
          <GridItem key={vendor.id} xs={12} md={6} lg={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={vendor.image}
                alt={vendor.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {vendor.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={vendor.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({vendor.reviews} reviews)
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {vendor.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {vendor.specialties.map((specialty) => (
                    <Chip
                      key={specialty}
                      label={specialty}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Button variant="contained" color="primary" fullWidth onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>
                  Contact Vendor
                </Button>
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};

export default VendorMarketplace; 