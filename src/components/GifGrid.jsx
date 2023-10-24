import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    //custom hook
    const {images, isLoading} = useFetchGifts(category);
    console.log({isLoading});

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading 
                // ? (<h2>Cargando...</h2>)
                // : null
                isLoading && (<h2>Cargando...</h2>)
            }
            {/* <h2>Cargando</h2> */}
            <div className="card-grid">
                {
                    // images.map( ({id, title}) => ( 
                    images.map( (image) => ( 
                    <GifItem key={image.id}
                    // esparcir cuando tenemos muchos propiedades que enviar
                    {...image}/>
                    // image={image}/>
                    // <li key={id}>{title}</li>
                ))  
                }
            </div>
        </>
    )
}
