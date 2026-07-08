import React from "react";
import Img from "../images/satellite-dish.png";
import Set from "../images/Group 49.png";
import Mike from "../images/Group 50.png";
import Air from "../images/plane.png";

export default function Main() {
  return (
    <section
      id="flights"
      className="flex justify-center items-center flex-col sm:h-1/4 sm:mt-30 dark:text-white mt-20 mb-15 "
    >
      <h3 className="font-bold text-slate-600 text-2xl dark:text-amber-700">
        CATEGORY
      </h3>

      <h1 className="font-bold sm:text-4xl  text-3xl mt-2">
        We Offer Best Services
      </h1>

      <div
        className="flex gap-4 mt-10 w-full px-4
            overflow-x-auto scrollbar-hide snap-x snap-mandatory
           sm:justify-center sm:overflow-visible h-70"
      >
        <div className="sm:w-50 w-41 h-60 flex flex-col justify-center items-center shrink-0  shadow-xs shadow-gray-400 rounded-3xl dark:shadow-2xl transition hover:scale-105 duration-300 sm:shrink sm:snap-none">
          <img
            src={Img}
            alt="Calculated Weather"
            className="bg-[#FFF1DA] rounded-bl-4xl rounded-tr-3xl h-15 p-2"
          />
          <h2 className="text-slate-900 mt-4 sm:text-[20px] text-[15px] font-bold dark:text-white">
            Calculated Weather
          </h2>
          <p className="text-slate-600 mt-3 text-center px-3 dark:text-white">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>

        <div className="relative sm:w-50 w-41 h-60 flex flex-col justify-center items-center shrink-0 shadow-xs shadow-gray-400 rounded-3xl dark:shadow-2xl transition hover:scale-105 duration-300 sm:shrink sm:snap-none">
          <img
            src={Air}
            alt="Best Flights"
            className="bg-[#FFF1DA] rounded-bl-4xl rounded-tr-3xl h-20"
          />
          <h2 className="text-slate-900 mt-2 sm:text-[20px] text-[15px] font-bold dark:text-white">
            Best Flights
          </h2>
          <p className="text-slate-600 mt-3 text-center px-3 dark:text-white">
            Engrossed listening. Park gate sell they west hard for the.
          </p>

          <div className="absolute -bottom-5 -left-5 h-20 w-20 bg-amber-600 rounded-bl-4xl rounded-tr-4xl -z-10"></div>
        </div>

        <div className="sm:w-50 w-41 h-60 flex flex-col justify-center items-center shrink-0  shadow-xs shadow-gray-400 rounded-3xl dark:shadow-2xl transition hover:scale-105 duration-300 sm:shrink sm:snap-none">
          <img src={Mike} alt="Local Events" />
          <h2 className="text-slate-900 mt-4 sm:text-[20px] text-[17px] font-bold dark:text-white">
            Local Events
          </h2>
          <p className="text-slate-600 mt-3 text-center px-3 dark:text-white">
            Barton vanity itself do in it. Preferred to men it engrossed
            listening.
          </p>
        </div>

        <div className="sm:w-50 w-41 h-60 flex flex-col justify-center items-center shrink-0  shadow-xs shadow-gray-400 rounded-3xl dark:shadow-2xl transition hover:scale-105 duration-300 sm:shrink sm:snap-none">
          <img src={Set} alt="Customization" />
          <h2 className="text-slate-900 mt-4 sm:text-[20px] text-[17px] font-bold dark:text-white">
            Customization
          </h2>
          <p className="text-slate-600 mt-3 text-center px-3 dark:text-white">
            We deliver outsourced aviation services for military customers.
          </p>
        </div>
      </div>
    </section>
  );
}
