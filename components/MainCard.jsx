import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./../styles/mainCard.module.scss";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Delete from "./Utils/Modal/Delete";

const MainCard = ({ post }) => {
  const [id, setId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      {isDeleteOpen && id && (
        <Delete
          setIsDeleteOpen={setIsDeleteOpen}
          title="Are you sure ?"
          route={`/posts/${id}`}
        />
      )}
      <div className={styles.card}>
        <div className={styles.profileTitle}>
          <div className={styles.name}>
            <Link href={`/user/${post.user._id}`}>
              <img
                className={styles.profileImg}
                src={
                  post.user.image
                    ? post.user.image
                    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt={post.user.name}
              />
            </Link>
            <div className={styles.meta}>
              <Link href={`/user/${post.user._id}`}>
                <p>{post.user.name}</p>
              </Link>
              <p className={styles.date}>{moment(post.createdAt).fromNow()}</p>
            </div>
          </div>

          {window.localStorage.getItem("id") === post.user._id && (
            <div className={styles.actionsWrapper}>
              <div className={styles.actions}>
                <FontAwesomeIcon
                  onClick={() => {
                    setId(post._id);
                    setIsDeleteOpen(true);
                  }}
                  icon={faTrash}
                  className={classNames(styles.icon, styles.delete)}
                />
              </div>
              <div className={styles.actions}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className={classNames(styles.icon, styles.edit)}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.details}>
          <Link href={"/posts/" + post._id}>
            <h2>{post.title}</h2>
          </Link>

          <Link href={"/posts/" + post._id}>
            <img src={post.images[0]} alt={post.title} />
          </Link>
          <p>{post.description}</p>
          <Link href={"/posts/" + post._id}>
            <p className={styles.link}>
              View Details
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCard;
