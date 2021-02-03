import "./index.module.css";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
import Whyus from "../components/Whyus";
import Head from "next/head";
import Aboutus from "../components/Aboutus";
import Ourwork from "../components/Ourwork";
import Youcanchoose from "../components/Youcanchoose";
import Ourpartners from "../components/Ourpartners";
import Footer from "../components/Footer";
import Header from "../components/Header";

function index() {
  return (
    <>
      <Head>
        <title>Food Packaging</title>
      </Head>
      {/* <Navbar />
      <Hero /> */}
      <Header />
      <Whyus />
      <Aboutus />
      <Ourwork />
      <Youcanchoose />
      <Ourpartners />
      <Footer />
    </>
  );
}

export default index;
