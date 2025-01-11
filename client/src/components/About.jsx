import presentationImg from "../assets/presentation.svg";
import designImg from "../assets/design.svg";
import videoImg from "../assets/video.svg";

function About() {
  return (
    <>
      <div className="flex flex-col gap-6 px-4 lg:px-16 items-center justify-center text-center pt-24" id="about">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-7xl text-[#fb8500]">
            About <span className="text-sky-500">Me</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white text-opacity-50">
            I can help you a lot fo your Presentation with a very good designs
            and with videos if you want for get better mark
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={presentationImg} alt="" />
            <p className="text-2xl text-white font-medium">
              Beautiful <span className="text-[#fb8500]">Presentation</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={designImg} alt="" />
            <p className="text-2xl text-white font-medium">
              Attractive <span className="text-sky-500">Designes</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={videoImg} alt="" />
            <p className="text-2xl text-white font-medium">
              Explaning <span className="text-sky-500">Video</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
