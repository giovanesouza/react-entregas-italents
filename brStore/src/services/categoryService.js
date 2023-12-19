import api from './api';

const findAllCategories = () =>
  api.get('/categoria/findAll')
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

export { findAllCategories };