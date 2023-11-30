import { Discount } from './Discount';
import { Form } from './Form';
import { Price } from './Price';

export const InfoPayment = () => {
    return (
        <aside className="w-1/4 shadow shadow-gray-600 rounded-lg check:mt-3 check:w-full p-2">

            <h3 className="text-lg text-center text-blue-700 font-bold">Informações de pagamento</h3>

            {/* TotalItems */}
            <div className='w-full flex justify-between items-center text-gray-600 font-bold my-2 p-2'>
                <span className="label-info">Total itens</span>
                <span className="label-value" id="totalBagQuantityItems">3</span>
            </div>


            {/* Desconto */}
            <Discount />


            {/* Preços */}
            <div>
                <Price labelInfo='Desconto' labelValue={0.00} />
                <Price labelInfo='Subtotal' labelValue={0.00} />
                <Price labelInfo='Totala' labelValue={0.00} />
            </div>

            {/* Pagamento */}
            <Form />

        </aside>
    );
}   