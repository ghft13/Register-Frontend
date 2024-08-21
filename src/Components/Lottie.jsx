import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import Head from "../Components/Head";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/loading.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  useEffect(() => {
    gsap.to(".lottie-animation", {
      y: -950,
      delay: 3,
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="container lottie-animation min-w-full max-h-full relative bg-black inset-0  z-10 flex justify-center items-center overflow-y-hidden">
        {animationData && (
          <div className="lottiediv min-w-full  flex justify-center items-center">
            <Lottie animationData={animationData} loop={false} />
          </div>
        )}
      </div>
      <div className="z-0 absolute left-0 top-0 w-full  h-full bg-white xl:overflow-y-hidden">
        <Head />
      </div>
    </>
  );
};

export default LottieAnimation;
