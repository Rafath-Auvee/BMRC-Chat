import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
const Mentors = () => {
  const mentors = [
    {
      name: "DR. IRFAN AHMED",
      department: "Department of Mechanical Engineering (ME)",
      designation: "Associate Professor & Head of the Dept",
      message:
        "Mechanical Engineering is one of the oldest and largest disciplines of study all over the world. ... ",
      image:
        "https://baust.edu.bd/me/wp-content/uploads/sites/19/2020/02/dr-ing-irfan-ahmed-234x300.jpg",
    },
    {
      name: "DR. IRFAN AHMED",
      department: "Department of Mechanical Engineering (ME)",
      designation: "Associate Professor & Head of the Dept",
      message:
        "Mechanical Engineering is one of the oldest and largest disciplines of study all over the world. ... ",
      image:
        "https://baust.edu.bd/me/wp-content/uploads/sites/19/2020/02/dr-ing-irfan-ahmed-234x300.jpg",
    },
    {
      name: "DR. IRFAN AHMED",
      department: "Department of Mechanical Engineering (ME)",
      designation: "Associate Professor & Head of the Dept",
      message:
        "Mechanical Engineering is one of the oldest and largest disciplines of study all over the world. ... ",
      image:
        "https://baust.edu.bd/me/wp-content/uploads/sites/19/2020/02/dr-ing-irfan-ahmed-234x300.jpg",
    },
  ];
  return (
    <div className="my-[5%]">
      <h1 className="text-xl mb-[3%] text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
        <span className="block xl:inline">Our Reputed</span>
        <span className="ml-1 block text-indigo-600 xl:inline">Advisors</span>
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        style={{ width: "70%" }}
        centeredSlides={false}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {mentors.map((mentor, index) => (
          <SwiperSlide>
            <div className="p-[5%] rounded-xl shadow-xl">
              <figure>
                <img src={mentor.image} className="mx-auto w-[20%]" alt="" />
              </figure>
              <h1 className="text-[12px] font-bold text-center">
                {mentor.name}
              </h1>
              <h1 className="text-[12px] font-bold text-center">
                {mentor.department}
              </h1>
              <h1 className="text-[14px] font-bold text-center">
                {mentor.designation}
              </h1>
              <h1 className="text-[12px]  text-center">{mentor.message}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mentors;
