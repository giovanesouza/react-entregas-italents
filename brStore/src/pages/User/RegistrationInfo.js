import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/authService";

const RegistrationInfo = () => {

    // Objeto com os campos utilizados para pegar as informações do usuário
    const [fieldValue, setFieldValue] = useState({
        nome: "",
        email: "",
        senha: "",
        imagem: "",
        admin: false
    });


    useEffect(() => {
        findUserById();
    }, []);

    const findUserById = async () => {

        const user = JSON.parse(localStorage.getItem('userFull'));

        try {
            const response = await getUserById(user.id);

            if (response) {
                setFieldValue(response.data);
            };

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro RegistrationInfo (front): ', err);
        }
    };


    return (
        <main className="w-11/12 mx-auto">

            <h1 className='text-2xl text-center text-blue-600 my-4'>
                <i className="bi bi-clipboard-check-fill mr-2"></i>
                Info. cadastrais
            </h1>

            <div className="mb-5">

                <div className="text-base text-gray-600 text-center">
                    <label htmlFor="imagem" className="block my-2">Foto:</label>
                    <img src={fieldValue.imagem} name='imagem' id="imagem" alt={fieldValue.nomeCompleto} className="w-20 m-auto" />
                </div>

                <div className="text-base text-gray-600">
                <label htmlFor="nome" className="block my-2">Nome:</label>
                    <input type="text" name='nome' id="nome" value={fieldValue.nome} readOnly className="w-4/6 text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3 sm:w-full" />
                </div>

                <div className="text-base text-gray-600">
                <label htmlFor="email" className="block my-2">E-mail:</label>
                    <input type="email" name='email' id="email" value={fieldValue.email}
                className="w-4/6 text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3 sm:w-full"
                 readOnly />
                </div>

                <div className="text-base text-gray-600">
                <label htmlFor="senha" className="block my-2">Senha:</label>
                    <input type='password' value={fieldValue.senha}  name="senha" id="senha"
                    className="w-4/6 text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3 sm:w-full"
                    readOnly />
                </div>

                <h4 className="bg-red-500 text-white text-center font-bold rounded-md my-10 p-1">
                    <i className="bi bi-pencil-square mr-2"></i>
                    Salve os seus dados em local seguro!
                </h4>

            </div>

        </main>
    );
}

export default RegistrationInfo;