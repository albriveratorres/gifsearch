import React, { useState }from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['one punch', 'samurai x', 'dragon ball']

    const [categories, setCategories] = useState(['one punch'])

    // const handleAdd = () => {
    //     setCategories( categ => [ ...categ, 'hunterxhunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            {
                categories.map(category  =>(
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }

        </>
    )
}
