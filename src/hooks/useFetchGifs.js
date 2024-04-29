import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



const useFetchGifs = (area) => {

    
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const getImages = async () => {
        const newImages = await getGifs(area)
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(() => {

        getImages()

    }, []);

  return {

      images: images,
      isLoading: isLoading
    
    }
}

export default useFetchGifs

