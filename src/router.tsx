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
  BookingScheduler,
  Careers,
  CommercialPropertyPage,
  PrivateClientPage,
  RiskManagement,
  BenchmarkNetwork,
} from "@/pages";
import ClaimsAdvocacy from "./pages/CommercialProperty/ClaimsAdvocacy";
import AlternativeRiskFinancing from "./pages/CommercialProperty/AlternativeRiskFinancing";
import LossControl from "./pages/CommercialProperty/LossControl";
import RealEstateInsurance from "./pages/RealEstateInsurance";
import HospitalityInsurance from "./pages/HospitalityInsurance";
import RetailServiceInsurance from "./pages/RetailServiceInsurance";
import ConstructionInsurance from "./pages/ConstructionInsurance";
import EnergyInsurance from "./pages/EnergyInsurance";
import HealthcareInsurance from "./pages/HealthcareInsurance";
import ManufacturingInsurance from "./pages/ManufacturingInsurance";
import TransportationInsurance from "./pages/TransportationInsurance";

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
        path: "commercial",
        children: [
          {
            path: "real-estate-insurance",
            element: <RealEstateInsurance />,
          },
          {
            path: "hospitality-insurance",
            element: <HospitalityInsurance />,
          },
          {
            path: "retail-service-insurance",
            element: <RetailServiceInsurance />,
          },
          {
            path: "construction-insurance",
            element: <ConstructionInsurance />,
          },
          {
            path: "energy-insurance",
            element: <EnergyInsurance />,
          },
          {
            path: "healthcare-insurance",
            element: <HealthcareInsurance />,
          },
          {
            path: "manufacturing-insurance",
            element: <ManufacturingInsurance />,
          },
          {
            path: "transportation-insurance",
            element: <TransportationInsurance />,
          }
        ]
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
              }
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
            path: "booking-scheduler",
            element: <BookingScheduler />,
          },
        ],
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
