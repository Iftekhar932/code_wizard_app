import React, { useState } from "react";
import "./FAQ.css";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    console.log(newUser);
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
          console.log(data);
          return alert("user created");
        }
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
        {users.map((usr) => {
          return <li key={usr._id}>{usr.userName}</li>;
        })}
      </ul>
    </div>
  );
};

export default FAQ;
