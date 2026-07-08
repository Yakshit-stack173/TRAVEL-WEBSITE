import React from "react";
import Img1 from "../images/Profile.png";
import Img2 from "../images/Profile1.avif";
import Img3 from "../images/Profile2.webp";

export default function Review() {
  return (
    <div class="h-80 flex  justify-center items-center sm:gap-15 gap-4 sm:mt-30 mt-10 sm:mb-10  ">
      <div class="h-60 w-100 sm:ml-10 ml-2 mt-10 ">
        <h1 class="font-semibold sm:text-[22px] text-[12px] text-gray-500 dark:text-amber-500 underline">
          TESTIMONIALS
        </h1>
        <h1 class="font-bold sm:text-5xl text-2xl text-gray-800 mt-3 dark:text-gray-50">
          What people say about Us.
        </h1>
      </div>
      <div class="w-100 flex flex-row overflow-x-auto overflow-visible snap-x snap-mandatory scrollbar-none ">
        <img src={Img1} alt="Profile" class="h-20" />
        <div class="ml-2 shadow-2xl shadow-gray-500 rounded-3xl p-4 shrink-0 w-90 mb-10  transition hover:scale-105 duration-300 ">
          <h1 class="">
            “Booking our Airport transfer was the best decision we made for our
            trip. seamless check-in, zero-lines, and an absolute breeze from
            start to finsih”
          </h1>
          <h1 class="mt-4 font-semibold text-amber-300">Mike Taylor</h1>
          <h1>Frequent flyer, London</h1>
        </div>
        <img src={Img2} alt="Profile" class="h-20 ml-15 rounded-4xl" />
        <div class="ml-2 shadow-2xl shadow-gray-500 rounded-3xl p-4 shrink-0 w-90 mb-10  transition hover:scale-105 duration-300 ">
          <h1 class="">
            “I usually stress about getting to the gate on time, but this
            service took care of evrything prompt pickup, smooth navigation and
            total peace of mind”
          </h1>
          <h1 class="mt-4 font-semibold text-amber-300">Sarah Jenkins</h1>
          <h1>New York</h1>
        </div>
        <img src={Img2} alt="Profile" class="h-20 ml-15 rounded-4xl" />
        <div class="ml-2 shadow-2xl shadow-gray-500 rounded-3xl p-4 shrink-0 w-90 mb-10 transition hover:scale-105 duration-300 ">
          <h1 class="">
            “They handled every single detail, from boutique hotel bookings to
            private local guides. it felt like a true five-star vacation from
            day one”
          </h1>
          <h1 class="mt-4 font-semibold text-amber-300">David cho</h1>
          <h1>Seoul</h1>
        </div>
      </div>
    </div>
  );
}
