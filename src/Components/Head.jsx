import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Head = () => {
  useEffect(() => {
    // Create GSAP timeline
    let tl = gsap.timeline({ defaults: { ease: "linear" } });

    // Animate header text
    tl.to(".nav h2", {
      opacity: 1,
      ease: "power3.out",
      delay:5
    });

    // Animate nav links
    tl.to(
      ".nav .link",
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Reduced stagger time for smoother transitions
      },
    
    );

    // Animate sign icons
    tl.to(
      ".sign",
      {
        opacity: 1,
        duration: 1,
      },
     
    );

    // Animate first line text
    tl.to(".firstline", {
      scale: 1,
      stagger: 0.5, // Added stagger for smoother animation
      
    });

    tl.to(
      ".lipstick",
      {
        opacity:1,
        duration: 1,
        stagger: 1,
        ease:' ease-in' // Reduced stagger time for smoother transitions
      },
   
    );

    // Animate home cards
    tl.to(
      ".home-card",
      {
        opacity:1,
        duration: 1,
        stagger: 1,
        ease:'linear' // Reduced stagger time for smoother transitions
      },
   
    );
  }, []);
  return (
    <>
      <div className="nav flex  items-center  justify-around p-0 text-center md:flex-row  w-full overflow-y-hidden">
        <h2 className="pl-5  font-bold  tracking-wide opacity-0 text-xl pt-2 mt-4 ">
          <span className="text-xl font ">
            BEAUT<span className="text-yellow-600">y.</span>
          </span>
        </h2>
        <div className="flex gap-8 pt-5 md:mt-0 font">
          <Link
            to="/Signup"
            className="text-black font-semibold tracking-wide sign1 link text-lg opacity-0 p-2 rounded-full border-2 border-bord-500"
          >
            Signup
          </Link>
          <Link
            to="/Login"
            className="text-black font-semibold sign1 tracking-wide link text-lg opacity-0 p-2 rounded-full border-2 border-bord-500"
          >
            Login
          </Link>

         

          <Link
            to="/Services"
            className="text-black font-semibold sign1 tracking-wide link text-lg opacity-0 p-2 rounded-full border-2 border-bord-500"
          >
            Services
          </Link>
        </div>
        <div className="flex  gap-2 items-center pt-5">
          <Link
            to="/"
            className="text-black font-semibold sign1 tracking-wide link text-lg opacity-0 p-2 rounded-full border-2 border-bord-500"
          >
            <FaSearch />
          </Link>
          <Link
            to="/"
            className="text-black bg-yellow-400 font-semibold sign1 tracking-wide link text-lg opacity-0 p-2 rounded-full border-2 border-bord-500"
          >
            <FaUser />
          </Link>
        </div>
      </div>

      <div className="flex justify-center pt-20 w-full h-full">
        <div className="">
          <div className="flex">
            <img src="sun2.jpg" className="h-28 w-28" alt="sun"></img>
            <h1 className="text-8xl font2 font-bold backimage gupter-regular firstline">Reserve Your Spot</h1>
            <img src="sunedit.jpg" alt="sunedit" className="h-28 w-28"></img>
          </div>

          <div className="flex justify-center items-center gap-2">
            <img src="sunedit.jpg" className="h-28 w-28" alt="sunedit"></img>
            <h1 className="text-9xl tracking-wide font-bold font2 backimage gupter-regular firstline ">Book an  </h1>
            <img src="edit.jpg" className="h-28 w-28 img1 lipstick opacity-0" alt="makeup"></img>
            <h1 className="text-7xl tracking-wide font-bold font2 backimage gupter-regular firstline">Appointment</h1>
          </div>

          <div className="flex pt-10 gap-10">

            
            <div className="box h-72 w-80 rounded-md flex justify-center items-center home-card ">
              <div className="inner h-60 w-60 text-center flex flex-col  justify-center">
                <h1 className="text-2xl gupter-regular"> "Salon Elegance"</h1>
                <p className="text-gray-900  libre-baskerville-regular">
                Experience luxury, relax, and rejuvenate with us.
                </p>

              </div>
            </div>
            <div className="box1 h-72 w-80 rounded-md flex justify-center items-center home-card">
              <div className="inner h-60 w-60 text-center flex flex-col  justify-center">
                <h1 className="text-2xl gupter-regular">"Beauty Bliss"</h1>
                <p className="text-gray-900 libre-baskerville-regular">
                Indulge in top-notch treatments and services
                </p>
              </div>
            </div>
            <div className="box2 h-72 w-80 rounded-md flex justify-center items-center home-card ">
              <div className="inner h-60 w-60 text-center flex flex-col  justify-center">
                <h1 className="text-2xl gupter-regular">"Chic Style"</h1>
                <p className="text-gray-900  libre-baskerville-regular">
                Transform your look with expert care.
                </p>

              </div>
            </div>
            <div className="box3 h-72 w-80 rounded-md flex justify-center items-center home-card">
              <div className="inner h-60 w-60 text-center flex flex-col  justify-center">
                <h1 className="text-2xl gupter-regular">"Radiant Glow"</h1>
                <p className="text-gray-900  libre-baskerville-regular">
                Achieve flawless beauty in a serene setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
