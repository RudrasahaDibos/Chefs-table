import PropTypes from "prop-types";

const Recipe = ({recipe,index}) => {
    console.log(recipe)
    const { recipe_name, image_url, ingredients, preparing_time, short_description,
        calories } = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propType = {
    recipe:PropTypes.object.isRequired
}

export default Recipe;