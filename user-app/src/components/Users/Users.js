import "./Users.css";
import UserList from "./UserList";
import NewUserForm from "../NewUser/NewUserForm";


const Users = (props) => {
  return (
    <div className="users">
      <NewUserForm />
      <UserList users={props.users}></UserList>
    </div>
  );
};

export default Users;
