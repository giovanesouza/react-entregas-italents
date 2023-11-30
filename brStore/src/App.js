import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Electronics from './pages/Products/electronics';
import Jewelery from './pages/Products/jewelery';
import MensClothing from './pages/Products/mens-clothing';
import WomensClothing from './pages/Products/womens-clothing';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Register from './pages/Register';
import Success from './pages/Register/success';
import Login from './pages/Login';
import FavoriteProducts from './pages/User/FavoriteProducts';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Rotas aninhadas */}
        <Route path='/products' element={''}>

          <Route path='electronics' element={<Electronics />} />
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='mens-clothing' element={<MensClothing />} />
          <Route path='womens-clothing' element={<WomensClothing />} />

        </Route>


        <Route path='/register' element={''}>
          <Route index element={<Register />} />
          <Route path='success' element={<Success />} />
        </Route>

        <Route path='/login' element={<Login />} />

        <Route path='/user/favorite-products' element={<FavoriteProducts />} />

        {/* Rota para caminhos que não existem */}
        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
