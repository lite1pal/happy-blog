import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { crimson_font } from "..";

export default function Blog() {
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 50);
  }, []);

  return (
    <div className={`transition duration-1000 ${fadeIn && "opacity-0"}`}>
      <Navbar {...{ fadeIn }} />
      <div className="mx-auto flex w-9/12 flex-wrap justify-center p-10">
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-green-300"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-purple-300"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-blue-300"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-orange-300"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-slate-500"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-stone-300"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-yellow-900"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-purple-800"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-orange-800"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-blue-900"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-orange-100"></div>
          <div className={`mx-auto ${crimson_font}`}>May 26, 2019</div>
          <div className="mx-auto text-2xl font-medium hover:cursor-pointer hover:underline">
            Episode 05: Thinking about future
          </div>
          {/* <div className="mx-auto w-fit text-sm font-light">
            Exploring this big wide world on your own.
          </div> */}
        </div>
        <div className="m-10 flex flex-col space-y-3">
          <div className="h-64 w-96 bg-orange-400"></div>
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
  );
}
