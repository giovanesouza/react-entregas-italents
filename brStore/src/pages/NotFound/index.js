import { useNavigate } from 'react-router-dom';
import img from '../../assets/images/not_found.jpg';

const NotFound = () => {

    // Hook para navegar entre páginas -> serve como redirect
    const navigate = useNavigate();
    console.log(navigate)
    setTimeout(() => {
        navigate('/');
    }, 3000);

    return (
        <main className='w-screen p-2'>

            <div className="w-11/12 mx-auto text-center">

                <img src={img} alt='Imagem NotFound' className='w-96 mx-auto' />

                <h1 className='text-4xl text-blue-800 mb-2'>Página não localizada!</h1>
                <span className='text-base text-blue-950'>Você será redirecionado para a página home.</span>
            </div>
        </main>
    )
}

export default NotFound;