import React, { useState } from "react";

export default function Sus() {
  const [email, setEmail] = useState("Your Email");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Every Notification Send You");
    setEmail(" ");
  };
  return (
    <div class="flex justify-center items-center mb-2">
      <div class="bg-purple-50 dark:bg-slate-400 h-45 sm:w-3/4 w-full rounded-t-full rounded-b-2xl flex justify-center items-center flex-col text-slate-700 ">
        <div class="flex justify-center items-center flex-col ">
          <h1 class="sm:font-bold sm:text-xl font-semibold mt-17 sm:mt-10">
            {" "}
            Subscribe to get information, latest news{" "}
          </h1>
          <h1 class="sm:font-bold sm:text-xl font-semibold">
            and other interesting offers about Jadoo
          </h1>
        </div>
        <div class="sm:mt-5 mt-3">
          <input
            class="w-50 bg-white dark:bg-zinc-600 border border-gray-200 dark:border-zinc-700 rounded-xl py-3 px-4 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all shadow-sm mr-4"
            type="text"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            class="bg-gradient-to-r from-red-400 to-amber-500 hover:from-red-500 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md shadow-orange-500/20"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
