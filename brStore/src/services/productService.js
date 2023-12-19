import api from './api'

const addProductAPI = (product) =>
  api.post('/produto/create', product)
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

const findAllProducts = () =>
  api.get('/produto/findAll')
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

const findProductById = (id) =>
  api.get(`/produto/find/${id}`)
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

const updateProductById = (id, productEdit) =>
  api.put(`/produto/update/${id}`, productEdit)
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro
  
const deleteProduct = (id) =>
  api.delete(`/produto/delete/${id}`)
    .then((response) => response)
    .catch(error => {
        console.error('Erro (back): ', error);
        throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro


export { addProductAPI, findAllProducts, findProductById, updateProductById, deleteProduct };