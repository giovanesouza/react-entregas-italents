export const Table = ({ children }) => {
    return (
        <div className="max-w-full overflow-x-auto mt-3">
            <table className="w-full md:w-screen border-b-2">
                <thead>
                    <tr className="text-gray-600 md:text-xs 2xl:text-base">
                        <th className="max-w-max">Produto</th>
                        <th className="max-w-max">Preço unitário</th>
                        <th className="max-w-max">Quantidade</th>
                        <th className="max-w-xs">Preço total</th>
                        <th className="max-w-xs">Remover item</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Produtos inseridos de forma dinâmica */}
                    {children}
                </tbody>
            </table>
        </div>
    );
}