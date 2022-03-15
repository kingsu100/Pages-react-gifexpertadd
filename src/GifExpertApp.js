
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    // const handAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => (
                        // return <li key={category}>{category}</li>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );

}

export default GifExpertApp;