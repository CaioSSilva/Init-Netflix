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

export default{
    getHomeList: async ()=>{
        return[
            {
                slug: 'originais',
                title: 'Original Netflix',
                itens: await BASIC_FETCH(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendado para Você',
                itens: await BASIC_FETCH(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
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
                slug: 'comedy',
                title: 'Comédia',
                itens: await BASIC_FETCH(`/discover/tv?with_network=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await BASIC_FETCH(`/discover/tv?with_network=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await BASIC_FETCH(`/discover/tv?with_network=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: await BASIC_FETCH(`/discover/tv?with_network=99&language=pt-BR&api_key=${API_KEY}`)
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
