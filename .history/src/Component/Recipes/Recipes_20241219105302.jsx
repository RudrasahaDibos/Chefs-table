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
              <h1>Our Recipes</h1>
              <p>Orange Fluff is a great side dish or can be served as a dessert.</p>
        </div>
    );
};

export default Recipes;