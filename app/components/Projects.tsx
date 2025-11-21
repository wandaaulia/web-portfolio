import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  return (
    <div className="mt-10 sm:px-6 lg:px-8">
      <ul className="w-fit mx-auto md:flex md:flex-row md:flex-wrap items-center justify-center md:items-start md:justify-start md:gap-4 lg:gap-6 pb-4 md:pb-10">
        {projects.map((item) => (
          <li
            key={item.id}
            className="mx-auto md:m-0 h-[370px] w-[300px] md:w-[45%] text-center mb-10 lg:w-[30%] bg-linear-65 from-white/2 to-white/6 p-4 rounded-3xl "
          >
            {item.img !== "" ? (
              <div className="flex flex-row  mb-4 w-full h-[90px] relative">
                <Image
                  src={item.img}
                  alt={item.img ? item.img : `portfolio-${item.id}`}
                  quality={100}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
              </div>
            ) : (
              <div className="bg-gray-100 flex flex-row  mb-4 w-full h-[90px] relative items-center justify-center">
                <span className="text-gray-500 font-semibold text-lg text-center">
                  {item.name}
                </span>
              </div>
            )}
            <h3 className="text-gray-200 font-bold text-left text-2xl mb-2">
              {item.name}
            </h3>
            <p className="text-gray-400 text-left leading-5 mb-3 text-base text-light">
              {item.desc}
            </p>
            {item.rule !== "" ? (
              <div className="h-10">
                <p className="text-gray-400 text-xs text-left text-light">
                  {item.rule}
                </p>
              </div>
            ) : (
              <div className="h-10" />
            )}
            <p className="text-white text-left text-base xl:text-sm">
              {item.tech}
            </p>
            {item.url !== "" ? (
              <div className="h-10">
                <a
                  className="flex flex-row justify-end text-gray-400 text-2xl text-right text-light"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiGlobe />
                </a>
              </div>
            ) : (
              <div className="h-10" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
