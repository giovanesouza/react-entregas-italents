import { ButtonSubmit } from "../../components/ButtonSubmit";
import FormGroupLogin from "../../components/FormGroup/login";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";


const Login = () => {

    // Permite pegar a função que foi passada no contexto
    const { loginUser } = useContext(AuthContext);

    // Resposta da requisição
    const { state } = useLocation();

    // Utilizado para pegar o input password
    const passwordInput = useRef(null);

    // Utilizado para modificar o icon de visualização de senha
    const [seePassword, setSeePassword] = useState(false);


    // Objeto com os campos utilizados para pegar as informações do usuário
    const [fieldValue, setFieldValue] = useState({
        email: "",
        senha: ""
    });

    // A cada mudança nos inputs, captura o texto digitado
    const handleChange = (event) => {
        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [event.target.name]: event.target.value // atualiza as informações dinamicamente
        });
    };



    // Altera o type do input password, permitindo a visualização/ocultação da senha
    const handleClick = () => {
        const inputElement = passwordInput.current;
        const inputType = inputElement.getAttribute('type');

        inputElement.setAttribute('type', inputType === 'password' ? 'text' : 'password');

        setSeePassword(!seePassword);
    };

    // Sempre que for fazer uma requisição, utilizar função assíncrona (async)
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Chama a função de login (do context) e passa os valores do form
        loginUser(fieldValue);
    }

    return (
        <main className="w-11/12 mx-auto">

            <h1 className='w-full flex flex-col items-center justify-center text-4xl font-semibold text-gray-600 my-4'>
                <i className="bi bi-person-fill text-4xl text-blue-800"></i>
                Login do cliente
            </h1>

            <form className="w-80 mx-auto my-8" onSubmit={handleSubmit}>

                {/* Exibe msg caso a resposta seja != de ok */}
                <div className="text-center bg-red-500 text-white font-bold rounded-lg mb-5">
                    {state}
                </div>

                {/* Input de email */}
                <FormGroupLogin label='E-mail' inputType="email" name='email' value={fieldValue.email} onChange={handleChange} />

                {/* Input de Senha */}
                <FormGroupLogin label='Senha' inputType='password' name='senha' value={fieldValue.senha} max={50} refInput={passwordInput} onChange={handleChange}>
                    {
                        seePassword ? (<i className="bi bi-eye-fill absolute right-3 top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                            :
                            (<i className="bi bi-eye-slash-fill absolute right-3 top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                    }
                </FormGroupLogin>

                <ButtonSubmit label='Entrar' />

            </form>

        </main>
    );
}

export default Login;