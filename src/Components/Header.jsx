import { FaTwitter, FaFacebookF, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';


export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="  md:bg-contain md:bg-[url('./Imagem.png')] 
        bg-no-repeat 
        bg-[url('/Mobile_Image.png')]
        bg-cover   h-svh w-screen
        ">
            <div className="pt-10">
                <div className=''>
                    <img src="./favicon.png" alt=" " className="absolute top-30 left-10 "/>
                </div>
                <nav className=" text-white px-6 py-3">
                    <div className="container mx-auto flex justify-between items-center md:flex md:justify-center md:items-center">
                        <div className="text-2xl font-bold">
                        
                        </div>
                        <div className=''>
                            <div className="hidden md:flex  ">
                                <ul className="text-white columns-5 ">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Sobre Nós</a></li>
                                    <li><a href="#">Serviço</a></li>
                                    <li><a href="#">Projectos</a></li>
                                    <li><a href="#">Contacte-nos</a></li>
                                </ul>

                                <div className='absolute right-20 columns-3 '>
                        

                                    <a href="#" className="text-white"><FaTwitter /></a>
                                    <a href="#" className="text-white"><FaFacebookF /></a>
                                    <a href="#" className="text-white"><FaLinkedinIn /></a>
                                </div>

                            </div>
                        </div>
                        
                        <div className="md:hidden ">
                            <button onClick={toggleMenu} className=''>
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden mt-3 space-y-2 bg-blue-950 ">
                            <a href="/" className="block text-center hover:text-gray-400">Home</a>
                            <a href="/about" className="block text-center hover:text-gray-400">Sobre Nós</a>
                            <a href="/services" className="block text-center hover:text-gray-400">Serviço</a>
                            <a href="/projects" className="block text-center hover:text-gray-400">Projetos</a>
                            <a href="/contact" className="block text-center hover:text-gray-400">Contacte-nos</a>
                        </div>
                    )}
                </nav>
            </div>
            <div className=" md:absolute md:inset-y-52 md:inset-x-96 ">
                    <h1 className="text-white md:text-center  text-7xl ">
                        Faça parte da nossa  jornada extraordinária.
                    </h1>
                    <p className="text-white text-lg mt-5 text-center  ">
                        Tecnologia e excelência trabalhando em perfeita sintonia, <br></br> dedicadas a impulsionar o seu sucesso no dinâmico mundo digital
                    </p>
            </div>
            <div className=" flex justify-center items-center  ">
                    <button className=" text-white absolute bottom-20 md:absolute md:bottom-44 bg-blue-600 w-40 rounded-lg hover:bg-slate-500  ">
                        Saiba MAis
                    </button>
            </div>

        
            
            
            
            

         </div>
    )
}