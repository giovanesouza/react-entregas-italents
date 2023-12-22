import { useEffect, useState } from "react";
import { sendCart, addOrder } from "../../services/orderService";
import { useNavigate } from "react-router-dom";


const Payment = () => {

    // Guarda informações do endereço
    const [address, setAddress] = useState({
        rua: '',
        numero: '',
        complemento: '',
        cep: ''
    });


    // Guarda os produtos adicionados na sacola
    const [productsCart, setProductsCart] = useState([]);
    console.log(productsCart)

    // Guarda o valor total do produto
    const [totalValue, setTotalValue] = useState(0);
  

    const navigate = useNavigate();


    // Toda vez que acessar o componente carrinho, lista os produtos adicionados
    useEffect(() => {

        const endereco = JSON.parse(localStorage.getItem('address'));
        // console.log('endereço do localStorage: ', endereco)

        if (endereco)
            setAddress(endereco);


        const storageCart = JSON.parse(localStorage.getItem('productCart'));
        setProductsCart(storageCart);

        const total = storageCart.reduce((valor, product) => {
            return valor + product.total;
        }, 0);
        setTotalValue(total);

    }, []);


      // Envia o pedido
      const sendOrder = async () => {
        // Pega as informações necessárias para realizar o pedido
        const productsOrder = productsCart.map((product) => {
            return {
                _id: product._id,
                quantidade: product.quantity
            }
        });

        console.log(productsOrder);

        // Forma que os dados serão enviados ao back-end
        const cartInfo = {
            produtos: productsOrder,
            precoTotal: totalValue,
            frete: 5
        };

        // Chamada da API para enviar dados do carrinho 
        const response = await sendCart(cartInfo);


        // Com o carrinho criado por meio da requisição acima, realiza o pedido
        if (response.data) {
            const order = {
                produtos: response.data.produtos,
                precoTotal: response.data.precoTotal,
                frete: response.data.frete,
                concluido: true,
            }

            const responseOrder = await addOrder(order);

            if (responseOrder.data) {
                // Limpa o carrinho no localStorage
                localStorage.setItem('productCart', JSON.stringify([]));

                // navigate('/complete')
                navigate('/complete');
            }
        }
    };



    return (
        <div className="flex flex-col space-y-3 mt-8">

            <h2 className="text-2xl my-4 text-blue-600">
                Pagamento
            </h2>

            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-600">
                    Total
                </span>
                <span className="poppins font-semibold text-blue-600">
                    R$ {totalValue.toFixed(2)}
                </span>
            </div>
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-600">
                    Taxa de Entrega
                </span>
                <span className="poppins font-semibold text-blue-600">
                    R$ 5.00
                </span>
            </div>
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-600 text-xl">
                    Total + taxa:
                </span>
                <span className="poppins font-semibold text-blue-600 text-xl">
                    R$ {(totalValue + 5).toFixed(2)}
                </span>
            </div>
            <div className="flex flex-col space-y-4 mb-3">
                <p className="poppins text-gray-600">Endereço de entrega</p>
                <span className="font-semibold text-blue-600">
                    {address.rua}
                </span>
                <span className="font-semibold text-blue-600">
                    Numero: {address.numero} - complemento: {address.complemento}
                </span>
            </div>
            <div>
                {/* <button onClick={sendOrder} className="w-full px-6 py-3 rounded-lg bg-primary text-white poppins ring-red-300 focus:ring-4 transition duration-500"> */}
                <button onClick={sendOrder} className="w-full px-6 py-3 rounded-lg bg-gray-600 hover:bg-blue-600 text-white 4 transition duration-500">
                    Enviar Pedido
                </button>
            </div>
        </div>
    );
}

export default Payment;