import { base_url , API ,endPoint } from "./Fetch";
import Fetch from './Fetch'


class Movies {
    async getLast(){
        const mass = Fetch.get(`${base_url}movie/now_playing${API}${endPoint}`)
        .then(res =>{
            return res.data.results
        })
        .catch(e => console.log(e))
        return mass
    }

    async getdet(id){
        const mass = Fetch.get(`${base_url}movie/${id}${API}${endPoint}`)
        .then(res =>{
            return res.data
        })
        .catch(e => console.log(e))
        return mass
    }

}

export default new Movies()