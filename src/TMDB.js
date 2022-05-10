import { type } from "@testing-library/user-event/dist/type";

const API_KEY = '7fa782782aeaaf9c19938b72081e9858';
const API_BASE = 'https://api.themoviedb.org/3';
//Originais Netflix
//Recomendados p/ Voce (trending)
//Mais Votados (top rated)
//Listas de tipos

const BASIC_FETCH = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
let randomNumber = Math.floor((Math.random() * 10) + 1);

export default{
    getHomeList: async ()=>{
        return[
            {
                slug: 'originais',
                title: 'Original Netflix',
                itens: await BASIC_FETCH(`/tv/popular?language=pt-BR&api_key=${API_KEY}&page=${randomNumber}`)
            },
            {
                slug: 'trending',
                title: 'Recomendado para Você',
                itens: await BASIC_FETCH(`/tv/popular?language=pt-BR&api_key=${API_KEY}&page=3`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await BASIC_FETCH(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await BASIC_FETCH(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasia',
                title: 'Fantasia',
                itens: await BASIC_FETCH(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                itens: await BASIC_FETCH(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'faroeste',
                title: 'Faroeste',
                itens: await BASIC_FETCH(`/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'mistery',
                title: 'Mistério',
                itens: await BASIC_FETCH(`/discover/tv?with_genres=9648&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieItem: async(movieid, type) =>{
        let info = {}

        if(movieid){
            switch(type){
                case 'movie':
                info = await BASIC_FETCH(`/movie/${movieid}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await BASIC_FETCH(`/tv/${movieid}?language=pt-BR&api_key=${API_KEY}`)
                break
            }
        }
        return info
    }
}
