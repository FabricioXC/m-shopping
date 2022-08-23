import React from "react";
import Modal from "react-modal";

import StandardButton from "../Buttons";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface StandardModalProps {
  msg?: string;
  showModal: any;
  setShowModal: any;
  btnMessage?: string;
  btnRoute?: string;
}

const StandardModal: React.FC<StandardModalProps> = ({
  msg,
  showModal,
  setShowModal,
  btnMessage = "Fechar",
  btnRoute,
}) => {
  const navigate = useNavigate();

  function toggleModal() {
    setShowModal(!showModal);
    navigate(btnRoute);
  }
  Modal.setAppElement("body");
  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={showModal}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      closeTimeoutMS={500}
      style={customStyles}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100px",
        }}
      >
        <div style={{ paddingBottom: "0.7em" }}>{msg}</div>
        <StandardButton onClick={toggleModal}> {btnMessage}</StandardButton>
      </div>
    </Modal>
  );
};
export default StandardModal;
