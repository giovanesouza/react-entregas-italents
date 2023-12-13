import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    
    // Estado que vai indicar se o usuário está ou não logado
    const [userLogged, setUserLogged] = useState(false);

    // Utilizado para evitar o userLogged como false quando o usuário estiver logado
    const [loading, setloading] = useState(true);

    // Realiza navegação entre páginas
    const navigate = useNavigate();


    useEffect(() => {
        // Busca usuário no localStorage
        const userInfor = localStorage.getItem('userInfor');

        // Verifica se existir...
        if (userInfor)
            setUserLogged(true);


        setloading(false); 
    }, []); 


    // Função para ser utilizada na página de login
    const loginUser = async (inputValues) => {

        const response = await fetch('http://localhost:3000/auth/login', {

            method: 'POST', // Enviando informações do front -> back
            headers: {
                // Tipo dos dados enviados (json)
                'Content-Type': 'application/json'
            },
            // Onde as informações (credenciais) serão enviadas
            body: JSON.stringify(inputValues) // Converte o objeto para JSON
        });


        // Pega a resposta do servidor - .json() -> permite acessar o body da aplicação
        const data = await response.json();
        console.log('Dados do usuário: ', data);

        console.log(data.message)

        // Verifica se o usuário existe
        if (response.ok) {
            // Salva a resposta da API no LocalStorage (persistência dos dados em memória)
            localStorage.setItem('userInfor', JSON.stringify(data));

            // Altera status do usuário -> Logado
            setUserLogged(true);

            navigate('/'); // Redireciona para home
        } else {
            navigate('/login', {state: data.message}); // Chama a rota de login com a message
        }

    }


    const logoutUser = () => {
        setUserLogged(false); // Estado passa a ser falso (Não logado)

        localStorage.clear(); // Limpa o localStorage

        navigate('/login'); // Redireciona para pág login
    }


    // Retorna um objeto com todas as variáveis de estado e funções
    return { userLogged, loading, loginUser, logoutUser };

}

export default useAuth;