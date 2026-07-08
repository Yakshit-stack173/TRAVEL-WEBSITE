import React from "react";
import Img1 from "../images/Rome.jpg";
import Img2 from "../images/Lodon.jpg";
import Img3 from "../images/Europe.jpg";
import Img4 from "../images/veit.jpg";
import { DollarSign, Navigation } from "lucide-react";

export default function Main() {
  const destinations = [
    {
      img: Img1,
      place: "Rome, Italy",
      price: "5.42k",
      days: "10 Days Trip",
    },
    {
      img: Img2,
      place: "London, UK",
      price: "4.2k",
      days: "12 Days Trip",
    },
    {
      img: Img3,
      place: "Full Europe",
      price: "15k",
      days: "28 Days Trip",
    },
      {
      img: Img4,
      place: "Veitnam",
      price: "3k",
      days: "8 Days Trip",
    },
  ];

  return (
    <section id="destination" className="flex flex-col items-center mt-20 px-5">
      <h2 className="text-gray-500 dark:text-amber-600 font-semibold text-2xl font-bold">
        Top Selling
      </h2>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mt-2">
        Top Destinations
      </h1>

      {/* Mobile Slider + Desktop Grid */}
      <div className="sm:w-220 w-full mt-12">
        <div className="flex md:grid md:grid-cols-4 gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[280px] md:w-full rounded-3xl shadow-2xl shadow-gray-400 bg-gray-200 dark:bg-amber-50 dark:text-gray-600 dark:shadow-amber-100 transition hover:scale-105 duration-300"
            >
              <img
                src={item.img}
                alt={item.place}
                className="w-full h-45 object-cover rounded-t-3xl"
              />

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.place}</h3>

                  <div className="flex items-center gap-1">
                    <DollarSign className="text-amber-500 w-5 h-5" />
                    <span>{item.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Navigation className="text-blue-500 w-5 h-5" />
                  <span>{item.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
