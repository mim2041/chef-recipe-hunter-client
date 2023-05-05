import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-blue-200 pt-1 my-8 pb-8">
      <section className="mx-5 lg:mx-36 mt-24">
        <h2 className="text-3xl text-violet-600 font-bold  text-center">
          Contact With Us
        </h2>
        <p className="w-8/12 text-center mx-auto mt-6 mb-12">
          You can contact with us through this section. Send your problem
          through message, and we will contact with you shortly. Stay connected
          with us. Thank You.
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 bg-zinc-100 w-75 lg:w-3/6">
            <div className="text-center border-b-2 border-r-2 p-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3 className="text-xl font-bold text-[#ff5900]">Contact Info</h3>
              <div className="text-5xl flex justify-center items-center m-2">
                <FiPhoneCall />
              </div>
              <p> +8801521542599</p>
              <p> +8801521542599</p>
            </div>
            <div className="text-center border-b-2 p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
              <img className="mx-auto" src="images/call.png" alt="" />
              <h3 className="text-xl font-bold text-[#ff5900]">
                Facebook
              </h3>
              <div className="text-5xl flex justify-center items-center m-2">
                <AiFillFacebook />
              </div>
              <p>Bengali Cuisine</p>
              {/* <p>Jahangirnagar University</p> */}
            </div>
            <div className="text-center border-r-2 p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3 className="text-xl font-bold text-[#ff5900]">WhatsApp</h3>
              <div className="text-5xl flex justify-center items-center m-2">
                <RiWhatsappFill />
              </div>
              <p> +8801521542599</p>
              <p> +8801521542599</p>
            </div>
            <div className="text-center p-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
              <img className="mx-auto" src="images/location.png" alt="" />
              <h3 className="text-xl font-bold text-[#ff5900]">Email Address</h3>
              <div className="text-5xl flex justify-center items-center m-2">
                <AiTwotoneMail />
              </div>
              
              <p>bengalicuisine@gmail.com</p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 mb-5">
            <form action="">
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                id="inline-full-name"
                type="text"
                placeholder="Email Address"
              />

              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                id="inline-full-name"
                type="text"
                placeholder="Phone Number"
              />

              <textarea
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button className="bg-violet-600 px-auto text-white py-4 w-full rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;