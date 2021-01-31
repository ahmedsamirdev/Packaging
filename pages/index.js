import "./index.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whyus from "../components/Whyus";
import Head from "next/head";
import Aboutus from "../components/Aboutus";
import Ourwork from "../components/Ourwork";

function index() {
  return (
    <>
      <Head>
        <title>Food Packaging</title>
      </Head>
      <Navbar />
      <Hero />
      <Whyus />
      <Aboutus />
      <Ourwork />
    </>
  );
}

export default index;
