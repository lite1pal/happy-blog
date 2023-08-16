import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Lato, Inter } from "next/font/google";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${lato.className} cursor-default`}>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/ce54b8dfe1.js" />
    </main>
  );
};

export default api.withTRPC(MyApp);
