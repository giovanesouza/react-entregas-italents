import api from './api';

const createCategoryService = (nome) =>
  api.post('/categoria/create', nome)
    .then((response) => response)
    .catch(error => {
      console.error('Erro (back): ', error);
      throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

const findAllCategories = (limit, offset) =>
  api.get(`/categoria/findAll/?limit=${limit}&offset=${offset}`)
    .then((response) => response)
    .catch(error => {
      console.error('Erro (back): ', error);
      throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro

const findCategoryById = (id) =>
  api.get(`/categoria/find/${id}`)
    .then((response) => response)
    .catch(error => {
      console.error('Erro (back): ', error);
      throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro


const updateCategoryService = (id, nome) =>
  api.put(`/categoria/update/${id}`, nome)
    .then((response) => response)
    .catch(error => {
      console.error('Erro (back): ', error);
      throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro


const deleteCategoryService = (id) =>
  api.delete(`/categoria/delete/${id}`)
    .then((response) => response)
    .catch(error => {
      console.error('Erro (back): ', error);
      throw error; // Lança o erro e permite pegá-lo no front
    }); // Erro


export { createCategoryService, findAllCategories, findCategoryById, updateCategoryService, deleteCategoryService };