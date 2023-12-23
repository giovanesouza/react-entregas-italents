import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Register from './pages/Register';
import Success from './pages/Register/success';
import Login from './pages/Login';
import FavoriteProducts from './pages/User/FavoriteProducts';
import Checkout from './pages/Checkout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import AddProducts from './pages/Admin/Products/AddProducts';
import EditProduct from './pages/Admin/Products/EditProducts';
import ProductInfo from './pages/Products/ProductInfo';
import Address from './components/Address';
import Payment from './components/Payment';
import Complete from './pages/Complete';
import AddCategory from './pages/Admin/Categories/AddCategory';
import ListCategories from './pages/Admin/Categories/ListCategories';
import EditCategory from './pages/Admin/Categories/EditCategory';

function App() {
  return (
    <>
      <AuthProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/register' element={''}>
            <Route index element={<Register />} />
            <Route path='success' element={<Success />} />
          </Route>

          <Route path='/login' element={<Login />} />

          {/* Rotas CLIENTE */}
          {/* ROTA PRIVADA
          Ao acessar a rota '//user/favorite-products' será verificado se o usuário está logado 
          
          logado? -> Renderiza os prod favoritos
          se falso -> Renderiza a login
          
          */}
          <Route path='/user/favorite-products' element={
            <ProtectedRoute>
              <FavoriteProducts />
            </ProtectedRoute>
          } />

          <Route path='/product-info/:id' element={
            <ProtectedRoute>
              <ProductInfo />
            </ProtectedRoute>
          } />


          {/* Rota aninhada */}
          <Route path='/checkout' element={<Checkout />}>
            <Route path='address' element={<Address />} />
            <Route path='payment' element={<Payment />} />
          </Route>

          <Route path='/complete' element={
            <ProtectedRoute>
              <Complete />
            </ProtectedRoute>
          } />


          {/* Rotas ADMIN */}
          <Route path='/admin/categories' element={
            <ProtectedRoute>
              <ListCategories />
            </ProtectedRoute>
          } />

          <Route path='/admin/add-category' element={
            <ProtectedRoute>
              <AddCategory />
            </ProtectedRoute>
          } />

          <Route path='/admin/edit-category/:id' element={
            <ProtectedRoute>
              <EditCategory />
            </ProtectedRoute>
          } />

          <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProducts />
            </ProtectedRoute>
          } />

          <Route path='/admin/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          } />



          {/* Rota para caminhos que não existem */}
          <Route path='/*' element={<NotFound />} />

        </Routes>

        <Footer />

      </AuthProvider >
    </>
  );
}

export default App;
