export default function Parceiros(){
    return(
        <div>
            <div className="flex justify-center items-center mt-60">
                <div className="  ">
                    <h1 className=" text-3xl ">Parceiros</h1>
                    <p className="mt-2">Nossos parceiros de longas datas</p>
                </div>

               
            
            </div>

            <div className="columns-10 flex justify-center items-center mt-20">
                
                <img src="./Parceiros/logs_Google.png" alt=" " className="w-54 " />

                <img src=" ./Parceiros/logs_Amazon.png" alt=" " className="w-54" />

                <img src="./Parceiros/logs_Microsoft.png" alt=" " className="w-54"/>

                <img src=" ./Parceiros/logs_Uber.png" alt=" " className=" w-54" />
            </div>
        </div>
    )
}