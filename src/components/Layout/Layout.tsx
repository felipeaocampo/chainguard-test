import { GetStaticProps } from "next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { client } from "@/lib/client";

export default function Layout({ children }: { children?: React.ReactNode }) {
  // console.log("test: ", test);
  // console.log("test2: ", test2);
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
