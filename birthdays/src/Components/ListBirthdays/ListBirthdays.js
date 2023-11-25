
import './ListBirthdays.css';

// Lista todos os registros
const ListBirthdays = ({ aniversarios }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    {/* <th>Ações</th> */}
                </tr>
            </thead>
            <tbody>

                {/* Renderização condicional: Quando a lista estiver vazia imprime msg, caso contrário, exibe a lista de aniversariantes */}
                {
                    aniversarios.length === 0 ?
                        (
                            <tr>
                                <td colSpan={2} className='empty-list'>Nenhum aniversário adicionado. </td>
                            </tr>
                        )
                        :
                        aniversarios.map((aniver, index) => (
                            <tr key={index}>
                                <td>{aniver.nome}</td>
                                <td>
                                    <input type='date' value={aniver.dataNasc} readOnly />
                                </td>
                                {/* <td><span className='delete'>Deletar</span></td> */}
                            </tr>

                        ))
                }
            </tbody>
        </table>
    );
}

export default ListBirthdays;