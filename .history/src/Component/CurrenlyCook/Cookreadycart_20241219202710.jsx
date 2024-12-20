import PropTypes from "prop-types";
const Cookreadycart = ({item}) => {
    const { recipe_name,  preparing_time, short_description,calories} = item;
    return (
       <tbody>
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