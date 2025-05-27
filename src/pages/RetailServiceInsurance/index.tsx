import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import StoreIcon from '@mui/icons-material/Store';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

const RetailServiceInsurance = () => {
  const businesses = [
    { icon: <StoreIcon />, text: "Brick-and-Mortar Retailers (Apparel, Electronics, Home Goods)" },
    { icon: <SpaIcon />, text: "Salons, Spas & Wellness Centers" },
    { icon: <FitnessCenterIcon />, text: "Fitness Studios & Personal Training Facilities" },
    { icon: <CleaningServicesIcon />, text: "Cleaning, Maintenance & Repair Service Companies" },
    { icon: <LocalLaundryServiceIcon />, text: "Dry Cleaners & Tailors" },
    { icon: <LocalFloristIcon />, text: "Florists, Bakeries, and Local Specialty Shops" },
    { icon: <StorefrontIcon />, text: "Franchises & Multi-Unit Operators" },
    { icon: <ShoppingCartIcon />, text: "E-Commerce Businesses with Physical Locations" },
  ];

  const coverages = [
    {
      title: "General Liability",
      description: "Protects against customer injuries, property damage, and legal claims. Includes slip-and-fall and product-related liability."
    },
    {
      title: "Commercial Property Insurance",
      description: "Covers your physical space, inventory, equipment, signage, and furnishings against fire, theft, vandalism, or weather damage."
    },
    {
      title: "Business Interruption",
      description: "Covers lost income and operating expenses if your store or office is forced to close due to an insured event—like fire, flood, or power outage."
    },
    {
      title: "Employment Practices Liability (EPLI)",
      description: "Protects your business against claims of discrimination, harassment, or wrongful termination—essential in employee-heavy sectors."
    },
    {
      title: "Cyber Liability",
      description: "Covers data breaches, POS system hacks, and ransomware—critical for businesses handling credit card data and customer information."
    },
    {
      title: "Commercial Auto",
      description: "Covers vehicles used for delivery, service appointments, or business operations."
    },
    {
      title: "Workers' Compensation",
      description: "Mandatory in most states—covers medical costs, lost wages, and disability for employees injured on the job."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Location Risk Assessments",
      description: "We assess layout, lighting, ingress/egress, fire suppression, and ADA compliance to reduce liability exposure."
    },
    {
      icon: <BuildIcon />,
      title: "Loss Prevention Strategy",
      description: "Includes employee training, theft deterrence programs, surveillance review, and emergency action planning."
    },
    {
      icon: <DescriptionIcon />,
      title: "Lease & Contract Advisory",
      description: "We review your commercial leases and vendor agreements to ensure you meet insurance requirements and avoid unfavorable indemnity clauses."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Advocacy",
      description: "We manage claims end-to-end—including customer injury, property loss, employee disputes, and theft. We also advocate for full coverage payouts and quick resolutions."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Retail & Service Industry Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Protection That Scales With Your Storefront and Service Model
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            Retailers and service providers face a unique blend of risk: customer foot traffic, employee injury, inventory loss, data breaches, and lease obligations. Whether you're managing a single boutique, a regional franchise network, or a high-volume service business, Benchmark Insurance Group delivers customized insurance programs built to protect your brand, your people, and your bottom line.
          </Typography>
          <Typography>
            We combine real-world industry insight with a tech-driven risk strategy to help you stay open, stay compliant, and stay ahead.
          </Typography>
        </Paper>

        {/* Who We Serve Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Who We Serve
          </Typography>
          <GridContainer>
            {businesses.map((business, index) => (
              <GridItem key={index} xs={12} sm={6} md={4}>
                <Paper sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>{business.icon}</Box>
                  <Typography>{business.text}</Typography>
                </Paper>
              </GridItem>
            ))}
          </GridContainer>
        </Box>

        {/* Core Coverages Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Core Coverages for Retail & Service Providers
          </Typography>
          <GridContainer>
            {coverages.map((coverage, index) => (
              <GridItem key={index} xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {coverage.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {coverage.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </GridItem>
            ))}
          </GridContainer>
        </Box>

        {/* Risk Services Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Benchmark's Retail & Service Risk Services
          </Typography>
          <GridContainer>
            {riskServices.map((service, index) => (
              <GridItem key={index} xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>{service.icon}</Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </GridItem>
            ))}
          </GridContainer>
        </Box>

        {/* Why Choose Us Section */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Why Retailers and Service Providers Choose Benchmark
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Hands-On Experience"
                secondary="We understand storefront logistics, retail staffing, seasonal inventory risks, and customer claims."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Scalable Programs"
                secondary="From independent operators to franchise groups, our insurance solutions grow with your business."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Client Dashboard Access"
                secondary="Manage COIs, claims, policies, and renewals from one easy-to-use digital platform."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Keep Serving. Stay Protected.
          </Typography>
          <Typography paragraph>
            Whether you're selling goods, offering services, or managing a chain of customer-facing locations, 
            Benchmark Insurance Group delivers the risk protection and service continuity your business deserves.
          </Typography>
          <Typography>
            Schedule a consultation or request a quote today for your retail or service-based operation.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default RetailServiceInsurance; 