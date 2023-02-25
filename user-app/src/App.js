import Users from "./components/Users/Users";
import React, { useState } from "react";

function App() {
  const initUsers = [
    { id: "user1", name: "Max", age: 31 },
    { id: "user2", name: "Max", age: 31 },
  ];

  const [users, setUsers] = useState(initUsers);

  const addUserHandler = (newUser) => {
    setUsers(() => {
      return [
        ...users,
        { id: Math.random(), name: newUser.name, age: newUser.age },
      ];
    });

    console.log(users);
  };

  return (
    <>
      <Users users={users} onAddUser={addUserHandler} />
    </>
  );
}

export default App;
