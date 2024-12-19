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
               <h1 className="text-2xl font-bold ">Our Recipes</h1>
               <p className="mt-4" >Orange Fluff is a great side dish or can be served as a dessert.</p>
               </div>
        </div>
    );
};

export default Recipes;