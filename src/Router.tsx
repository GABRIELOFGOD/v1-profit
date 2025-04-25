import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import ReferralPage from "./pages/ReferralPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/transaction",
        element: <TransactionPage />
      },
      {
        path: "/referral",
        element: <ReferralPage />
      }
    ]
  }
]);