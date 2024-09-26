import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectRefreshToken,
  selectSid,
} from "../../redux/auth/selectors";
import Modal from "react-modal";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { refresh } from "../../redux/auth/operations";
// import AuthPage from "../../pages/AuthPage/AuthPage";
// import MainPage from "../../pages/MainPage/MainPage";
// import TestPage from "../../pages/TestPage/TestPage";
// import ResultsPage from "../../pages/ResultsPage/ResultsPage";
// import UseFullInfoPage from "../../pages/UseFullInfoPage/UsefulInfoPage";
// import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { auth } from "../../firebase/firebase";

const notify = () => toast("Here is your toast.");

const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const TestPage = lazy(() => import("../../pages/TestPage/TestPage"));
const ResultsPage = lazy(() => import("../../pages/ResultsPage/ResultsPage"));
const UseFullInfoPage = lazy(() =>
  import("../../pages/UseFullInfoPage/UsefulInfoPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

Modal.setAppElement("#root");

const App = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const refreshToken = useSelector(selectRefreshToken);
  const sid = useSelector(selectSid);

  useEffect(() => {
    if (refreshToken && sid !== null) {
      dispatch(refresh());
    }
  }, [dispatch]);

  return (
    <>
      <Navigation />

      {isRefreshing || user ? (
        <p>Refresh page</p>
      ) : (
        <Layout>
          <Suspense fallback={""}>
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
                element={
                  isLogged ? <UseFullInfoPage /> : <Navigate to="/auth" />
                }
              />
              <Route
                path="/test"
                element={isLogged ? <TestPage /> : <Navigate to="/auth" />}
              />
              <Route
                path="/results"
                element={isLogged ? <ResultsPage /> : <Navigate to="/auth" />}
              />

              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
