import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipies ,setreipies] = useState([])

    useEffect(()=>{
          fetch('Chefes.json')
          .then(res => res.json()
        )
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Recipes;