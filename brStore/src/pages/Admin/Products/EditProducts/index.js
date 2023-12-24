import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

import { findAllCategories } from "../../../../services/categoryService"; // Busca no BD
import { findProductById, updateProductById } from "../../../../services/productService";


const EditProduct = () => {

    // Permite acessar dados passados na rota
    const { id } = useParams();
    console.log(id);

    // State para os campos do form
    const [productForm, setProductForm] = useState({
        nome: "",
        descricao: "",
        precoUnitario: 0,
        imagem: "",
        codigoBarra: 0,
    });

    // State para as categorias vindas do BD
    const [categories, setCategories] = useState([]);


    // State para o MultiSelect - é alterado no momento de cadastrar produto
    const [selected, setSelected] = useState([]);

    const navigate = useNavigate();

    // Executa funções cada vez que o componente nascer
    useEffect(() => {
        getCategories();
        getProductById();
    }, []);


    const getProductById = async () => {
        const response = await findProductById(id);
        console.log('Produco por id: ', response.data);

        setProductForm(response.data);
    };


    // Chama função do serviço
    const getCategories = async () => {
        const response = await findAllCategories();

        // Pega os Arrays das categorias e retornam modificadas para se adequarem ao padrão do MultiSelect - label/value
        const categoriesSelect = response.data.map(categoria => {
            // Retorna um novo objeto
            return {
                value: categoria._id,
                label: categoria.nome
            }
        })

        // console.log('Produtos: ', response); // Vem do Back
        // console.log('Produtos no padrão MultiSelect: ', categoriesSelect); // Formatado

        setCategories(categoriesSelect);
    };


    // Seta as alterações dos inputs (atualizadas)
    const handleChangeValues = (evento) => {
        setProductForm({
            ...productForm,
            [evento.target.name]: evento.target.value
        })
        console.log(productForm);
    };


    const handleSubmit = async (evento) => {
        evento.preventDefault();

        // Pega os 'IDs' das categorias selecionadas
        const categoriesId = selected.map(category => {
            return {
                _id: category.value
            }
        });


        // Objeto do produto que será atualizado
        const product = {
            ...productForm,
            categorias: categoriesId,
        };

        const response = await updateProductById(id, product);

        if (response) {
            alert(`Produto ${response.data.nome} editado com sucesso!`);
            navigate('/');
        }

    };


    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">

            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl text-gray-600">Edição de Produto</h1>
            </div>

            <div className="flex justify-end space-y-2">
                <button onClick={() => navigate('/')} className="w-44 px-2  py-3 bg-gray-600 text-white 
            hover:bg-blue-600 rounded-lg transition duration-300">
                    Voltar
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-2 gap-10 mt-6">
                <div className="flex flex-col space-y-4">
                    <label htmlFor="nome" className="text-gray-500">
                        Nome
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={productForm.nome}
                        required
                        onChange={handleChangeValues}
                        className='text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0'
                    />

                    <label htmlFor="descricao" className="text-gray-500">
                        Descrição
                    </label>
                    <textarea
                        name="descricao"
                        id="descricao"
                        cols="30"
                        rows="5"
                        value={productForm.descricao}
                        onChange={handleChangeValues}
                        className="text-gray-500 border rounded-lg py-3 px-4 w-full focus:outline-none ring-blue-100 transition duration-500 focus:ring-4 resize-none border-gray-400 focus:border-0"
                        required
                    ></textarea>

                    <label htmlFor="codigoBarra" className="text-gray-500">
                        Código de barras
                    </label>
                    <input
                        type="text"
                        id="codigoBarra"
                        name="codigoBarra"
                        value={productForm.codigoBarra}
                        onChange={handleChangeValues}
                        required
                        className='text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0'
                    />
                </div>

                <div className="flex flex-col space-y-4">
                    <label htmlFor="preco" className="text-gray-500">
                        Preco
                    </label>
                    <input
                        type="text"
                        id="preco"
                        name="precoUnitario"
                        value={productForm.precoUnitario}
                        onChange={handleChangeValues}
                        required
                        className='text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0'
                    />
                    <label htmlFor="imagem" className="text-gray-500">
                        Imagem
                    </label>
                    <input
                        type="text"
                        id="imagem"
                        value={productForm.imagem}
                        onChange={handleChangeValues}
                        name="imagem"
                        required
                        className='text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0'
                    />

                    <label htmlFor="title" className="text-gray-500 poppins">
                        Categoria:
                    </label>

                    <MultiSelect
                        options={categories} // Opções disponíveis

                        value={selected} // O que foi selecionado
                        onChange={setSelected} // Add ao array o que foi selecionado
                        labelledBy="Select"
                    />

                    <div className="mt-8">
                        <button type="submit" className="w-full py-3  bg-gray-600 text-white 
            hover:bg-blue-600 rounded-lg transition duration-300 uppercase 2xl:mt-[41px]">Editar</button>
                    </div>

                </div>
            </form>
        </section>
    )
}
export default EditProduct;