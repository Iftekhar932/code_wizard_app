import React, { useState } from "react";
import "./FAQ.css";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState({});
  const [displayUsers, setDisplayUsers] = useState(loadedUsers);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    setUsers(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("user created");
        }
      });
  };
  const updateHandler = (e, userInfo) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${userInfo.id}`, {
      method: " PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("user created");
        }
      });
  };

  const deleteHandler = (userInfo) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`http://localhost:5000/users/${userInfo._id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingUsers = displayUsers.filter(
              (user) => user._id != userInfo._id
            );
            setDisplayUsers(remainingUsers);
            return alert("user deleted");
          }
        });
    }
  };

  const deleteAllHandler = () => {
    fetch("http://localhost:5000/users", { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        setDisplayUsers({});
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onBlur={handleBlur} name="userName" required />
        <input
          type="email"
          onBlur={handleBlur}
          defaultValue="@gmail.com"
          name="email"
          required
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {displayUsers?.map((usr) => {
          return (
            <li key={usr._id}>
              {usr.userName}{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(usr)}
              >
                Delete
              </button>
              <button
                className="btn btn-danger"
                onClick={() => updateHandler(usr)}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btn btn-danger" onClick={deleteAllHandler}>
        Delete All
      </button>
    </div>
  );
};

export default FAQ;
