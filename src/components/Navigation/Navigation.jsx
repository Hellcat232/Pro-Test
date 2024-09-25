import css from "./Navigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import icon from "../../images/symbol-defs.svg";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectFirstSpell, selectUser } from "../../redux/user/selectors";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { auth } from "../../firebase/firebase";
// import { signOut } from "firebase/auth";
import ModalWindow from "../ModalWindow/ModalWindow";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);
  const firstSpell = useSelector(selectFirstSpell);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalOpen, setOpenModal] = useState(false);
  const [isAuth, setAuth] = useState(false);

  // use useEffect to change style body if open/close modal window
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Hidden scrollY
    } else {
      document.body.style.overflow = ""; // Return scrollY
    }

    // clear style (if window is close)
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);
  //==========================================================================

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());

    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    navigate("/auth");
  };

  const handleContacts = () => {
    setAuth(true);
  };

  const handleLogin = () => {
    setAuth(false);
  };

  return (
    <>
      <header className={css.header}>
        <Link to="/">
          <svg className={css.logo}>
            <use href={`${icon}#icon-logo-1`}></use>
          </svg>
        </Link>

        <nav className={css.nav}>
          <ul className={css["nav-list"]}>
            {isLogged && (
              <li className={css["home-material"]}>
                <Link to="/">Home</Link>
              </li>
            )}
            {isLogged && (
              <li className={css["home-material"]}>
                <Link to="/usefull-info">Material</Link>
              </li>
            )}

            <li className={css["contacts"]}>
              {/* <Link to="/auth"  onClick={handleLogin}>
                  Login
                </Link> */}

              <Link to="/contacts" onClick={handleContacts}>
                Contacts
              </Link>
            </li>

            <ul className={css["nav-right-side"]}>
              {isLogged && (
                <li className={css.elipse}>
                  <span style={{ verticalAlign: "middle" }}>{firstSpell}</span>
                </li>
              )}

              {isLogged && <li className={css.name}>{<p>{userName}</p>}</li>}
              {isLogged && (
                <li>
                  <svg width="2" height="68" className={css.line}>
                    <use href={`${icon}#icon-Rectangle-3`}></use>
                  </svg>
                </li>
              )}
              <li className={css["burger-btn"]}>
                {modalOpen ? (
                  <button
                    className={css["burger-btn-inside"]}
                    onClick={handleCloseModal}
                  >
                    <IoMdClose />
                  </button>
                ) : (
                  <button
                    onClick={handleOpenModal}
                    className={css["burger-btn-inside"]}
                  >
                    <RxHamburgerMenu />
                  </button>
                )}
              </li>
              {isLogged && (
                <li className={css["sign-out"]}>
                  <button
                    onClick={handleLogout}
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    <svg width="16" height="16">
                      <use href={`${icon}#icon-sign-out`}></use>
                    </svg>
                  </button>
                </li>
              )}
            </ul>
          </ul>
        </nav>
      </header>
      <ModalWindow
        modalIsOpen={modalOpen}
        onRequestClose={handleCloseModal}
        setOpenModal={setOpenModal}
        logOut={handleLogout}
      />
    </>
  );
};

export default Navigation;
