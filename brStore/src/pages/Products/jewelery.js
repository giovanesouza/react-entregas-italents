import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreCategoryAPI } from "../../hooks/useStoreCategoryAPI";


const Jewelery = () => {

    const jeweleryProducts = useStoreCategoryAPI('jewelery');

    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Jóias'}>

                {
                    jeweleryProducts.map(product => (

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

export default Jewelery;