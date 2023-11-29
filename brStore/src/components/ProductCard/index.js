import './style.css';

const ProductCard = ({ nome, img, precoAnterior, precoAtual }) => {
    return (
         <div className="product-card" data-category="">

            <div className="relative text-center p-2">

                <img src={img} alt='foto produto' className='max-w-[9.4rem] h-40 mx-auto' />

                <i className="bi bi-suit-heart-fill text-xl text-gray-600 absolute top-2 right-4 cursor-pointer transition-all ease-in-out hover:text-blue-600" />
                
            </div>

            <div className="p-5">

                <h4 className="text-lg font-semibold text-blue-800 mb-[.13rem]">{nome}</h4>

                <div>
                    <span className="text-sm text-red-600 line-through">R$ {precoAnterior}</span>
                </div>

                <div>
                    <h5 className="text-lg text-gray-600 mb-[.63rem]">R$ {precoAtual}</h5>
                </div>

                <button className="w-full bg-gray-200 text-gray-600 text-base rounded-md p-[.31rem] transition-all ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
                    <i className="bi bi-bag-fill mr-1" />
                    Adicionar à sacola
                </button>

            </div>

        </div>

    );
}

export default ProductCard;