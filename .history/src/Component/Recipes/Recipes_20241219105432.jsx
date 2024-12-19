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
               <div className="text-center" >
               <h1 className="text-2xl font-bold mt-6">Our Recipes</h1>
               <p >Orange Fluff is a great side dish or can be served as a dessert.</p>
               </div>
        </div>
    );
};

export default Recipes;