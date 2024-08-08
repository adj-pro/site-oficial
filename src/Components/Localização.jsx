// src/components/ContactForm.js


export default function Localizaçao(){
    return (   
        <div>
            <div>
            <div className=" mt-96">
                    <h1 className="text-3xl text-center">Conduza inovações e colabore <br></br> conosco agora!</h1>
                    <p className="text-center pt-3">Este é o momento de liderar projetos inovadores <br></br> e se unir a uma equipe extraordinária.</p>
                </div>
                <div className="flex justify-center items-center h-screen bg-white">
                    
                <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className=" font-medium mb-6 text-center">Contacte-nos</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nome completo
                        </label>
                        <input
                            className="  bg-gray-100 shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nome completo"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Endereço de Email
                        </label>
                        <input
                            className="   bg-gray-100 shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Endereço de Email" 
                            required
                            
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Escreva uma mensagem
                        </label>
                        <textarea
                            className="  bg-gray-100 shadow appearance-none border rounded w-full py-20 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="4"
                            placeholder="Escreva uma mensagem"
                            required
                        ></textarea>
                    </div>
                    <div className="">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-2xl focus:outline-none focus:shadow-outline"
                            type="submite"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
                <div>
                    <img src="./Localizacao/right.png" alt=" " 
                    className="pl-20"
                    />
                </div>
                </div>
            </div>
        </div>
    );
};

