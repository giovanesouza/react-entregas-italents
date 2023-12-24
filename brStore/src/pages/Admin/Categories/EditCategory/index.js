import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findCategoryById, updateCategoryService } from "../../../../services/categoryService";

const EditCategory = () => {

    const { id } = useParams(); // Pega o valor do parâmetro

    const [category, setCategory] = useState({
        nome: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        getCategoryById();
    }, []);


    const getCategoryById = async () => {
        try {
            const response = await findCategoryById(id);
            setCategory(response.data);
        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro EditCategory (front): ', err);
        }
    };

    const handleChangeValues = (event) => {

        setCategory({
            ...category,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await updateCategoryService(id, category);

            if (response) {
                alert(`Categoria '${response.data.nome}' editada com sucesso!`);
                navigate('/admin/categories');
            }

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro EditCategory (front): ', err);
        }

    };


    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl text-gray-600">Cadastro de Categorias</h1>
            </div>

            <div className="flex justify-end space-y-2">
                <button onClick={() => navigate('/admin/categories')} className="w-44 px-2  py-3 bg-gray-600 text-white 
            hover:bg-blue-600 rounded-lg transition duration-300">
                    Voltar
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-2 gap-10 mt-6">
                <div className="flex flex-col space-y-4">

                    <label htmlFor="nome" className="text-gray-500">
                        Nome da Categoria
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        onChange={handleChangeValues}
                        value={category.nome}
                        className='text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0'
                    />


                    <div className="mt-8">
                        <button className="w-full py-3  bg-gray-600 text-white 
        hover:bg-blue-600 rounded-lg transition duration-300 uppercase 2xl:mt-[41px]">Atulizar</button>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default EditCategory;