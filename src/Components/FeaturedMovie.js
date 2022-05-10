import React from "react";
import './FeaturedMovie.css'

export default ({itens}) =>{

    let firstDate = new Date(itens.first_air_date)
    let genres = []
    for(let i in itens.genres){
        genres.push(itens.genres[i].name)
    }

    let description = itens.overview
    if(description.length > 200){
        description = description.substring(0, 200) + '...'
    }
    if(description.length == 0){
        window.location.reload()
    }
    return(
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${itens.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {itens.original_name}
                    </div>
                    <div className="featured-info">
                        <div className="featured--points">
                            {itens.vote_average}
                        </div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured-seasons">
                            {itens.number_of_seasons} temporada{itens.number_of_seasons !==1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured-buttons">
                        <a className="featured--watch"><img src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_Play_18_N.svg"></img>Assistir</a>
                        <a className="featured--listadd"><img src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_Add_18_N.svg"></img>Minha Lista</a>
                    </div>
                    
                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {genres.join(',  ')}
                    </div>
                </div>
            </div>    
        </section>
    )
}