// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../redux/auth/operations";
import { selectIsRefreshing, selectSid } from "../../redux/auth/selectors";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import AuthPage from "../../pages/AuthPage";
import MainPage from "../../pages/MainPage";

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Sorry, try refreshing page</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
