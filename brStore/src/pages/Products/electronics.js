import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreCategoryAPI } from "../../hooks/useStoreCategoryAPI";


const Electronics = () => {

    const eletronicsProducts = useStoreCategoryAPI('electronics');

    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Eletrônicos'}>

                {
                    eletronicsProducts.map(product => (

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

export default Electronics;