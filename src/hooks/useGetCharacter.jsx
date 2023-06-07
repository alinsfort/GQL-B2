import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
    query GetCharacter($id:ID!){
        character(id:$id){
            name
            status
            species
            type
            gender
        }
    }
`

export const UseGetCharacter = (id) => {

    const {called, data,loading,error} = useQuery(GET_CHARACTER,{
        variables:{
            id:id
        }
    })


    // console.log(called, error, loading, data);

    return {
        data,
        loading,
        error
    }
} 
