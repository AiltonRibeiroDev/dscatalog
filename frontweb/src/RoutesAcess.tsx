import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Home/Catalog/Index';
import Admin from 'pages/Home/Admin/Admin';
import ProductDetails from 'pages/Home/ProductDetails';

const RoutesAcess = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />}  />
      <Route path="/products/:productID" element={<ProductDetails/>} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesAcess;
