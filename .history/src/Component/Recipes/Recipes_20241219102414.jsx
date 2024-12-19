import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipies ,setreipies] = useState([])

    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json())
          .then(data => setreipies(data))
    },[])
    return (
        <div>
              <h1>our Recepes</h1>
        </div>
    );
};

export default Recipes;