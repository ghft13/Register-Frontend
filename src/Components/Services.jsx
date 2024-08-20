import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Circlegsap from "./Circlegsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiDoubleQuotesL } from "react-icons/ri";
import { baseurl } from "./Backserver";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    gsap.to(".maintxt", {
      scrollTrigger: {
        trigger: ".textdiv",
        // markers: true,
        start: "end 30%",
        end: "top -10%",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to(".img-sec", {
      scrollTrigger: {
        trigger: ".img-sec",
        // markers: true,
        start: "top top",
        scrub: true,
        pin: true,
        end: "+=500",
      },
    });

    const checkAuth = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/profile`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          console.log("User authenticated");
          setUser(response.data.user);
        } else {
          console.log("Unexpected response:", response);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("User not authenticated");

          navigate("/Login", {
            state: { flashMessage: "You Need to login First" },
          });

          console.error("Error checking auth:", error);
        }
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      <div className=" h-screen w-screen servicenav">
        <div className="w-screen h-20  flex justify-between p-5 z-30">
          {user ? (
            <div>
              <h1 className="text-3xl username">Welcome! {user}</h1>
            </div>
          ) : (
            <div className="">Loading...</div>
          )}
          <div className="flex gap-5 pr-4">
            <Link
              to="/logout"
              className="logout text-white h-10 flex justify-center items-center rounded-full p-3"
            >
              LogOut
            </Link>
            <Link
              to="/Appointment"
              className="bg-green-500 h-10 flex justify-center items-center rounded-full p-3 appoint-btn"
            >
              Book Appointment
            </Link>
          </div>
          <Circlegsap />
        </div>

        <div className="w-screen relative top-3  h-screen z-50 container-main">
          <h1 className="text-center text-6xl pt-10 text-white gupter-regular">
            Our Services
          </h1>
          <div className="container1 flex justify-center items-center gap-20 relative z-50 w-full h-4/5">
            <div className="s-box s-box1 w-64 h-60 ">
              <div className="h-full w-full flex justify-center items-center flex-col gap-2 inner1">
                <h1 className="text-2xl libre-baskerville-regular text-center">Manicure & Pedicure</h1>
                <p className="text-center text-lg ">
                  Pamper your hands and feet with luxury treatments.
                </p>
                {/* <Link
                  to="/Appointment"
                  className="bg-black text-white rounded-lg p-2"
                >
                  Book Now
                </Link> */}
              </div>
            </div>
            <div className="s-box s-box2 w-64 h-60  flex justify-center items-center flex-col gap-2">
              <div className="h-full w-full flex justify-center items-center flex-col gap-2 inner1">
                <h1 className="text-2xl libre-baskerville-regular">Facial Treatments</h1>
                <p className="text-lg text-center ">
                  Rejuvenate and refresh your skin with our expert care.
                </p>
                {/* <Link
                  to="/Appointment"
                  className="bg-black text-white  rounded-lg p-2"
                >
                  Book Now
                </Link> */}
              </div>
            </div>
            <div className="s-box s-box3 w-64 h-60  flex justify-center items-center flex-col gap-2">
              <div className="h-full w-full flex justify-center items-center flex-col gap-2 inner1">
                <h1 className="text-2xl libre-baskerville-regular">Hair Styling</h1>
                <p className="text-lg text-center">
                  Elegant styles for any occasion, tailored to you.
                </p>
                {/* <Link
                  to="/Appointment"
                  className="bg-black text-white rounded-lg p-2"
                >
                  Book Now
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen z-30">
          <div className="flex justify-center items-center h-full pt-20 pl-5 pr-5 hei text-center w-f textdiv">
            <h2 className="text-5xl leading-tight opacity-0 maintxt gupter-regular">
              Welcome to Appoint Here, where booking appointments is simple and
              seamless. Where beauty meets convenience. Explore our range of
              services, choose your favorite stylist, and book your appointment
              in just a few clicks. Indulge in the ultimate beauty experience.
              Book now and shine!
            </h2>
          </div>
        </div>

        <div className="h-full w-full client-sec flex justify-center items-center">
          <div className="h-4/5 w-4/5 bg-white rounded-lg p-5 ">
            <div className=" flex justify-center items-center flex-col">
              <span className="client-h"></span>
              <h1 className="text-center text-2xl font-bold libre-baskerville-regular ">
                What Clients Say
              </h1>
              <span className="client-h2"></span>
              <p className="text-center  w-1/2 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda repellendus veniam quae molestias perferendis earum id
                nostrum, cum distinctio accusantium.
              </p>
            </div>
           <div className="flex justify-center ite gap-20 pt-10">
           <div class="card1  w-72 h-auto p-4 rounded-lg shadow-lg text-white flex flex-col justify-center items-center">
              <img src="user1.jpg" className="w-32 h-32 rounded-full object-cover" alt="user"></img>
              <h1 class="text-xl font-semibold text-center libre-baskerville-bold ">Luna_Moonlight</h1>
              <h4 class="text-sm text-center text-gray-300 mb-2">
                Lorem, ipsum dolor.
              </h4>
              <span class="block text-center text-white-300 mb-2 text-4xl bg-yellow-300 rounded-full p-2"><RiDoubleQuotesL /></span>
              <p class="text-center text-sm libre-baskerville-regular-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                impedit odit aut laudantium, tempore ipsa.
              </p>
            </div>
            <div class="card1  w-72 h-auto p-4 rounded-lg shadow-lg text-white flex flex-col justify-center items-center">
              <img src="user2.jpg" className="w-32 h-32 rounded-full object-cover" alt="user2"></img>
              <h1 class="text-xl font-semibold text-center libre-baskerville-bold ">Aria_Skye</h1>
              <h4 class="text-sm text-center text-gray-300 mb-2">
                Lorem, ipsum dolor.
              </h4>
              <span class="block text-center text-white-300 mb-2 text-4xl bg-yellow-300 rounded-full p-2"><RiDoubleQuotesL /></span>
              <p class="text-center text-sm libre-baskerville-regular-italic ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                impedit odit aut laudantium, tempore ipsa.
              </p>
            </div>
            <div class="card1  w-72 h-auto p-4 rounded-lg shadow-lg text-white flex flex-col justify-center items-center">
              <img src="user3.jpg" className="w-32 h-32 rounded-full object-cover" alt="user3"></img>
              <h1 class="text-xl font-semibold text-center libre-baskerville-bold ">Bella_Rose</h1>
              <h4 class="text-sm text-center text-gray-300 mb-2">
                Lorem, ipsum dolor.
              </h4>
              <span class="block text-center text-white-300 mb-2 text-4xl bg-yellow-300 rounded-full p-2"><RiDoubleQuotesL /></span>
              <p class="text-center text-sm libre-baskerville-regular-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                impedit odit aut laudantium, tempore ipsa.
              </p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
