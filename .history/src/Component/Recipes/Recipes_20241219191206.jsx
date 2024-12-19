import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import Cart from "../Cart/Cart";

const Recipes = () => {
    const [Recipes, Setrecipes] = useState([])
    const [cartRecipes, Setcartrecipes] = useState([])
    console.log(Recipes.length)
    useEffect(() => {
        fetch('Chefes.json')
            .then(res => res.json())
            .then(data => Setrecipes(data))
    }, [])

    const handleAdd = (p) => {
        const newrecipe = [...cartRecipes, p]
        Setcartrecipes(newrecipe)
    }
   
    const handlePreparing = (preparingcook) =>{
                con
    }


    return (
        <div>
            <div className="text-center" >
                <h1 className="text-2xl font-bold ">Our Recipes</h1>
                <p className="mt-4" >Orange Fluff is a great side dish or can be served as a dessert.</p>
            </div>

            <div className="md:flex flex-cols justify-around max-w-7xl mx-auto ">
                <div className=" grid md:grid-cols-2 grid-cols-1 w-2/3 ">
                    {
                        Recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} handleAdd={handleAdd}></Recipe>)
                    }
                </div>

                <div className="md:w-1/3 w-full ">
                    <h1 className="text-2xl text-center font-bold">Want To Cook : {cartRecipes.length}</h1>
                    <div className="divider"></div>
                    <div className="overflow-x-auto ">
                        <table className="table table-zebra ">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                  
                                </tr>
                            </thead>
                            {
                                cartRecipes.map((item, idx) => <Cart key={idx} item={item}></Cart>)
                            }
                        </table>
                    </div>
                    <div className="divider"></div>
                    <h1 className="text-2xl text-center font-bold">Currently cooking :</h1>

                </div>
            </div>
        </div>
    );
};

export default Recipes;