import { Link, useNavigate } from "react-router-dom";
import useStyles from "./sign-in.styles";
import paths from "@/router/paths";

const SignInForm = () => {
  const cls = useStyles();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(Boolean(formData.get("remember-password")));

    localStorage.setItem("credentials", "data");

    navigate(paths.index);
  }

  return (
    <form className={cls.container} onSubmit={onSubmit}>
      <div className={cls.header}>
        <h1 className={cls.title}>Login to Account</h1>
        <p className={cls.subTitle}>
          Please enter your email and password to continue
        </p>
      </div>

      <div className={cls.inputs}>
        <div>
          <label htmlFor="email" className={cls.label}>
            Email address:
          </label>
          <input
            type="email"
            placeholder="esteban_schiller@gmail.com"
            className={cls.formTextField}
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={cls.label}>
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className={cls.formTextField}
            name="password"
            id="password"
            required
          />
          <div className={cls.rememberMe}>
            <input
              type="checkbox"
              id="remember-password"
              name="remember-password"
            />
            <label htmlFor="remember-password">Remember Password</label>
          </div>
        </div>
      </div>

      <div className={cls.submitContainer}>
        <button className={cls.submit}>Sign In</button>
        <div className={cls.createAccount}>
          <span className={cls.dontHaveAccount}>Don’t have an account?</span>
          <Link
            to={`${paths.auth.index}/${paths.auth.signUp}`}
            className={cls.createOne}
          >
            Create Account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
