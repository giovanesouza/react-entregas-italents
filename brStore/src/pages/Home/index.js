import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList/ProductList';
import { AuthContext } from '../../context/AuthContext';
import { findAllProducts, deleteProduct } from '../../services/productService';
import Admin from '../Admin/Home';
import ProductListAdmin from '../../components/ProductList/ProductListAdmin';


const Home = () => {

    const { findUserById, isAdmin } = useContext(AuthContext);

    // Pega todos os produtos cadastrados no BD
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const totalItemsPerPage = 10;


    useEffect(() => {
        getAllProducts(); // Lista todos os produtos do BD

        const userInfo = JSON.parse(localStorage.getItem('userInfo')); // contem email, id, token
        // Verifica se existe...

        // Pega as informações do usuário com base no id
        if (userInfo) {
            // Busca o usuário pelo id e seta as informações dele em userFull e no localStorage
            findUserById(userInfo.id);
        }

    }, [currentPage]); // Sempre que houver alteração no currentPage ele executa novamente


    const getAllProducts = async () => {
        try {

            const limit = totalItemsPerPage;
            const offset = (currentPage - 1) * limit;

            const response = await findAllProducts(limit, offset);

            // Renderiza a página somente se houver produtos
            if (response.data.length > 0) {
                setProducts(response.data);
            } else {
                setProducts([]);
            }

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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <main className='w-screen p-2'>

            {
                isAdmin ?

                    (
                        // Lista de produtos cadastrados com opção de adicionar, editar  e excluir
                        <Admin>
                            {products.map(product => (

                                <ProductListAdmin product={product} key={product._id} onClick={() => removeProduct(product._id)} />

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
                                        key={product._id}
                                    />

                                ))
                            }
                        </ProductList>
                    )

            }


            {/* Paginação */}
            <div className=' bg-blue-200  max-w-max rounded-lg my-5 mx-auto'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                    className='text-black pl-2 cursor-pointer'>
                    Anterior
                </button>

                <span className='text-black font-bold bg-white p-2 mx-2'>pág {currentPage}</span>

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={products.length === 0}
                    className=' text-black rounded-lg pr-2 cursor-pointer'>
                    Próxima
                </button>
            </div>

        </main>
    );
}

export default Home;