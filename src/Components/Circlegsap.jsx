import React, { useEffect, useState } from "react";
import gsap from "gsap";
const Circlegsap = () => {
  const [position, setposition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      setposition({ x: e.clientX, y: e.clientY });
    });
  });

  const circleSize =150;
  gsap.to(".circle", {
    x: position.x - circleSize/2,
    y: position.y -circleSize/2 ,
    ease: "power2.out",
    duration: 0.3,
  });



  
  return (
    <>
      <i className="bg-red-700 w-28 h-28 rounded-full opacity-80 absolute  circle -z-10 "></i>
    </>
  );
};

export default Circlegsap;
