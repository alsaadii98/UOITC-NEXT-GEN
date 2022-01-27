import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-around lg:flex-row flex-col-reverse items-center lg:space-x-20 m-10 md:m-20 lg:my-20 lg:mx-10 ">
      {/* Text & BTN */}
      <div className="lg:w-1/2 md:space-y-3 space-y-2 ">
        <h1
          className={
            "text-left block font-semibold leading-normal text-3xl xl:text-4xl text-red-800"
          }
        >
          Qualification and Employment Organizes a Photogram Workshop
        </h1>
        <p className={"block lg:w-5/6 w-full text-main text-sm text-left"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </p>
        <button
          className={
            "bg-red-800 text-sm md:text-base font-bold py-4 px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
          }
        >
          Read More
        </button>
      </div>
      {/* The Image */}
      <div className="relative lg:w-1/2 mb-4 md:mb-10 lg:mb-0 overflow-hidden rounded-bl-[3rem] md:rounded-bl-[10rem] 2xl:rounded-bl-[15rem]">
        {/* IMG */}
        <div className="max-w-[100rem] max-h-fit bg-contain bg-center">
          <img src={require("../../assets/img/Img1.jpg")} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
