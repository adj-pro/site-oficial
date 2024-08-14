export default function Escolher() {
    return (
        <div>
            <div className="text-black text-center ">
                <h1 className=" text-3xl mt-20">Por que nos escolher?</h1>
                <p className="text-lg pt-3">Nossa dedicação à excelência tecnológica e ao sucesso <br></br> de nossos clientes nos destaca no mercado de TI.</p>

             
            </div>

            <div className="text-black mt-20 ">
                <div className="absolute  left-80 mt-5">
                    <h2 className="2xl font-medium mt-52">Inovação em TI</h2>
                    <p className="text-lg pt-3">Nossa vasta experiência em diversos setores <br></br> nos permite oferecer soluções personalizadas <br></br> para atender às suas necessidades <br></br> exclusivas.</p>
                </div>
                <div className="absolute right-80 mt-52">
                    <h2 className="2xl font-medium mt-5">Parceria de Confiança</h2>
                    <p className="text-lg pt-3 ">Construímos relacionamentos sólidos com nossos <br></br> clientes, baseados em confiança, transparência e <br></br> integridade. Estamos comprometidos em ser seu <br></br> parceiro de confiança</p>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <img src="./Escolher/@video_screen.png" alt=" " className="mt-96" />

                </div>
            </div>

            <div className=" block md:flex justify-center items-center  ">
                <div className="">
                    <h1 className=" text-black text-4xl">Descubra a Excelência <br></br> Tecnológica com a ADJ Pro!</h1>
                    <p className="text-black pt-3">Na ADJ Pro, a excelência é o nosso compromisso.<br></br> Nossa missão é fornecer soluções tecnológicas <br></br> personalizadas, projetadas sob medida para <br></br> atender às necessidades exclusivas do seu <br></br> negócio.</p>
                </div>
                <div className="">
                    <img src="./Escolher/@Macbook_Pro.png" alt=" " className=" mt-52  w-96 mb-40" />
                </div>
              
            </div>

            <div className="flex justify-center items-center">
                <div>
                    <img src="./Escolher/@screen_content.png" alt=" " className="w-96 h-64 " />
                </div>
                <div className="ml-10">
                    <p className="font-medium">Na ponta dos seus dedos</p>
                    <h1 className="text-3xl mt-3">Newsletter</h1>
                    <h2 className="font-medium mt-3">Assine a nossa newsletter</h2>
                    <p>Para ficar atualizado sobre nossas promoções e muito mais</p>
                    <form>
                        <div className="mt-8">
                            <input type="email"  placeholder="Seu Email" className="rounded-2xl  text-sm placeholder:text-sm placeholder:text-black bg-gray-100 py-2 px-6 text-center " required/>
                
                            <button type="submit" className="bg-blue-400 hover:bg-slate-500 font-medium text-sm py-2 px-7 rounded-2xl text-white ">Assinar</button>
                        </div>
                    </form>
                </div>
            </div>
          
        </div>
    )
}