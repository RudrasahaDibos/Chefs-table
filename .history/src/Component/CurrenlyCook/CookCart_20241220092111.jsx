import PropTypes from "prop-types";
import Cookreadycart from "../CurrenlyCook/Cookreadycart";
const CookCart = ({ Recipecooktime, RecipeCookCalories, currentlycook }) => {
    console.log(currentlycook)
    return (
      
        <div className="overflow-x-auto">
        <table className="table table-zebra">
       
          <thead className="">
            <tr>
             
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody className="">
         
             {
                    currentlycook.map((item , index)=><Cookreadycart key={index} item={item}></Cookreadycart>)
            }

        
          </tbody>
                   

           
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