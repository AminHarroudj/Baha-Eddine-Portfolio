import aiVideo from "../assets/ai.mp4";
import energyVideo from "../assets/energy.mp4";
import companyVideo from "../assets/company.mp4";
import aiposter from "../assets/aiposter.png";
import energyposter from "../assets/energyposter.png";
import companyposter from "../assets/companyposter.png";

function Works() {
  return (
    <>
      <div
        className="flex flex-col gap-10 px-4 lg:px-16 items-center justify-center text-center pt-24 mt-32"
        id="works"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-7xl text-[#fb8500]">
            My <span className="text-sky-500">Works</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white text-opacity-50">
            Here i will share with you my works and you can see it and take
            ideas
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium text-[#fb8500]">
              1- Artificial <span className="text-sky-500">Intelligence</span>
            </h1>
            <p className="text-xl text-white">
              استكشاف شامل لمجال الذكاء الاصطناعي، يسلط الضوء على المفاهيم
              الأساسية، التطبيقات المبتكرة، وتأثيره المتزايد على مستقبل الأعمال
              والحياة اليومية. <br />A comprehensive exploration of the field of
              artificial intelligence, highlighting the basic concepts,
              innovative applications, and its growing impact on the future of
              business and daily life.
            </p>
            <video
              src={aiVideo}
              controls
              poster={aiposter}
              className="rounded-3xl"
            ></video>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium text-[#fb8500]">
              2- Renewable <span className="text-sky-500">Energy</span>
            </h1>
            <p className="text-xl text-white">
              عرض متكامل حول أهمية الطاقات المتجددة، يقدم لمحة عن تقنياتها
              الحديثة، فوائدها البيئية، ودورها في تحقيق الاستدامة المستقبلية.{" "}
              <br />A comprehensive presentation on the importance of renewable
              energy, providing an overview of its modern technologies,
              environmental benefits, and its role in achieving future
              sustainability.
            </p>
            <video
              src={energyVideo}
              controls
              poster={energyposter}
              className="rounded-3xl"
            ></video>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium text-[#fb8500]">
              3- Company <span className="text-sky-500">Presentation</span>
            </h1>
            <p className="text-xl text-white">
              A modern and innovative design that reflects the corporate
              identity in an attractive way, focusing on highlighting the
              strengths, core values, and services in a way that leaves a
              distinctive impression on the audience.
            </p>
            <video
              src={companyVideo}
              controls
              poster={companyposter}
              className="rounded-3xl"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
