import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

// components
import Banner from "./../components/Home/Banner/Banner";
import Idea from "./../components/Home/Products/Idea";
import Investor from "./../components/Home/Products/Investor";
import Service from "./../components/Home/Service/Service";
import Partners from "./../components/Home/Partners/Partners";
import Contact from "./../components/Home/Contact/Contact";

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
      </Layout>
    </>
  );
};

export default Post;

// useEffect(() => {
//   const fetchPosts = async () => {
//     try {
//       const res = await Axios.get("/posts");

//       setPosts(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchPosts();
// }, []);

// <h2>Feed</h2>
//           <div className={styles.postsContainer}>
//             {posts &&
//               posts.map((post, index) => {
//                 return <PostCard post={post} key={index} />;
//               })}
//           </div>
