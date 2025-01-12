import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div
        className="flex flex-col gap-10 px-4 lg:px-16 items-center justify-center text-center py-24 mt-32"
        id="contact"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-7xl text-[#fb8500]">
            Contact <span className="text-sky-500">Me</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white text-opacity-50">
            Here you can contact me and get in touche to help you for your
            presentation
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10">
          <a
            href={"https://mail.google.com/mail/u/0/#inbox?compose=new"}
            target="_blank"
          >
            <div className="flex items-center gap-4 hover:scale-110 duration-200">
              <IoMail className="text-5xl text-[#fb8500]" />
              <p className="text-xl font-medium">abdoubahaa00@yahoo.com</p>
            </div>
          </a>
          <div className="flex items-center gap-4 cursor-pointer hover:scale-110 duration-200">
            <FaPhoneAlt className="text-5xl text-[#fb8500]" />
            <p className="text-xl font-medium">0549817498</p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100038103678560"
            target="_blank"
          >
            <div className="flex items-center gap-4 hover:scale-110 duration-200">
              <FaFacebook className="text-5xl text-[#fb8500]" />
              <p className="text-xl font-medium">Abdou Bahae</p>
            </div>
          </a>
          <a href="https://www.instagram.com/abd.oubahaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <div className="flex items-center gap-4 hover:scale-110 duration-200">
              <AiFillInstagram className="text-5xl text-[#fb8500]" />
              <p className="text-xl font-medium">@abd.oubaha</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
