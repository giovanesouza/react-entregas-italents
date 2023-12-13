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
                            nome={product.title.slice(0, 25)}
                            img={product.image}
                            precoAnterior={(product.price * 5).toFixed(2)}
                            precoAtual={(product.price * 3).toFixed(2)}
                            key={product.id}
                        />

                    ))
                }

            </ProductList>

        </main>
    );
}

export default Home;