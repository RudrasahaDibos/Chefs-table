

const Cart = ({item,idx}) => {
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.log(item)
    return (
        <tbody>
            <tr>
        <th>{key+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    

        </tbody>
    );
};

export default Cart;