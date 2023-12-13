import { useEffect, useState } from "react";

// Utilizado para renderizar os produtos de uma categoria
export const useStoreCategoryAPI = (category) => {

    const [products, setProducts] = useState([]);

    const fetchProductsByCategory = () => fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json()) // Converte a resposta para json
        .then(data => {
            // console.log(data);
            setProducts(data); // Salva todos os produtos
        });

    // A cada renderização do componente -> realiza a requisição dos produtos
    useEffect(() => {
        fetchProductsByCategory();
    }, []);

    return products;
};