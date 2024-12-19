import PropTypes from "prop-types";
const CookCart = ({Recipecooktime,RecipeCookCalories,currentlycook}) => {
    console.log(currentlycook)
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = currentlycook
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
                                                   
                                                     <tbody>
            <tr>
        <th>{idx}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <button  onClick={()=>handlePreparing(preparing_time,calories,item)} className="btn bg-[#0BE58A] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Preparing</button>
      </tr>
     
        
        </tbody>
                                                 </tr>
                                             </thead>
                                             
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