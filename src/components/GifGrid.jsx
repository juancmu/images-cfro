
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import useFetchGifs from "../hooks/useFetchGifs";
import GifImage from "./GifImage";



const GifGrid = ({ area }) => {

        const {images, isLoading} = useFetchGifs(area)

    if (images.length > 0) {


        return (
            <>
                <h4 key={Math.random()}>{area}</h4>
                    {
                        isLoading && ( <h2>Is Loading</h2> )
                    }

                <div key={area} className="card-grid">
                    {



                        images.map((image) => (


                            <GifImage
                                key={image.id}
                                {...image}
                            />


                        )
                        )

                    }
                </div>


            </>
        )

    } else {
        <>
        </>
        // document.getElementById('repeated-value').innerHTML =
        // `No find Anything about ${area}`;



    }


}

export default GifGrid