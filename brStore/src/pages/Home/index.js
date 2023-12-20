import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList/ProductList';
import { AuthContext } from '../../context/AuthContext';
import { findAllProducts, deleteProduct } from '../../services/productService';
import { Link, useNavigate } from 'react-router-dom';
import Admin from '../Admin/Products';
import ProductListAdmin from '../../components/ProductList/ProductListAdmin';


const Home = () => {

    const { findUserById, isAdmin } = useContext(AuthContext);


    // Pega todos os produtos cadastrados no BD
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();



    useEffect(() => {
        console.log('COMPONENTE NASCEU NA HOME');

        getAllProducts(); // Lista todos os produtos do BD

        const userInfo = JSON.parse(localStorage.getItem('userInfo')); // contem email, id, token
        // Verifica se existe...

        // Pega as informações do usuário com base no id
        if (userInfo) {
            // Busca o usuário pelo id e seta as informações dele em userFull e no localStorage
            findUserById(userInfo.id);
        };


    }, []);


    const getAllProducts = async () => {
        try {
            const response = await findAllProducts();
            console.log(response)

            setProducts(response.data);

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro findById (front): ', err);
        }

    };



    const removeProduct = async (id) => {
        const answer = window.confirm('Deseja excluir o produto?');
        if (answer) {
            await deleteProduct(id);
            getAllProducts();
        }
    };


    return (
        <main className='w-screen p-2'>

            {
                isAdmin ?

                    (
                        // Lista de produtos cadastrados com opção de adicionar, editar  e excluir
                        <Admin>
                            {products.map(product => (

                                <ProductListAdmin product={product}  key={product._id} onClick={() => removeProduct(product._id)} />

                            ))}

                        </Admin>
                    )

                    :

                    (
                        // Listagem de produtos para os clientes
                        <ProductList nomeLista={'Nossos produtos'}>
                            {
                                products.map(product => (

                                    <ProductCard
                                        product={product}
                                        key={product.id}
                                    />

                                ))
                            }
                        </ProductList>
                    )

            }


        </main>
    );
}

export default Home;