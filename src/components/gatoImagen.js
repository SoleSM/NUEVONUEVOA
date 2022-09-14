import React, { useEffect } from "react";
import { Button, Image, Text, HStack, Center } from 'native-base';
import { useState } from "react";
import Spinner from "./Spinner";

const GatoImagen = () => {

    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        if(isLoading){

            fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => {
                setImageUrl(data[0].url)
                setIsLoading(false)

            })
            .catch(error => console.error('Error:', error));

        }

    },[isLoading])

    const CatImage = () => {
        setIsLoading(true)
    }
   
    if(isLoading === true){
        return <Spinner/>
    }
  


    return (
        <Center>
            <Button
                onPress={CatImage}
                w="auto"
                my={2}>Give me another michi!</Button>

            <Image alt="imagen" source={{ uri: imageUrl }} size='2xl' borderRadius={30} /> 
  


        </Center>

    )
   
   





}


export default GatoImagen;
