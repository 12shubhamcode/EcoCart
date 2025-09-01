const Button = ({ content }) => {
  return (
    <button className="bg-gradient-to-b from-lime-400 to-lime-700 text-white px-8 py-3 md:text-xl text-md rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      {content}
    </button>
  );
};

export default Button;
