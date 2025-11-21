import Link from "next/link";
import { biodata, contact } from "../data/home";

export default function Biodata() {
  return (
    <>
      <h1 className="mt-5 md:mt-6 md:mx-0 mb-3 text-4xl md:text-5xl font-semibold ">
        {biodata.name}
      </h1>

      <h3 className="text-center mb-2 text-gray-300 p-0 m-0 text-lg md:text-2xl lg:text-xl font-light">
        {biodata.title}
      </h3>

      <p className="text-center mb-2 text-gray-300 text-sm italic">
        {biodata.quote}
      </p>

      <p className="mb-3  text-gray-400 p-0 m-0 text-lg md:text-2xl font-light lg:text-lg">
        {biodata.location}
      </p>

      <div className="mx-auto  text-gray-400 flex flex-row justify-center items-center gap-3 md:gap-4 ">
        {contact.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex flex-row items-center gap-2"
          >
            {item.icon}

            <span> | </span>
          </Link>
        ))}
      </div>
    </>
  );
}
