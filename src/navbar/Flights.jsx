import React from "react";
import Img1 from "../images/Plane1.png";
import Img3 from "../images/Plane3.png";
import Img4 from "../images/Plane4.png";
import Img5 from "../images/OIP.jpg";

export default function Flights() {
  return (
    <div class="h-40  flex flex-row sm:justify-around   items-center sm:ml-15 sm:mr-15 overflow-x-auto overflow-visible snap-x snap-mandatory scrollbar-none mb-10 gap-10 animate-pulse">
      <img
        src={Img1}
        alt="Plane"
        class="w-20  dark:rounded-3xl  dark:bg-white shrink-0 transition hover:scale-105 duration-300 "
      />

      <img
        src={Img3}
        alt="Plane"
        class="w-25 dark:bg-white p-2 rounded-3xl   shrink-0 transition hover:scale-105 duration-300 "
      />
      <img
        src={Img4}
        alt="Plane"
        class="w-30 dark:bg-white dark:p-7 dark:rounded-4xl shrink-0 transition hover:scale-105 duration-300 "
      />
      <img
        src={Img5}
        alt="Plane"
        class="w-30 ml-5 dark:rounded-4xl shrink-0 transition hover:scale-105 duration-300 "
      />
    </div>
  );
}
