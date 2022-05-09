import React, {useState} from "react";
import './Movielinha.css'


export default ({title, itens})=>{
    const [scrollX, setScrollX] = useState(-400)

    const LeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0 ){
            x = 0
        }
        setScrollX(x)
    }
    const RightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = itens.results.length *150
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }


    return(
        <div className="movielinha">
            <h2>
                {title}
            </h2>
            <div className="movelinha--left" onClick={LeftArrow}>
                <img src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_ChevronLeft_18_N.svg"></img>
            </div>
            <div className="movielinha--right" onClick={RightArrow}>
                <img src="https://spectrum.adobe.com/static/icons/workflow_18/Smock_ChevronLeft_18_N.svg"></img>
            </div>
            <div className="movielinha--listarea">

                <div className="movielinha--list" style={
                    {marginLeft: scrollX,
                    width:itens.results.length * 150}}>
                    {itens.results.length > 0 && itens. results.map((itens, key)=>(
                        <div key={key} className="movielinha--item">
                            <img src={`https://image.tmdb.org/t/p/w300${itens.poster_path}`} alt={itens.original_title}></img>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}