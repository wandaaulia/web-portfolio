"use client";

import "./index.css";
import Globe from "./components/Globe";
import Biodata from "./components/Biodata";

export default function Home() {

  return (
    <section className=" mt-10 text-center mx-auto md:gap-10 justify-center items-center text-white flex flex-col lg:flex-row lg:pb-5">
      <div className="justify-center md:gap-1 gap-0 flex flex-col mx-auto flex-wrap w-full items-center md:order-1 order-2 md:text-left">
        <div className="h-[220px] md:h-[260px] lg:h-[300px] xl:h-[330px] w-[70%] md:w-[40%] lg:w-[35%]">
          <Globe />
        </div>
        <Biodata />

      </div>
    </section>
  );
}
