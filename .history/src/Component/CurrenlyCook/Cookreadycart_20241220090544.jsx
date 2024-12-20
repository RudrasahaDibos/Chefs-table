import PropTypes from "prop-types";
const Cookreadycart = ({item}) => {
    const { recipe_name,preparing_time,calories} = item;
    return (
       <tbody className="text-end">
                               <tr>
                                  
                                   <td>{recipe_name}</td>
                                   <td>{preparing_time}</td>
                                   <td>{calories}</td>
       
                               </tr>
       
       
                           </tbody>
    );
};
Cookreadycart.propTypes ={
    item:PropTypes.object.isRequired
}


export default Cookreadycart;