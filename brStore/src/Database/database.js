// Importação das imagems
// Eletronicos
import camera from '../assets/images/products/eletronicos/camera-canon.jpg';
import laptop from '../assets/images/products/eletronicos/laptop-latitude.jpg';
import cell_xiaomi from '../assets/images/products/eletronicos/celular-xiaomi.jpg';
import cell_samsung from '../assets/images/products/eletronicos/celular-samsung.jpg';

// Joias
import colar_brinco from '../assets/images/products/joias/colar-brinco-feminino-cristal.jpg';
import anel_solitario from '../assets/images/products/joias/anel-prata-banhado-ouro.jpg';
import par_aliancas from '../assets/images/products/joias/par-aliancas.jpg';
import brinco_trevo from '../assets/images/products/joias/brinco-trevo-vermelho.jpg';

// Masculinas
import calcas_jeans from '../assets/images/products/masculinas/calcas-jeans.jpg';
import bermuda_moletom from '../assets/images/products/masculinas/bermuda-moletom.jpg';
import camisetas_masculinas from '../assets/images/products/masculinas/camisetas-masculinas.jpg';
import cuecas from '../assets/images/products/masculinas/cuecas.jpg';

// Femininas
import calcinhas from '../assets/images/products/femininas/calcinhas.jpg';
import vestido from '../assets/images/products/femininas/vestido.jpg';
import vestido_verao from '../assets/images/products/femininas/vestido-verao.jpg';
import blusa_termica from '../assets/images/products/femininas/blusa-termica.jpg';


export const allProducts = [
    
    {
        id: 1,
        nomeProd: "Câmera Digital EOS, Canon.",
        precoAntigo: 2899.40,
        precoNovo: 2500.99,
        descricao: "Câmera Digital EOS, Canon, Preto, 23 x 14 x 17 cm",
        imagem: `${camera}`,
        categoria: "eletronicos"
    },
    {
        id: 2,
        nomeProd: "Notebook Latitude 14' Polegadas | Dell Brasil",
        precoAntigo: 3999.00,
        precoNovo: 3499.99,
        descricao: "Notebook Latitude 3420 14 Polegadas | Dell Brasil",
        imagem: `${laptop}`,
        categoria: "eletronicos"
    },
    {
        id: 3,
        nomeProd: "Celular Xiaomi Note 11 128GB Cinza 4GB RAM",
        precoAntigo: 1119.90,
        precoNovo: 999.99,
        descricao: "Celular Xiaomi Redmi Note 11 128GB Cinza 4GB RAM - GAMES & ELETRONICOS",
        imagem: `${cell_xiaomi}`,
        categoria: "eletronicos"
    },
    {
        id: 4,
        nomeProd: "Celular Galaxy A23 5G 128GB Preto",
        precoAntigo: 999.00,
        precoNovo: 890.99,
        descricao: "Celular Samsung Galaxy A23 5G 128GB Preto | Casas Freire.com",
        imagem: `${cell_samsung}`,
        categoria: "eletronicos"
    },
    {
        id: 5,
        nomeProd: "Colar e brincos femininos de prata 925",
        precoAntigo: 145.00,
        precoNovo: 99.99,
        descricao: "Colar e brincos femininos de prata 925, colar de coração de cristal azul, brincos de cristal, conjunto de joias, presente de aniversári, LIANLI",
        imagem: `${colar_brinco}`,
        categoria: "joias"
    },
    {
        id: 6,
        nomeProd: "Anel Solitário Em Prata Com Banho Ouro",
        precoAntigo: 100.00,
        precoNovo: 85.00,
        descricao: "Anel Solitário Em Prata Com Banho Ouro Com 6 Garras - AN21222 Tamanho: 29",
        imagem: `${anel_solitario}`,
        categoria: "joias"
    },
    {
        id: 7,
        nomeProd: "Par De Aliança De Ouro 18k Tradicional",
        precoAntigo: 659.00,
        precoNovo: 600.00,
        descricao: "Par De Aliança De Ouro 18k Tradicional Com 2,0mm",
        imagem: `${par_aliancas}`,
        categoria: "joias"
    },
    {
        id: 8,
        nomeProd: "Brincos Ouro 18K Trevo De 4 Folhas Vermelho",
        precoAntigo: 1000.00,
        precoNovo: 899.99,
        descricao: "Brincos Ouro 18K Trevo De 4 Folhas Vermelho",
        imagem: `${brinco_trevo}`,
        categoria: "joias"
    },
    {
        id: 9,
        nomeProd: "Kit 3 Calças Jeans Skinny Moderna",
        precoAntigo: 219.90,
        precoNovo: 199.90,
        descricao: "Kit 3 Calças Jeans Masculina Skinny Moderna",
        imagem: `${calcas_jeans}`,
        categoria: "masculinas"
    },
    {
        id: 10,
        nomeProd: "Kit 5 Bermuda Moletom Masculina",
        precoAntigo: 145.00,
        precoNovo: 125.99,
        descricao: "Kit 5 Bermuda Moletom Academia Treino Masculina Original Ducam",
        imagem: `${bermuda_moletom}`,
        categoria: "masculinas"
    },
    {
        id: 11,
        nomeProd: "Kit 5 Camisas Camisetas Slim Voker",
        precoAntigo: 170.00,
        precoNovo: 150.00,
        descricao: "Kit 5 Camisas Camisetas Masculina Slim Voker Premium 100% Algodão",
        imagem: `${camisetas_masculinas}`,
        categoria: "masculinas"
    },
    {
        id: 12,
        nomeProd: "Kit com 6 Cuecas Zorba Boxer Algodão",
        precoAntigo: 116.00,
        precoNovo: 99.99,
        descricao: "Kit com 6 Cuecas Zorba Boxer Algodão Sem Costura Infantil 678 Branco",
        imagem: `${cuecas}`,
        categoria: "masculinas"
    },
    {
        id: 13,
        nomeProd: "Kit 10 Calcinhas Femininas Cós Alto",
        precoAntigo: 124.80,
        precoNovo: 99.99,
        descricao: "Kit 10 Calcinhas Femininas Cós Alto - Compressão para Barriga Cintura Alta, Calcinha Modeladora, Forro 100% Algodão - VIÉRE",
        imagem: `${calcinhas}`,
        categoria: "femininas"
    },
    {
        id: 14,
        nomeProd: "Vestido sem Mangas Vintage de Flores",
        precoAntigo: 79.00,
        precoNovo: 59.99,
        descricao: "WSLCN Vestido Feminino sem Mangas Vintage Slim Fit de Flores Vestido Midi Plissado Leite Branco",
        imagem: `${vestido}`,
        categoria: "femininas"
    },
    {
        id: 15,
        nomeProd: "Vestidos de verão 2024 V-Veck",
        precoAntigo: 60.00,
        precoNovo: 49.99,
        descricao: "UIFLQXX Vestidos de verão para mulheres 2024 moda casual V-Veck comprimento sólido joelho vestido curto manga cor feminino feminino",
        imagem: `${vestido_verao}`,
        categoria: "femininas"
    },
    {
        id: 16,
        nomeProd: "2 Blusas Térmicas Feminina Segunda Pele Inverno",
        precoAntigo: 90.00,
        precoNovo: 69.99,
        descricao: "Blusa Térmica Feminina Segunda Pele Inverno - 2 unidades: Preto + Cor Sortida",
        imagem: `${blusa_termica}`,
        categoria: "femininas"
    },

];
