import { SectionCheckout } from "../../components/SectionCheckout";
import { Table } from "../../components/SectionCheckout/table";
import { Count } from "../../components/SectionCheckout/count";
import { useState } from "react";

const Checkout = () => {

    // Items add ao carrinho
    const [itemsBag, setItemsBag] = useState([
    ]);

    return (
        <main className="w-screen p-2">

            <SectionCheckout title='Minha sacola'>

                <Table>

                    {
                        itemsBag.length === 0 ?
                            (
                                <tr className="text-base text-gray-600 text-center">
                                    <td className="p-3" td colSpan={5}>Sua sacola está vazia</td>
                                </tr>
                            )
                            :
                            itemsBag.map((item, index) => (
                                <tr className="text-gray-600" key={index}>
                                    <td className="flex items-center gap-2 py-2"><img src={item.imagem} alt={item.nome} className='w-16' /> {item.nome}</td>
                                    <td className="text-center">R$ {item.precoUnit}</td>
                                    <td className="text-center">
                                        <Count qtd={item.qtd} />
                                    </td>
                                    <td className="text-center">R$ {item.precoTotal}</td>
                                    <td className="text-center text-red-600">
                                        <i className="bi bi-trash3-fill cursor-pointer"></i>
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