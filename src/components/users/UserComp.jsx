import React, { useState } from "react";
import "./UserComp.css";

const UserComp = ({ user, showDetails, currentUser, updateUser, deleteUser }) => {
  const setCurrentUser = () => {
    showDetails(true);
    currentUser(user);
  };
  const [showExpand, setShowExpand] = useState(false);
  const [userChangeData, setUserChangeData] = useState({
    name: user.name,
    email: user.email
  })

  const showExpandHandler = () => setShowExpand(true);
  const hideExpandHandler = () => setShowExpand(false);


  const changeHandlerClick = () => {
    updateUser(user.id, {...userChangeData});
  }

  const changeHandler = (e) => {
    setUserChangeData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  
  return (
    <div className="user-item-container" onClick={setCurrentUser}>
      <div className="user-item-details">
        <h3 className="user-title">ID: {user.id}</h3>
        <div className="user-form-data">
          <div className="input-item">
            <p>Name :</p>

            <input
              className="user-input"
              type="text"
              name="name"
              value={userChangeData.name}
              onChange={changeHandler}
            />
          </div>
          <div className="input-item">
            <p>Email :</p>

            <input
              className="user-input"
              type="text"
              name="email"
              value={userChangeData.email}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="user-btns-container">
          <div className="btns-container">
            <button className="gen-btn expand-btn" onMouseOver={showExpandHandler} onMouseLeave={hideExpandHandler}>
              Expand
            </button>
            {showExpand && <div>expand</div>}
          </div>
          <div className="btns-container">
            <button className="gen-btn update-btn" onClick={changeHandlerClick}>
              Update
            </button>
            <button className="gen-btn delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </div>
      </div>
      <div className="user-status-color-strip" />
    </div>
  );
};

export default UserComp;
