import React from "react";

const EventSection = () => {
  return (
    <div>
      <div className="py-[5%]" id="blog-posts">
        <div className="max-w-screen-xl mx-auto">
          <div className="xl:flex">
            <div>
              <h3 className="leading-none font-black text-3xl">Projects</h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                >
                  <div className="transition-all duration-300 cursor-pointer w-full text-black  shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <img
                      src="https://content.instructables.com/ORIG/F9F/XPL3/I9SN0C1Z/F9FXPL3I9SN0C1Z.jpg?auto=webp&crop=1.2%3A1&frame=1&width=420"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg"
                      srcset=""
                    />
                    <div className="p-6">
                      <div className="text-lg font-bold">Handmade Drone</div>
                      <div className="mt-2 text-black text-sm">
                        Learn how to create a new design system that is
                        beautiful and efficient for creating your UI components.
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://timerse.com"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                >
                  <div className="transition-all duration-300 cursor-pointer text-black  w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <img
                      src="https://dfimg.dfrobot.com/nobody/makelog/d5ff3a892b742b4d03edd6efa557f30a_448x324.PNG"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg"
                      srcset=""
                    />

                    <div className="p-6">
                      <div className="text-lg font-bold">Line Follower</div>
                      <div className="mt-2 text-black text-sm">
                        Good Icons are hard to come by. This article guides you
                        on how to create beautiful sketched icons using a
                        drawing pad.
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 xl:mt-0 xl:ml-8">
              <h3 className="leading-none font-black text-3xl">
                Upcoming Events
              </h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col text-black ">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8"
                >
                  <div
                    className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                          bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563456021008-5cd6ac7c005d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                      srcset=""
                    />
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold">Mecha Fest</div>
                      <div className="mt-2 text-black text-sm xl:hidden">
                        Hiring a freelancer for your new project can be
                        challenging if you've never done before. Learn some tips
                        that will allow you to have a better experience working
                        with freelancers
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8"
                >
                  <div
                    className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
              bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8 text-black"
                  >
                    <img
                      src="https://circuitdigest.com/sites/default/files/projectimage_mic/Line-Follower-Robot-Using-MSP430-LaunchPad.jpg"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                      srcset=""
                    />
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold">Robotics Contest</div>
                      <div className="mt-2 text-black text-sm xl:hidden">
                        Animations play a vital role in user experience. This
                        article describes how you can create butter smooth 60
                        FPS animations easily.
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
