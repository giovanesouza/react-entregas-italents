import './style.css';
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FindProductsByInitials } from './FindProduct';
import { AuthContext } from '../../context/AuthContext';
import { useStoreAPI } from '../../hooks/useStoreAPI';


const Navbar = () => {
    // State utilizado para destacar o menu (link ativo)
    const [menuTab, setMenuTab] = useState('');

    // State para pegar o valor do input
    const [searchInput, setSearchInput] = useState('');

    // Informações passadas via context
    const { userLogged, userFull, logoutUser } = useContext(AuthContext);
    // console.log(userLogged)
    console.log('Usuário completo (navbar): ', userFull);

    const navigate = useNavigate();

    const allProducts = useStoreAPI();


    // Captura as informações do input
    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }


    let iniciaisProcuradas = '';

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('Buscando produtos...');
        iniciaisProcuradas = searchInput;

        const produtosEncontrados = FindProductsByInitials(allProducts, iniciaisProcuradas);

        if (produtosEncontrados) {
            navigate(`/product/${searchInput}`, { state: produtosEncontrados })
        } else {
            navigate(`/product/${searchInput}`, { state: [] });
            // console.log('Nenhum produto encontrado com essas iniciais.');
        }

        setSearchInput(''); // limpa input de busca
    }

    const userSettinsElement = useRef(null);
    // console.log(userSettinsElement);

    function showHiddenUserSettingsMenu() {
        const menu = userSettinsElement.current;

        menu.classList.toggle('block');
        // console.log(menu);
    }

    return (
        <header className='w-screen p-2'>

            {/* Header top */}
            <div className="2xl:flex items-center justify-between w-11/12 mx-auto ms:flex-col">

                <div className="md:w-1/4 text-3xl text-white font-bold">
                    <Link to="/" onClick={() => setMenuTab('')}>BrStore</Link>
                </div>

                <form className='w-2/4 text-center relative sm:hidden' onSubmit={handleSubmit}>

                    <input type="text" placeholder="Buscar produto..."
                        className='w-full border-0 outline-0 rounded-2xl py-2 px-5' value={searchInput} onChange={handleChange} />

                    <i className="bi bi-search absolute top-2 right-7" />
                </form>

                <div className="w-1/4 flex items-center justify-end gap-4">

                    {/* Verifica se o usuário está logado e renderiza de forma dinâmica */}
                    {userLogged ?
                        (
                            <>
                                <div className="text-center text-sm">
                                    <div className="md:text-xs">Olá, <strong>{userFull.nome}!</strong></div>

                                    <div className='cursor-pointer' onClick={logoutUser}>
                                        Sair
                                    </div>
                                </div>

                                <div className='text-center relative'>

                                    <div className='flex items-center gap-1 cursor-pointer' id='user-settings'
                                        onMouseOver={showHiddenUserSettingsMenu}>
                                        <i className="bi bi-person-circle text-3xl"></i>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>

                                    <ul id='user-menu-settings' ref={userSettinsElement}>
                                        <Link to=''><li>Meus Pedidos</li></Link>
                                        <Link to=''><li>Info. cadastrais</li></Link>
                                    </ul>

                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <div className="text-center">
                                    <div className="text-sm font-bold md:text-xs">Seja bem vindo(a)!</div>
                                    <div>
                                        <Link to="/login" className="text-xs">Entre</Link>
                                        <span className='px-1'>ou</span>
                                        <Link to="/register" className="text-xs text-white">Cadastre-se</Link>
                                    </div>
                                </div>

                                <div>
                                    <i className="bi bi-person-circle text-3xl" />
                                </div>
                            </>
                        )
                    }



                </div>

            </div>

            {/* Header bottom */}
            <div className="flex items-center justify-between w-11/12 mt-3 mx-auto">

                <nav className='w-3/4'>

                    <ul className='flex items-center justify-between md:block'>

                        <Link to="/products/electronics" className={menuTab === 'electronics' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'} onClick={() => setMenuTab('electronics')}>
                            <li>Eletrônicos</li>
                        </Link>

                        <Link to="/products/jewelery" className={menuTab === 'jewelery' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'} onClick={() => setMenuTab('jewelery')}>
                            <li>Jóias</li>
                        </Link>
                        <Link to="/products/mens-clothing" className={menuTab === 'mens-clothing' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'} onClick={() => setMenuTab('mens-clothing')}>
                            <li>Roupas Masculinas</li>
                        </Link>
                        <Link to="/products/womens-clothing" className={menuTab === 'womens-clothing' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'}
                            onClick={() => setMenuTab('womens-clothing')}>
                            <li>Roupas Feminas</li>
                        </Link>

                    </ul>

                </nav>

                <div className="flex justify-end gap-4 w-1/4">

                    <Link to="/user/favorite-products" id="icon-favorites">
                        <i className="bi bi-suit-heart-fill text-white text-2xl" />
                    </Link>

                    <Link to="/checkout" className="relative">
                        <i className="bi bi-bag-fill  text-white text-2xl" />
                        <span className="total-items-bag">0</span>
                    </Link>

                </div>

            </div>

        </header>
    );
}

export default Navbar;