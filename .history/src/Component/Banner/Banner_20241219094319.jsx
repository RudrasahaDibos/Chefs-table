import img from '../Banner/Image/food_web_banner_36.jpg'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="hero ">
     <img src={img} alt="" className='h-96 w-full roun' />
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;