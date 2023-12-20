
import { useNavigate } from 'react-router-dom';
const Admin = ({children}) => {

    const navigate = useNavigate();

    return(
        <section className="my-12 max-w-screen-xl mx-auto px-6">

        <div className="flex justify-end space-y-2">
            <button onClick={() => navigate('/admin/add-product')} className="w-44 px-2  py-3 bg-gray-600 text-white 
            hover:bg-blue-600 rounded-lg transition duration-300">
                Adiciona Produto
            </button>
        </div>

        <div className="flex flex-col my-8">

            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">

                    <div className="overflow-hidden sm:rounded-lg shadow-md">

                        <table className="min-w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-xs font-medium bg-blue-600 text-white px-6 py-3 text-left uppercase tracking-wider"
                                    >
                                        Imagem
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xs font-medium  bg-blue-600 text-white px-6 py-3 text-left uppercase tracking-wider"
                                    >
                                        Nome
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xs font-medium  bg-blue-600 text-white px-6 py-3 text-left uppercase tracking-wider"
                                    >
                                        Preco
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-xs font-medium  bg-blue-600 text-white px-6 py-3 text-left uppercase tracking-wider"
                                    >
                                        Código de Barras
                                    </th>
                                    <th scope="col" className="relative px-6 py-3  bg-blue-600 text-white">
                                        <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Ações</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {children}
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Admin;