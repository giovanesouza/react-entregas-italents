import { InfoPayment } from "./Aside";

export const SectionCheckout = ({ title, children }) => {
    return (
        <section className='flex w-11/12 mx-auto my-4 check:flex-col'>

            {/* Área da tabela */}
            <div className="w-full">

                <h1 className='text-4xl font-semibold text-gray-600'>{title}</h1>

                {/* Prop utilizada para renderizar a tabela */}
                {children}

            </div>


            {/* Área de info pagamento - Aside */}
            <InfoPayment />

        </section>
    );
}