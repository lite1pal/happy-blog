import Link from "next/link";
import { crimson_font, cormorant_font } from "..";
import { useRouter } from "next/router";

export default function Navbar({ fadeIn }: { fadeIn: boolean }) {
  const router = useRouter();
  console.log(router.route);
  return (
    <nav
      className={`flex w-full items-center justify-between ${
        router.route === "/" && "bg-black bg-opacity-30"
      } p-8 transition duration-1000 ${
        fadeIn && "pointer-events-none -translate-y-10 opacity-0"
      }`}
    >
      <Link href="/">
        <div className={`${crimson_font} text-2xl sm:w-1/2 lg:w-3/4`}>
          Bonny
        </div>
      </Link>
      <div className="flex justify-between sm:w-1/2 lg:w-1/4">
        <div
          className={`flex space-x-10 max-sm:hidden ${cormorant_font} text-xl`}
        >
          <Link href="/components/blog">
            <div>Blog</div>
          </Link>
          <div>About</div>
        </div>
        <div className="sm:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="flex items-center space-x-4 max-sm:hidden">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </nav>
  );
}
