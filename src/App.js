import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './component/pages/HomePage';
import ProductPage from './component/pages/ProductPage';
import Cart from './component/pages/Cart';
import Login from './component/pages/Login';
import Signup from './component/pages/Signup';
import Checkout from './component/pages/Checkout';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage key="HomePage" />}> </Route>
        <Route exact path="/product" element={<ProductPage key="ProductPage" />}> </Route>
        <Route exact path="/cart" element={<Cart key="Cart" />}> </Route>
        <Route exact path="/login" element={<Login key="Login" />}> </Route>
        <Route exact path="/signup" element={<Signup key="Signup" />}> </Route>
        <Route exact path="/checkout" element={<Checkout key="Checkout" />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
