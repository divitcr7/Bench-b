import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InventoryIcon from '@mui/icons-material/Inventory';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StorefrontIcon from '@mui/icons-material/Storefront';

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

const TransportationInsurance = () => {
  const industries = [
    { icon: <LocalShippingIcon />, text: "Freight & Long-Haul Trucking Operations" },
    { icon: <DeliveryDiningIcon />, text: "Last-Mile & Courier Services" },
    { icon: <InventoryIcon />, text: "Third-Party Logistics (3PL) Providers" },
    { icon: <WarehouseIcon />, text: "Distribution Centers & Fulfillment Warehouses" },
    { icon: <AcUnitIcon />, text: "Cold Storage & Perishable Goods Transporters" },
    { icon: <SwapHorizIcon />, text: "Intermodal and Cross-Docking Operators" },
    { icon: <StorefrontIcon />, text: "Wholesale Delivery Fleets (construction, food, retail)" },
  ];

  const coverages = [
    {
      title: "Commercial Auto & Fleet Insurance",
      description: "Protects your trucks, vans, trailers, and drivers against physical damage, liability claims, and uninsured motorists."
    },
    {
      title: "Motor Truck Cargo Insurance",
      description: "Covers the goods you're hauling—whether it's raw materials, retail products, or refrigerated freight. Includes theft, fire, collision, and spoilage."
    },
    {
      title: "Warehouse Legal Liability",
      description: "Covers property of others while in your custody and care at your distribution centers or storage facilities."
    },
    {
      title: "General Liability",
      description: "Protects against claims of bodily injury or property damage on your premises or due to your operations."
    },
    {
      title: "Workers' Compensation",
      description: "Covers injury-related expenses for warehouse workers, drivers, and logistics staff—especially important in physically demanding roles."
    },
    {
      title: "Property Insurance",
      description: "Covers warehouses, storage facilities, and logistics hubs from fire, storm damage, theft, and more."
    },
    {
      title: "Environmental & Pollution Liability",
      description: "Addresses fuel spills, hazmat transport liability, and environmental cleanup exposures in the transportation and logistics chain."
    },
    {
      title: "Business Interruption & Contingent Business Income",
      description: "Protects revenue when operations are shut down due to vehicle loss, supplier failure, or facility damage."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Fleet Risk Assessment & Driver Safety Programs",
      description: "We evaluate your accident trends, driver behavior, and maintenance protocols—then build safety programs that improve DOT compliance and insurance pricing."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Advocacy & Loss Recovery",
      description: "When accidents happen, we manage every aspect of the claim—from documentation and adjuster coordination to litigation defense and subrogation."
    },
    {
      icon: <DescriptionIcon />,
      title: "Telematics & Risk Tech Integration",
      description: "We help integrate telematics and GPS-based tools to monitor driver behavior, prevent losses, and negotiate better premiums with underwriters."
    },
    {
      icon: <BuildIcon />,
      title: "Warehouse Safety & Fire Prevention",
      description: "We assess racking systems, fire suppression equipment, ingress/egress, and worker flow to reduce warehouse risk exposures."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Transportation & Distribution Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Driving Risk Control. Delivering Business Continuity.
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            Whether you operate a regional trucking fleet, manage a multi-state logistics hub, or coordinate last-mile delivery, the transportation and distribution sector moves fast—and faces risk at every mile. At Benchmark Insurance Group, we provide comprehensive, data-driven insurance programs that help logistics-focused companies manage exposures, control claims, and maintain operational momentum.
          </Typography>
          <Typography>
            We understand that in your world, downtime is revenue lost. Our programs keep you moving, protected, and ready for what's next.
          </Typography>
        </Paper>

        {/* Who We Serve Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Who We Serve
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

        {/* Core Coverages Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Core Coverages
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
            Value-Added Risk Advisory Services
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
            Why Benchmark for Transportation & Distribution?
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Real Operational Understanding"
                secondary="We speak your language—fleet management, DOT filings, MVR pulls, cargo valuations, and hub operations."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Streamlined Compliance"
                secondary="Our team helps clients meet contractual insurance requirements for shippers, vendors, and government regulators."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Digital Client Tools"
                secondary="From vehicle schedules to claims dashboards and certificate management, your insurance data is always one click away."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Keep Your Fleet Rolling. Protect Your Logistics Chain.
          </Typography>
          <Typography paragraph>
            With Benchmark Insurance Group, you're not just insured—you're empowered with the insights and tools to run safer, smarter, and stronger.
          </Typography>
          <Typography>
            Schedule a Transportation & Logistics Risk Review today and discover how Benchmark can move your business forward.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default TransportationInsurance; 