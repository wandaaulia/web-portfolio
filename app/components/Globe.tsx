import dynamic from "next/dynamic";

import animationData from "../../public/lottie/RedNetworkGlobe.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Globe() {
  return (
    <div className="w-full">
      <Lottie
        animationData={animationData}
        loop
        className="w-full h-auto bg-transparent"
      />
    </div>
  );
}
