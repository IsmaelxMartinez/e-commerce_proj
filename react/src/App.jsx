import Navbar from "./components/navbar.jsx";
import Products from "./pages/products.jsx";
import Home from "./pages/index.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"; // CSS
import "materialize-css/dist/js/materialize.min.js"; // JavaScript

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
