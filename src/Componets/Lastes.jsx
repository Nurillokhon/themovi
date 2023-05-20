import React, { useEffect, useState } from 'react';
import './lastes.css'
import Movies from '../utils/Getmove'
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { store } from '../store/store';

const Lastes = () => {
    const [arr, setArr] = useState([]);

    const dispatch = useDispatch()
    const select = useSelector(store => store.card)
    console.log(select.card , 'bu tugadi');
    useEffect(() => {
        run()
    }, [])
    function run() {
        Movies.getLast()
            .then(res => {
                res.map(item => {
                    return (
                        item.status = false
                    )
                })
                setArr(res)
            })
    }

    function bos(i) {
        let clone = [...arr]
        if (clone[i].status === false) {
            clone[i].status = true
            setArr(clone)
        }
        else{
            clone[i].status = false
            setArr(clone) 
        }
    }

    function send(id , item){
        let clone = [...arr]
        clone[id].status = false
        dispatch({type: 'add' , payload: item})
        setArr(clone)
    }
    return (
        <div className='row'>
            {
                (arr.length > 0) && arr.map((i, e) => {
                    return (
                        <div className="col-3 mycard">
                            <Link to={`/more/${i.id}`}>
                                <div className={`card ${i.status === true ? 'blurr' : ""}`}>
                                    <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} alt="" />
                                    <h4>{i.title}</h4>
                                </div>
                            </Link>
                            <div onClick={() => bos(e)} className='more'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            {
                                (i.status === true) &&
                                <div className='morelist'>
                                    <p onClick={()=>send(e , i)}>watchlist</p>
                                    <p>like</p>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Lastes;
