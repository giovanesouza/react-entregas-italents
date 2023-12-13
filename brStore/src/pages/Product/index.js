import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";

export const Product = () => {

    const { state } = useLocation();
    console.log('Produtos encontrados - state: ', state);

    return (

        <ProductList nomeLista='Produtos localizados'>

            {
                state.length === 0 ?
                    (<p className="text-base text-gray-600 mb-8">Nenhum produto localizado.</p>)
                    :
                    state.map(prod => (

                        <ProductCard nome={prod.title} img={prod.image} precoAnterior={(prod.price * 5).toFixed(2)} precoAtual={(prod.price * 3).toFixed(2)} key={prod.id} />

                    ))
            }

        </ProductList >

    );
}