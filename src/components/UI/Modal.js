import { Fragment } from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const OverlayModal = (props) => {
  return (
    <div className={classes.modal}>
      <div >{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <OverlayModal>{props.children}</OverlayModal>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
