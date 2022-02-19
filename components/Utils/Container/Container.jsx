import styles from "./../../../styles/container.module.scss";

const Container = ({ title, children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>
            {title}
            <span className={styles.right}></span>
            <span className={styles.left}></span>
          </h2>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Container;
