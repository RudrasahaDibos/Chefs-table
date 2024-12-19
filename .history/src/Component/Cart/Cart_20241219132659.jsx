import PropTypes from "prop-types";

const Cart = ({item,idx}) => {
    console.log(idx)
    const {recipe_name, preparing_time,calories} = item;
    console.log(item)
    return (
        <tbody>
            <tr>
        <th>{idx}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
       <button className="btn bg-[#0BE58A]  ">Preparing</button>
      </tr>
     
        
        </tbody>
    );
};

Cart.propTypes ={
    item:PropTypes.object.isRequired,
    idx:PropTypes.object.isRequired
}

export default Cart;