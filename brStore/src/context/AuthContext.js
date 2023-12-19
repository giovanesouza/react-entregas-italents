import { createContext } from 'react';

// Hook criado
import useAuth from '../hooks/useAuth';

// Permite inicializar o contexto do componente AuthProvider
const AuthContext = createContext();

// Responsável em fornecer/Prover os dados
const AuthProvider = ({ children }) => {

    // Importa o hooks com suas funcionalidades de forma desestruturada
    const { userLogged, userFull, loading, loginUser, logoutUser } = useAuth();

    // Enquanto estiver carregando, renderiza o h1, ao finalizar carrega os componentes children
    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        // Indica o que será provido por meio da propriedade value
        // Compartilha se o usuário está logado e a função para logar, logout
        <AuthContext.Provider value={{ userLogged, userFull, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Exporta o AuthContext e AuthProvider - Utilizar as chaves nas importações, pois não tem o 'default'.
export { AuthContext, AuthProvider };