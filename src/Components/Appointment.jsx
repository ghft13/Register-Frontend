import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "./Backserver";
import Card from "./Card";

const Appointment = () => {
  const [selectedservice, setselectedservice] = useState([]);
  const [flashmessage, setflashmessage] = useState({ type: "", message: "" });
  const [val, setval] = useState("");

  function getval(e) {
    const lowercasevalue = e.target.value.toLowerCase();
    setval(lowercasevalue);
  }

  function addservice(service, setbutton, setIsDisabled) {
    // setIsDisabled(true);
    // Add service and update button state
    setselectedservice((prevservice) => [...prevservice, service]);
    setbutton(true);
  }

  const rendercards = () => {
    const service = [
      {
        id: 1,
        imageUrl: "appointone.webp",
        title: "Deep Cleansing Facial",
        price: "800",
        duration: "50min",
      },
      {
        id: 2,
        imageUrl: "appointmenttwo.webp",
        title: "Massage Therapy",
        price: "1200",
        duration: "60min",
      },
      {
        id: 3,
        imageUrl: "laser_optimized_.jpg",
        title: "Laser Treatments",
        price: "900",
        duration: "45min",
      },
      {
        id: 4,
        imageUrl: "appointmentthree_optimized_.jpeg",
        title: "Manicures",
        price: "1500",
        duration: "70min",
      },
      {
        id: 5,
        imageUrl: "appointmentfourjpeg_optimized_.jpeg",
        title: "Bridal Makeup",
        price: "850",
        duration: "40min",
      },
      {
        id: 6,
        imageUrl: "appointmentfive_optimized_.jpeg",
        title: "Hair Style",
        price: "1300",
        duration: "60min",
      },
      {
        id: 7,
        imageUrl: "appointmentsix_optimized_.jpeg",
        title: "Eyebrow Shaping",
        price: "1000",
        duration: "55min",
      },
      {
        id: 8,
        imageUrl: "appointmentsevenjpeg_optimized_.jpeg",
        title: "Hair Coloring",
        price: "1400",
        duration: "65min",
      },
    ];

    const filterservice = val
      ? service.filter((s) => s.title.toLowerCase().includes(val))
      : service;

    console.log(filterservice);

    return filterservice.map((service) => (
      <Card key={service.id} service={service} addservice={addservice}></Card>
    ));
  };

  const BookAppointment = async () => {
    if (selectedservice.length === 0) {
      setflashmessage({
        type: "error",
        message:
          "At least one service should be selected to book and appointment",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${baseurl}/api/auth/book-appointment`,
        { service: selectedservice },
        { withCredentials: true }
      );

      setflashmessage({
        type: response.data.type,
        message: response.data.message,
      });
      setselectedservice([]);
    } catch (err) {
      console.log("Error Booking appointment", err);
      setflashmessage({
        type: "error",
        message: "Error booking appointment. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (flashmessage.message) {
      const timer = setTimeout(() => {
        setflashmessage({ type: "", message: "" });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [flashmessage]);

  return (
    <div className=" w-screen b services">
      <h1 className="text-center pt-10 text-4xl text-white gupter-regular">
        Choose Your Services
      </h1>

      <div className=" w-full h-10 mt-10 flex justify-center items-center">
        <input
          type="sercch"
          id="search"
          className="h-10 w-64 text-center rounded-lg border-none outline-none"
          placeholder="Search Service Here "
          onChange={getval}
        ></input>
      </div>
      <div className="p-10 flex gap-10 pin_container flex-wrap">
        {rendercards()}
      </div>

      <div className="flex justify-center p-10">
        <button
          onClick={BookAppointment}
          className=" gupter-regular px-4 py-2 text-lg font-medium text-[#ffffff80] bg-transparent border border-[#ffffff80] rounded-lg shadow-none transition duration-500 ease-in-out hover:text-white hover:bg-[#008cff] hover:border-[#008cff] hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:text-white focus:bg-[#008cff] focus:border-[#008cff] focus:shadow-[0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff] select-none"
        >
          Book Now
        </button>
      </div>

      {flashmessage.message && (
        <div
          className={`relative bottom-40 text-center p-4 rounded ${
            flashmessage.type === "error" ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          {flashmessage.message}
        </div>
      )}
    </div>
  );
};

export default Appointment;
