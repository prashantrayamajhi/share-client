import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import marked from "marked";
import styles from "./../../styles/post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await Axios.get("/posts/" + router.query.id);
        setPost(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (router.query.id) {
      fetchPost();
    }
  }, [router.query.id]);
  return (
    <>
      <Navbar />
      {post && (
        <Layout title={post.title}>
          <div className={styles.container}>
            <div className={styles.main}>
              <div className={styles.imgWrapper}>
                <img src={post.images[0]} alt={post.title} />
              </div>

              <div className={styles.titleWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.492491357936!2d85.22048414999999!3d27.690316049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb237653cadf1f%3A0x50d507a41c273246!2sHotel%20Chandragiri%20Hills%20Pvt.ltd!5e0!3m2!1sen!2snp!4v1647610083534!5m2!1sen!2snp"
                  allowFullScreen={true}
                  loading="lazy"
                />

                <div className={styles.info}>
                  <div className={styles.categories}>
                    <p>{post.postType}</p>
                  </div>
                  <h1>{post.title}</h1>

                  <div className={styles.subInfo}>
                    <div className={styles.address}>
                      <p>{post.user.address}</p>
                    </div>

                    <div className={styles.linksWrapper}>
                      <p>Connect with us</p>
                      <div className={styles.links}>
                        {post.user.facebook && (
                          <a href={post.user.facebook} target="_blank">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              className={styles.icon}
                            />
                          </a>
                        )}

                        {post.user.instagram && (
                          <a href={post.user.instagram} target="_blank">
                            <FontAwesomeIcon
                              icon={faInstagram}
                              className={styles.icon}
                            />
                          </a>
                        )}

                        {post.user.linkedin && (
                          <a href={post.user.linkedin} target="_blank">
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className={styles.icon}
                            />
                          </a>
                        )}
                        {post.user.website && (
                          <a href={post.user.website} target="_blank">
                            <FontAwesomeIcon
                              icon={faGlobe}
                              className={styles.icon}
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.content}>
                <h2>Our Story</h2>
                <article
                  dangerouslySetInnerHTML={{
                    __html: marked(post.content),
                  }}
                ></article>
              </div>
            </div>

            <div className={styles.side}>
              <h3>Market Place</h3>
              <p>Coming Soon...</p>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Post;
