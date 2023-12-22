// Responsável pelos pedidos - Criação de carrinho e pedidos

import api from './api';

const sendCart = (cartInfo) =>
    api.post('/carrinho/create', cartInfo)
        .then(response => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro

const addOrder = (order) =>
    api.post('/pedido/create', order)
        .then(response => response)
        .catch(error => {
            console.error('Erro (back): ', error);
            throw error; // Lança o erro e permite pegá-lo no front
        }); // Erro

export { sendCart, addOrder };