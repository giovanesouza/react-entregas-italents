import { useState, useRef } from "react";
import FormGroup from "../../components/FormGroup/register";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { createUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";


const Register = () => {

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
        // dataNasc: "",
        // cpf: "",
        // telefone: "",
        email: "",
        senha: "", 
        // imagem: "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png",
        imagem: "",
        admin: false
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
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createUser(fieldValue);

            console.log(response.data)

            if (response) {
                navigate('/register/success', { state: response.data })
            };
            
        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro findById (front): ', err);
        }

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

                <FormGroup label='Foto' inputType='text' name='imagem' value={fieldValue.imagem} onChange={handleChange} />

                {/* <FormGroup label='Data de nascimento' inputType='date' name='dataNasc' value={fieldValue.dataNasc} onChange={handleChange} /> */}

                {/* <FormGroup label='CPF' inputType='text' name='cpf' value={fieldValue.cpf} max={11} onChange={handleChange} /> */}

                {/* <FormGroup label='Telefone' inputType='tel' name='telefone' value={fieldValue.telefone} max={11} onChange={handleChange} /> */}

                <FormGroup label='E-mail' inputType='email' name='email' value={fieldValue.email} onChange={handleChange} />


                <FormGroup label='Senha' inputType='password' name='senha' value={fieldValue.senha} max={50} onChange={handleChange} refInput={passwordInput}>

                    {
                        seePassword ? (<i className="bi bi-eye-fill absolute right-3 sm:top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                            :
                            (<i className="bi bi-eye-slash-fill absolute right-3 sm:top-7 text-gray-600 cursor-pointer" onClick={handleClick}></i>)
                    }

                </FormGroup>

                
                <ButtonSubmit label='Cadastrar' />

            </form>
        </main>

    );
}

export default Register;