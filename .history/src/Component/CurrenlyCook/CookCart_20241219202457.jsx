import PropTypes from "prop-types";
import Cookreadycart from "./Cookreadycart";
const CookCart = ({ Recipecooktime, RecipeCookCalories, currentlycook }) => {
    console.log(currentlycook)
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
                        currentlycook.map((item,index) => <Cookreadycart key={index} item={item}></Cookreadycart>)
                    }
                    
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