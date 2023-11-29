import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
    return (
        <footer className="w-screen py-2">

            <div className="w-11/12 mx-auto">

                <div className="flex justify-between items-center">
                    <div className="text-3xl text-white font-bold"><Link to="/">BrStore</Link></div>

                    <div>
                        <a href="https://github.com/giovanesouza/" rel='noreferrer' target="_blank" className="text-xl transition-all duration-200 ease-in-out hover:text-yellow-200 mr-3" title='Github'>
                            <i className="bi bi-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/developergiovanesouza/" rel='noreferrer' target="_blank" className='text-xl transition-all duration-200 ease-in-out hover:text-yellow-200' title='LinkedIn'>
                            <i className="bi bi-linkedin" />
                        </a>
                    </div>

                </div>

                <div className="text-sm text-end py-2">
                    <div className="copy">
                        © 2023 BrStore - Developer Giovane Souza.
                    </div>
                    <address>
                        CNPJ n.º 01.010.101/0001-01 / Av. Modern Web, nº 1.001, Internet, Recife/PE - CEP 01010-101.
                    </address>
                </div>
            </div>


        </footer>
    )
}

export default Footer;