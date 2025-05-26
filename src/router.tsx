import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
  Home,
  About,
  Industry,
  Onboarding,
  BlogList,
  BlogPost,
  BlogSearchResult,
  CertificateGenerator,
  RiskCalculator,
  ClaimsPortal,
  PremiumForecast,
  PolicyChecker,
  RiskLibrary,
  QuoteSubmission,
  VendorMarketplace,
  BookingScheduler,
  ClientDashboard,
  Careers,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "industry",
        element: <Industry />,
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "tools",
        children: [
          {
            path: "certificate-generator",
            element: <CertificateGenerator />,
          },
          {
            path: "risk-calculator",
            element: <RiskCalculator />,
          },
          {
            path: "claims-portal",
            element: <ClaimsPortal />,
          },
          {
            path: "premium-forecast",
            element: <PremiumForecast />,
          },
          {
            path: "policy-checker",
            element: <PolicyChecker />,
          },
          {
            path: "risk-library",
            element: <RiskLibrary />,
          },
          {
            path: "quote-submission",
            element: <QuoteSubmission />,
          },
          {
            path: "vendor-marketplace",
            element: <VendorMarketplace />,
          },
          {
            path: "booking-scheduler",
            element: <BookingScheduler />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <ClientDashboard />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogList />,
          },
          {
            path: ":id",
            element: <BlogPost />,
          },
          {
            path: "search",
            element: <BlogSearchResult />,
          },
        ],
      },
    ],
  },
]);

export default router;
