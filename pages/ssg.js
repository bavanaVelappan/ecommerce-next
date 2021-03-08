
import axios from 'axios';
import {useState, useEffect} from 'react';
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const header = {
    "Cache-Control":"no-cache",
};

const StaticSide = (props) => {   
   const data = props.pokemon.map((poke) => { return <div key={poke.name}><img src={poke.imgUrl}/><p>{poke.name}</p><hr /></div>});
   return (
    <div>
        {data}
    </div>
   );
}

export const getStaticProps = async () => {
    const response = await axios.get(url, {header});
    const {results} = response.data;
    
    const promises = results.map((result, index) => { 
        return axios.get(result.url, {header});
    });
    
    const responses = await Promise.all(promises);
    const pokeData = responses.map((res) => {
        return {
            name:res.data.name,
            imgUrl:res.data.sprites.front_default
        }
    })
    return {
        props: {
            pokemon:pokeData
        }
    }
}

export default StaticSide;
