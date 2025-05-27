import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import HotelIcon from '@mui/icons-material/Hotel';
import EventIcon from '@mui/icons-material/Event';
import StorefrontIcon from '@mui/icons-material/Storefront';
import KitchenIcon from '@mui/icons-material/Kitchen';

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

const HospitalityInsurance = () => {
  const businesses = [
    { icon: <RestaurantIcon />, text: "Full-Service & Fine Dining Restaurants" },
    { icon: <RestaurantIcon />, text: "Fast-Casual & Quick-Service Chains (QSR)" },
    { icon: <LocalCafeIcon />, text: "Cafés, Breweries & Distilleries" },
    { icon: <NightlifeIcon />, text: "Bars, Lounges & Nightclubs" },
    { icon: <HotelIcon />, text: "Boutique & Lifestyle Hotels" },
    { icon: <EventIcon />, text: "Event Venues & Catering Services" },
    { icon: <StorefrontIcon />, text: "Hospitality Groups & Food Halls" },
    { icon: <KitchenIcon />, text: "Ghost Kitchens & Delivery-Only Brands" },
  ];

  const coverages = [
    {
      title: "General Liability",
      description: "Protects against customer injury claims (e.g., slips, falls, burns) and property damage arising from day-to-day operations."
    },
    {
      title: "Liquor Liability",
      description: "Essential for establishments that serve alcohol. Covers third-party injuries or property damage caused by intoxicated patrons."
    },
    {
      title: "Property Insurance",
      description: "Covers your buildings, kitchens, furniture, POS systems, and inventory. Includes fire, theft, weather damage, and vandalism."
    },
    {
      title: "Business Interruption & Extra Expense",
      description: "Replaces lost revenue during unexpected shutdowns due to fire, flood, or equipment breakdown—and covers costs to get back online quickly."
    },
    {
      title: "Food Spoilage & Contamination",
      description: "Covers loss of refrigerated or frozen inventory due to power outage, equipment failure, or contamination events."
    },
    {
      title: "Employment Practices Liability Insurance (EPLI)",
      description: "Covers legal defense and settlements related to employee claims of harassment, wrongful termination, wage disputes, and more."
    },
    {
      title: "Cyber Liability",
      description: "Protects against data breaches and cyberattacks—especially important for businesses handling online reservations, POS systems, and payment data."
    },
    {
      title: "Commercial Auto",
      description: "Covers company vehicles or delivery fleets, including food trucks or catering vans."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Site & Kitchen Safety Inspections",
      description: "We identify fire, slip, and health-code risks in kitchens, dining rooms, and outdoor spaces to prevent claims and shutdowns."
    },
    {
      icon: <BuildIcon />,
      title: "Loss Control Planning",
      description: "We build incident response plans, implement employee safety trainings, and recommend upgrades that improve your insurance score and reduce premiums."
    },
    {
      icon: <DescriptionIcon />,
      title: "Contract Review & Vendor Risk Transfer",
      description: "We analyze leases, franchise agreements, and vendor contracts to ensure proper insurance requirements, indemnification, and risk-sharing."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Management",
      description: "From guest injuries to kitchen fires, we help document, file, and manage claims with speed and strategy—minimizing reputational damage and revenue loss."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Food, Beverage & Hospitality Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Serving Protection for the Businesses That Serve Others
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            In the food, beverage, and hospitality industries, every customer interaction carries risk—and every hour of downtime can impact your reputation and revenue. From boutique hotels to fine dining and franchise operations, Benchmark Insurance Group delivers custom-built insurance programs and risk management strategies that keep your doors open, your guests safe, and your brand protected.
          </Typography>
          <Typography>
            Whether you run a single location or operate a multi-unit concept, we provide the coverage and counsel you need to focus on service—not setbacks.
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
            Key Coverages for Food, Beverage & Hospitality
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
            Benchmark Hospitality Risk Services
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

        {/* Why Trust Us Section */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Why Hospitality Operators Trust Benchmark
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="We Understand Hospitality"
                secondary="From boutique hotels to restaurant chains, we bring real-world understanding of guest services and daily operations."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Portfolio-Wide Thinking"
                secondary="We help owners and operators scale their insurance strategies across locations, brands, and regions."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Digital Service Tools"
                secondary="Our client dashboard gives you access to policies, certificates, claims, and compliance docs—all in one place."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Let's Protect What You've Built
          </Typography>
          <Typography paragraph>
            Whether you're serving meals, mixing drinks, hosting weddings, or offering a place to stay, your business depends on reliability and reputation. Benchmark Insurance Group ensures you're protected on both fronts.
          </Typography>
          <Typography>
            Request a custom quote or risk consultation today for your hospitality or F&B business.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default HospitalityInsurance; 