import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
