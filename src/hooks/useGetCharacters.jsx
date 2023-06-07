import React from 'react';

import {useQuery, gql} from "@apollo/client";

const GET_CHARACTERS = gql`
    query{
        characters{
            results{
                id
                name
                image
                gender
            }
        }
    }
`

export const UseGetCharacters = () => {

    const {called,error,loading,data} = useQuery(GET_CHARACTERS);

    // console.log(called, error, loading, data);

    return {
        error,
        loading,
        data
    };
}
 