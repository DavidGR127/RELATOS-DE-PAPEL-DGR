////import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import BookDetail from "./pages/BookDetailPage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import Checkout from "./pages/CheckoutPage";
//import Ofertas from "./pages/Ofertas";
//import MasPopulares from "./pages/MasPopulares";
//import MasLeidos from "./pages/MasLeidos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Layout />}>
        <Route path="/main/home" element={<Home />} />
        <Route path="/main/libro/:id" element={<BookDetail />} />
        {/* <Route path="/mas-populares" element={<MasPopulares />} /> */}
        {/* <Route path="/mas-leidos" element={<MasLeidos />} /> */}
        {/* <Route path="/main/ofertas" element={<Ofertas />} /> */}
        <Route path="/main/checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
