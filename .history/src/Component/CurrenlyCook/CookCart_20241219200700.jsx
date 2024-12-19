import PropTypes from "prop-types";
const CookCart = ({Recipecooktime,RecipeCookCalories,currentlycook}) => {
    console.log(currentlycook)
    const {}
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
                                                 cartRecipes.map((item, idx) => <Cart key={idx} item={item} handlePreparing={handlePreparing}></Cart>)
                                             }
                                         </table>
                                     </div>
        </div>
    );
};

CookCart.propTypes= {
         Recipecooktime:PropTypes.object.isRequired,
         RecipeCookCalories:PropTypes.object.isRequired
}

export default CookCart;