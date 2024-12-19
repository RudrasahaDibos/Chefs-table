import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

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

                <div className="flex justify-around  ">
                     <div className=" grid grid-cols-2 w-2/3 border-2">
                     {
                        Recipes.map((recipe,index)=> <Recipe key={index} recipe={recipe}></Recipe>  )
                      }
                     </div>

                     <div className="w-1/3 border-2">
                               <h1>Acrt add </h1>
                     </div>
                </div>
        </div>
    );
};

export default Recipes;