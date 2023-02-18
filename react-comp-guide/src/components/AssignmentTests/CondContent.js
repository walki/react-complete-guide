import React, {useState} from 'react';
import './CondContent.css';

export default function CondContent() {

  const [proceedShown, setProceedShown] = useState(false);
  const [proceedClicked, setProceedClicked] = useState(false);
  const [alertContent, setAlertContent] = useState(<div></div>);
  
  const deleteHandler = () => {
    if (!proceedShown){
      setAlertContent(
        <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
      );
      setProceedShown(true);
    }

    if (proceedClicked){
      console.log("Go Ahead and Delete");
    }
  }

  const proceedHandler = () => {
    setAlertContent(<div></div>);
    setProceedClicked(true);
  }


  return (
    <div className="cond-cont">
      {alertContent}
      <button onClick={deleteHandler}>Delete</button>
    </div>  
  );
}