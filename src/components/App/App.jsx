import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../redux/auth/operations";
import { selectIsRefreshing, selectSid } from "../../redux/auth/selectors";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import AuthPage from "../../pages/AuthPage/AuthPage";
import MainPage from "../../pages/MainPage/MainPage";

const App = () => {
  const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  return (
    <>
      <Navigation />
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
