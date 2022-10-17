import { useDispatch } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { authActions } from "../Store/auth";
import { NavLink } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const shoppingUser = JSON.parse(localStorage.getItem("shoppingUser"));

  const handleClick = (e) => {
    e.preventDefault();
    const userName = document.getElementById("Username").value;
    const passWord = document.getElementById("Password").value;
    const message = document.getElementById("errorMessage");

    if (shoppingUser?.length === 0) {
      message.textContent = "You are not registered yet!";
      message.style.color = "red";
    } else {
      shoppingUser?.map((user) => {
        if (
          user.userName.toLowerCase() === userName.toLowerCase() &&
          user.passWord.toLowerCase() === passWord.toLowerCase()
        ) {
          dispatch(authActions.Login());
          message.style.color = "blue";
          message.textContent = "Logged in successfully!";
        } else if (
          user.userName.toLowerCase() !== userName.toLowerCase() &&
          user.passWord.toLowerCase() === passWord.toLowerCase()
        ) {
          message.style.color = "red";
          message.textContent = "Incorrect username!";
        } else if (
          user.userName.toLowerCase() === userName.toLowerCase() &&
          user.passWord.toLowerCase() !== passWord.toLowerCase()
        ) {
          message.style.color = "red";
          message.textContent = "Incorrect Password!";
        } else {
          message.style.color = "red";
          message.textContent = "Incorrect username and password!";
        }
      });
    }
  };

  const handleGuest = () => {
    dispatch(authActions.Login());
  };

  const handleRegister = () => {
    dispatch(authActions.Login());
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center py-4 my-0">
          <div
            className="card"
            style={{
              background: "linear-gradient(to Right, #fafaf5, #e4f3c5)",
            }}
          >
            <div className="card-body">
              <form>
                <div className="text-center">
                  <p className="text-dark" style={{ fontSize: "1.6rem" }}>
                    <FiLogIn />
                    <span className="px-2">Sign into your account</span>
                  </p>
                  <p id="errorMessage"></p>
                </div>
                <div className="form-outline m-2">
                  <label className="form-label" htmlFor="Username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="Username"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="form-outline mx-2 my-4">
                  <label className="form-label" htmlFor="Password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-block mx-2  mb-3 w-100"
                    onClick={handleClick}
                  >
                    <FiLogIn />
                    Sign in
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-block mx-2 mb-4 w-100"
                    onClick={handleGuest}
                  >
                    <FiLogIn />
                    Sign in as guest
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Not a member?{" "}
                    <NavLink to="/register" onClick={handleRegister}>
                      Register
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

export default Login;
