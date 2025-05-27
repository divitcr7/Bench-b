import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BrushIcon from '@mui/icons-material/Brush';
import HandymanIcon from '@mui/icons-material/Handyman';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FactoryIcon from '@mui/icons-material/Factory';

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

const ConstructionInsurance = () => {
  const businesses = [
    { icon: <EngineeringIcon />, text: "General Contractors & Construction Managers" },
    { icon: <BusinessIcon />, text: "Real Estate Developers & Owner-Builders" },
    { icon: <PlumbingIcon />, text: "Framing, Roofing, Plumbing, & Electrical Trades" },
    { icon: <ArchitectureIcon />, text: "Concrete, Excavation & Civil Engineering Firms" },
    { icon: <BrushIcon />, text: "Interior Finish & Design-Build Contractors" },
    { icon: <HandymanIcon />, text: "Renovation & Tenant Improvement Specialists" },
    { icon: <ApartmentIcon />, text: "Multifamily & Commercial Builders" },
    { icon: <FactoryIcon />, text: "Modular & Prefab Construction Companies" },
  ];

  const coverages = [
    {
      title: "General Liability",
      description: "Covers third-party injury and property damage on job sites. Includes operations, premises, and completed work liability."
    },
    {
      title: "Builders Risk (Course of Construction)",
      description: "Covers construction materials, structures in progress, and on-site equipment from damage due to fire, theft, wind, and vandalism."
    },
    {
      title: "Contractor's Equipment",
      description: "Protects owned and rented machinery—such as cranes, loaders, and compressors—on-site or in transit."
    },
    {
      title: "Workers' Compensation",
      description: "Covers medical expenses, disability, and lost wages for injured workers—critical for high-exposure trades."
    },
    {
      title: "Commercial Auto",
      description: "Covers company trucks, trailers, and vehicles used for transporting crew, tools, and materials."
    },
    {
      title: "Professional Liability (E&O)",
      description: "Protects against claims of design errors, project management mistakes, or construction defect allegations—especially for design-build contractors."
    },
    {
      title: "Wrap-Up Programs (OCIP/CCIP)",
      description: "Streamlined coverage for all trades on a project under one policy. Reduces premium waste, improves control, and ensures compliance."
    },
    {
      title: "Umbrella & Excess Liability",
      description: "Provides an additional layer of protection over your primary policies—essential for large-scale projects and contractual requirements."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Pre-Construction Risk Planning",
      description: "We review contracts, leasehold obligations, lender insurance requirements, and indemnification clauses to ensure coverage is aligned before project launch."
    },
    {
      icon: <BuildIcon />,
      title: "Jobsite Safety & Loss Control",
      description: "We provide site safety plans, hazard identification checklists, subcontractor risk reviews, and OSHA-compliant procedures to reduce claim frequency."
    },
    {
      icon: <DescriptionIcon />,
      title: "Certificate & Subcontractor Compliance Management",
      description: "We help GCs and owners collect and track vendor certificates, enforce additional insured endorsements, and manage subcontractor risk transfer."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Support",
      description: "We manage jobsite incidents, property loss claims, or injury disputes—providing documentation guidance and adjuster coordination to protect project timelines and budgets."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Construction Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Risk-Built Coverage for Every Phase of Your Project
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            In construction, risk is built into every blueprint. From design flaws and subcontractor errors to weather delays and jobsite injuries, the only way to stay on schedule—and budget—is with a comprehensive risk strategy. Benchmark Insurance Group delivers end-to-end insurance solutions for general contractors, developers, and specialty trades, supporting ground-up builds, renovations, and multi-phase developments.
          </Typography>
          <Typography>
            Whether you're building vertical or horizontal, we protect your people, your projects, and your profits.
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

        {/* Key Coverages Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Key Coverages for Construction
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
            Benchmark's Construction Risk Services
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
            Why Benchmark for Construction Insurance?
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Construction Background"
                secondary="We've built and insured projects ourselves—our team understands contractor operations, schedules, and constraints."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Technology Integration"
                secondary="Clients gain access to dashboards, audit tools, safety resources, and claims portals tailored to construction."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Scalable Solutions"
                secondary="Whether you're managing a one-time build or multi-phase portfolio, our insurance strategies grow with your business."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Build with Confidence. Insure with Expertise.
          </Typography>
          <Typography paragraph>
            Benchmark Insurance Group is your strategic partner from groundbreaking to ribbon-cutting—and beyond. 
            Let us help you protect what you're building today and prepare for what's next.
          </Typography>
          <Typography>
            Schedule a construction risk consultation or request a quote today.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ConstructionInsurance; 