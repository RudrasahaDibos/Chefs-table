

const Cart = ({item,index}) => {
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.log(item)
    return (
        <tbody>
            <tr>
        <th>{index+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{}</td>
      </tr>
    

        </tbody>
    );
};

export default Cart;