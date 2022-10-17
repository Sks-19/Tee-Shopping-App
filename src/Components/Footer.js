// import { NavLink } from "react-router-dom";
// import { FaHome, FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-info fixed-bottom">
        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 By :
          <a className="text-reset fw-bold" href="/">
            &nbsp;Shubham Kumar
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
