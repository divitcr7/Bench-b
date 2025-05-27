import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import FactoryIcon from '@mui/icons-material/Factory';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ScienceIcon from '@mui/icons-material/Science';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MemoryIcon from '@mui/icons-material/Memory';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InventoryIcon from '@mui/icons-material/Inventory';

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

const ManufacturingInsurance = () => {
  const industries = [
    { icon: <FactoryIcon />, text: "Metal & Plastic Fabrication" },
    { icon: <RestaurantIcon />, text: "Food & Beverage Processing" },
    { icon: <ScienceIcon />, text: "Chemical & Petrochemical Plants" },
    { icon: <CheckroomIcon />, text: "Textile & Apparel Manufacturing" },
    { icon: <MemoryIcon />, text: "Electronics Assembly" },
    { icon: <EngineeringIcon />, text: "Machinery, Equipment & Parts Manufacturing" },
    { icon: <InventoryIcon />, text: "Industrial Packaging & Labeling" },
  ];

  const coverages = [
    {
      title: "Commercial Property Insurance",
      description: "Covers physical plants, equipment, inventory, and raw materials against fire, theft, water damage, and natural disasters."
    },
    {
      title: "General Liability",
      description: "Protects against third-party bodily injury, property damage, and legal defense costs—on and off site."
    },
    {
      title: "Product Liability & Product Recall",
      description: "Critical for manufacturers with consumer or industrial end-users. Covers claims of defective products, failure to warn, and associated recall expenses."
    },
    {
      title: "Equipment Breakdown",
      description: "Covers failure of production machinery, boilers, electrical systems, refrigeration, and more—including repair/replacement and income loss."
    },
    {
      title: "Business Interruption & Extra Expense",
      description: "Protects your cash flow during unplanned shutdowns and helps you maintain operations through alternative production or distribution channels."
    },
    {
      title: "Workers' Compensation",
      description: "Covers injury, medical treatment, and lost wages for employees in environments with elevated physical and chemical hazards."
    },
    {
      title: "Cyber & Data Breach Coverage",
      description: "Essential for tech-integrated manufacturing (CNC systems, IoT devices, ERP systems) vulnerable to cyber attacks or ransomware."
    },
    {
      title: "Environmental Liability",
      description: "Addresses pollution liability, hazardous materials exposure, and regulatory fines common in industrial processes."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Operational Risk Assessments",
      description: "Our team evaluates plant layouts, workflow, and safety systems to recommend improvements in fire safety, equipment spacing, and exposure reduction."
    },
    {
      icon: <BuildIcon />,
      title: "Custom Loss Control Plans",
      description: "We develop site-specific safety programs and OSHA-compliant procedures that improve loss ratios and reduce premiums."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Advocacy & Recovery",
      description: "From machinery breakdown to employee injury, we manage claims from first notice to final settlement—minimizing downtime and protecting insurability."
    },
    {
      icon: <DescriptionIcon />,
      title: "Supply Chain & Contingent Business Income Analysis",
      description: "We help model the financial impact of vendor disruptions and build insurance programs that keep production running even if your partners are offline."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Manufacturing Industry Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Precision Risk Management for Complex Operations
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            Manufacturing businesses operate at the intersection of production, logistics, regulation, and liability. One incident—whether mechanical failure, supply chain disruption, or workplace injury—can bring your operations to a halt.
          </Typography>
          <Typography>
            At Benchmark Insurance Group, we deliver tailored commercial insurance and risk advisory services built for the real-world needs of manufacturers. From supply chain risk to product liability and equipment breakdown, we help protect your operations and your bottom line.
          </Typography>
        </Paper>

        {/* Industries We Serve Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Industries We Serve
          </Typography>
          <GridContainer>
            {industries.map((industry, index) => (
              <GridItem key={index} xs={12} sm={6} md={4}>
                <Paper sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>{industry.icon}</Box>
                  <Typography>{industry.text}</Typography>
                </Paper>
              </GridItem>
            ))}
          </GridContainer>
        </Box>

        {/* Key Coverages Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Key Coverages for Manufacturers
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
            Benchmark's Manufacturing Risk Advisory Services
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
            Why Manufacturers Choose Benchmark
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Deep Industrial Experience"
                secondary="We understand the mechanics of manufacturing—from custom fabrication to process automation."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Tech-Supported Insight"
                secondary="Our clients use digital dashboards to monitor claims, inspections, safety audits, and certificates in real time."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Total Program Management"
                secondary="From global product liability to fleet and cargo insurance, we centralize and simplify your total risk picture."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Build Resilience Into Your Production
          </Typography>
          <Typography paragraph>
            Manufacturing is high-stakes and high-speed. Let Benchmark Insurance Group be your partner in building a resilient, compliant, and cost-effective risk strategy.
          </Typography>
          <Typography>
            Contact us today for a manufacturing insurance program review or a risk engineering consultation.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ManufacturingInsurance; 