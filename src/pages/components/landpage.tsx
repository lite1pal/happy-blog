import { useEffect, useState } from "react";
import { crimson_font, cormorant_font, caveat_font } from "..";
import Navbar from "./navbar";
import { api } from "~/utils/api";
import Image from "next/image";

export default function LandPage() {
  const [fadeIn, setFadeIn] = useState(true);

  const { data: posts } = api.post.getAllPosts.useQuery();

  const formattedTime = (date: Date) => {
    return new Date(date).toLocaleDateString([], {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

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
            <div className="m-10 flex w-96 flex-col space-y-3">
              {/* <div className={`h-64 w-96 bg-green-300`}></div> */}
              <div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                  alt="smiling-girl-image"
                  width="600"
                  height="600"
                />
              </div>
              <div></div>
              <div className={`mx-auto ${crimson_font}`}>
                {posts && formattedTime(posts[0]?.createdAt!)}
              </div>
              <div className="mx-auto text-xl font-medium hover:cursor-pointer hover:underline">
                {posts && posts[0]?.title}
              </div>
            </div>

            <div className="m-10 flex w-96 flex-col space-y-3">
              {/* <div className={`h-64 w-96 bg-blue-300`}></div> */}
              <div>
                <Image
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
                  alt="tree-image"
                  width="600"
                  height="600"
                />
              </div>

              <div className={`mx-auto ${crimson_font}`}>
                {posts && formattedTime(posts[1]?.createdAt!)}
              </div>
              <div className="mx-auto text-xl font-medium hover:cursor-pointer hover:underline">
                {posts && posts[1]?.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
