import { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./../../../styles/container.module.scss";

const Container = ({ title, children }) => {
  const [titleWidth, setTitleWidth] = useState("100%");
  const titleRef = useRef(null);

  useEffect(() => {
    setTitleWidth(`${titleRef.current.offsetWidth}px`);
  }, [titleRef.current]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 ref={titleRef}>{title}</h2>
          <div
            className={styles.border}
            style={{
              width: titleWidth,
            }}
          >
            <div className={classNames(styles.dot, styles.left)}></div>
            <div className={classNames(styles.dot, styles.right)}></div>
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Container;
