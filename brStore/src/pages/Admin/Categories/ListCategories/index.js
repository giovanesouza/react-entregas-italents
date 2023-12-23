import { useEffect, useState } from "react";
import { deleteCategoryService, findAllCategories } from "../../../../services/categoryService";
import { Link, useNavigate } from "react-router-dom";

const ListCategories = () => {

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories();
    }, []);


    const getAllCategories = async () => {
        try {

            const response = await findAllCategories();
            setCategories(response.data)

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro ListCategories (front): ', err);
        }
    };

    const removeProduct = async (id) => {
        const answer = window.confirm('Deseja excluir a categoria?');
        if (answer) {
            await deleteCategoryService(id);
            getAllCategories();
        }
    };



    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="flex justify-end space-y-2">
                <button onClick={() => navigate('/admin/add-category')} className="w-44 px-2  py-3 bg-gray-600 text-white 
            hover:bg-blue-600 rounded-lg transition duration-300">
                    Adiciona Categoria
                </button>
            </div>

            <table className="w-full mt-6">
                <thead>
                    <tr>
                        <th scope="col"
                            className="text-xs font-medium bg-blue-600 text-white px-6 py-3 text-left uppercase tracking-wider">Nome da Categoria</th>
                        <th scope="col"
                            className="text-xs text-center font-medium bg-blue-600 text-white px-6 py-3 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category =>
                        (
                            <tr key={category._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{category.nome}</td>
                                <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                    <div className="flex items-center justify-center space-x-3">
                                        {/* Link para editar o produto */}
                                        <Link to={`/admin/edit-category/${category._id}`}>
                                            <i className="bi bi-pencil-square cursor-pointer text-2xl text-blue-400"></i>

                                        </Link>

                                        {/* Chama a função de excluir produto passando o id */}
                                        <i className="bi bi-trash cursor-pointer text-2xl text-red-600"
                                            onClick={() => removeProduct(category._id)}></i>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </section>
    );
}

export default ListCategories;