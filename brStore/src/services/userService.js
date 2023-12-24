import api from './api'

const createUser = (user) =>
    api.post('/usuario/create', user)
        .then((response) => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro


const addFavProduct = (userId, productId) =>
    api.post(`/usuario/addFavProduct/${userId}`, productId)
        .then((response) => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro


const removeFavProduct = (userId, productId) =>
    api.delete(`/usuario/removeFavProduct/${userId}`, productId)
        .then((response) => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro


export { createUser, addFavProduct, removeFavProduct };