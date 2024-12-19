import PropTypes from "prop-types";

const Recipe = ({recipe,index}) => {
    const {recipe_name, image_url, ingredients, preparing_time, short_description,
        calories} = recipe;
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
                    <p>{ short_description}?</p>

                    <hr className="h-px my-8 bg-black border-0 dark:bg-"/>

                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propType={
    recipe:PropTypes.object.isRequired,
    index: PropTypes.array.isRequired
}

export default Recipe;