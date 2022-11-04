import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="px-2 py-[5%]  md:px-0 mx-auto">
        <div className="mx-auto px-8 xl:px-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">About</span>
                  <span className="ml-1 block text-indigo-600 xl:inline">
                    Us
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  BAUST Mechatronics and Robotics Club (BMRC) was formed to
                  popularise and promote awareness of Mechatronics Engineering
                  among students and companies.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 my-auto">
              <div className="w-full h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="imag"
                  className="w-[50%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
