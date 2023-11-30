// Utilizada como contador da tabela
export const Count = ({ qtd }) => {
    return (
        <>
            <i className="bi bi-dash-square-fill mr-1 cursor-pointer"></i>
            {qtd}
            <i className="bi bi-plus-square-fill ml-1 cursor-pointer"></i>
        </>
    )
}