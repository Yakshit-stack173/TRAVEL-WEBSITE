import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Destination", "Hotels", "Flights", "Bookings"];
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  
  return (
    //logo
    <div class=" dark:bg-slate-700">
      <nav class="z-50 absolute w-full bg-transparent font-sans pl-5 sm:px-12 pt-6 ">
        <div className="flex items-center justify-between sm:justify-evenly">
          <div className="font-bold text-4xl sm:text-3xl  text-[#181E4B] tracking-wide cursor-pointer dark:text-white underline dark:decoration-[#e5735c] decoration-[#181E4B]">
            Jad<span className="text-[#DF6951]">oo</span>
          </div>

          <div className="flex justify-end  gap-2 font-sans font-bold ">
            <div className="sm:mt-4 flex flex-col sm:gap-3 text-0.5rem sm:text-sm sm:font-medium text-[#212832]  ">
              <Link
                to="/Login"
                className="w-full rounded-lg px-4 sm:py-2 text-left hover:text-[#DF6951] transition-colors duration-200 sm:hidden flex items-center justify-end underline dark:text-white"
              >
                Login
              </Link>
              <button
                className="w-full rounded-lg sm:border-2 sm:border-[#212832] bg-transparent px-4 sm:py-2 text-left transition-all duration-200 hover:bg-[#212832] hover:text-white sm:hidden underline
            dark:text-white"
              >
                Sign up
              </button>
            </div>

            {/* For responsive button*/}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#212832] p-2 text-[#212832] transition-all duration-200 hover:bg-[#212832] hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6 text-[#DF6951]"
                viewBox="0 0 24 24" //height width
                stroke="#DF6951"
              >
                {isOpen ? (
                  // close
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  //open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" //width
                    d="m4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <button
              type="button"
              onClick={toggleDarkMode}
              className="sm:hidden dark:bg-[#e07964] rounded-bl-3xl rounded-tl-3xl pl-4 pr-2 bg-[#212832]"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* link section */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-[#212832] font-medium text-sm dark:text-white">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#DF6951] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 text-sm font-medium text-[#212832]">
              <button className="hover:text-[#DF6951] transition-colors dark:text-white">
                <Link to="/Login">Login</Link>
              </button>
              <button class="rounded-md border-2 border-[#212832] bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-[#212832] hover:text-white dark:text-white dark:border-white">
                Sign up
              </button>
            </div>
            <button
              type="button"
              onClick={toggleDarkMode}
              className=" dark:bg-[#e07964] rounded-3xl px-6 py-2 bg-[#212832] border-2 border-amber-600 dark:border-white "
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* button for small devices */}
        {isOpen && (
          <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-white/95 p-4 shadow-lg shadow-slate-200/50 md:hidden">
            <ul className="flex flex-col gap-4 text-[#212832] font-medium text-sm">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-[#F8F9FB] hover:text-[#DF6951]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
