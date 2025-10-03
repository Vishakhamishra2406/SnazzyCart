import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

// Assets
import men_banner from "./assets/men_banner.png";
import women_banner from "./assets/women_banner.png";
import kids_banner from "./assets/kids_banner.png";

// Wrapper to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

// Mapping for category banners
const categoryBanners = {
  men: men_banner,
  women: women_banner,
  kids: kids_banner,
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/:category"
            element={
              <CategoryRoute />
            }
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<div style={{ padding: "2rem", textAlign: "center" }}>404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// Helper component to render ShopCategory dynamically
const CategoryRoute = () => {
  const { category } = useLocation().pathname.split("/").reduce((acc, part, index) => {
    if (index === 1) acc.category = part;
    return acc;
  }, {});

  const banner = categoryBanners[category];

  if (!banner) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Category Not Found</div>;
  }

  return <ShopCategory banner={banner} category={category} />;
};

export default App;
