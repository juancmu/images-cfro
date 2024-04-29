export const getGifs = async(area, fileType) => {
    
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=aHQwwamr0sQdBZUMMT1MmYknP0ZpM5Bt&q=${area}&limit=${limit}`
    const url = `https://api.unsplash.com/search/photos?query=${area}&client_id=VbyDIk9XBW9bzpa2H4V4Cc3L1riSqvDhulr5oA1Vv9U`
   


    const resp = await fetch(url)

    
    // const { data } = await resp.json()

    //     var gifs = data.map(img =>({
    //         id: img.id,
    //         title: img.title,
    //         url: img.images.downsized_medium.url
    //     }))

        const { results } = await resp.json()

        var gifs = results.map(img =>({
            id: img.id,
            title: img.alt_description,
            url: img.urls.regular
        }))

            return gifs    
}