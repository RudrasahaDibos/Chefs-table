import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes ,setrecipes] = useState([])
    console.log(recipes)
    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json())
          .then(data => setrecipes(data))
    },[])
    return (
        <div>
              <h1>our Recipes:{recipes.length}</h1>
        </div>
    );
};

export default Recipes;