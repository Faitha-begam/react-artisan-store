import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './pages/All';
import AllCategory from './pages/AllCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<All />} />
          <Route 
            path='/makers-gear' 
            element={<AllCategory category="makers-gear" 
            title="Maker’s Gear" 
            description="Premium tools and creative kits designed for artists, makers, and DIY enthusiasts."
            showIcon={true} />} 
          />
          <Route 
            path='/TheMasterworks' 
            element={<AllCategory category="ready-made-arts" 
            title="The Masterworks" 
            description="Explore timeless finished artworks crafted to elevate your space with elegance and creativity."
            showIcon={true} />} 
          />
          <Route 
            path='/ArtfulLiving' 
            element={<AllCategory category="art-home-essentials" 
            title="Artful Living" 
            description="Thoughtfully curated art and home décor pieces that blend creativity with everyday living."
            showIcon={true} />} 
          />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
