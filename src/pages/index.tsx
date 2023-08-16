import {
  Montserrat,
  Cormorant_Garamond,
  Caprasimo,
  Caveat,
  Crimson_Pro,
} from "next/font/google";
import { useEffect, useState } from "react";
import LandPage from "./components/landpage";
import Blog from "./components/blog";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "500" });

const caprasimo = Caprasimo({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: "300" });

export const montserrat_font = montserrat.className;
export const cormorant_font = cormorant.className;
export const caprasimo_font = caprasimo.className;
export const caveat_font = caveat.className;
export const crimson_font = crimson.className;

export default function Home() {
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 50);
  }, []);

  return (
    <div className={`transition duration-1000 ${fadeIn && "opacity-0"}`}>
      <LandPage />
    </div>
  );
}
