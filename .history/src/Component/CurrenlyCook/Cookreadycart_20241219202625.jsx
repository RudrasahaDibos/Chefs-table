import pro
const Cookreadycart = ({item}) => {
    const { recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
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



export default Cookreadycart;