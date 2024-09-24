import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { refresh } from "../../redux/auth/operations";
import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from "../../redux/auth/selectors";
import Modal from "react-modal";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { refresh } from "../../redux/auth/operations";
import AuthPage from "../../pages/AuthPage/AuthPage";
import MainPage from "../../pages/MainPage/MainPage";
import TestPage from "../../pages/TestPage/TestPage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";
import UseFullInfoPage from "../../pages/UseFullInfoPage/UsefulInfoPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

const notify = () => toast("Here is your toast.");

Modal.setAppElement("#root");

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      {isRefreshing ? (
        <p>Refresh page</p>
      ) : (
        <Layout>
          <Routes>
            <Route
              path="/auth"
              element={!isLogged ? <AuthPage /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={isLogged ? <MainPage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/usefull-info"
              element={isLogged ? <UseFullInfoPage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/test"
              element={isLogged ? <TestPage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/results"
              element={isLogged ? <ResultsPage /> : <Navigate to="/auth" />}
            />
            {/* <Route
              path="/contacts"
              element={isLogged ? <ContactsPage /> : <Navigate to="/auth" />}
            /> */}
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Layout>
      )}
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
