import React from "react";
import "./UsersComp.css";
import UserComp from "./UserComp";
const UsersComp = ({ users, showDetails, currentUser, setUsers }) => {


  const updateUserData = (userId, newData) => {
    setUsers(prevUsers => prevUsers.map(user => user.id === userId ? { ...user, ...newData }: user));
  }

  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }
  return (
    <div className="users-container">
      <div className="users-items">
        {users.map((user) => (
          <UserComp
            key={`user-item-${user.id}`}
            user={user}
            showDetails={showDetails}
            currentUser={currentUser}
            updateUser={updateUserData}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersComp;
