import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes ,setrecipes] = useState([])

    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json())
          .then(data => setreipes(data))
    },[])
    return (
        <div>
              <h1>our Recipes</h1>
        </div>
    );
};

export default Recipes;