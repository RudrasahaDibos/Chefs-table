import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [Recipes,Setrecipes] = useState([])
    const [cartRecipes, Setcartrecipes] = useState([])
    console.log(Recipes.length)
    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json())
          .then(data => Setrecipes(data))
    },[])
  
    const handleAdd = (p) =>{
            const newrecipe =[...Recipes,p]
            Setrecipes(newrecipe)
    }



    return (
        <div>
               <div className="text-center" >
               <h1 className="text-2xl font-bold ">Our Recipes</h1>
               <p className="mt-4" >Orange Fluff is a great side dish or can be served as a dessert.</p>
               </div>

                <div className="flex justify-around max-w-7xl mx-auto ">
                     <div className=" grid grid-cols-2 w-2/3 ">
                     {
                        Recipes.map((recipe,index)=> <Recipe key={index} recipe={recipe} handleAdd={handleAdd}></Recipe>  )
                      }
                     </div>

                     <div className="w-1/3">
    <div className="overflow-x-auto">
  <table className="table table-zebra">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
           {
            cartRecipes.find((item) => <ca)
           }
  </table>
</div>
                     </div>
                </div>
        </div>
    );
};

export default Recipes;