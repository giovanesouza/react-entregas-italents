// Função para encontrar produtos com base nas iniciais em um array de objetos
export function FindProductsByInitials(array, iniciais) {
    
    let produtosEncontradosLista = [];

    iniciais = iniciais.toUpperCase(); // Certifique-se de lidar com maiúsculas e minúsculas da mesma forma
    for (const produto of array) {
        const nome = produto.title.toUpperCase();
        if (nome.startsWith(iniciais)) {
            produtosEncontradosLista.push(produto); // Adiciona o produto à lista quando as iniciais correspondem
        }
    }

    // Retorna a lista ou null se nenhum produto for encontrado
    return produtosEncontradosLista.length > 0 ? produtosEncontradosLista : null; 
}
