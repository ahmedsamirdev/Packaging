import "./index.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whyus from "../components/Whyus";
import Head from "next/head";
import Aboutus from "../components/Aboutus";

function index() {
  return (
    <>
      <Head>
        <title>Order Your Custom Packaging</title>
      </Head>
      <Navbar />
      <Hero />
      <Whyus />
        <Aboutus />
  </>
  );
}

export default index;
