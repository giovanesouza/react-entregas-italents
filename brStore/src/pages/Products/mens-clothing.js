import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreCategoryAPI } from "../../hooks/useStoreCategoryAPI";


const MensClothing = () => {

    const menProducts = useStoreCategoryAPI("men's clothing");

    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Roupas Masculinas'}>

                {
                    menProducts.map(product => (

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

export default MensClothing;