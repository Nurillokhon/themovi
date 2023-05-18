import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Movies from '../utils/Getmove'

const More = () => {
    const [mass, setmass] = useState();
    useEffect(() => {
        getdetales()
    }, []);
    const params = useParams()
    function getdetales(){
        Movies.getdet(params.id)
        .then(res =>{
            setmass(res)
        })
    }
    return (
        <div>
            {
                (mass) && <div>
                    <img src={`https://image.tmdb.org/t/p/w500${mass.backdrop_path}`} alt="" />
                    <h1>{mass.title}</h1>
                </div>
            }
        </div>
    );
}

export default More;
