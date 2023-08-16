import Link from "next/link";
import { useEffect, useState } from "react";
import { crimson_font, cormorant_font, caveat_font } from "..";
import Navbar from "./navbar";

export default function LandPage() {
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 50);
  }, []);
  return (
    <>
      <div
        className={`} flex h-screen w-screen flex-col justify-between bg-[url('../lindsay-reynolds-XJ-oEL-g7t4-unsplash-mobile.jpg')] bg-cover bg-top text-white transition duration-1000
    lg:bg-[url('../lindsay-reynolds-XJ-oEL-g7t4-unsplash.jpg')]`}
      >
        <Navbar {...{ fadeIn }} />
        <div
          className={`m-10 flex h-1/4 flex-col bg-black bg-opacity-30 p-10 text-4xl uppercase transition duration-1000 max-md:text-2xl md:w-3/4 lg:w-1/2 ${
            fadeIn && "pointer-events-none -translate-x-10 opacity-0"
          } xl:w-1/3 ${caveat_font}`}
        >
          <div>A blog about making our lives better</div>
        </div>
        <div className="pointer-events-none opacity-0 max-lg:hidden">1</div>
      </div>
      <div
        className={`flex w-screen flex-col bg-orange-50 p-14 max-xl:space-y-14 lg:space-x-20 xl:flex-row ${cormorant_font}`}
      >
        <div className="my-auto flex h-fit w-full flex-col space-y-5 bg-orange-600 bg-opacity-20 px-10 py-24 text-2xl transition duration-1000 hover:bg-opacity-60 hover:text-white xl:w-1/3">
          <div>
            Life is a <span className="strong italic underline">journey</span>,
            and I'm here to provide you with a roadmap to a better and more
            fulfilling existence.
          </div>
          <div>
            My carefully crafted articles cover a wide spectrum of topics, all
            with the common goal of helping you navigate the challenges and
            embrace the joys of life.
          </div>
        </div>
        <div className="mx-auto flex w-10/12 flex-col space-y-14 lg:w-2/3">
          <div className="text-3xl">Latest Episodes</div>
          <div className="flex flex-col items-center max-lg:space-y-14 lg:flex-row lg:space-x-10">
            <div className="flex flex-col space-y-3">
              <div className="h-64 w-96 bg-blue-300"></div>
              <div className={`mx-auto ${crimson_font}`}>May 29, 2019</div>
              <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
                Episode 06: Solo Travel or Bust
              </div>
              {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
            </div>
            <div className="flex flex-col space-y-3">
              <div className="h-64 w-96 bg-purple-300"></div>
              <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
              <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
                Episode 05: Thinking about future
              </div>
              {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
