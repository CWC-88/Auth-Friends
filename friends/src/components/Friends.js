import React, { useEffect, useState } from "react";

import axiosWithAuth from "../axiosWithAuth";
import AddFriends from "./AddFriends";
import RemoveFriends from "./RemoveFriends";
const Friends = () => {
  const [friendlist, setFriendList] = useState([]);
  const [update, setUpdate] = useState(false);
  // const [identify, setIdentify] = useState(0);
  const fetchData = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then((res) => {
        console.log("response of friends", res.data);
        setFriendList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    setUpdate(false);
  }, [update]);

  console.log("identify", friendlist.length);
  const handleChange = (e) => {
    return e.target.value;
  };

  return (
    <div style={{ height: `2500px` }}>
      <div
        style={{
          display: `flex`,
          width: `80%`,
          justifyContent: `space-around`,
          position: `relative`,
          top: `-80px`,
          left: `400px`,
        }}
      >
        <h1>Friends</h1>
      </div>
      <div>
        <div>
          <h2>Hello there, Meet my Friends!</h2>
        </div>

        <div>
          <h2>Add And Remove</h2>
        </div>
      </div>
      <div style={{ width: `100%` }}>
        <h1>Friends List</h1>
        <div>
          {friendlist.map((item) => {
            return (
              <div key={item.id}>
                <h1>ID: {item.id}</h1>
                <h2>Name: {item.name}</h2>
                <h2>Age: {item.age}</h2>
                <h2>Email: {item.email}</h2>
              </div>
            );
          })}
        </div>

        <div style={{ display: `flex` }}>
          <AddFriends friendlist={friendlist} setUpdate={setUpdate} />
          <RemoveFriends setUpdate={setUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Friends;
