import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { AppContext } from './context';
 

const Search = () => { 

    const [search, setSearch] = useState("");
 

    const {setFound, setData, data:info} = useContext(AppContext)
    

    const GET_CHARACTER_SEARCHED = gql`
        query GetCharacter($name: String!){
            characters(filter:{name:$name}){
                results{
                    name
                    image
                }
            }
        }
  `

// Lazy query gives a function so you can run by yourself
  const [getSearchedCharacter, {loading,error,data, called} ] = useLazyQuery(GET_CHARACTER_SEARCHED, {
    variables:{
        name:search
    }
  });


    const {results:characters} = data?.characters || {};


    useEffect(()=>{
        setFound(characters?.length);
        if(characters){  
            const obj = [];
            for (const { name, image } of characters) {
                const char = {name, image};     
                obj.push(char);
                setData(obj);
            }   
        }    

    },[characters])


 
    return ( 
            <div className='search-character'>     
                <p>Searching for : {search}</p>
                <div>
                    <input type="text" onChange={(e)=> setSearch(e.target.value)} />
                    <button onClick={()=>getSearchedCharacter()}>Search</button>
                </div> 
            </div>
    );
}

export default Search;
