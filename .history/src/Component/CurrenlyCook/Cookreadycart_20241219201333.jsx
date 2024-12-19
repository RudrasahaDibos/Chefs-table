
const Cookreadycart = ({currentlycook}) => {
       const { recipe_name, image_url, ingredients, preparing_time, short_description, calories } = currentlycook
    return (
        <tbody>
        <tr>
    <th>{idx}</th>
    <td>{recipe_name}</td>
    <td>{preparing_time}</td>
    <td>{calories}</td>
    <button  onClick={()=>handlePreparing(preparing_time,calories,item)} className="btn bg-[#0BE58A] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Preparing</button>
  </tr>
 
    
    </tbody>
    );
};



export default Cookreadycart;