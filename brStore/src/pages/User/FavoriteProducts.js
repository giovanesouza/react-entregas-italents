import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard";
import camera from '../../assets/images/products/eletronicos/camera-canon.jpg'

const FavoriteProducts = () => {

    // Lista de produtos
    const [favProducts, SetfavProducts] = useState([
        {
            id: 1,
            nomeProd: "Câmera Digital EOS, Canon.",
            precoAntigo: 2899.40,
            precoNovo: 2500.99,
            descricao: "Câmera Digital EOS, Canon, Preto, 23 x 14 x 17 cm",
            imagem: `${camera}`,
            categoria: "eletronicos"
        },
    ]);


    return (
        <main className="w-screen p-2">

            <ProductList nomeLista='Favoritos'>

                {
                    favProducts.length === 0 ?
                        (<p className="text-base text-gray-600 mb-10">Nenhum produto adicionado!</p>)
                        :
                        favProducts.map(product => (
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

export default FavoriteProducts;