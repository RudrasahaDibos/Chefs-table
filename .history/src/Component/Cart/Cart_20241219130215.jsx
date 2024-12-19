import PropTypes from "prop-types";

const Cart = ({item,idx}) => {
    console.log(idx)
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.log(item)
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

export default Cart;