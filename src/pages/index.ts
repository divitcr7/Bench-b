import Home from "./Home";
import About from "./About";
import Industry from "./Industry";
import Onboarding from "./Onboarding";
import BlogList from "./Blogs";
import BlogPost from "./Blogs/[id]";
import BlogSearchResult from "./Blogs/blogSearchResult";

export {
  Home,
  About,
  Industry,
  Onboarding,
  BlogList,
  BlogPost,
  BlogSearchResult,
};

// Tools
export { default as CertificateGenerator } from './tools/CertificateGenerator';
export { default as RiskCalculator } from './tools/RiskCalculator';
export { default as ClaimsPortal } from './tools/ClaimsPortal';
export { default as PremiumForecast } from './tools/PremiumForecast';
export { default as PolicyChecker } from './tools/PolicyChecker';
export { default as RiskLibrary } from './tools/RiskLibrary';
export { default as QuoteSubmission } from './tools/QuoteSubmission';
export { default as VendorMarketplace } from './tools/VendorMarketplace';
export { default as BookingScheduler } from './tools/BookingScheduler';
export { default as ClientDashboard } from './tools/ClientDashboard';
