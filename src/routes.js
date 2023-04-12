import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Inicio from './pages/inicio/inicio'
import Contato from './pages/contato/contato'
import Populares from './pages/populares/populares'
import Cartaz from './pages/cartaz/cartaz'
import Estreias from './pages/estreias/estreias'
import Lancamentos from './pages/lancamentos/lancamentos'
import Nacionais from './pages/nacionais/nacionais'
import Internacionais from './pages/internacionais/internacionais'
import Detalhes from './components/detalhes/detalhes'


export default function Rotas(){
    return (
        
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Populares' element={<Populares />}/>
        <Route path='/Cartaz' element={<Cartaz />}/>
        <Route path='/Estreias' element={<Estreias />}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/Lancamentos' element={<Lancamentos />}/>
        <Route path='/Nacionais' element={<Nacionais />}/>
        <Route path='/Internacionais' element={<Internacionais />}/>
        <Route path='/Detalhes/:id' element={<Detalhes />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}