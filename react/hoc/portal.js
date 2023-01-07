import { createPortal } from "react-dom";

const Portal = ({ children, visible }) => {
  return createPortal(visible && children, document.getElementById("portal"));
};

export default Portal;
