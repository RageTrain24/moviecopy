import { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'
import { Link } from 'react-router-dom'

export default function Cartaz() {

    const [filmes, setFilmes] = useState([''])

    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: "3f71bce529be868652d8ce6236db45f3",
                    language: 'pt-BR'
                }
            })

            setFilmes(response.data.results)
        }
        loadFilmes()
    }, [filmes])

    //console.log(filmes)

    return (
        <div>
            <div>
                <h1>Em Cartaz</h1>
            </div>
            <div className='filme'>
                {filmes.map((filme) => {
                    return (
                        <article>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/Detalhes/${filme.id}`}>Detalhes</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}