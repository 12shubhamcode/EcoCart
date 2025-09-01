const Banner = ({ title, bgImage }) => {
  return (
    <div
      className="bg-cover bg-center h-[50vh] mt-25 flex justify-center items-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="md:text-5xl text-3xl text-zinc-800 bg-white md:p-5 p-3 rounded-xl font-bold z-10">
        {title}
      </h2>
      <div className="bg-black/15 absolute inset-0"> </div>
    </div>
  );
};

export default Banner;
