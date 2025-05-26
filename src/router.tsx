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
  CommercialPropertyPage,
  PrivateClientPage,
  RiskManagement,
  BenchmarkNetwork,
} from "@/pages";
import ClaimsAdvocacy from "./pages/CommercialProperty/ClaimsAdvocacy";
import AlternativeRiskFinancing from "./pages/CommercialProperty/AlternativeRiskFinancing";
import LossControl from "./pages/CommercialProperty/LossControl";

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
        path: "services",
        children: [
          {
            path: "commercial-property",
            children: [
              {
                index: true,
                element: <CommercialPropertyPage />,
              },
              {
                path: "claims-advocacy",
                element: <ClaimsAdvocacy />,
              },
              {
                path: "alternative-risk-financing",
                element: <AlternativeRiskFinancing />,
              },
              {
                path: "loss-control",
                element: <LossControl />,
              },
            ],
          },
          {
            path: "private-client",
            element: <PrivateClientPage />,
          },
          {
            path: "risk-management",
            element: <RiskManagement />,
          },
          {
            path: "benchmark-network",
            element: <BenchmarkNetwork />,
          },
        ],
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
