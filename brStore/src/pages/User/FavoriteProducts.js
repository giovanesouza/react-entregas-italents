import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard";

const FavoriteProducts = () => {

    // Lista de produtos
    const [favProducts, SetfavProducts] = useState([
    ]);


    return (
        <main className="w-11/12 p-2">

            <ProductList nomeLista='Favoritos'>

                {
                    favProducts.length === 0 ?
                        (<p className="text-base text-gray-600 mb-10">Nenhum produto adicionado!</p>)
                        :
                        favProducts.map(product => (
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

export default FavoriteProducts;