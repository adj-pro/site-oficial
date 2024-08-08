// src/components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navegação</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Home</a></li>
                            <li className="mb-2"><a href="#">Sobre Nós</a></li>
                            <li className="mb-2"><a href="#">Serviços</a></li>
                            <li className="mb-2"><a href="#">Projetos</a></li>
                            <li className="mb-2"><a href="#">Contacte-nos</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nossos Parceiros</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Habic F</a></li>
                            <li className="mb-2"><a href="#">CPS</a></li>
                            <li className="mb-2"><a href="#">Território do Conhecimento</a></li>
                            <li className="mb-2"><a href="#">Pastelária Formosa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Outros Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Sistema de Faturação</a></li>
                            <li className="mb-2"><a href="#">Kubata App</a></li>
                            <li className="mb-2"><a href="#">Um Som</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contato</h3>
                        <p>Luanda, Angola</p>
                        <p>(239) 944-304-551</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaFacebookF /></a>
                            <a href="#" className="text-white"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;