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
               <div>
                
               </div>
        </div>
    );
};

export default Recipes;