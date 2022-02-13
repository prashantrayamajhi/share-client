import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

// components
import Banner from "./../components/Home/Banner/Banner";
import Idea from "./../components/Home/Products/Idea";
import Service from "./../components/Home/Service/Service";

const Post = () => {
  return (
    <>
      <Layout title="Avasar">
        <Navbar />
        <Banner />
        <Idea />
        <Service />
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
