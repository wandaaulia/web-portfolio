import Contact from "../components/Contact";
import { aboutInfo, aboutPage, coreSkills, otherSkills } from "../data/about";

export default function About() {
  return (
    <div className=" mt-12 px-2 sm:px-6 lg:px-8 lg:flex flex-row lg:gap-10 justify-center">
      <div className="lg:w-[40%] lg:ml-20">
        <div className="mb-4">
          <h3 className="text-gray-200 font-semibold text-3xl mb-4 md:text-4xl">
            {aboutPage.title}
          </h3>
          <p className="text-gray-300 text-base font-light leading-relaxed">
            {aboutInfo.desc}
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-2">
            {aboutPage.headingAwards}
            <ul className="text-gray-300 space-y-1 text-base mt-2">
              {aboutInfo.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </h3>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-[30%]">
        <div className="mt-10 lg:mt-0">
          <h3 className="text-gray-200 font-medium text-xl mb-2 md:text-2xl lg:text-xl flex items-center">
            {aboutPage.headingTechnicalSkills}

          </h3>
          <ul>
            <li className="mb-5 md:mb-8">
              <h3 className="text-lg font-medium text-gray-300 mb-2">
                {aboutPage.subheadingCoreSkills}

              </h3>
              <div className="flex flex-row flex-wrap gap-2">
                {coreSkills.map((item, index) => (
                  <div
                    key={index}
                    className="m-0 flex bg-linear-65 from-white/2 flex-row gap-4 border border-gray-800 w-fit items-center rounded-lg px-3"
                  >
                    <p className="text-gray-400 text-base"> {item} </p>
                  </div>
                ))}
              </div>
            </li>
            <li className="mb-5 md:mb-8">
              <h3 className="text-lg  font-medium text-gray-300 mb-2">
                {aboutPage.subheadingTechnologies}

              </h3>

              <div className="flex flex-row flex-wrap gap-2">
                {otherSkills.map((item, index) => (
                  <div
                    key={index}
                    className="m-0 flex bg-linear-65 from-gray/2 flex-row gap-2 border border-gray-800 w-fit items-center rounded-lg px-3"
                  >
                    <p className="text-gray-400 font-medium text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <Contact />
      </div>
    </div>
  );
}
