import PropTypes from "prop-types";
const CookCart = ({ Recipecooktime, RecipeCookCalories, currentlycook }) => {
    console.log(currentlycook)
    return (
      
        <div className="overflow-x-auto">
        <table className="table table-zebra">
       
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
         
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
        
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