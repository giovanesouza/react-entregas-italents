import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
import { useStoreCategoryAPI } from "../../hooks/useStoreCategoryAPI";

const WomensClothing = () => {

    const womenProducts = useStoreCategoryAPI("women's clothing");

    return (
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Roupas Femininas'}>

                {
                    womenProducts.map(product => (

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

export default WomensClothing;