import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "./../../api/server";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import marked from "marked";
import styles from "./../../styles/post.module.scss";
import formStyles from "./../../styles/form/form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import InvestorForm from "../../components/InvestorForm";

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
  const [showForm, setShowForm] = useState(false)
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
                {post.user.map && (
                  <iframe
                    src={post.user.map}
                    allowFullScreen={true}
                    loading="lazy"
                  />
                )}

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
              <div className={formStyles.formContainer}>
                <div className={formStyles.formHeading}>
                  <span>
                    {post.title} will be accepting investment soon.
                  </span>
                  <p>Be one of the first to know if they start accepting investment on Aavasar.</p>
                </div>
                <button className={formStyles.showFormButton} onClick={() => setShowForm(!showForm)}>
                  {

                    showForm ? <>
                      <FontAwesomeIcon icon={faEyeSlash} className={formStyles.icon} />
                      {'Hide Form'}
                    </> : <>
                      <FontAwesomeIcon icon={faCheckDouble} className={formStyles.icon} />
                      {'I Would Invest'}
                    </>

                  }
                </button>
                {
                  showForm && <InvestorForm title={post.title} />
                }
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
