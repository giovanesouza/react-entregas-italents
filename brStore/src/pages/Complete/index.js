import { useNavigate } from 'react-router-dom';

const Complete = () => {

  const navigate = useNavigate();

  return (
    <main className=" h-screen banner">
      <div className="max-w-screen-xl py-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center h-3/4 pt-24">
         
          <i className="bi bi-bag-check-fill text-center text-blue-600 text-9xl md:text-6xl"></i>
          <h1 className="text-3xl text-center text-gray-600 mt-6 font-semibold flex space-x-6 items-center ">
            Pedido realizado com Sucesso!
          </h1>

          <button onClick={() => navigate('/')} className="bg-gray-600 text-white px-8 py-2 rounded-full mt-24 transform transition duration-300 hover:scale-105">Voltar para Home</button>
        </div>
      </div>
    </main>
  )
}

export default Complete