import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Characters from '../components/Characters';
import { ApiUrl } from '../utils/utils';

function RickAndMorty() {
    const [character, setCharacter] = useState([]);

    useEffect(()=> {
        axios.get(ApiUrl).then((res) => setCharacter(res.data.results)).then(console.log(character));
    }, []);
  return (
    <>
    <h1>Characters</h1>
    {character.length > 0 ? (character.map((character) => {
        const { id, name, status, location } = character;
        return(<Characters key={id} id={id} name={name} status={status} location={location} />)
    })) : <p>No data</p>};
    </>
  )
}

export default RickAndMorty