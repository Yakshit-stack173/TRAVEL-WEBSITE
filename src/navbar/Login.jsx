import React, { useState } from "react";

//handling of form using useState
export default function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [course, setCourse] = useState("");

  //dark mode button
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  //submitbutton handline
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted Name :", name);
    console.log("submitted Email :", email);
    console.log("submitted Password :", password);
    console.log("submitted About :", about);
    console.log("submitted Course :", course);
    
    // for refresh after the page was submitted.....
    setName("");
    setEmail("");
    setPassword("");
    setAbout("");
    setCourse("");
  };

  return (
    <div className="min-h-screen w-full bg-pink-100 dark:bg-slate-900 flex flex-col items-center justify-center p-6 gap-6">
      <form className="w-full max-w-2xl h-auto bg-white/90 dark:bg-pink-100 border border-pink-100 dark:border-pink-300 p-8 rounded-2xl shadow-2xl shadow-gray-900 dark:shadow-white grid grid-cols-1 sm:grid-cols-2 gap-4 items-end dark:shadow-2xl  ">
        <h1 className="sm:col-span-2 text-3xl font-bold text-slate-800 dark:text-slate-900 flex justify-center mb-6 underline">
          STUDENT REGISTRATION FORM
        </h1>

        <label htmlFor="name" className="font-medium text-slate-900 text-xl">
          Name:-
        </label>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
        />

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

        <label
          htmlFor="about"
          className="font-medium  text-slate-900 text-xl sm:mb-22 m-0"
        >
          About:-
        </label>
        <textarea
          value={about}
          rows={4}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Enter something about Yourself"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20 "
        ></textarea>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20 sm:col-span-2"
        >
          <option value="">--Select Course--</option>
          <option value="react">React</option>
          <option value="node">NodeJS</option>
          <option value="js">JS</option>
        </select>

        <button
          type="button"
          className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-500 ease-in-out bg-zinc-900 rounded-xl hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 sm:col-span-2 dark:bg-gradient-to-tr from-slate-700 to-pink-200"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {/* //live preview */}
        <h1 className="sm:col-span-2 text-3xl font-semibold text-slate-800 dark:text-slate-900 flex justify-center ">
          Live Preview
        </h1>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-100">
          {name || "Your Name"}
        </p>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-100">
          {email || "Your Email"}
        </p>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-100">
          {password || "Your Password"}
        </p>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-100 sm:col-span-2">
          {about || "About"}
        </p>
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 dark:bg-slate-700 dark:text-slate-100 sm:col-span-2">
          {course || "Your Course"}
        </p>

        <button
          type="button"
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-3xl font-medium transition-colors duration-200 bg-slate-800 text-white dark:bg-blue-400 dark:text-slate-900 sm:col-span-2"
        >
          {isDark ? "☀️ Light Mode " : "🌙 Dark Mode"}
        </button>
      </form>
    </div>
  );
}

