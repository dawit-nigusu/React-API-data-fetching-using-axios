import React, {useState,useEffect} from 'react';


function Recipe ({image, title, ingredients}) {
    return(
        <div>
            <h2>{title}</h2>
            <img src = {image} alt = ""/>
            <ul>
                {ingredients.map(ingredient=>(
                    <li >{ingredient.text }</li>
                ))}
            </ul>

        </div>
    )
}

export default Recipe