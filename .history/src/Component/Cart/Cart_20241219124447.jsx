

const Cart = ({item,index}) => {
    const {recipe_name, image_url, ingredients, preparing_time, short_description,calories} = item;
    console.logA()
    return (
        <tbody>
            <tr>
        <th>{index}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    

        </tbody>
    );
};

export default Cart;