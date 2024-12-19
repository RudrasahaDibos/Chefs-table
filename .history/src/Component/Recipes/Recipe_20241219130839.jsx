import PropTypes from "prop-types";
import { CiTimer } from "react-icons/ci";
import { DiFirefox } from "react-icons/di";

const Recipe = ({recipe, index,handleAdd }) => {
    const { recipe_name, image_url, ingredients, preparing_time, short_description,calories} = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl mt-4">
                <figure className="px-10 pt-10">
                    <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}?</p>
                    <div className="divider"></div>
                    <div className="text-start">
                        <h2 className="text-2xl font-bold">ingredients: {ingredients?.length}</h2>
                        <ul>
                            {
                                ingredients.map((ingredient,index) => <li key={index}> {ingredient}</li>)
                            }
                        </ul>
                    </div>

                    <div className="divider"></div>
               <div className="flex  justify-around w-full">
                      <h1 className="flex justify-center items-center gap-2"><DiFirefox/> <p>{preparing_time}</p></h1>
                      <h1 className="flex justify-center items-center gap-2"><CiTimer/><p>{calories} Calories</p></h1>
               </div>
                            

                    <div className="card-actions">
                        <button onClick={()=>handleAdd(recipe)} className="btn bg-[#0BE58A]  rounded-full">Want To Cook </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    index: PropTypes.array.isRequired,
    handleAdd:PropTypes.func 
}

export default Recipe;