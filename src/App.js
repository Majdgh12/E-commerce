import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignup from "./pages/LoginSignup";
import men_banner from "./components/Assests/banner_mens.png"
import women_banner from "./components/Assests/banner_women.png"
import kid_banner from "./components/Assests/banner_kids.png"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory  banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path="/kids" element={<ShopCategory category="kid"  banner={kid_banner} />} />
          <Route path="/product" elemen={<Product />} />
          <Route path=":productiId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
