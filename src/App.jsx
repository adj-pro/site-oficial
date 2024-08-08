import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header"
import Escolher from "./Components/Escolha"
import Parceiros from "./Components/Parcerias"
import Faturacao from "./SI_Faturação"
import Localizaçao from "./Components/Localização"
import Footer from "./Components/Rodapé"

export default function App() {
  return (
    <div>

      
     
      <Header /> 
      <Escolher />
      <Parceiros />
      <Faturacao />
      <Localizaçao />
      <Footer />


      
    </div>
  )
}