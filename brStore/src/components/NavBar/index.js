import './style.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    // State utilizado para destacar o menu (link ativo)
    const [menuTab, setMenuTab] = useState('');

    return (
        <header className='w-screen p-2'>

            {/* Header top */}
            <div className="2xl:flex items-center justify-between w-11/12 mx-auto ms:flex-col">

                <div className="md:w-1/4 text-3xl text-white font-bold">
                    <Link to="/" onClick={() => setMenuTab('')}>BrStore</Link>
                </div>

                <form className='w-2/4 text-center relative sm:hidden'>

                    <input type="text" name="search" placeholder="Buscar produto..."
                        className='w-full border-0 outline-0 rounded-2xl py-2 px-5' />

                    <i className="bi bi-search absolute top-2 right-7" />
                </form>

                <div className="w-1/4 flex items-center justify-end gap-4">

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

                </div>

            </div>

            {/* Header bottom */}
            <div className="flex items-center justify-between w-11/12 mt-3 mx-auto">

                <nav className='w-3/4'>

                    <ul className='flex items-center justify-between md:block'>

                        <Link to="/products/electronics" className={menuTab === 'electronics' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'} onClick={() => setMenuTab('electronics')}>
                            <li>Eletrônicos</li>
                        </Link>

                        <Link to="/products/jewelery" className={menuTab === 'jewelery' ? 'text-base text-yellow-200' : 'text-base hover:text-yellow-200 md:text-sm'}   onClick={() => setMenuTab('jewelery')}>
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

                    <Link to="/users/produtos-favoritos" id="icon-favorites">
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