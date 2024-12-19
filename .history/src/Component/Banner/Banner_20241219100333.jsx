import img from '../Banner/Image/Rectangle 12.png'

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="hero ">
     <img src={img} alt="" className='h-4/5 w-full rounded-3xl brightness-50' />
  <div className="hero-content text-center w-3/5 ">
    <div className="">
      <h1 className="text-5xl font-bold text-white ">Discover an exceptional cooking class tailored for you!</h1>
      <p className="py-6 text-white">
      This site is dedicated to my recipes and videos of me
making these recipes.
Thank you for visiting and I hope you enjoy my recipes.
      </p>
     <div className='flex gap-4 justify-center items-center'>
     <button className="btn bg-[#0BE58A] rounded-full border-none">Explore Now</button>
      
      <button className=" btn  border-2 p-2 rounded-full bg-none text-white">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;