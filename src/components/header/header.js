import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <div className="header">
           <Link to='/' class="link">Inicio</Link>
            <div class="dropdown">
                <button class="dropbtn">Filmes</button>
                <div class="dropdown-content">
                    <Link to='/Populares'>Populares</Link>
                    <Link to='/Cartaz'>Em Cartaz</Link>
                    <Link to='/Estreias'>Estreias</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Séries</button>
                <div class="dropdown-content">
                    <Link to='/Lancamentos'>Lançamentos</Link>
                    <Link to='/Nacionais'>Nacionais</Link>
                    <Link to='/Internacionais'>Internacionais</Link>
                </div>
            </div>
            <Link to='/Contato' class="link">Contato</Link>
        </div>
    )
}