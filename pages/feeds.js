import Layout from "./../components/Layout";
import styles from "./../styles/feeds.module.scss";

import Posts from "./../components/Feeds/Posts";
import Investors from "./../components/Feeds/Investors";
import Navbar from "./../components/Navbar";

const Feeds = () => {
  return (
    <>
      <Layout title="Aavasar - Idea Feeds ">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Latest Feed</h1>
          </div>
          <div className={styles.wrapper}>
            <Posts />
            <Investors />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feeds;
