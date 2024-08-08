import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Header(){
    return (
        <div className="w-90  h-svh bg-cover bg-[url('./Imagem.png')] bg-no-repeat md:bg-cover" >
            <div className="pt-10">
                <div>
                    <img src="./favicon.png" alt=" " className="absolute top-30 left-10"/>
                </div>
                <div className=" flex justify-center items-center  ">
                    <ul className="text-white columns-5 ">
                        <li><a href={"/"}>Home</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Serviço</a></li>
                        <li><a href="#">Projectos</a></li>
                        <li><a href="#">Contacte-nos</a></li>
                    </ul>Ç
                    <div className='absolute right-20 columns-3'>
                        

                        <a href="#" className="text-white"><FaTwitter /></a>
                        <a href="#" className="text-white"><FaFacebookF /></a>
                        <a href="#" className="text-white"><FaLinkedinIn /></a>
                    </div>
                  
                </div>
            </div>
            <div className=" absolute inset-y-52 inset-x-96 ">
                    <h1 className="text-white text-center text-7xl  ">
                        Faça parte da nossa <br></br> jornada extraordinária.
                    </h1>
                    <p className="text-white text-lg mt-5 text-center">
                        Tecnologia e excelência trabalhando em perfeita sintonia, <br></br> dedicadas a impulsionar o seu sucesso no dinâmico mundo digital
                    </p>
            </div>
            <div className=" flex justify-center items-center  ">
                    <button className=" text-white absolute bottom-44 bg-blue-600 w-40 rounded-lg hover:bg-slate-500  ">
                        Saiba MAis
                    </button>
            </div>
            
            
            
            

        </div>
    )
}