const Heading = ({ highlight, content }) => {
  return (
    <div className="mx-auto w-fit">
      <h2 className="md:text-5xl text-4xl font-bold text-zinc-800">
        <span className="text-lime-700"> {highlight} </span> {content}
      </h2>
      <div className="w-30 h-1 bg-lime-500 ml-auto md:mt-4 mt-3"></div>
    </div>
  );
};

export default Heading;
