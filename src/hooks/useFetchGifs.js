import { useEffect, useState } from "react";
import { getGifs } from "../helpers/Getgifs";


export const useFetchGifs = ( category ) => {
    
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getNewImages = async() => {
        const newImages = await getGifs( category );
        setimages( newImages );
        setisLoading(false)
    }
    
    

    useEffect( () => {
        getNewImages();
    }, [] );

    
    return {
        images,
        isLoading
    }

}
