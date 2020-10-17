import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {increment, decrement} from '../store';

import Pokes_Data from '../../pokemon_data';

// Get Pokemon Image
const createPokeImage = (pokeID) => {
    return `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
}

const Pokemon = () => {
    const dispatch = useDispatch();
    const PokeID = useSelector(state => state.PokeID);
    const PokeImage_1 = createPokeImage(PokeID);
    const PokeImage_2 = createPokeImage(PokeID+1);
    const PokeImage_3 = createPokeImage(PokeID+2);
    const Poke_Data = Pokes_Data[PokeID-1];
    const types = Poke_Data.types.map((type) => {
        return `${type} `;
    })
    
    return (
        <div>
            <div className="text-center">
                <h2 className="text-white">No.{PokeID} {Poke_Data.name}</h2>
                <h3 className="text-white">{types}</h3>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner container4">
                        <div className="col carousel-item active" >
                            <img className="d-block mx-auto" width="200" height="200" src={PokeImage_1} alt="First slide"/>
                        </div>
                        <div className="carousel-item" >
                            <img className="d-block mx-auto" width="200" height="200" src={PokeImage_2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item" >
                            <img className="d-block mx-auto" width="200" height="200" src={PokeImage_3} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" onClick={() => dispatch(decrement())} data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" onClick={() => dispatch(increment())} data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;