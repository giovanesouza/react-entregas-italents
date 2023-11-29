import ProductCard from '../../components/ProductCard';
import ProductList from '../../components/ProductList/ProductList';
import { allProducts } from '../../Database/database';

const Home = () => {
    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Nossos produtos'}>

                {
                    allProducts.map(product => (
                        
                        <ProductCard
                            nome={product.nomeProd}
                            img={product.imagem}
                            precoAnterior={product.precoAntigo.toFixed(2)}
                            precoAtual={product.precoNovo.toFixed(2)}
                            key={product.id}
                        />

                    ))

                }

            </ProductList>

        </main>
    );
}

export default Home;