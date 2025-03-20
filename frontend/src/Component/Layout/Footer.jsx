import { Link } from "react-router-dom";
import { Context } from "../../main";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <>
      <footer
        className={`${
          isAuthorized ? "footerShow" : "footerHide"
        } bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 text-white py-6`}
      >
        <div className="mx-auto text-center container">
          <div className="mb-4">
            <p>&copy; All Rights Reserved By R</p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              to={"/"}
              target="_blank"
              className="text-white hover:text-blue-700 text-2xl transition-colors duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"/"}
              target="_blank"
              className="text-white hover:text-red-600 text-2xl transition-colors duration-300"
            >
              <FaYoutube />
            </Link>
            <Link
              to={"/"}
              target="_blank"
              className="text-white hover:text-blue-500 text-2xl transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"/"}
              target="_blank"
              className="text-white hover:text-pink-500 text-2xl transition-colors duration-300"
            >
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
