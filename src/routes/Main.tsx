import Catalog from "@/presentation/screens/catalog/catalog";
import Checkout from "@/presentation/screens/checkout/checkout";
import Product from "@/presentation/screens/product/product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />}>
          <Route index element={<Catalog />} />
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
