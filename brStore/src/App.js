import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Electronics from './pages/Products/electronics';
import Jewelery from './pages/Products/jewelery';
import MensClothing from './pages/Products/mens-clothing';
import WomensClothing from './pages/Products/womens-clothing';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/products' element={''}>

          <Route path='electronics' element={<Electronics />} />
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='mens-clothing' element={<MensClothing />} />
          <Route path='womens-clothing' element={<WomensClothing />} />

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
