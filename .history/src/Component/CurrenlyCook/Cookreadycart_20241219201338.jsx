
const Cookreadycart = ({currentlycook}) => {
       const { recipe_name, image_url, ingredients, preparing_time, short_description, calories } = currentlycook
    return (
        <tbody>
        <tr>
    <th>{idx}</th>
    <td>{recipe_name}</td>
    <td>{preparing_time}</td>
    <td>{calories}</td>
  
  </tr>
 
    
    </tbody>
    );
};



export default Cookreadycart;