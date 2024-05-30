import { Formik, Field, Form } from "formik";
import { register, login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const AuthForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, action) => {
          dispatch(login(values));
          action.resetForm();
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="" type="password" />

          <button type="submit">Sign up</button>
          {/* <button type="submit">Sign in</button> */}
        </Form>
      </Formik>
    </>
  );
};

export default AuthForm;
