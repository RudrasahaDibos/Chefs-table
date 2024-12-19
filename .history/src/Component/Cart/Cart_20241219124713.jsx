

const Cart = ({item,index}) => {
    // const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.log(item)
    return (
        <tbody>
            <tr>
        <th>{index.length}</th>
        <td>{recipe_name}</td>
        <td>{}</td>
        <td>Blue</td>
      </tr>
    

        </tbody>
    );
};

export default Cart;