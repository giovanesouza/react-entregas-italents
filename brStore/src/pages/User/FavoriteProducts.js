import { useEffect, useRef, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard";
import { getUserById } from "../../services/authService";
import { findProductById } from "../../services/productService";

const FavoriteProducts = () => {

    // Lista de produtos favoritos
    const [favProducts, setFavProducts] = useState([]);
    console.log('produtos favoritos: ', favProducts)

    useEffect(() => {

        findUserById();

    }, []);

    const findUserById = async () => {
        try {
            const { id } = JSON.parse(localStorage.getItem('userInfo'));
            const response = await getUserById(id);

            if (response) {
                const favoritos = response.data.produtos_fav;

                // Utilizado para criar listas com IDs únicos
                const uniqueProductIds = new Set();

                favoritos.forEach(fav => uniqueProductIds.add(fav._id));

                // Atualizar o estado apenas com IDs únicos
                uniqueProductIds.forEach(productId => getProductById(productId));
            }
        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro FavoriteProducts (front): ', err);
        }
    };

    const getProductById = async (id) => {
        try {
            const response = await findProductById(id);
            const data = response.data;

            setFavProducts(prevFavProducts => {
                // Verificar se o produto já está na lista antes de adicionar
                if (!prevFavProducts.some(product => product._id === data._id)) {
                    return [...prevFavProducts, data];
                }
                return prevFavProducts; // Não adicionar se já estiver na lista
            });
        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro FavoriteProducts (front): ', err);
        }
    };



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
                                handleClick={()=> alert('clicou em remover')}
                            />
                        ))
                }

            </ProductList>

        </main>
    );
}

export default FavoriteProducts;