// Importação dos Hooks useState e useEffect
import { useState, useEffect } from "react";

// Sempre que este HOOK for invocado deve-se passar o parâmetro
export const useCEP = (cep) => {

    // Disponibilizando informações de forma dinâmica => state
    const [endereco, setEndereco] = useState({}); // O objeto só é preenchido ao finalizar requisição
    console.log('Hoook endereço: ', endereco)

    // Função para buscar o CEP
    const fetchCEP = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`) // Pega as informações
            .then(dados => dados.json()) // Converte os dados para JSON (Só é possível ver na aba NETWORK - FETCH/XHR)
            .then(endereco => {
                console.log(endereco);
                setEndereco(endereco);
            }); // Pega o endereço e imprime (console e na pág com mudança de state)
    };


    // Toda vez que o componente for carregado pela primeira vez, faz uma requisição no via CEP com o CEP passado
    useEffect(() => {
        // Invoca a função com um CEP passado via Parâmetro
        fetchCEP(cep);
    }, [cep]); // Sempre que chegar um CEP NOVO -> CHAMA o useEffect


    // Retorna o endereço completo
    return endereco;
}
