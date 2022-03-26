import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

// components
import Banner from "./../components/Home/Banner/Banner";
import Idea from "./../components/Home/Products/Idea";
import Investor from "./../components/Home/Products/Investor";
import Service from "./../components/Home/Service/Service";
import Partners from "./../components/Home/Partners/Partners";
import Contact from "./../components/Home/Contact/Contact";
import Footer from "./../components/Home/Footer/Footer";

const Post = () => {
  return (
    <>
      <Layout title="Avasar">
        <Navbar />
        <Banner />
        <Idea />
        <Investor />
        <Service />
        <Partners />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default Post;
