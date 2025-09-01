import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="gap-y-12 max-w-[1200px] mx-auto px-8 flex flex-wrap">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            Eco<span className="text-lime-600 uppercase">c</span>art
          </a>

          <p className="text-zinc-600 mt-4 max-w-[350px]">
            EcoCart is your trusted online grocery partner, delivering fresh,
            organic, and safe products with a commitment to quality and
            sustainability.
          </p>

          <p className="text-zinc-800 mt-7 ">
            2025 © : EcoCart All Right Reserved
          </p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-2xl text-zinc-800 font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-lime-700">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-lime-700">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-2xl text-zinc-800 font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800  hover:text-lime-700">
              Support center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-lime-700">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-lime-700">
              Contact us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-2xl text-zinc-800 font-bold">Stay Connected</h5>
          <p className="text-zinc-600 mt-4">
            Questions or Feedback? <br /> we'd hear from you
          </p>

          <div className="mt-7 p-r rouned-xl flex">
            <input
              className="pl-4 flex-1 h-[7vh] bg-white focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              autoComplete="off"
            />

            <button className="bg-gradient-to-b from-lime-400 to-lime-700 p-2 rounded-lg text-2xl text-white cursor-pointer">
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
