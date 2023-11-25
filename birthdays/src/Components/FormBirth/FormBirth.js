import { useState } from 'react';
import './FormBirth.css';
import FormBirthItem from '../FormBirthItem/FormBirthItem';

const FormBirth = ({atualizarAniversarios}) => {
    // Lista de aniversariantes
    const [birthday, setBirthday] = useState([]);

    // Objeto com os campos utilizados para pegar as informações do usuário
    // Serve para vários inputs (cada item do objeto deve um nome referente ao valor da prop name do input)
    const [fieldValue, setFieldValue] = useState({
        nome: "", // Valor inicial p/ nome VAZIO
        dataNasc: "" // Valor inicial p/ dataNasc VAZIO
    });

    // Ao submeter form, atualiza a lista
    const handleSubmit = (event) => {
        event.preventDefault();

        // Add novo registro com base nos valores digitados
        setBirthday([...birthday, { nome: fieldValue.nome, dataNasc: fieldValue.dataNasc }])

        // Limpa dados dos inputs
        setFieldValue({ nome: "", dataNasc: "" });

        atualizarAniversarios({ nome: fieldValue.nome, dataNasc: fieldValue.dataNasc });

        // console.log(birthday); // Imprime os valores com a lista atualizada
    }

    // A cada mudança nos inputs, captura o texto digitado
    const handleChange = (event) => {
        // console.log(event.target.name, event.target.value); // Pega o nome e valor do input que está onChange e imprime no console

        setFieldValue({
            ...fieldValue, // valor do state é espalhado neste objeto
            [event.target.name]: event.target.value // atualiza as informações dinamicamente
        });
    }

    return (
            <form onSubmit={handleSubmit}>
                <FormBirthItem
                    nomeLabel='Nome da pessoa'
                    inputType='text'
                    placeholder='Digite o nome da pessoa aqui, por exemplo: José Dev'
                    name='nome'
                    value={fieldValue.nome}
                    onChange={handleChange} />

                <FormBirthItem
                    nomeLabel='Data de nascimento'
                    inputType='date'
                    name='dataNasc'
                    value={fieldValue.dataNasc}
                    onChange={handleChange} />

                <button type='submit'>Salvar</button>
            </form>
    );
}

export default FormBirth;