import api from './api'

const createUser = (user) =>
    api.post('/usuario/create', user)
        .then((response) => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro



export { createUser }