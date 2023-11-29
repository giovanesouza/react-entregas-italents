import { useRef, useEffect } from 'react';
import './style.css';

const ProductList = ({ nomeLista, children }) => {

    const productListRef = useRef(null);
    // console.log(productListRef);

    // useEffect para acessar o elemento do DOM após a renderização
    useEffect(() => {
        // productListRef.current contém o elemento do DOM
        const productListElement = productListRef.current;
        // console.log(productListElement);

        productListElement.style.display = 'flex';

        setTimeout(() => {

            productListElement.style.opacity = '1';
        }, 200)


    }, []); 

    return (
        <section className='w-11/12 mx-auto'>

            {/* Título da lista/seção */}
            <h1 className='text-4xl font-semibold text-gray-600 my-4'>{nomeLista}</h1>

            {/* Container para lista */}
             <div ref={productListRef} className='product-list'>
                {children}
            </div>

        </section>
    );
}

export default ProductList;