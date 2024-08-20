import React, { useState } from "react";

const Card = ({ addservice, service }) => {
  const { imageUrl, title, price, duration,} = service;

  const [button, setbutton] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [flashMessage, setFlashMessage] = useState({ type: "", message: "" });

 

  
  const handleClick = () => {
    setIsDisabled(true);
    if (isDisabled) {
      console.log("if");
      setFlashMessage({ type: "error", message: "Already Booked" });
      setTimeout(() => setFlashMessage(""), 3000); // Hide after 3 seconds
    } else {
      addservice(service, setbutton, setIsDisabled);
      console.log("else run");
    }
  };

  return (
    <div className="w-80 h-96  rounded-xl card">
      <div className="h-72 w-full p-5">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="">
        <h1 className="text-xl font-semibold text-center title libre-baskerville-regular-italic">
          {title}
        </h1>
        <div className="flex items-center justify-between text-gray-700 p-4">
          <h2 className="text-lg font-medium txt gupter-regular">{price}</h2>
          <button
            onClick={handleClick}
            btn={isDisabled}
            className="libre-baskerville-bold px-4 py-2 text-lg font-medium text-[#ffffff80] bg-transparent border border-[#ffffff80] rounded-lg shadow-none transition duration-500 ease-in-out hover:text-white hover:bg-[#008cff] hover:border-[#008cff] hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:text-white focus:bg-[#008cff] focus:border-[#008cff] focus:shadow-[0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff] select-none"
          >
            {button ? "Booked" : "Add"}
          </button>
          <h3 className="text-lg font-medium txt gupter-regular">{duration}</h3>
        </div>
      </div>
      {flashMessage.message && (
        <div
          className={`mt-2 p-2  text-center text-white ${
            flashMessage.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {flashMessage.message}
        </div>
      )}
    </div>
  );
};

export default Card;
