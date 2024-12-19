import PropTypes from "prop-types";
const CookCart = ({Recipecooktime,RecipeCookCalories}) => {
    console.log(Recipecooktime)
    return (
        <div>
            <h1>{Recipecooktime} </h1>

        </div>
    );
};

CookCart.propTypes= {
         Recipecooktime:PropTypes.object.isRequired,
}

export default CookCart;