import './style.css';
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    // Informações passadas via context
    const { userLogged, userFull, isAdmin, logoutUser } = useContext(AuthContext);


    // Total de itens add na sacola
    const [totalItems, setTotalItems] = useState(0);

    const storageCart = JSON.parse(localStorage.getItem('productCart'));

    useEffect(() => {
        const totalItemsBag = storageCart.reduce((valor, product) => {
            return valor + product.quantity;
        }, 0);

        setTotalItems(totalItemsBag);

    }, [storageCart]); // Sempre que houver uma mudança no storageCart ele atualiza no contador


    const userSettinsElement = useRef(null);

    function showHiddenUserSettingsMenu() {
        const menu = userSettinsElement.current;

        menu.classList.toggle('block');
    };

    return (
        <header className='w-screen p-2'>

            {/* Header top */}
            <div className="2xl:flex items-center justify-center w-11/12 mx-auto ms:flex-col">

                <div className="w-1/2 text-3xl text-white font-bold">
                    <Link to="/">BrStore</Link>
                </div>

                <div className="w-1/2 flex items-center justify-end gap-4">

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
                                        <img className='w-8' src={userFull.imagem !== '' ? userFull.imagem : 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'} alt={userFull.nome} />
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>

                                    {/* SubMenu personalizado com base no tipo de usuário  */}
                                    {isAdmin ?
                                        (
                                            <ul id='user-menu-settings' ref={userSettinsElement}>
                                                <Link to='/admin/categories'><li>Categorias</li></Link>
                                                <Link to='/'><li>Produtos</li></Link>
                                            </ul>

                                        ) :
                                        (
                                            <ul id='user-menu-settings' ref={userSettinsElement}>
                                                <Link to='/user/favorite-products'><li>Produtos favoritos</li></Link>
                                                <Link to='/user/registration-info'><li>Info. cadastrais</li></Link>
                                            </ul>
                                        )}

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

                </div >

            </div >

            {/* Header bottom */}
            <div div className="flex items-center justify-end w-11/12 mt-3 mx-auto" >

                <div className="flex justify-end gap-4 w-1/4">

                    <Link to="/user/favorite-products" id="icon-favorites">
                        <i className="bi bi-suit-heart-fill text-white text-2xl" />
                    </Link>

                    <Link to="/checkout" className="relative">
                        <i className="bi bi-bag-fill  text-white text-2xl" />
                        <span className="total-items-bag">{totalItems}</span>
                    </Link>

                </div>

            </div >

        </header >
    );
}

export default Navbar;