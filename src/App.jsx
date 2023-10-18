import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import AirbnbYourHome from "./components/AirBNB-your-home/AirbnbYourHome";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import CardsPage from "./components/CardsPage/CardsPage";
import Footer from "./components/homepage/Footer/Footer";
import RootLayout from "./RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="airbnb" element={<AirbnbYourHome />} />
        <Route path="helpCenter" element={<HelpCenter />} />
        <Route path="Cardspage" element={<CardsPage />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
