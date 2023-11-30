import { useState, useRef } from "react";
import FormGroup from "../../components/FormGroup";
import { useNavigate } from "react-router-dom";

const Register = () => {

    // Permite navegar entre páginas levando ou não um state
    const navigate = useNavigate();

    // Utilizado para pegar o input password
    const passwordInput = useRef(null);
    // console.log(passwordInput);

    // Utilizado para modificar o icon de visualização de senha
    const [seePassword, setSeePassword] = useState(false);
    // console.log(seePassword)


    // Objeto com os campos utilizados para pegar as informações do usuário
    const [fieldValue, setFieldValue] = useState({
        nome: "",
        dataNasc: "",
        cpf: "",
        telefone: "",
        email: "",
        senha: ""
    });


    // Funções

    // A cada mudança nos inputs, captura o texto digitado
    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value); // Pega o nome e valor do input que está onChange e imprime no console

        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [event.target.name]: event.target.value // atualiza as informações dinamicamente
        });
    };


    // Ao enviar formulário enviar os dados para pág '/register/success' que exibirá as informações cadastradas
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/register/success', {state: fieldValue});
    }

    // Altera o type do input password, permitindo a visualização/ocultação da senha
    const handleClick = () => {
        const inputElement = passwordInput.current;
        const inputType = inputElement.getAttribute('type');
        // console.log(inputType);

        inputElement.setAttribute('type', inputType === 'password' ? 'text' : 'password');

        setSeePassword(!seePassword);
    };

    return (
        <main className="w-11/12 mx-auto">

            <h1 className="text-3xl text-center font-semibold text-gray-600 my-4">Cadastre-se</h1>

            <form className="w-6/12 mx-auto py-3 sm:w-full" onSubmit={handleSubmit}>

                <FormGroup label='Nome Completo' inputType='text' name='nome' value={fieldValue.nome} onChange={handleChange} />
                <FormGroup label='Data de nascimento' inputType='date' name='dataNasc' value={fieldValue.dataNasc} onChange={handleChange} />
                <FormGroup label='CPF' inputType='text' name='cpf' value={fieldValue.cpf} max={14} onChange={handleChange} />
                <FormGroup label='Telefone' inputType='tel' name='telefone' value={fieldValue.telefone} max={15} onChange={handleChange} />
                <FormGroup label='E-mail' inputType='email' name='email' value={fieldValue.email} onChange={handleChange} />

                <div className="flex items-center relative mb-2 sm:flex-col sm:mb-5" id="input-password">
                    <label htmlFor="senha" className='w-2/6 text-gray-500 font-semibold sm:w-full'>Senha</label>
                    <input type="password" name="senha" id="senha" maxLength={50} className='w-4/6 text-sm text-gray-500 border border-gray-400 rounded-xl outline-none py-1 px-3 sm:w-full' value={fieldValue.senha} onChange={handleChange} ref={passwordInput} />

                    {
                        seePassword ? (<i className="bi bi-eye-fill absolute right-3 sm:top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                            :
                            (<i className="bi bi-eye-slash-fill absolute right-3 sm:top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                    }

                </div>

                <button type="submit" className='w-full bg-gray-200 text-base font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white rounded-lg p-2 my-4 mx-auto'>Cadastrar</button>
            </form>
        </main>

    );
}

export default Register;