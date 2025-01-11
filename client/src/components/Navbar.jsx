import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className="flex items-center justify-between py-4 px-4 lg:px-16 rounded-full border-2 border-[#fb8500] my-4 mx-4 lg:mx-10 fixed right-0 left-0 z-50">
        <div>
          <h1 className="text-2xl font-semibold text-[#fb8500]">
            BAHA <span className="text-sky-500">EDDINE</span>
          </h1>
        </div>
        <div>
          <ul
            className={`${
              open ? "max-lg:absolute" : "max-lg:hidden"
            } flex items-center gap-10 max-lg:flex-col max-lg:bg-[#fb8500] max-lg:top-20 max-lg:right-0 max-lg:left-[50%] max-lg:py-10 max-lg:rounded-3xl`}
          >
            <a href="#home">
              <li className="text-white text-opacity-70 cursor-pointer hover:text-opacity-100 duration-200">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="text-white text-opacity-70 cursor-pointer hover:text-opacity-100 duration-200">
                About
              </li>
            </a>
            <a href="#works">
              <li className="text-white text-opacity-70 cursor-pointer hover:text-opacity-100 duration-200">
                Works
              </li>
            </a>
            <a href="#contact">
              <li className="text-white text-opacity-70 cursor-pointer hover:text-opacity-100 duration-200">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div
          className="lg:hidden text-4xl text-[#fb8500]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RiMenu3Line />
        </div>
      </div>
    </>
  );
}

export default Navbar;
