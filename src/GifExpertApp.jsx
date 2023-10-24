import { useState } from 'react'
import React from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    //espacio en memoria para almacenar mis categorias
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        console.log(newCategory);

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
        // setCategories( c =>  [...c, 'marvel']);
    }

    //console.log(categories);
    return (
       <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        // onAddCategories= {setCategories}
        onNewCategory={ (value) => onAddCategory(value) } 
        />

        {/* <button onClick = {onAddCategory}>Add Category</button> */}
            { 
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                    )
                )
            }
       </>
    )
}

