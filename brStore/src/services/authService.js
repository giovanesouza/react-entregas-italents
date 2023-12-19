// Importa a constante criada no arquivo api.js - relacionada a Axios
import api from "./api";

const loginUserApi = (userValues) =>
    api.post('/auth/login', userValues)
        .then(response => response) // Sucesso
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); 


const registerUser = (addUserValues) =>
    api.post('/usuario/create', addUserValues)
        .then(response => response) // Sucesso
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro


const getUserById = (idUser) =>
    api.get(`/usuario/findById/${idUser}`)
        .then(response => response) // Sucesso
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

export { loginUserApi, registerUser, getUserById };