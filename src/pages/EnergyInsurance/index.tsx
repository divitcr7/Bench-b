import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import ConstructionIcon from '@mui/icons-material/Construction';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WindPowerIcon from '@mui/icons-material/WindPower';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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

const EnergyInsurance = () => {
  const industries = [
    { icon: <OilBarrelIcon />, text: "Oil & Gas Exploration & Production (E&P)" },
    { icon: <ConstructionIcon />, text: "Drilling Contractors & Well Servicing Companies" },
    { icon: <CallSplitIcon />, text: "Midstream Pipeline Operators" },
    { icon: <GasMeterIcon />, text: "Natural Gas Utilities" },
    { icon: <EngineeringIcon />, text: "Energy Field Equipment Suppliers" },
    { icon: <WindPowerIcon />, text: "Renewable Energy Developers (Wind, Solar, Biofuels)" },
    { icon: <LocalShippingIcon />, text: "Fuel Distributors & Bulk Transporters" },
    { icon: <FactoryIcon />, text: "Refineries & Petrochemical Plants" },
  ];

  const coverages = [
    {
      title: "General Liability",
      description: "Protects against third-party bodily injury or property damage at job sites, wells, plants, or storage facilities."
    },
    {
      title: "Pollution & Environmental Liability",
      description: "Covers gradual and sudden release of contaminants—on-site and off-site. Includes clean-up, legal defense, and regulatory fines."
    },
    {
      title: "Control of Well Insurance (COW)",
      description: "Critical for E&P operations. Covers blowouts, redrill, cleanup, and well restoration expenses following a loss of control."
    },
    {
      title: "Operators Extra Expense (OEE)",
      description: "Covers costs related to regaining control of a well, such as debris removal, well restoration, and third-party damages."
    },
    {
      title: "Property & Equipment Insurance",
      description: "Protects rigs, tanks, compressors, and other mobile or stationary infrastructure against physical loss or damage."
    },
    {
      title: "Business Interruption / Time Element",
      description: "Covers loss of revenue due to shutdowns from insured events (e.g., equipment failure, fire, natural disasters)."
    },
    {
      title: "Workers' Compensation & USL&H",
      description: "Covers injury-related medical costs and lost wages for energy sector employees, including marine and offshore personnel."
    },
    {
      title: "Commercial Auto & Fleet",
      description: "Protects fuel haulers, service fleets, and rig transportation vehicles from liability, collision, and cargo loss."
    },
    {
      title: "Cyber Liability",
      description: "Critical for energy firms with SCADA systems, IoT networks, and digital field reporting. Covers cyber attacks, system outages, and data breaches."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Site Risk Assessments",
      description: "We evaluate operational hazards including flammable material handling, seismic activity, worker exposure, and equipment vulnerability."
    },
    {
      icon: <BalanceIcon />,
      title: "Contractual Risk Transfer Review",
      description: "We help clients structure and negotiate indemnity clauses, hold-harmless agreements, and insurance requirements across supply chain and service contracts."
    },
    {
      icon: <DescriptionIcon />,
      title: "Regulatory Compliance Support",
      description: "We assist with EPA, PHMSA, OSHA, and state-level energy department compliance—especially in relation to safety documentation and insurance certificates."
    },
    {
      icon: <BuildIcon />,
      title: "Claims Advocacy & Loss Analytics",
      description: "From well blowouts to pollution incidents, we guide clients through high-stakes claims processes while delivering trend reports that influence underwriting results."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Energy, Oil & Gas Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Powering Protection Across the Energy Lifecycle
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            In the energy sector, exposure is high, regulation is strict, and operations never stop. From upstream drilling to downstream distribution, Benchmark Insurance Group delivers customized insurance and risk management solutions that protect your assets, your people, and your production.
          </Typography>
          <Typography>
            We specialize in building coverage programs for energy clients that operate in volatile environments—onshore, offshore, midstream, and field services—with a focus on contract compliance, operational continuity, and environmental accountability.
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
            Key Insurance Coverages
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
            Benchmark's Energy Risk Services
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
            Why Benchmark for Energy Risk?
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Deep Sector Knowledge"
                secondary="Our advisors understand wellhead operations, pipeline exposures, and downstream liabilities."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Responsive & Mobile-Ready"
                secondary="Our field risk team can deploy on-site—whether at a job site, terminal, or tank battery."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Integrated Client Dashboard"
                secondary="Manage certificates, contracts, safety audits, and claims through a secure digital portal."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Ensure Stability in a Volatile Industry
          </Typography>
          <Typography paragraph>
            With Benchmark Insurance Group, you get a partner who understands the dynamics of risk in the energy sector—and who has the tools to protect against them.
          </Typography>
          <Typography>
            Contact us today to schedule a full-spectrum Energy Risk Consultation.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default EnergyInsurance; 