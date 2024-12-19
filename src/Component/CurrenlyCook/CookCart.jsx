import PropTypes from "prop-types";
import Cookreadycart from "./Cookreadycart";
const CookCart = ({ Recipecooktime, RecipeCookCalories, currentlycook }) => {
    console.log(currentlycook)
    const { recipe_name, preparing_time, calories } = currentlycook
    return (
        <div>
            <h1>{Recipecooktime} </h1>
            <h1>{RecipeCookCalories}</h1>
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
                        currentlycook.map((item,index) => <Cookreadycart key={index} ></Cookreadycart>)
                    }
                    <tbody>
                        <tr>
                            <th>{currentlycook.length}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>

                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

CookCart.propTypes = {
    Recipecooktime: PropTypes.object.isRequired,
    RecipeCookCalories: PropTypes.object.isRequired,
    currentlycook: PropTypes.object.isRequired
}

export default CookCart;