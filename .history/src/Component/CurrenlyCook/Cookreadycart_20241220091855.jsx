import PropTypes from "prop-types";
const Cookreadycart = ({item}) => {
    const { recipe_name,preparing_time,calories} = item;
    return (
       
                               <tr className="text-end border-2">
                                  
                                   <td className="border-2 text-end">{recipe_name}</td>
                                   <td>{preparing_time}</td>
                                   <td>{calories}</td>
       
                               </tr>
       
       
                        
    );
};
Cookreadycart.propTypes ={
    item:PropTypes.object.isRequired
}


export default Cookreadycart;