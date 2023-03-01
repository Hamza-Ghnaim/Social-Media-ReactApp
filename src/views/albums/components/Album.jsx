import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context"; 
import classes from "./Albums.module.css";


const Album = ({ data }) => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const SeePhotos = (id) => {
    navigate(`./photos?albumID=${id}`);
  };

  return (
    <>
        <div className={classes.posts_div} >
          <div className={classes.userINFO}>
            <div className={classes.userNAMES}>
              <h3 className={classes.name}>{currentUser.name}</h3>
              <h5 className={classes.username} >@{currentUser.username}</h5>
            </div>
          </div>
          <p className={classes.post} onClick={() => SeePhotos(data.id)}>
            {data.title}
          </p>
          <hr id="hr1" className={classes.hr1} />
        </div>
    </>
  );
};

export default Album;