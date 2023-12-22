import { useEffect, useState } from "react";
// import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
// import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate, useParams } from "react-router-dom";

import { findProductById } from "../../../services/productService";

const ProductInfo = () => {

    // Utilizado para definir a quantidade do produto
    const [quantity, setQuantity] = useState(1);

    // Permite acessar dados passados na rota
    const { id } = useParams();
    console.log(id);

    // Vai armazenar as informações do produto com base no id dele
    const [product, setProduct] = useState({});
    console.log('PRODUTO SELECIONADO: ', product)

    const navigate = useNavigate();

    // Executa sempre que o componente for carregado
    useEffect(() => {
        getProductById();
    }, []);

    // Busca o produto com base no id passado
    const getProductById = async () => {
        const response = await findProductById(id);
        console.log('Produco por id: ', response.data);

        setProduct(response.data); // Seta os valores do produto
    };


    const addToCart = () => {

        // Total a pagar pelo produto (unit x quantity)    
        const totalPrice = (product.precoUnitario * 0.8) * quantity;

        const productCart = [
            {
                ...product,
                sale: product.precoUnitario * 0.8,
                quantity: quantity,
                total: totalPrice
            }
        ];

        console.log(productCart);

        // Pega os produtos add no carrinho (localStorage)
        const storageCart = JSON.parse(localStorage.getItem('productCart'));

        // Se já existirem informações no carrinho, add novas
        if (storageCart) {
            productCart.push(
                ...storageCart
            );

            // Atualiza a lista de produtos no carrinho (localStorage)
            localStorage.setItem('productCart', JSON.stringify(productCart));
        }

        // Salva as informações do carrinho no localStorage
        localStorage.setItem('productCart', JSON.stringify(productCart));

        // Redireciona para tela do carrinho
        navigate('/checkout');
    };



    return (
        <main className="max-w-screen-xl mx-auto px-3 my-4">
            <div className="flex flex-col justify-center items-center">

                <span className="text-base text-gray-600">Selecione a quantidade do pedido abaixo</span>

                <div className="grid md:grid-cols-1 2xl:grid-cols-2 gap-10 border border-y-8 rounded-xl p-6">
                    <div className="order-2 flex flex-col justify-center">

                        <h1 className="text-center md:text-center lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-600 select-none">
                            {product.nome}
                        </h1>

                        <p className="text-center md:text-center lg:text-left text-sm text-gray-400 leading-relaxed select-none">
                            {product.descricao}
                        </p>

                        {/* <div className="bg-black flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8"> */}
                        <div className="flex items-center justify-center pt-5 gap-5">
                          
                            <h2 className="text-3xl md:text-2xl font-bold text-gray-600 poppins select-none">
                                R$ {(product.precoUnitario * 0.8).toFixed(2)}
                            </h2>

                            <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                                <button
                                    onClick={() => {
                                        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                                    }}
                                    className="text-2xl w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer p-1">-</button>

                                <span className="text-lg text-gray-700 poppins select-none">{quantity}</span>

                                <button
                                    onClick={() => {
                                        setQuantity(quantity + 1)
                                    }}
                                    className="text-2xl w-8 h-8 rounded-full text-orange-600 hover:scale-105 transform transition duration-500 cursor-pointer p-1">+</button>

                            </div>

                        </div>
                        <div className="mt-8 flex items-center justify-center md:justify-center lg:justify-start">
                            <button onClick={addToCart} className="w-full text-lg flex items-center justify-center space-x-3  bg-gray-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full transform transition duration-700 hover:scale-105">
                                <i className="bi bi-handbag"></i>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                    <div className="order-1">
                        <img src={product.imagem} alt={product.nome} className="w-3/4 md:w-3/4 lg:w-full mx-auto" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductInfo;