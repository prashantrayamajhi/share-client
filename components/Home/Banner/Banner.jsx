import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./../../../styles/home/banner.module.scss";

const Banner = () => {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for Innovative Idea, Investor & many more"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
