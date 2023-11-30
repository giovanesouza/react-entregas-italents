import { ButtonSubmit } from "../../components/ButtonSubmit";
import FormGroupLogin from "../../components/FormGroup/login";
import { useRef, useState } from "react";


const Login = () => {

    // Utilizado para pegar o input password
    const passwordInput = useRef(null);
    // console.log(passwordInput);

    // Utilizado para modificar o icon de visualização de senha
    const [seePassword, setSeePassword] = useState(false);
    // console.log(seePassword)


    // Objeto com os campos utilizados para pegar as informações do usuário
    const [fieldValue, setFieldValue] = useState({
        email: "",
        senha: ""
    });

    // A cada mudança nos inputs, captura o texto digitado
    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value); // Pega o nome e valor do input que está onChange e imprime no console

        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [event.target.name]: event.target.value // atualiza as informações dinamicamente
        });
    };



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

            <h1 className='w-full flex flex-col items-center justify-center text-4xl font-semibold text-gray-600 my-4'>
                <i class="bi bi-person-fill text-4xl text-blue-800"></i>
                Login do cliente
            </h1>

            <form className="w-80 mx-auto my-8">

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