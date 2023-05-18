import React, { useEffect, useState } from 'react';
import Movies from '../utils/Getmove'
import { Link } from 'react-router-dom';

const Lastes = () => {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        run()
    }, [])
    function run() {
        Movies.getLast()
            .then(res => {
                setArr(res)
            })
    }
    return (
        <div className='row'>
            {
                (arr.length > 0) && arr.map((i, e) => {
                    return (
                        <div className="col-3">
                            <Link to={`/more/${i.id}`}>
                                <div  className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} alt="" />
                                    <h4>{i.title}</h4>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Lastes;
