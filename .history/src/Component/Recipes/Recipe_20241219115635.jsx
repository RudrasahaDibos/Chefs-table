import PropTypes from "prop-types";
import { CiTimer } from "react-icons/ci";
import { DiFirefox } from "react-icons/di";
const Recipe = ({ recipe, index }) => {
    const { recipe_name, image_url, ingredients, preparing_time, short_description,
        calories } = recipe;
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
                                ingredients.map((ingredient) => <li><a>{ingredient}</a></li>)
                            }
                        </ul>
                    </div>

                    <div className="divider"></div>
               <div className="flex  justify-around w-full">
                      <h1 className="flex justify-center items-center gap-2"> <p>{preparing_time}</p></h1>
                      <h1 className="flex justify-center items-center gap-2"><CiTimer /><p>{calories} Calories</p></h1>
               </div>
                            

                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propType = {
    recipe: PropTypes.object.isRequired,
    length: PropTypes.array.isRequired,
    index: PropTypes.array.isRequired
}

export default Recipe;