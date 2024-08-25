import css from "./App.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../redux/auth/operations";
import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AuthPage from "../../pages/AuthPage/AuthPage";
import MainPage from "../../pages/MainPage/MainPage";

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
          </Routes>
        </Layout>
      )}
      <Footer />
    </>
  );
};

export default App;
