import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ApiUrl } from '../utils/utils';

function CharacterDetails() {
    const { id } = useParams();
    const {character, setCharacter} = useState();

    useEffect(() => {
        axios.get(ApiUrl + id).then((res) => setCharacter(res.data));
    }, []);
  return (
    <div>{id}</div>
  )
}

export default CharacterDetails