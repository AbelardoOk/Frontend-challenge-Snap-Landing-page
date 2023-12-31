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

export function Header() {
  const [isOpenFeature, setIsOpenFeature] = useState(true);
  const [isOpenCompany, setIsOpenCompany] = useState(true);

  return (
    <header className="flex justify-between flex-row font-medium px-10 pt-8">
      
      <div className="flex flex-row items-start gap-10">
        
        <Logo />

        <div className="flex flex-col fill-neutral-gray">
          <button
            onClick={() => setIsOpenFeature((prev) => !prev)}
            className="flex flex-row gap-2 hover:text-neutral-black hover:fill-neutral-black transition duration-300"
          >
            Features
            {!isOpenFeature ? <ArrowDown /> : <ArrowUp />}
          </button>

          {!isOpenFeature ? (
            <div className="flex flex-col p-4 gap-1 shadow-2xl mt-4 ml-[-4.6rem] px-6 py-4 rounded-md ">
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
            <div className="flex flex-col gap-1 mt-4 ml-[-4.2rem] px-6 py-4 rounded-md text-transparent">
              <a
                href=""
                className="cursor-default">
                Todo List
              </a>
              <a
                href=""
                className="cursor-default">
                Calendar
              </a>
              <a
                href=""
                className="cursor-default">
                Reminders
              </a>
              <a
                href=""
                className="cursor-default">
                Planning
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col fill-neutral-gray">
          <button
            onClick={() => setIsOpenCompany((prev) => !prev)}
            className="flex flex-row gap-2 hover:text-neutral-black hover:fill-neutral-black active:text-neutral-black transition duration-300"
          >
            Company
            {!isOpenCompany ? <ArrowDown /> : <ArrowUp />}
          </button>

          {!isOpenCompany ? (
            <div className="flex flex-col gap-1 shadow-2xl mt-4 px-6 py-4 rounded-md">
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
            <div className="flex flex-col gap-1 mt-4 px-6 py-4 rounded-md text-transparent cursor-default">
              <a href=""
              className="cursor-default">
                Company
              </a>
              <a href=""
              className="cursor-default">
                Our Team
              </a>
              <a href=""
              className="cursor-default">
                Blog
              </a>
            </div>
          )}
        </div>

        <button className="ml-[-1.5rem] hover:text-neutral-black transition duration-300">Careers</button>

        <button className="hover:text-neutral-black transition duration-300">About</button>
      </div>

      <div className="flex flex-row items-start gap-12">
        <button className="hover:text-neutral-black transition duration-300">Login</button>

        <button className="mt-[-4%] px-6 py-2 border-neutral-gray border-2 rounded-2xl hover:text-neutral-black hover:border-neutral-black transition duration-300">
          Register
        </button>
      </div>

    </header>
  );
}
