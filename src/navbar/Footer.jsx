import React from 'react'
import Img1 from "../images/Social.png";
import Img2 from "../images/Social1.png";
import Img3 from "../images/Social2.png";
import Img4 from "../images/Playstore.png";
import Img5 from "../images/Googleplay.png";

export default function Footer() {
  return (
    <>
    <div class="sm:h-60 h-40 w-full bg dark:bg-slate-700 bg-[#f9f8f6] flex justify-around items-center sm:gap-10 rounded-t-2xl">
        <ul class=" sm:w-40 w-25">
            <li class=" text-4xl sm:text-5xl font-bold">Jad<span class="text-amber-600">oo.</span></li>
            <li class="text-[8px] sm:text-[12px] text-gray-600 mt-3 font-medium dark:text-gray-300">Book your trip in minute, get full control for much longer</li> 
        </ul>
        <ul>
            <li class=" sm:text-2xl font-semibold">Company</li>
            <li class="font-medium sm:text-[15px] text-[10px]  text-gray-600 mt-3 dark:text-gray-300">About</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Careers</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Mobile</li>
        </ul>
        <ul>
            <li class="sm:text-2xl font-semibold">Contact</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 mt-3 dark:text-gray-300">Help/FAQ</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Press</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Affilates</li>
        </ul>
        <ul class="">
            <li class="sm:text-2xl font-semibold">More</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 mt-3 dark:text-gray-300">Airlinefees</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Airline</li>
            <li class="font-medium sm:text-[15px] text-[10px] text-gray-600 dark:text-gray-300">Low fare tips</li>
        </ul>
        <div class="hidden sm:block">
            <div class="flex ">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            </div>
            <h1 class="font-medium text-[15px] text-gray-600 ml-3 dark:text-gray-300">Discover our app</h1>
            <div class="flex gap-2 mt-3 ml-3">
            <img src={Img4} alt="" class="w-20"/>
            <img src={Img5} alt="" class="w-20" />
            </div> 
        </div>           
    </div>
     <div class="flex justify-center bg-[#f9f8f6] text-[10px] text-gray-500 sm:text-[15px] font-medium">
        All right resvered@Jadoo.co
     </div>
    </>
  )
}
