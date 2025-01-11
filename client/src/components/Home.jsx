import wordIcon from "../assets/word.svg";
import excelIcon from "../assets/excel.svg";
import powerpointIcon from "../assets/powerpoint.svg";
import photoshopcon from "../assets/photoshop.svg";
import illustratorIcon from "../assets/illustrator.svg";
import baha from "../assets/baha.jpg";

function Home() {
  return (
    <>
      <div className="pt-32 lg:pt-44 flex max-lg:flex-col max-lg:text-center max-lg:gap-10 items-center lg:justify-between px-4 lg:px-16" id="home">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-7xl">
              Leulmi <span className="text-[#fb8500]">BAHA</span>{" "}
              <span className="text-sky-500">EDDINE</span>
            </h1>
            <p className="text-xl lg:text-3xl text-white text-opacity-50">Presentation Specialiste</p>
            <p className="text-xl lg:text-3xl text-white text-opacity-50">Working with :</p>
            <div></div>
          </div>
          <div className="flex items-center max-lg:justify-center gap-2 lg:gap-10">
            <img src={illustratorIcon} alt="" className="lg:w-[80px] w-[40px]" />
            <img src={photoshopcon} alt="" className="lg:w-[80px] w-[40px]" />
            <img src={powerpointIcon} alt="" className="lg:w-[80px] w-[40px]" />
            <img src={excelIcon} alt="" className="lg:w-[80px] w-[40px]" />
            <img src={wordIcon} alt="" className="lg:w-[80px] w-[40px]" />
          </div>
        </div>
        <div>
          <img src={baha} alt="" className="rounded-full w-[300px] lg:w-[500px]" />
        </div>
      </div>
    </>
  );
}

export default Home;
