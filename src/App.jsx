import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components import
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// import pages
import Home from "./pages/home/Home";
import ShopHome from "./pages/shopHome/ShopHome";
import About from "./pages/about/About"
import Conatct from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Conatct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
