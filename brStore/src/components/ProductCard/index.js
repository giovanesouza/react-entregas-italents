import './style.css';

/* Recebe os atributos do produto que é passado para a lista por meio da propriedade product */
const ProductCard = ({ product }) => {

    // Utilizado para setar uma bg e color personalizado com base no nome da categoria
    const categoryColors = {
        "electronics": 'bg-gray-300 text-black',
        "jewelery": 'bg-yellow-600 text-white ',
        "men's clothing": 'bg-blue-400 text-white',
        "women's clothing": 'bg-pink-200 text-black',
    };

    const categoryColor = categoryColors[product.category.toLowerCase()] || 'bg-gray-400 text-white ';

    return (
        <div className="product-card" data-category={product.category}>

            <div className="relative text-center p-2">

                <img src={product.image} alt='foto produto' className='max-w-[9.4rem] h-40 mx-auto' />

                {/* icon coração (favoritos) */}
                <i className="bi bi-suit-heart-fill text-xl text-gray-600 absolute top-2 right-4 cursor-pointer transition-all ease-in-out hover:text-blue-600" />

                {/* badge da categoria */}
                <span className={`absolute -bottom-2 right-0 px-2 py-1 text-xs font-bold rounded-s-full ${categoryColor}`}>
                    {product.category}
                </span>

            </div>

            <div className="p-5 mb-10 z-50">

                <h4 className="text-lg font-semibold text-blue-800 mb-[.13rem]">{product.title.slice(0, 25)}</h4>

                <div>
                    <span className="text-sm text-red-600 line-through">R$ {(product.price * 5).toFixed(2)}</span>
                </div>

                <div>
                    <h5 className="text-lg text-gray-600 mb-[.63rem]">R$ {(product.price * 3).toFixed(2)}</h5>
                </div>


            </div>

            <div className='absolute bottom-0 w-full'>

                <span className='inline-block w-full text-center bg-gray-400 text-white text-base font-bold'>R$ {((product.price * 5) - (product.price * 3)).toFixed(2)} OFF </span>

                <button className="w-full bg-gray-200 text-gray-600 text-base  rounded-b-md p-[.31rem] transition-all ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
                    <i className="bi bi-bag-fill mr-1" />
                    Adicionar à sacola
                </button>

            </div>
        </div>

    );
}

export default ProductCard;