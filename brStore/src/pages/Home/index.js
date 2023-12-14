import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList/ProductList';
import { useStoreAPI } from '../../hooks/useStoreAPI';

const Home = () => {

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