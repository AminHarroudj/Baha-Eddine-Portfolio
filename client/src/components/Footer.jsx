import { FaRegCopyright } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#081529] flex flex-col gap-2 justify-center items-center text-center text-lg p-4">
        <p className="flex max-lg:flex-col items-center gap-2">
          <FaRegCopyright className="text-xl text-[#fb8500]" /> Web Developer :{" "}
          <span className="text-sky-500 font-medium">
            HARROUDJ Mohammed El Amin
          </span>
        </p>
        <p>For Work You Can Get In Touche With Me Here</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center">
            <IoMail className="text-3xl text-[#fb8500]" />
            <p>amin.harroudj.2002@outlook.com</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaPhoneAlt className="text-3xl text-[#fb8500]" />
            <p>0556648005</p>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/harroudj-mohammed-el-amin-655315252/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl text-[#fb8500] hover:scale-110 duration-200" />
            </a>
            <a href="https://github.com/AminHarroudj" target="_blank">
              <FaGithub className="text-3xl text-[#fb8500] hover:scale-110 duration-200" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
