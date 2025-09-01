import logo from "../assets/logoCart.Png";
import { IoHeart } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const toggle = () => {
    setshowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setisScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0  z-50 ${
        isScroll ? "shadow-xl" : null
      }`}
    >
      <nav className="flex justify-between max-w-[1200px] mx-auto md:h-[14vh] h-[12vh] items-center p-8 ">
        <a href="#">
          <img src={logo} alt="" className="h-18" />
        </a>
        <ul className="md:flex gap-x-15 hidden">
          <li>
            <a href="" className="font-bold tracking-wider text-lime-800">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-x-5">
          <div className="md:flex p-1 border-2 border-lime-700 rounded-full hidden ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="focus:outline-none px-3 "
            />
            <button className="w-10 h-10 bg-gradient-to-b from-lime-300 to-lime-700 text-white text-2xl flex justify-center items-center rounded-full cursor-pointer">
              <IoSearchSharp />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <IoBagHandle />
          </a>
          <a
            href="#"
            className="text-zinc-800 text-2xl md:hidden"
            onClick={toggle}
          >
            {showMenu ? <RiMenuUnfold3Line /> : <GiHamburgerMenu />}
          </a>
        </div>
        {/* moble menu */}
        <ul
          className={` bg-lime-500/20 flex flex-col gap-y-14 gap-x-15 md:hidden transition-all duration-500 absolute top-25 -left-full transform -translate-x-1/2 ${
            showMenu ? "left-1/2" : " "
          } items-center backdrop-blur-xl rounded-xl p-10`}
        >
          <li>
            <a href="" className="font-bold tracking-wider text-lime-800">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-bold tracking-wider text-zinc-800 hover:text-lime-800"
            >
              Contact us
            </a>
          </li>

          <li className="flex p-1 border-2 border-lime-700 rounded-full md:hidden ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="focus:outline-none px-3 "
            />
            <button className="w-10 h-10 bg-gradient-to-b from-lime-300 to-lime-700 text-white text-2xl flex justify-center items-center rounded-full cursor-pointer">
              <IoSearchSharp />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
