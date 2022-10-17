import { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth";

const Register = () => {
  let dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const getShoppingUser = JSON.parse(localStorage.getItem("shoppingUser"));

    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const error = document.getElementById("error");
    if (userName === "" || passWord === "" || confirmPassword === "") {
      error.textContent = "All field required!";
      error.style.color = "red";
      document.getElementById("Error").textContent = "";
    } else {
      if (passWord.toLowerCase() === confirmPassword.toLowerCase()) {
        error.style.color = "blue";
        error.textContent = "Registered Successfully!";
        document.getElementById("Error").textContent = "";
        const obj = {
          userName,
          passWord,
          confirmPassword,
        };
        getShoppingUser.push(obj);

        localStorage.setItem("shoppingUser", JSON.stringify(getShoppingUser));

        dispatch(authActions.Logout());
        window.location.replace("/");
      } else {
        error.textContent = "";
        document.getElementById("Error").textContent =
          "Password doesn't match!";
      }
    }
  };

  const handleUser = () => {
    dispatch(authActions.Logout());
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center py-4 my-0">
          <div
            className="card w-75"
            style={{
              background: "linear-gradient(to Right, #fafaf5, #e4f3c5)",
            }}
          >
            <div className="card-body">
              <form>
                <div className="text-center">
                  <h1 className="text-dark">
                    <BiLogOut />
                    <span className="px-2 h2">Register</span>
                  </h1>
                  <p id="error"></p>
                </div>
                <div className="form-outline m-2">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-outline m-2">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-outline m-2">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                  />
                  <p className="text-danger" id="Error"></p>
                </div>
                <div className="d-flex justify-content-center">
                  <NavLink
                    to="/"
                    type="button"
                    className="btn btn-primary btn-block my-4 mx-2 w-100"
                    onClick={handleRegister}
                  >
                    <BiLogOut />
                    Sign up
                  </NavLink>
                </div>
                <div className="text-center">
                  <p>
                    Already a member?{" "}
                    <NavLink to="/" onClick={handleUser}>
                      Login
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
