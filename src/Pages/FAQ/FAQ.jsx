import React, { useState } from "react";
import "./FAQ.css";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
  const userData = useLoaderData();
  const [user, setUser] = useState(userData);
  const [displayUser, setDisplayUser] = useState(userData);
  const blurHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    console.log(newUser);
    setUser(newUser);
  };

  const submitHandler = () => {
    fetch("http://localhost:5000/postUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          alert("User created");
        }
      });

    /* fetch(`http://localhost:5000/updateUser/${userInfo._id}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  };

  const updateHandler = (userInfo) => {
    fetch(`http://localhost:5000/updateUser/${userInfo._id}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const deleteHandler = (userInfo) => {
    const agree = window.confirm("sure?");
    if (agree) {
      fetch(`http://localhost:5000/deleteUser/${userInfo._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            alert("deleted");
            const remainingUser = displayUser.filter(
              (usr) => usr._id != userInfo._id
            );
            setDisplayUser(remainingUser);
          }
        });
    }
  };

  // incomplete yet 👇👇
  const getSingleUser = (userInfo) => {
    fetch(`http://localhost:5000/getUser/${userInfo._id}`)
      .then((res) => res.json())
      .then((data) => console.log("front 58", data));
  };

  return (
    <div className="App">
      <h1>
        www.youtube.com/watch?v=TNSfesnsVTk try this video link for star rate
        setting
      </h1>

      <form onSubmit={submitHandler}>
        <input type="text" name="username" onBlur={blurHandler} required />
        <input type="email" name="email" onBlur={blurHandler} required />
        <button type="submit">Submit</button>
      </form>

      <h1>Update user info below</h1>
      <form>
        <input type="text" name="username" onBlur={blurHandler} required />
        <input type="email" name="email" onBlur={blurHandler} required />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {displayUser?.map((singleUser, index) => {
          return (
            <li key={singleUser._id}>
              {singleUser.username || singleUser.name}{" "}
              <button onClick={() => deleteHandler(singleUser)}>
                delete {index}
              </button>
              <button onClick={() => getSingleUser(singleUser)}>
                Display One{" "}
              </button>
              <button onClick={() => updateHandler(singleUser)}>
                Display One{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
