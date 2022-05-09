import React, { useEffect, useState } from 'react'
import  './App.css'
import TMDB from './TMDB'
import Movielinha from './Components/Movielinha'
import FeaturedMovie from './Components/FeaturedMovie'
import Header from './Components/Header'
export default () =>{
    
    const [movieList, setMovieList] = useState([])
    const [featuredData, setFaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)

    useEffect(()=>{
        const loadAll = async()=>{
            //Pegando Lista Total
            let list = await TMDB.getHomeList()
            setMovieList(list);

            //Pegando o Featured
            let originals = list.filter(i=>i.slug === 'originais')
            let aleatorio = Math.floor(Math.random() * (originals[0].itens.results.length -1))
            let escolha = originals[0].itens.results[aleatorio]
            let escolhaInfo = await TMDB.getMovieItem(escolha.id, 'tv')
            setFaturedData(escolhaInfo)
        }
        loadAll()
    }, [])

    useEffect(()=>{
        const scrollListner = () =>{
            if(window.scrollY > 15){
                setBlackHeader(true)
            }else{
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListner)
        return () => {
            window.removeEventListener('scroll', scrollListner)
        }
    })

    return(
        <div className='page'>

            <Header black = {blackHeader}/>

            {featuredData &&
                <FeaturedMovie itens={featuredData}/>
            }

            <section className='listas'>
                {movieList.map((itens, key)=>(
                    <Movielinha key={key} title={itens.title} itens={itens.itens}/>
                ))}
            </section>

            <footer>
                <h1>Feito por Caio Souza Silva</h1>
                <h1>Todos os direitos a Netflix</h1>
            </footer>
                
            {movieList.length <= 0 &&
                <div className='loading'>
                <img src='https://assets.wired.com/photos/w_2000/wp-content/uploads/2016/01/Netflix_LoadTime.gif'></img>
            </div>
            
            }
        </div>
    )
}