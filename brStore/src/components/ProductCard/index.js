import './style.css';

/* Recebe os atributos do produto que é passado para a lista por meio da propriedade product */
const ProductCard = ({ product }) => {

    return (
        <div className="product-card" data-key={product._id}>

            <div className="relative text-center p-2">

                <img src={product.imagem} alt='foto produto' className='max-w-[9.4rem] h-40 mx-auto' />

                {/* icon coração (favoritos) */}
                <i className="bi bi-suit-heart-fill text-xl text-gray-600 absolute top-2 right-4 cursor-pointer transition-all ease-in-out hover:text-blue-600" />

             </div>

            <div className="p-5 mb-10 z-50">

                <h4 className="text-lg font-semibold text-blue-800 mb-[.13rem]">{product.nome}</h4>

                <div>
                    <span className="text-sm text-red-600 line-through">R$ {(product.precoUnitario * 5).toFixed(2)}</span>
                </div>

                <div>
                    <h5 className="text-lg text-gray-600 mb-[.63rem]">R$ {(product.precoUnitario * 3).toFixed(2)}</h5>
                </div>


            </div>

            <div className='absolute bottom-0 w-full'>

                <span className='inline-block w-full text-center bg-gray-400 text-white text-base font-bold'>R$ {((product.precoUnitario * 5) - (product.precoUnitario * 3)).toFixed(2)} OFF </span>

                <button className="w-full bg-gray-200 text-gray-600 text-base  rounded-b-md p-[.31rem] transition-all ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
                    <i className="bi bi-bag-fill mr-1" />
                    Adicionar à sacola
                </button>

            </div>
        </div>

    );
}

export default ProductCard;