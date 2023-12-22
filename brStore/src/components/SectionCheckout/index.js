import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';

export const SectionCheckout = ({ title, children }) => {

    // State utilizado para destacar o menu (link ativo)
    const [menuTab, setMenuTab] = useState('bag');

    // Guarda os produtos adicionados na sacola
    const [productsCart, setProductsCart] = useState([]);


    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem('productCart'));
        setProductsCart(storageCart);
    }, [])


    return (
        // <section className='flex w-11/12 mx-auto my-4 check:flex-col'>
        <section className='w-11/12 mx-auto my-4 check:flex-col'>

            {/* Área da tabela */}
            <div className="w-full">
                {
                    productsCart.length !== 0 ?
                        (
                            <div>
                                <ul className="flex justify-center items-center gap-1">
                                    <Link to='/checkout' className={menuTab === 'bag' ? "bg-blue-500 text-white p-2 rounded-xl" : "bg-gray-500 text-white p-2 rounded-xl"}
                                        onClick={() => setMenuTab('bag')}><li> <i className="bi bi-bag-check"></i> Produtos na sacola</li></Link>

                                    <i className="bi bi-arrow-right text-lg text-blue-500"></i>
                                    <Link to='/checkout/address' className={menuTab === 'address' ? "bg-blue-500 text-white p-2 rounded-xl" : "bg-gray-500 text-white p-2 rounded-xl"}
                                        onClick={() => setMenuTab('address')}><li> <i className="bi bi-house-add"></i> Endereço</li></Link>

                                    <i className="bi bi-arrow-right text-lg text-blue-500"></i>
                                    <Link to='/checkout/payment' className={menuTab === 'payment' ? "bg-blue-500 text-white p-2 rounded-xl" : "bg-gray-500 text-white p-2 rounded-xl"}
                                        onClick={() => setMenuTab('payment')}><li> <i className="bi bi-cash-coin"></i> Pagamento</li></Link>
                                </ul>
                            </div>
                        )
                        :
                        null
                }



                <h1 className='text-4xl font-semibold text-gray-600 my-8'>{title}</h1>

                {/* Prop utilizada para renderizar a tabela */}
                {children}

            </div>


            {/* Conteúdo de rota aninhada */}
            <Outlet />

        </section>
    );
}