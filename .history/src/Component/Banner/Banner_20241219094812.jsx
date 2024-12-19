import img from '../Banner/Image/Rectangle 12.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="hero ">
     <img src={img} alt="" className='h-4/5 w-full rounded-3xl' />
  <div className="hero-content ">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="py-6">
      Discover an exceptional cooking class tailored for you!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;