import "./Dialog.css";

const Dialog = (props) => {
  return (
    <div className="dialog__cover">
      <div className="dialog">
        <div className="dialog__titlebar">
          <div className="dialog__title">{props.state.title}</div>
        </div>
        <div className="dialog__message">{props.state.message}</div>
        <div className="dialog__actions">
          <button
            className="dialog__button"
            type="button"
            onClick={props.onButtonClick}
          >
            {props.state.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
