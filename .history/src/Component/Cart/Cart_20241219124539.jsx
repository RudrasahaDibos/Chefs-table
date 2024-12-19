

const Cart = ({item,index}) => {
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.log(item)
    return (
        <tbody>
            <tr>
        <th>{index.length}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    

        </tbody>
    );
};

export default Cart;