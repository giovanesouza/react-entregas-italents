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

                        <ProductCard nome={prod.nomeProd} img={prod.imagem} precoAnterior={prod.precoAntigo} precoAtual={prod.precoNovo} key={prod.id} />

                    ))
            }

        </ProductList >

    );
}