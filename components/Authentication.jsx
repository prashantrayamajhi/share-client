import styles from "./../styles/auth.module.scss";

const Authentication = ({ title, children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Authentication;
