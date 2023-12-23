import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi, getUserById } from "../services/authService";
import api from '../services/api';

const useAuth = () => {

    // Estado que vai indicar se o usuário está ou não logado
    const [userLogged, setUserLogged] = useState(false);

    // Salva as informações completas do usuário vindas do BD
    const [userFull, setUserFull] = useState({});

    const [isAdmin, setIsAdmin] = useState(false);

    // Utilizado para evitar o userLogged como false quando o usuário estiver logado
    const [loading, setloading] = useState(true);

    // Realiza navegação entre páginas
    const navigate = useNavigate();


    useEffect(() => {
        console.log('COMPONENTE NASCEU USEAUTH!');

        // Busca usuário no localStorage e converte para objeto JS
        const userInfo = JSON.parse(localStorage.getItem('userInfo')); // contem email, id, token

        // Verifica se existe...
        if (userInfo) {

            // Add header em todas as chamadas da aplicação quando estiver logado
            api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;

            setUserLogged(true); // Utilizado caso já esteja logado
        } else {
            localStorage.setItem('productCart', JSON.stringify([]));
        }

        setloading(false);
    }, []);


    // Função para ser utilizada na página de login
    const loginUser = async (inputValues) => {

        try {
            const response = await loginUserApi(inputValues);
            // console.log('Resposta completa (front): ', response);

            if (response) {
                // console.log('Dados do usuário logado (front): ', response.data);

                // Salva dados do usuário no localStorage
                localStorage.setItem('userInfo', JSON.stringify(response.data));

                // Add header em todas as chamadas da aplicação - ao logar
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

                // Altera status do usuário -> Logado
                setUserLogged(true);

                navigate('/'); // Redireciona para home
            }

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro login (front): ', err);
            navigate('/login', { state: err }); // Chama a rota de login com a message  de erro
        }

    };


    const logoutUser = () => {
        setUserLogged(false); // Estado passa a ser falso (Não logado)
        // Limpa o localStorage
        localStorage.removeItem('userInfo'); 
        localStorage.removeItem('userFull'); 
        localStorage.removeItem('address'); 
        navigate('/login'); // Redireciona para pág login
    };


    const findUserById = async (userId) => {

        try {

            const response = await getUserById(userId);

            if (response) {
                const data = await response.data;

                const nomes = data.nome.split(' '); // Separa os nomes

                // Dados do usuário formatado
                const formattedUser = {
                    id: data._id,
                    nomeCompleto: data.nome,
                    nome: nomes[0],
                    email: data.email,
                    imagem: data.imagem,
                    admin: data.admin
                };

                console.log('Usuário findByID (useAuth):', formattedUser);

                setUserFull(formattedUser); // Atualiza a variável de estado com todas as informações do usuário
                setIsAdmin(data.admin); // Verifica se é administrador

                localStorage.setItem('userFull', JSON.stringify(formattedUser));
            }

        } catch (error) {
            const err = error.response.data.message;
            console.error('Erro findById (front): ', err);
        }


    };


    // Retorna um objeto com todas as variáveis de estado e funções
    return { userLogged, userFull, isAdmin, loading, loginUser, logoutUser, findUserById };

}

export default useAuth;