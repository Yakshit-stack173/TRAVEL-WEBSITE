import React from "react";
import { Link } from "react-router-dom";
import travellerImg from "../images/Traveller 1.png";
import planeImg from "../images/plane.png";

export default function Hero() {
  return (
    <div class="bg-white dark:bg-slate-700 h-110 mt-0.2 flex justify-between items-center">
      <div class=" w-110 h-60 mt-3 ml-4 mr-3 flex flex-col sm:ml-25">
        <h2 class="text-[#DF6951] font-bold text-[20px] sm:text-2xl sm:mb-3 z-50">
          Best Destinations around the world
        </h2>
        <h1 class="text-4xl font-bold text-blue-950 dark:text-white mb-1 z-50">
          Travel, enjoy and live
        </h1>
        <h1 class="text-4xl font-bold text-blue-950 dark:text-white mb-5 z-50">
          {" "}
          a new and full life
        </h1>
        <h1 class="text-[#5E6282] dark:text-white mb-3 z-50">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </h1>
        <div class="z-50">
          <button class="bg-amber-400 pl-6 pr-6 pt-2 pb-2 text-white rounded-2xl">Find Out More</button>
          <button class="bg-amber-400 pl-6 pr-6 pt-2 pb-2 text-white ml-5 rounded-2xl"> <span className="bg-amber-400">
            ▶️
          </span>Play Demo</button>
        </div>

        <img src={planeImg} class=" sm:hidden absolute opacity-50 dark:opacity-70" />
        <img
          src={travellerImg}
          class="sm:hidden absolute h-80 mr-3 opacity-50 dark:opacity-70 "
        />
      </div>

      <div class=" flex sm:w-120 sm:h-110 sm:bg-[#FFF1DA] sm:rounded-bl-full dark:bg-[#DF6951]">
        <img
          src={planeImg}
          alt="plane"
          class="hidden sm:block sm:h-30 sm:absolute sm:mt-5 sm:ml-15"
        />
        <img
          src={travellerImg}
          class="hidden sm:block sm:w-full sm:object-contain sm:mt-15 sm:h-96"
        />
      </div>
    </div>
  );
}
