import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { crimson_font } from "..";
import { api } from "~/utils/api";

export default function Blog() {
  const [fadeIn, setFadeIn] = useState(true);
  const { data: posts } = api.post.getAllPosts.useQuery();

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 50);
  }, []);

  return (
    <div className={`transition duration-1000 ${fadeIn && "opacity-0"}`}>
      <Navbar {...{ fadeIn }} />
      <div className="mx-auto flex w-9/12 flex-wrap justify-center p-10">
        {posts?.map((post) => {
          const formattedTime = new Date(post.createdAt).toLocaleDateString(
            [],
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          );

          return (
            <div key={post.id} className="m-10 flex w-96 flex-col space-y-3">
              {/* <Image src={post.imageUrl} alt="image" width={500} height={500} /> */}

              <div className={`h-64 w-96 bg-green-300`}></div>

              <div></div>
              <div className={`mx-auto ${crimson_font}`}>{formattedTime}</div>
              <div className="mx-auto text-xl font-medium hover:cursor-pointer hover:underline">
                {post.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
