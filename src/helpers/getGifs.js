export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eXIOhwpZGBB20kczihqmD2vOIWqwVruv&q=${category}&limit=20`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    // console.log(data);
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    console.log(gifs);
    return gifs;
}