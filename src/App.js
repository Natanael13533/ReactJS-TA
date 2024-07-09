import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Api from './pages/Api';
import Context from './pages/Context';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/contextapi" element={<Context />} />
          <Route path="/redux" element={<Products />} />
          <Route path="/redux/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
