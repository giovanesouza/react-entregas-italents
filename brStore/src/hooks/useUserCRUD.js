import { useNavigate } from "react-router-dom";

const useUserCRUD = () => {

    // Permite navegar entre páginas levando ou não um state
    const navigate = useNavigate();

    const createUser = async (inputValues) => {

        const response = await fetch('http://localhost:3000/usuario/create', {

            method: 'POST', // Enviando informações do front -> back
            headers: {
                // Tipo dos dados enviados (json)
                'Content-Type': 'application/json'
            },
            // Onde as informações do usuário serão enviadas
            body: JSON.stringify(inputValues) // Converte o objeto para JSON
        });


        // Pega a resposta do servidor - .json() -> permite acessar o body da aplicação
        const data = await response.json();
        console.log('Dados do usuário: ', data);

        // console.log(data.message);

        // Registro realizado com sucesso
        if (response.ok) {
            navigate('/register/success', { state: data }); // Chama pág de sucesso
        } else {
            alert(`${data.message}`);
        }

        return data;
    };



    return { createUser };
};

export default useUserCRUD;