import './style.css';

const ProductList = ({ nomeLista, children }) => {

    return (
        <section className='w-11/12 mx-auto'>

            {/* Título da lista/seção */}
            <h1 className='text-4xl font-semibold text-gray-600 my-4'>{nomeLista}</h1>

            {/* Container para lista */}
            {/* <div className='product-list flex flex-wrap w-full justify-between gap-4'> */}
            <div className='product-list'>
                {children}
            </div>

        </section>
    );
}

export default ProductList;