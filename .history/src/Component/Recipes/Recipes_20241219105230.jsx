import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [Recipes,Setrecipes] = useState([])
    console.log(Recipes.length)
    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json())
          .then(data => Setrecipes(data))
    },[])
    return (
        <div>
              <h1>Our Recipes: {Recipes.length}</h1>
              <p></p>
        </div>
    );
};

export default Recipes;