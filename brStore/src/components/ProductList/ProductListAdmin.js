import { Link } from 'react-router-dom';

const ProductListAdmin = ({ product, onClick }) => {
    return (
        <tr key={product._id} className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <img className="w-16" src={product.imagem} alt={product.nome} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {product.nome}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
               R$ {product.precoUnitario.toFixed(2) }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {product.codigoBarra}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                <div className="flex items-center justify-center space-x-3">
                    {/* Link para editar o produto */}
                    <Link to={`/admin/edit-product/${product._id}`}>
                        <i className="bi bi-pencil-square cursor-pointer text-2xl text-blue-400"></i>

                    </Link>

                    {/* Chama a função de excluir produto passando o id */}
                    <i className="bi bi-trash cursor-pointer text-2xl text-red-600" onClick={onClick}></i>
                </div>
            </td>
        </tr>
    );
}

export default ProductListAdmin;