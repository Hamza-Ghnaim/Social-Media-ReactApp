import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context"; 

const Album = ({ data }) => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const SeePhotos = (id) => {
    navigate(`./photos?albumID=${id}`);
  };

  return (
    <>
        <div >
          <div>
            <div >
              <h3 >{currentUser.name}</h3>
              <h5 >@{currentUser.username}</h5>
            </div>
          </div>
          <p onClick={() => SeePhotos(data.id)}>
            {data.title}
          </p>
          <hr />
        </div>
    </>
  );
};

export default Album;