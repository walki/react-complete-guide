import Card from "../UI/Card";
import "./NewUserForm.css";

const NewUserForm = () => {

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitted');
  }

  return (
    <div className="new-user">
    <Card>
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control"><label>Username</label><input type="text" /></div>
          <div className="new-user__control"><label>Age (Years)</label><input type="text" /></div>
        </div>
        <div className="new-user__actions">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
    </div>
  );
};

export default NewUserForm;
