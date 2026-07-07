import React, { useState } from "react";

//handling of form using useState
export default function Forms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submitbutton handline
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("LOGIN SUCCESSFULLY");

    console.log("submitted Email :", email);
    console.log("submitted Password :", password);

    // for refresh after the page was submitted.....

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" min-h-screen w-full bg-white dark:bg-slate-500 flex flex-col items-center justify-center p-6 gap-6">
      <form className="w-full max-w-2xl h-auto bg-white/90 dark:bg-[#DF6951] border border-pink-100 dark:border-pink-300 p-8 rounded-2xl shadow-2xs shadow-gray-900 dark:shadow-white grid grid-cols-1 sm:grid-cols-2 gap-4 items-end dark:shadow-2xl  ">
        <h1 className="sm:col-span-2 text-3xl font-bold text-slate-800 dark:text-slate-900 flex justify-center mb-6 underline">
          LOGIN
        </h1>

        <label htmlFor="email" className="font-medium text-slate-900 text-xl">
          Email:-
        </label>
        <input
          type="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
        />

        <label
          htmlFor="password"
          className="font-medium  text-slate-900 text-xl"
        >
          Password:-
        </label>
        <input
          type="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
        />

        <button
          type="button"
          className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-500 ease-in-out bg-zinc-900 rounded-xl hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 sm:col-span-2 dark:bg-gradient-to-tr from-slate-700 to-orange-300"
          onClick={handleSubmit}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
