import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Success = () => {

    // State de forma desestruturada -> passado na página de cadastro ('/register')
    const { state } = useLocation();
    // console.log(state)

    return (
        <main className="w-11/12 mx-auto">
            <h1 className='text-4xl font-semibold text-gray-600 my-4 text-center'>Cadastro realizado com sucesso!</h1>

            <div className="mb-5">

                <h2 className="text-xl text-blue-600 my-4">
                    <i class="bi bi-clipboard-check-fill mr-2"></i>
                    Dados cadastrais:
                </h2>

                <p className="text-base text-gray-600"><strong>Nome:</strong> {state.nome}</p>
                <p className="text-base text-gray-600"><strong>Data de nascimento: </strong> <input type='date' value={state.dataNasc} readOnly /></p>
                <p className="text-base text-gray-600"><strong>CPF: </strong> {state.cpf}</p>
                <p className="text-base text-gray-600"><strong>Telefone: </strong> {state.telefone}</p>
                <p className="text-base text-gray-600"><strong>E-mail: </strong> {state.email}</p>
                <p className="text-base text-gray-600"><strong>Senha: </strong> <input type='password' value={state.senha} readOnly /></p>


                <h4 className="bg-red-500 text-white text-center font-bold rounded-md my-3 p-1">
                    <i class="bi bi-pencil-square mr-2"></i>
                    Salve os seus dados em local seguro!
                </h4>

                <Link to='/login' className="inline-block w-full  bg-gray-500 hover:bg-blue-600 text-white text-center font-bold rounded-md p-1">
                    <i class="bi bi-person-fill-up mr-2"></i>
                    Clique aqui para realizar o login
                </Link>

            </div>

        </main>
    )
}

export default Success;