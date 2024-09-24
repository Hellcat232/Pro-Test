import css from "./ModalWindow.module.css";
import Modal from "react-modal";
import icon from "../../images/symbol-defs.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const customStyles = {
  content: {
    position: "absolute",
    overflowY: "hidden",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    // marginTop: "28px",
    marginBottom: "10px",
    transform: "translate(-50%, -50%)",
    width: "100%",
    // maxHeight: "100%",
    // borderRadius: "20px",
    // padding: "40px",
    height: "100vh",
    background: "#f5f6fb",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalWindow = ({ modalIsOpen, onRequestClose, setOpenModal, logOut }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
    setOpenModal(false);
  };

  const toMaterial = () => {
    navigate("/usefull-info");
    setOpenModal(false);
  };

  const toContacts = () => {
    navigate("/contacts");
    setOpenModal(false);
  };

  const handleLogOut = () => {
    logOut();
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css["modal-div"]}>
          {isLoggedIn && (
            <button onClick={toHome} className={css["modal-buttons"]}>
              Home
            </button>
          )}
          {isLoggedIn && (
            <button onClick={toMaterial} className={css["modal-buttons"]}>
              Material
            </button>
          )}
          <button onClick={toContacts} className={css["modal-buttons"]}>
            Contacts
          </button>
          {isLoggedIn && (
            <button
              onClick={handleLogOut}
              style={{ border: "none", backgroundColor: "transparent" }}
              className={css["modal-sign-out"]}
            >
              <svg width="16" height="16">
                <use href={`${icon}#icon-sign-out`}></use>
              </svg>
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalWindow;
