import { useContext } from "react";
// Contexto de autenticação
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// children -> permite acessar o que estiver dentro do componente
const ProtectedRoute = ({children}) => {

    const {userLogged} = useContext(AuthContext); 

    // Se logado = false, redireciona para pág login
    if(!userLogged) {
        
        // Navigate em forma de componente -> renderiza realizando o redirect 
        return <Navigate to='/login' />;
        
    } else {
        // Se logado, retorna o que estiver dentro da ProtectedRoute -> a children
        return children;
    }

}

export default ProtectedRoute;