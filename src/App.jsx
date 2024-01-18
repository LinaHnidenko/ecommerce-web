import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <main className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
