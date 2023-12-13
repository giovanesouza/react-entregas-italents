import { useEffect, useState } from "react";

// Hook para pegar todos os produtos disponíveis
export const useStoreAPI = () => {

    const [products, setProducts] = useState([]);

    // Pega todos os produtos
    const fetchAllProducts = () => fetch('https://fakestoreapi.com/products')
        .then(res => res.json()) // Converte a resposta para json
        .then(data => {
            // console.log(data);
            setProducts(data); // Salva todos os produtos
        });

    // A cada renderização do componente -> realiza a requisição dos produtos
    useEffect(() => {
        fetchAllProducts();
    }, []);


    return products;
};