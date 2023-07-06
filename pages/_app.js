import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "tw-elements/dist/css/tw-elements.min.css";
import { AuthUSerProvider } from "@/firebase/auth";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Firebase - Todo App</title>
            </Head>
      <AuthUSerProvider>
      <Component {...pageProps} />
      </AuthUSerProvider>
           
        </>
    );
}
