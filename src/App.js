import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NavScrollExample from './components/Navbar';
import Footer from './components/Footer';
import PopularProduct from './components/popular-products';
import User from './pages/User';
import ProductDetail from './components/ProductDetail';
import Phones from './pages/phones';
import Laptops from './pages/laptops';
import Tablets from './pages/tablets';
import Televisions from './pages/televisions';
import Monitors from './pages/monitors';
import Speakers from './pages/speakers';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/popularproducts' element={<PopularProduct/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/phones' element={<Phones/>}/>
        <Route path='/category/laptops' element={<Laptops/>}/>
        <Route path='/category/tablets' element={<Tablets/>}/>
        <Route path='/category/televisions' element={<Televisions/>}/>
        <Route path='/category/monitors' element={<Monitors/>}/>
        <Route path='/category/speakers' element={<Speakers/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
