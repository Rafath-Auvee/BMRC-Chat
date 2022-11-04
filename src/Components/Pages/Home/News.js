import React from "react";

const News = () => {
  const news = [
    {
      image: "https://placeimg.com/400/400/arch",
      title: "New album is released!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repudiandae?",
    },
    {
      image: "https://placeimg.com/400/400/arch",
      title: "New album is released!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repudiandae?",
    },
    {
      image: "https://placeimg.com/400/400/arch",
      title: "New album is released!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repudiandae?",
    },
    {
      image: "https://placeimg.com/400/400/arch",
      title: "New album is released!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repudiandae?",
    },
  ];
  return (
    <div className=" m-[5%]">
      <div className="flex gap-x-[5%]">
        <h1 className="mb-[2%] text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="ml-1 block text-indigo-600 xl:inline">News</span>
        </h1>
        <button className="link link-primary">Show All</button>
      </div>
      <div className="grid grid-cols-4 gap-[3%]">
        {news.map((n, index) => (
          <div
            className="flex flex-col bg-base-100 shadow-xl p-[10%] rounded-xl"
            key={index}
          >
            <figure>
              <img src={n.image} className="w-[50%]" alt="Album" />
            </figure>
            <div className="">
              <h2 className="text-sm font-bold">{n.title}</h2>
              <p className="text-xs">{n.description}</p>
              <div className="">
                <button className="link link-primary">More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
