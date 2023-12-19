import { useContext, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList/ProductList';
import { useStoreAPI } from '../../hooks/useStoreAPI';
import { AuthContext } from '../../context/AuthContext';


const Home = () => {

    const { findUserById } = useContext(AuthContext);

    useEffect(() => {
        console.log('COMPONENTE NASCEU NA HOME');

        const userInfo = JSON.parse(localStorage.getItem('userInfo')); // contem email, id, token
        // Verifica se existe...

        // Pega as informações do usuário com base no id
        if (userInfo) {
            // Busca o usuário pelo id e seta as informações dele em userFull e no localStorage
            findUserById(userInfo.id);
        };


    }, []);

    const allProducts = useStoreAPI();

    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Nossos produtos'}>

                {
                    allProducts.map(product => (

                        <ProductCard
                            product={product}
                            key={product.id}
                        />

                    ))
                }

            </ProductList>

        </main>
    );
}

export default Home;