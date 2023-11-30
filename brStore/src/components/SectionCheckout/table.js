export const Table = ({children}) => {
    return (
            <table className="w-full mt-3">
                <thead>
                    <tr className="text-gray-600 text-base">
                        <th>Produto</th>
                        <th>Preço unitário</th>
                        <th>Quantidade</th>
                        <th>Preço total</th>
                        <th>Remover item</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Produtos inseridos de forma dinâmica */}
                    {children}
                </tbody>
            </table>
    );
}