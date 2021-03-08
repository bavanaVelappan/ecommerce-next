
import axios from 'axios';
import {useState, useEffect} from 'react';
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

const ClientSide = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
      const fetchPokemon = async () => {
        const response = await axios.get(url);
        const {results} = response.data;
        
        const promises = results.map((result, index) => { 
            return axios.get(result.url);
        });
        
        const responses = await Promise.all(promises);
        const pokeData = responses.map((res) => {
            return {
                name:res.data.name,
                imgUrl:res.data.sprites.front_default
            }
        })
        setPokemon(pokeData);
      };
      fetchPokemon();
   }, []);
   const data = pokemon.map((poke) => { return <div key={poke.name}><img src={poke.imgUrl}/><p>{poke.name}</p><hr /></div>});
   return (
    <div>
        {data}
    </div>
   );
}

export default ClientSide;
