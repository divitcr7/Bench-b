import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import ComputerIcon from '@mui/icons-material/Computer';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';

// Custom Grid components
const GridContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: 3 }}>
    {children}
  </Box>
);

const GridItem: React.FC<React.PropsWithChildren & { xs?: number; sm?: number; md?: number }> = ({ 
  children, 
  xs = 12, 
  sm,
  md = 6 
}) => (
  <Box sx={{ 
    flex: `1 1 ${(xs / 12) * 100}%`,
    ...(sm && {
      '@media (min-width: 600px)': {
        flex: `1 1 ${(sm / 12) * 100}%`
      }
    }),
    '@media (min-width: 900px)': {
      flex: `1 1 ${(md / 12) * 100}%`
    }
  }}>
    {children}
  </Box>
);

const RealEstateInsurance: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom>
          Real Estate Insurance Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Full-Service Coverage for Your Entire Portfolio
        </Typography>
      </Box>

      {/* Overview Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Typography paragraph>
          Real estate is an asset class—and a responsibility. Whether you own, manage, develop, or syndicate properties, 
          you need insurance that's built for how you operate and what you're building long-term.
        </Typography>
        <Typography paragraph>
          At Benchmark Insurance Group, we specialize in tailored real estate insurance solutions designed to protect 
          your physical assets, income streams, liabilities, and investment partners. From small-balance rentals to 
          institutional portfolios, we understand the nuances of risk across asset classes, geographies, and ownership structures.
        </Typography>
      </Box>

      {/* Asset Classes Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Asset Classes We Cover
        </Typography>
        <GridContainer>
          {[
            'Multifamily & Apartment Complexes',
            'Mixed-Use & Urban Infill Developments',
            'Retail Centers & Shopping Plazas',
            'Industrial Warehouses & Flex Buildings',
            'Office Parks & Medical Buildings',
            'Short-Term Rentals & Boutique Hotels',
            'Student & Senior Housing Communities',
            'Single-Family Rental (SFR) Portfolios'
          ].map((asset, index) => (
            <GridItem key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{asset}</Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Box>

      {/* Coverage Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Comprehensive Real Estate Coverage
        </Typography>
        <GridContainer>
          {[
            {
              title: "Commercial Property Insurance",
              description: "Covers structures, loss of rent, equipment, and improvements. Customized for vacant units, value-add rehabs, and historic properties."
            },
            {
              title: "General Liability",
              description: "Protects against third-party injuries and property damage—especially important for high-foot-traffic locations and habitational risks."
            },
            {
              title: "Umbrella & Excess Liability",
              description: "Provides additional protection above primary limits—critical for high-net-worth assets, development projects, and syndications."
            },
            {
              title: "Builders Risk & Renovation Coverage",
              description: "For ground-up construction and major rehabs. Includes soft costs, delay-in-completion, and coverage extensions for modern risks."
            },
            {
              title: "Ordinance or Law",
              description: "Covers required demolition, rebuild, and code upgrades after a loss—especially critical for older buildings or those in regulated markets."
            },
            {
              title: "Tenant Discrimination Liability",
              description: "Covers legal defense and settlements related to allegations of discrimination, wrongful eviction, or lease disputes."
            },
            {
              title: "Flood, Wind, and Earthquake",
              description: "Access to private and specialty markets for properties in high-CAT zones or FEMA floodplains."
            },
            {
              title: "Real Estate Portfolio Program",
              description: "Covers remediation costs and legal exposures for mold, lead, asbestos, and other environmental concerns."
            }
          ].map((coverage, index) => (
            <GridItem key={index} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
                    {coverage.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {coverage.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Box>

      {/* Risk Services Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Benchmark Real Estate Risk Services
        </Typography>
        <GridContainer>
          {[
            {
              icon: <BusinessIcon />,
              title: "Portfolio Risk Scoring",
              description: "Our platform analyzes each property across risk dimensions—location, construction type, claims history, and CAT exposure—and assigns a custom rating to inform renewal strategies."
            },
            {
              icon: <SecurityIcon />,
              title: "Lender & Investor Coordination",
              description: "We review and structure coverage to align with lender requirements, loan covenants, and LP investment mandates."
            },
            {
              icon: <StarIcon />,
              title: "Loss Control & Property Inspections",
              description: "We proactively reduce claims with tailored loss prevention strategies including security reviews, fire risk reduction, and maintenance protocols."
            },
            {
              icon: <ComputerIcon />,
              title: "Claims Advocacy",
              description: "From water damage to fire, we help gather documentation, manage adjuster communications, and maximize recoveries, reducing NOI disruption."
            }
          ].map((service, index) => (
            <GridItem key={index} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {service.icon}
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Box>

      {/* Tech-Enabled Management Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Tech-Enabled Management
        </Typography>
        <Typography paragraph>
          Your entire portfolio is accessible through our client portal:
        </Typography>
        <List>
          {[
            'Centralized policy and renewal data',
            'Claims history and open case tracking',
            'Certificates, endorsements, and lender documents',
            'Property-level coverage snapshots'
          ].map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Why Choose Us Section */}
      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Why Real Estate Clients Choose Benchmark
        </Typography>
        <GridContainer>
          {[
            {
              title: "Built by Real Estate Operators",
              description: "Our leadership has developed, managed, and exited properties—we understand what's at stake."
            },
            {
              title: "Portfolio Thinking",
              description: "We optimize coverage across all your properties, not just one-off policies."
            },
            {
              title: "Scalable Advisory",
              description: "Whether you're buying your first quadplex or managing a 10,000-door portfolio, we scale with your strategy."
            }
          ].map((reason, index) => (
            <GridItem key={index} xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {reason.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {reason.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Box>

      {/* CTA Section */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Let's Insure What You're Building
        </Typography>
        <Typography paragraph>
          Partner with Benchmark Insurance Group for real estate insurance that is as thoughtful, aggressive, 
          and efficient as your investment strategy.
        </Typography>
        <Typography variant="h6" color="primary">
          Book a portfolio review or new acquisition consultation today.
        </Typography>
        <Box mt={4}>
          <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
      </Box>
    </Container>
  );
};

export default RealEstateInsurance; 