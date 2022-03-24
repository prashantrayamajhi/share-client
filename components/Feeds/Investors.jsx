import { useEffect, useState } from "react";
import styles from "./../../styles/feeds.module.scss";
import Axios from "./../../api/server";
import Link from "next/link";

const Investors = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      const res = await Axios.get("/users/investors?limit=5");
      setInvestors(res.data.data);
    };
    fetchInvestors();
  }, []);

  return (
    <>
      <div className={styles.investors}>
        <h3>Top Investors</h3>
        <div className={styles.investorsList}>
          {investors.map((investor) => {
            return (
              <Link href={`/user/${investor._id}`}>
                <div className={styles.investor}>
                  <img
                    src={
                      investor.image
                        ? investor.image
                        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    }
                    alt={investor.name}
                  />
                  <p>{investor.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Investors;
