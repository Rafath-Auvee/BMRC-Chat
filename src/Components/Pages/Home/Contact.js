import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_bxyz292",
  //       "template_66cbsae",
  //       e.target,
  //       "236udK2u7CF43YT5D"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

  return (
    <div className={`max-w-screen-md mx-auto p-5 mt-6 pt-6   `}>
      <div className="divider text-black"></div>
      <div className="text-center mb-16">
        {/* <p className="mt-4 text-3xl md:text-5xl lg:text-7xl text-center leading-7 text-indigo-500 font-regular ">
          Contact
        </p> */}
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Get In <span className="text-indigo-600">Touch</span>
        </h3>
      </div>

      <form
        className={`w-full ${isDarkMode ? "text-white" : "text-black"}`}
        // onSubmit={sendEmail}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-password"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="something@gmail.com"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-password"
            >
              Your Message
            </label>
            <textarea
              rows="10"
              className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-between w-full px-3">
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
