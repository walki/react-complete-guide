import React, {useState} from 'react';


import "./Users.css";
import UserList from "./UserList";
import NewUserForm from "../NewUser/NewUserForm";
import Dialog from '../UI/Dialog';


const Users = (props) => {

  const emptyDialog = {title: "", message: "", button: ""};

   const [displayModal, setDisplayModal] = useState(false);
   const [dialogState, setDialogState] = useState(emptyDialog);
   

   const clickHandler = () => {
    setDisplayModal( () => {
      setDialogState({title: "Test Title", message: "Test Message Here!", button: "Test"});
      return !displayModal;
    })
   }

   const dialogHandler = (state) => {
    setDisplayModal(true);
    setDialogState(state);
   }

   const dialogButtonHandler = () => {
    setDisplayModal(false);
   }

   const newUserHandler = (newUser) => {
    //dialogHandler({title: "New User", message: `Added ${newUser.name} ${newUser.age} years`, button: 'okay' });
    props.onAddUser(newUser);
   }



  return (
    <div className="users">
      {displayModal && <Dialog state={dialogState} onButtonClick={dialogButtonHandler}/>}
      <NewUserForm onNewUser={newUserHandler} errorHandler={dialogHandler}/>
      <UserList users={props.users}></UserList>


      {/* <button onClick={clickHandler}>Click Me</button> */}
    </div>
  );
};

export default Users;
