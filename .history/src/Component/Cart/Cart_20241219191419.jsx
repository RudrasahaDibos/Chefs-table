import PropTypes from "prop-types";

const Cart = ({item,idx,handlePreparing}) => {
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
        <button  onClick={()=>handlePreparing(item)} className="btn bg-[#0BE58A] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">Preparing</button>
      </tr>
     
        
        </tbody>
    );
};

Cart.propTypes ={
    item:PropTypes.object.isRequired,
    idx:PropTypes.object.isRequired,
    handlePreparing:PropTypes.
}

export default Cart;