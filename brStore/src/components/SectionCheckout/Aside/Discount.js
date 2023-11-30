export const Discount = () => {
    return (
        <div className="text-gray-600 font-bold text-center">
         
            <h4 className="text-base">Cupom de desconto</h4>

            {/* Cupom área */}
            <div className="flex py-2 gap-2">
                <input type="text" maxLength={15} className="w-1/2 bg-gray-300 text-gray-600 border-0 rounded-lg outline-none p-1 check:w-3/4" />

                {/* aply-discount */}
                <button className="flex-1 bg-transparent text-sm text-gray-600 uppercase border-[.1rem] border-blue-600 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:text-white hover:bg-blue-600">Aplicar</button>
            </div>
        </div>
    );
}