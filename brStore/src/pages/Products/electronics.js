import { allProducts } from "../../Database/database";
import ProductCard from "../../components/ProductCard";
import ProductList from "../../components/ProductList/ProductList";


const Electronics = () => {
    const eletronics = allProducts.filter(item => item.categoria === 'eletronicos');

    return(
        <main className='w-screen p-2'>

            <ProductList nomeLista={'Eletrônicos'}>

                {
                    eletronics.map(product => (
                        
                        <ProductCard
                            nome={product.nomeProd}
                            img={product.imagem}
                            precoAnterior={product.precoAntigo.toFixed(2)}
                            precoAtual={product.precoNovo.toFixed(2)}
                            key={product.id}
                        />

                    ))

                }

            </ProductList>

        </main>
    );
}

export default Electronics;