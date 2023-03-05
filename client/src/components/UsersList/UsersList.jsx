import React, { useState } from "react";
import { useSelector } from "react-redux";
import SubmitButton from "../SubmitButton/SubmitButton";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import styles from "./UsersList.module.css";

const UsersList = () => {
  const [selectedUser, setSlectedUser] = useState({});
  const [visbleCard, setVisibleCard] = useState(false);
  const user = useSelector((state) => state.login.user);
  console.log(user);
  const showCard = (user) => {
    setSlectedUser(user);
    setVisibleCard(true);
  };
  if (visbleCard)
    return <UserProfileCard close={setVisibleCard} user={selectedUser} />;
  if (!user[0]?.length) return " No user found :(";
  else
    return (
      <div>
        <div className={styles.container}>
          {user[0].map((user) => (
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
              <p>{user.bio}</p>
              <hr />
              <div className={styles.title}>
                <span>Login : {user.id}</span>
                <br />
                <span>email : {`${user.email ? user.email : "no email"}`}</span>
              </div>
              <div class={styles.title}></div>
              <div className={styles.button}>
                <SubmitButton
                  onClick={() => showCard(user)}
                  text={"show"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UsersList;
