import PropTypes from "prop-types";
const CookCart = ({Recipecooktime,RecipeCookCalories,currentlycook}) => {
    console.log(currentlycook)
    
    return (
        <div>
            <h1>{Recipecooktime} </h1>
            <h1>{RecipeCookCalories}</h1>
      
        </div>
    );
};

CookCart.propTypes= {
         Recipecooktime:PropTypes.object.isRequired,
         RecipeCookCalories:PropTypes.object.isRequired
}

export default CookCart;