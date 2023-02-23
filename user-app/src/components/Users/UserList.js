import React from "react";
import User from "./User";
import "./UserList.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => <User key={user.id} name={user.name} age={user.age}/>)}
    </Card>
  );
};

export default UserList;
