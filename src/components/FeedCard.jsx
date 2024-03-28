import React, { useState } from "react";
import Logo from "../assets/logo.png";
import like from "../assets/icons/like.svg";
import upvote from "../assets/icons/upvote.svg";
import downvote from "../assets/icons/downvote.svg";

export const FeedCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  return (
    <a
      href="#"
      className="flex mt-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div
        id="gallery"
        className="relative w-[100%] m-2 rounded"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg ">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`${
                activeSlide === index ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item={activeSlide === index ? "active" : ""}
            >
              <img
                src={Logo}
                className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          <span class="bg-gray-300 hover:text-gray-600  hover:bg-gray-400 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white  dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextSlide}
        >
          <span class="bg-gray-300 hover:text-gray-600  hover:bg-gray-400 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img src={like} alt="" />
            <span class="sr-only">favorite</span>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white  bg-slate-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>

          <button
            type="button"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Answers
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              2
            </span>
          </button>

          <button
            type="button"
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img src={like} alt="" />
            <span class="sr-only">favorite</span>
          </button>
          <button
            type="button"
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img src={like} alt="" />
            <span class="sr-only">favorite</span>
          </button>
        </div>
      </div>
      <div className="p-5 md:p-20 justify-center flex md:block gap-2  text-gray-800 items-center dark:text-white">
        <button
          type="button"
          class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img src={upvote} alt="" />
          <span class="sr-only">upvote</span>
        </button>
        <div className="size-12  flex items-center justify-center">0</div>
        <button
          type="button"
          class="relative size-12 inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img src={downvote} alt="" />
          <span class="sr-only">downvote</span>
        </button>
      </div>
    </a>
  );
};
