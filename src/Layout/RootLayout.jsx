import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-slate-700 dark:text-white transition-colors duration-300 flex flex-col">
      {/* <Navbar /> */}
      <main >
        <Outlet />
      </main>
    </div>
  );
}
