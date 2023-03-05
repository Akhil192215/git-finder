import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./UserProfileCard.module.css";
const UserProfileCard = ({ user, close }) => {
  const back = () => {
    close(false);
  };
  console.log(user);
  return (
    <div className={styles.mask}>
      <div className={styles.modalBody}></div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.picContainer}>
            <img
              className={styles.pic}
              src={`${user.avatar_url ? user.avatar_url : user.avatar_url}`}
              alt=""
            />
          </div>
          <div className={styles.name}>
            <span>{`${user.name ? user.name : user.login}`}</span>
          </div>
          <hr />
          <div className={styles.title}>
            <span>ID : {user.id}</span>
            <br />
            <span>email : {`${user.email ? user.email : "no email"}`}</span>
          </div>
          <div class={styles.title}></div>

          <div className={styles.button}>
            <SubmitButton onClick={back} text={"back"} />
          </div>
          <div className={styles.button1}>
            <div className={styles.github}>
              {" "}
              <a href={user.html_url}>
                <span>Got to githup</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
