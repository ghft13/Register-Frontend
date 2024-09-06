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
      delay: 5,
    });

    // Animate nav links
    tl.to(".nav .link", {
      opacity: 1,
      duration: 1,
      stagger: 0.2, // Reduced stagger time for smoother transitions
    });

    // Animate sign icons
    tl.to(".sign", {
      opacity: 1,
      duration: 1,
    });

    // Animate first line text
    tl.to(".firstline", {
      scale: 1,
      stagger: 0.5, // Added stagger for smoother animation
    });

    tl.to(".lipstick", {
      opacity: 1,
      duration: 1,
      stagger: 1,
      ease: " ease-in", // Reduced stagger time for smoother transitions
    });

    // Animate home cards
    tl.to(".home-card", {
      opacity: 1,
      duration: 1,
      stagger: 1,
      ease: "linear", // Reduced stagger time for smoother transitions
    });
  }, []);
  return (
    <>
      <div className="nav flex  items-center  justify-around  p-0 text-center md:flex-row  w-full overflow-y-hidden">
        <h2 className="xl:pl-5  font-bold  tracking-wide opacity-0 xl:text-xl xl:pt-2 xl:mt-4 pt-5">
          <span className="xl:text-xl font  text-sm">
            BEAUT<span className="text-yellow-600">y.</span>
          </span>
        </h2>
        <div className="flex gap-4 pt-5 md:mt-0 font justify-center items-center ">
          <Link
            to="/Signup"
            className="text-black font-semibold tracking-wide sign1 link xl:text-lg text-sm opacity-0 xl:p-2  rounded-full border-2 border-bord-500 p-1"
          >
            Signup
          </Link>
          <Link
            to="/Login"
            className="text-black font-semibold sign1 tracking-wide link xl:text-lg text-sm opacity-0 xl:p-2 rounded-full border-2 border-bord-500 p-1"
          >
            Login
          </Link>
          <Link
            to="/Services"
            className="text-black font-semibold sign1 tracking-wide link xl:text-lg text-sm opacity-0 xl:p-2 rounded-full border-2 border-bord-500 p-1 "
          >
            Services
          </Link>
        </div>
        <div className="xl:flex  xl:gap-2 xl:items-center xl:pt-5 hidden">
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

      <div className="flex justify-center pt-20 w-full  ">
        <div className="">
          <div className="flex">
            <img
              src="sun2.jpg"
              className="xl:h-28 xl:w-28 w-20 h-20 hidden"
              alt="sun"
            ></img>
            <h1 className="text-3xl  xl:text-8xl font2 font-bold backimage gupter-regular firstline pl-12">
              Reserve Your Spot
            </h1>
            <img
              src="sunedit.jpg"
              alt="sunedit"
              className="xl:h-28 xl:w-28 h-20 w-20 hidden"
            ></img>
          </div>

          <div className="flex justify-center items-center gap-2">
            <img
              src="sunedit.jpg"
              className="xl:h-28 xl:w-28 h-20 w-20 hidden"
              alt="sunedit"
            ></img>
            <h1 className="text-3xl xl:text-9xl tracking-wide font-bold font2 backimage gupter-regular firstline ">
              Book an
            </h1>
            <img
              src="edit.jpg"
              className="xl:h-28 xl:w-28 h-20 w-20 img1 lipstick opacity-0 hidden"
              alt="makeup"
            ></img>
            <h1 className="text-3xl xl:text-7xl tracking-wide font-bold font2 backimage gupter-regular firstline">
              {/* Appointment */}
            </h1>
          </div>

          <div className="xl:flex xl:flex-row pt-10 gap-10   flex flex-col items-center pb-10 ">
            <div className="box h-72 w-80 rounded-md flex justify-center items-center home-card">
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
