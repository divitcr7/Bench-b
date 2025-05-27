import { Box, Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import ScienceIcon from '@mui/icons-material/Science';
import DevicesIcon from '@mui/icons-material/Devices';

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

const HealthcareInsurance = () => {
  const providers = [
    { icon: <LocalHospitalIcon />, text: "Medical & Dental Practices" },
    { icon: <MedicalServicesIcon />, text: "Urgent Care Centers" },
    { icon: <HealingIcon />, text: "Ambulatory Surgery Centers (ASCs)" },
    { icon: <HomeIcon />, text: "Home Health & Hospice Providers" },
    { icon: <PsychologyIcon />, text: "Behavioral Health & Addiction Recovery Facilities" },
    { icon: <ElderlyWomanIcon />, text: "Skilled Nursing & Long-Term Care Centers" },
    { icon: <ScienceIcon />, text: "Diagnostic & Imaging Labs" },
    { icon: <DevicesIcon />, text: "Healthtech and Telehealth Platforms" },
  ];

  const coverages = [
    {
      title: "Medical Malpractice / Professional Liability",
      description: "Covers claims of negligence, treatment errors, or omissions leading to patient harm. Includes defense costs and settlement support."
    },
    {
      title: "General Liability",
      description: "Protects against slip-and-fall and third-party bodily injury or property damage occurring on your premises."
    },
    {
      title: "Property Insurance",
      description: "Covers physical buildings, medical equipment, furnishings, and improvements in the event of fire, water damage, or theft."
    },
    {
      title: "Cyber Liability",
      description: "Essential for HIPAA-covered entities. Covers data breaches, ransomware, regulatory fines, patient notification, and reputational damage."
    },
    {
      title: "Workers' Compensation",
      description: "Protects healthcare employees—clinical and administrative—against injury-related costs, lost wages, and long-term care from workplace incidents."
    },
    {
      title: "Employment Practices Liability (EPLI)",
      description: "Covers claims related to discrimination, harassment, wrongful termination, or wage disputes."
    },
    {
      title: "Business Interruption",
      description: "Protects income and fixed expenses if your facility is shut down due to insured loss (e.g., fire, equipment failure, major health outbreak)."
    },
    {
      title: "Sexual Abuse & Molestation Liability",
      description: "Especially critical for long-term care and behavioral health settings. Covers sensitive exposures with tailored legal and reputational support."
    }
  ];

  const riskServices = [
    {
      icon: <SearchIcon />,
      title: "Facility Risk Assessments",
      description: "We conduct on-site evaluations of clinical and administrative areas to uncover potential liability, patient safety issues, and OSHA compliance gaps."
    },
    {
      icon: <DescriptionIcon />,
      title: "Regulatory & Compliance Review",
      description: "We help healthcare clients navigate HIPAA, OSHA, CMS risk-related guidelines, state board compliance, and credentialing and audit prep."
    },
    {
      icon: <BalanceIcon />,
      title: "Claims Advocacy",
      description: "When claims arise, we provide legal coordination, policy coverage analysis, defense strategy alignment, and settlement and negotiation oversight."
    },
    {
      icon: <BuildIcon />,
      title: "Premium Control Strategies",
      description: "We utilize loss ratio analytics, risk scoring, and proactive risk control to reduce renewal volatility and support long-term insurance planning."
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Healthcare Services Insurance Solutions
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Protecting Providers. Preserving Care.
          </Typography>
        </Box>

        {/* Overview Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'background.default' }}>
          <Typography variant="h4" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            In the healthcare industry, risk doesn't stop at patient care. From medical malpractice to cyber threats, facility safety to employee injury, healthcare organizations face some of the most complex and heavily regulated exposures in the insurance landscape.
          </Typography>
          <Typography>
            At Benchmark Insurance Group, we design customized insurance and risk management programs that help healthcare businesses protect patients, providers, and property—while staying compliant and operational. Whether you're running a single practice, a specialty clinic, or a multi-site network, we deliver the coverage and counsel you need to care confidently.
          </Typography>
        </Paper>

        {/* Who We Serve Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Who We Serve
          </Typography>
          <GridContainer>
            {providers.map((provider, index) => (
              <GridItem key={index} xs={12} sm={6} md={4}>
                <Paper sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>{provider.icon}</Box>
                  <Typography>{provider.text}</Typography>
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
            Benchmark's Healthcare Risk Management Services
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
            Why Benchmark Insurance?
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Healthcare-Specific Expertise"
                secondary="We understand the operational, legal, and reputational dynamics of healthcare risk."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Integrated Technology"
                secondary="Access certificates, incident reports, and compliance checklists through our client portal."
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Team-Based Advisory"
                secondary="Our approach goes beyond policies—offering strategic insight from healthcare lawyers, adjusters, and medical risk advisors."
              />
            </ListItem>
          </List>
        </Paper>

        {/* Call to Action Section */}
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Care with Confidence. Insure with Precision.
          </Typography>
          <Typography paragraph>
            Your patients depend on you. You can depend on Benchmark Insurance Group to protect every aspect of your healthcare business.
          </Typography>
          <Typography>
            Schedule a consultation with our Healthcare Risk Team today and get a full risk audit of your practice or facility.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default HealthcareInsurance; 