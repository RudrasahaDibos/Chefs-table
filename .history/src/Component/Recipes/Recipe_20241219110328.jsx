
const Recipe = ({recipe}) => {
    console.log(recipe)
      const {recipe_name ,image_url,ingredients,preparing_time,short_description,
        calories}= recipe
    return (
        <div>
                  <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};


export default Recipe;