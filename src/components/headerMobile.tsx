"use client";

import { Logo } from "./logo";
import { ArrowDown } from "./arrowDown";
import { useState } from "react";
import { ArrowUp } from "./arrowUp";
import { CalendarIcon } from "./calendar";
import { TodoIcon } from "./todo";
import { ReminderIcon } from "./reminder";
import { PlanIcon } from "./planing";
import { MenuIcon } from "./menu";
import { CloseIcon } from "./close";

export function HeaderMobile() {
  const [isOpenFeature, setIsOpenFeature] = useState(true);
  const [isOpenCompany, setIsOpenCompany] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="font-medium px-10 pt-8 z-10 relative">

      <div className="flex flex-row justify-between">
        <Logo />
      <button
        onClick={() => setIsOpenMenu((prev) => !prev)}>

        {!isOpenMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      </div>

    {!isOpenMenu ? (
    <div className="absolute bg-neutral-white ml-[30%] h-screen">

      <div className="pt-8 px-8">
      
        <div className="flex flex-col items-baseline gap-10">

          <div className="flex flex-col fill-neutral-gray">
            <button
              onClick={() => setIsOpenFeature((prev) => !prev)}
              className="flex flex-row gap-[1.2rem] hover:text-neutral-black hover:fill-neutral-black transition duration-300"
            >
              Features
              {!isOpenFeature ? <ArrowDown /> : <ArrowUp />}
            </button>

            {!isOpenFeature ? (
              <div className="flex flex-col pt-4 gap-4 ml-4">
                <a
                  href=""
                  className="flex flex-row gap-3 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
                >
                  <TodoIcon />
                  Todo List
                </a>
                <a
                  href=""
                  className="flex flex-row gap-3 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
                >
                  <CalendarIcon />
                  Calendar
                </a>
                <a
                  href=""
                  className="flex flex-row gap-3 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
                >
                  <ReminderIcon />
                  Reminders
                </a>
                <a
                  href=""
                  className="flex flex-row gap-3 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
                >
                  <PlanIcon />
                  Planning
                </a>
              </div>
            ) : (
              <div className="mt-[-500%] rounded-md text-transparent">
                <a
                  href="">
                  Todo List
                </a>
                <a
                  href="">
                  Calendar
                </a>
                <a
                  href="">
                  Reminders
                </a>
                <a
                  href="">
                  Planning
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col fill-neutral-gray">
            <button
              onClick={() => setIsOpenCompany((prev) => !prev)}
              className="flex flex-row gap-4 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
            >
              Company
              {!isOpenCompany ? <ArrowDown /> : <ArrowUp />}
            </button>

            {!isOpenCompany ? (
              <div className="flex flex-col p-4 gap-4">
                <a href="" className="hover:text-neutral-black hover:fill-neutral-black transition duration-300">
                  Company
                </a>
                <a href="" className="hover:text-neutral-black hover:fill-neutral-black transition duration-300">
                  Our Team
                </a>
                <a href="" className="hover:text-neutral-black hover:fill-neutral-black transition duration-300">
                  Blog
                </a>
              </div>
            ) : (
              <div className="mt-[-500%] rounded-md text-transparent">
                <a href="">
                  Company
                </a>
                <a href="">
                  Our Team
                </a>
                <a href="">
                  Blog
                </a>
              </div>
            )}
          </div>

            <button className= "hover:text-neutral-black transition duration-300">Careers</button>

            <button className= "mt-[-1.75rem] hover:text-neutral-black transition duration-300">About</button>
          </div>

          <div className= "mt-6 flex flex-col gap-8 items-center">
          <button className="hover:text-neutral-black transition duration-300">Login</button>

          <button className="mt-[-4%] px-6 py-2 border-neutral-gray border-2 rounded-2xl hover:text-neutral-black hover:border-neutral-black transition duration-300">
            Register
          </button>
          </div>

      </div>
    </div>
    ) : (
      <div></div>
    )}

    

    </header>
  );
}
