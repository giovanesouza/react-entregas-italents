import { useEffect, useState } from "react";
import axios from "axios";

const Address = () => {

    // Guarda informações do endereço
    const [address, setAddress] = useState({
        rua: '',
        numero: '',
        complemento: '',
        cep: ''
    });

    useEffect(() => {

        const endereco = JSON.parse(localStorage.getItem('address'));
        // console.log('endereço do localStorage: ', endereco)

        if (endereco)
            setAddress(endereco);

    }, [])


    // Busca endereço com base no CEP informado
    const findAddress = async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`)
        setAddress({
            ...address,
            rua: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}`
        })

    };

    const handleChangeValues = (evento) => {
        setAddress({
            ...address,
            [evento.target.name]: evento.target.value
        })

    };


    const handleBlur = () => {
        localStorage.setItem('address', JSON.stringify(address));
    }

    return (
        <div className="col-span-1">

            <div className="flex flex-col mt-8">
                <h2 className="text-2xl mb-4 text-blue-600">
                    Adicione seu endereço
                </h2>

                <form className="my-4">
                    <div className="grid md:grid-cols-1 2xl:grid-cols-6 gap-3">
                        <input type="text" name="cep" placeholder='cep' id="cep"
                            value={address.cep}
                            onChange={handleChangeValues}
                            className="col-span-2 md:col-span-3 text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0"
                        />

                        <input type="text" name="rua" placeholder='rua' id="rua"
                            value={address.rua}
                            // Faz a requisição quando este input for focado
                            onFocus={findAddress}
                            onChange={handleChangeValues}
                            onBlur={handleBlur}
                            className="col-span-3 text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0"
                        />
                        <input type="text" name="numero" placeholder='nº' id="numero"
                            value={address.numero}
                            onChange={handleChangeValues}
                            onBlur={handleBlur}
                            className="text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0"
                        />
                        <input type="text" name="complemento" placeholder='complemento' id="complemento"
                            value={address.complemento}
                            onChange={handleChangeValues}
                            onBlur={handleBlur}
                            className="col-span-2 text-gray-500 w-full px-4 py-3 rounded-lg ring-blue-100 focus:ring-4 focus:outline-none transition duration-300 border border-gray-400 focus:border-0"
                        />
                    </div>
                </form>
            </div>

        </div>

    );

}

export default Address;