export const Form = () => {
    return (
        <form>
            <h4 className="text-base text-gray-600 text-center font-bold my-2">Forma de pagamento</h4>

            <label className="flex items-center justify-center text-gray-600 gap-2 mb-2">
                <input type="radio" name="payment_method" defaultValue="Cartão de Crédito" />
                Cartão de Crédito
            </label>

            <label className="flex items-center justify-center text-gray-600 gap-2 mb-2">
                <input type="radio" name="payment_method" defaultValue="Cartão de Débito" />
                Cartão de Débito
            </label>

            <button className="block w-full bg-gray-300 text-lg text-blue-600 font-bold border-0 rounded-lg  mt-5 py-1 px-2 transition-all duration-200 ease-in-out hover:bg-blue-600 hover:text-white"
            type="submit">Finalizar compra</button>
        </form>
    );
}