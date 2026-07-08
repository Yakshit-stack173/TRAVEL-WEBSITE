import React, { useState } from "react";
import Img1 from "../images/Group 7.png";
import Img2 from "../images/Group 11.png";
import Img3 from "../images/Group 12.png";
import Img4 from "../images/Greece2.jpg";
import { Link } from "react-router-dom";
import { LeafyGreen, Bookmark, MapPin, TramFront, Heart } from "lucide-react";

export default function Bookings() {
  const [liked, setLiked] = useState(false);
  return (
    <section
      id="bookings"
      className="h-100 grid grid-cols-2 justify-around items-center mt-20 mb-5 gap-20 xl:ml-28 ml-5 "
    >
      <div class="w-80 sm:w-110 sm:ml-20">
        <h1 class="mb-3 font-semibold text-gray-600 dark:text-amber-600">
          Easy and Fast
        </h1>
        <h1 class="sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white ">
          Book your next trip in 3 easy steps
        </h1>

        <div class="flex flex-row items-start mt-6 gap-3 w-80">
          <div>
            <img src={Img1} alt="" class="w-15" />
          </div>
          <div>
            <h1 class="text-[14px] font-semibold dark:text-amber-600">
              Choose Destination
            </h1>
            <p class="text-[11px] text-gray-600 dark:text-white">
              Find your perfect getaway from our curated list of world-class
              locations and hidden gems
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center mt-5 gap-3 w-80">
          <div>
            <img src={Img2} alt="" class="w-15" />
          </div>
          <div>
            <h1 class="text-[14px] font-semibold dark:text-amber-600">
              Make Payment
            </h1>
            <p class="text-[11px] text-gray-600 dark:text-white">
              Secure your booking instantly with our safe, flexible, and fully
              encrpted payment methods
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center mt-5 gap-3 w-80">
          <div>
            <img src={Img3} alt="" class="w-15" />
          </div>
          <div>
            <h1 class="text-[14px] font-semibold dark:text-amber-600">
              Reach Airport on Selected Date
            </h1>
            <p class="text-[11px] text-gray-600 dark:text-white">
              Pack your bags, bypass the long lines, and begin your journey with
              our seamless check-in assistance
            </p>
          </div>
        </div>
        <Link
          to="/Book"
          className="inline-block bg-amber-400 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 mt-6 sm:ml-2 ml-10"
        >
          Book Now
        </Link>
      </div>
      <div className="hidden sm:block h-90 w-80 ml-10 rounded-4xl shadow-2xl shadow-blue-300  transition hover:scale-105 duration-300  ">
        <img
          src={Img4}
          alt="Greece"
          className="p-2 shadow-2xl shadow-blue-100 rounded-4xl "
        />
        <h1 class="ml-4 mt-2 text-[16px] font-semibold text-gray-800 dark:text-white">
          Trip To Greece
        </h1>
        <h1 class="text-gray-500 text-[12px] ml-4 mt-1 font-semibold dark:text-amber-100">
          14-29 July | by Yakshit{" "}
        </h1>
        <div class="flex flex-row gap-4 ml-4 mt-3">
          <LeafyGreen class="bg-gray-500 rounded-4xl p-1 text-white dark:bg-yellow-100 dark:text-gray-700" />
          <Bookmark class="bg-gray-500 rounded-4xl p-1 text-white dark:bg-yellow-100 dark:text-gray-700" />
          <MapPin class="bg-gray-500 rounded-4xl p-1 text-white dark:bg-yellow-100 dark:text-gray-700" />
        </div>
        <div className="flex flex-row mt-4 ml-4 text-gray-500 font-semibold text-[14px] dark:text-amber-100">
          <TramFront className="bg-gray-500 rounded-4xl p-1 text-white mr-2" />
          24 people going{" "}
          <div className="ml-32">
            <Heart
              onClick={() => setLiked((prev) => !prev)}
              className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 hover:text-red-400"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
