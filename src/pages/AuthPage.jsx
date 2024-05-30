import AuthForm from "../components/AuthForm/AuthForm";
import { register } from "../redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default AuthPage;
