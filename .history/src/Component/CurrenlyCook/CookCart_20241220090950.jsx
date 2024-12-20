import PropTypes from "prop-types";
import Cookreadycart from "./Cookreadycart";
const CookCart = ({ Recipecooktime, RecipeCookCalories, currentlycook }) => {
    console.log(currentlycook)
    return (
      
            {/* <h1>{Recipecooktime} </h1>
            <h1>{RecipeCookCalories}</h1> */}
            <div className="overflow-x-auto ">
                <table className="table table-zebra  ">

                    <thead className="text-left border-2">
                        <tr>
                            <th></th>
                            <th className="w-full text-start">Name</th>
                            <th className=" border-2 w-full">Time</th>
                            <th className="w-full border-2">Calories</th>

                        </tr>
                    </thead>
                    {
                        currentlycook.map((item,index) => <Cookreadycart key={index} item={item}></Cookreadycart>)
                    }
                    
                </table>
            </div>
       
    );
};

CookCart.propTypes = {
    Recipecooktime: PropTypes.object.isRequired,
    RecipeCookCalories: PropTypes.object.isRequired,
    currentlycook: PropTypes.object.isRequired
}

export default CookCart;