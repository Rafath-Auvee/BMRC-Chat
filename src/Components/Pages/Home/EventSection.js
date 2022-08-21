import React from "react";

const EventSection = () => {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 "
        id="blog-posts"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="xl:flex">
            <div>
              <h3 className="leading-none font-black text-3xl">
                Popular Posts
              </h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                  <div className="transition-all duration-300 cursor-pointer w-full text-black  shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg"
                      srcset=""
                    />
                    <div className="p-6">
                      <div className="text-lg font-bold">
                        Tips for creating an amazing design system
                      </div>
                      <div className="mt-2 text-black text-sm">
                        Learn how to create a new design system that is
                        beautiful and efficient for creating your UI components.
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://timerse.com"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                  <div className="transition-all duration-300 cursor-pointer text-black  w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg"
                      srcset=""
                    />

                    <div className="p-6">
                      <div className="text-lg font-bold">
                        Using a drawing tablet to create beautiful icons
                      </div>
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
              <h3 className="leading-none font-black text-3xl">Recent Posts</h3>
              <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col text-black ">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8">
                  <div
                    className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                          bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                      srcset=""
                    />
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold">
                        How to work effectively with freelancers
                      </div>
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
                      src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      alt=""
                      className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                      srcset=""
                    />
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold">
                        How to create smooth React Native animations
                      </div>
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
