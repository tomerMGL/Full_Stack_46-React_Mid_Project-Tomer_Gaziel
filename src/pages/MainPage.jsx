import React, { useEffect, useState } from "react";
import "./MainPage.css";
import UsersComp from "../components/users/UsersComp";
import { getAllData } from "../utilities";

const MainPage = () => {
  const [users, setUsers] = useState();
  const [userData, setUserData] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [searchFilter, setSearchFilter] = useState([]);


  useEffect(() => {
    const fetchAllData = async () => {
      const data = await getAllData();
      setUsers(data);
      setSearchFilter(data);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    setSearchFilter(users)
    setShowDetails(false)
  },[users])

  const searchHandler = (e) => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchFilter(filteredUsers);
  };

  return (
    <div className="main-container">
      <div className="left-side-container">
        <div>
          <input onChange={searchHandler} type="text" />
        </div>
        {searchFilter && searchFilter.length > 0 ? (
          <UsersComp
            users={searchFilter}
            setUsers={setUsers}
            showDetails={setShowDetails}
            currentUser={setUserData}
          />
        ): <div>Users Not Found</div>}
      </div>
      {showDetails && (
        <div className="right-side-container">
          {userData && <h2>{userData.id}</h2>}
        </div>
      )}
    </div>
  );
};

export default MainPage;
