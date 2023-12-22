import { SectionCheckout } from "../../components/SectionCheckout";
import { Table } from "../../components/SectionCheckout/table";
import { useEffect, useState } from "react";

const Checkout = () => {

    // Guarda os produtos adicionados na sacola
    const [productsCart, setProductsCart] = useState([]);

    // Guarda o valor total do produto
    const [totalValue, setTotalValue] = useState(0);
    console.log('VALOR TOTAL BAG: ', totalValue);



    // Toda vez que acessar o componente carrinho, lista os produtos adicionados
    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo) {
            localStorage.setItem('productCart', JSON.stringify([]));
        };

        const storageCart = JSON.parse(localStorage.getItem('productCart'));
        setProductsCart(storageCart);

        const total = storageCart.reduce((valor, product) => {
            return valor + product.total;
        }, 0);
        setTotalValue(total);

    }, []);


    // Remove produto do carrinho
    const remove = (id) => {
        const storageCart = JSON.parse(localStorage.getItem('productCart'));

        // Retorna todos os produtos, exceto o que foi removido
        const filterCart = storageCart.filter((product) => product._id !== id);

        // Atualiza lista no localStorage
        localStorage.setItem('productCart', JSON.stringify(filterCart));
        setProductsCart(filterCart);
    };




    return (
        <main className="w-screen p-2">

            <SectionCheckout title='Minha sacola'>

                <Table>

                    {
                        productsCart.length === 0 ?
                            (
                                <tr className="text-base text-gray-600 text-center">
                                    <td className="p-3" td colSpan={5}>Sua sacola está vazia</td>
                                </tr>
                            )
                            :
                            productsCart.map((product, index) => (
                                <tr className="text-gray-600 md:text-xs 2xl:text-base" key={index}>
                                    <td className="flex products-center gap-2 py-2"><img src={product.imagem} alt={product.nome} className='w-16' /> {product.nome}</td>
                                    <td className="text-center">R$ {(product.sale).toFixed(2)}</td>
                                    <td className="text-center">
                                        {product.quantity}
                                    </td>
                                    <td className="text-center">R$ {(product.total.toFixed(2))}</td>
                                    <td className="text-center text-red-600">
                                        <i className="bi bi-trash3-fill cursor-pointer"
                                            onClick={() => remove(product._id)}></i>
                                    </td>
                                </tr>
                            ))
                    }

                </Table>


            </SectionCheckout >
        </main >
    );
}

export default Checkout;