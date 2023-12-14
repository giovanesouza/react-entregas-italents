import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreCategoryAPI } from "../../hooks/useStoreCategoryAPI";


const MensClothing = () => {
    
    const menProducts = useStoreCategoryAPI("men's clothing");

    return(
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Roupas Masculinas'}>

            {
                    menProducts.map(product => (

                        <ProductCard
                            nome={product.title.slice(0, 25)}
                            img={product.image}
                            precoAnterior={(product.price * 5).toFixed(2)}
                            precoAtual={(product.price * 3).toFixed(2)} categoria={product.category}
                            key={product.id}
                        />

                    ))
                }

            </ProductList>

        </main>
    );
}

export default MensClothing;