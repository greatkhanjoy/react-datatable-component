import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between p-6 items-center">
          <div>
            <Link to="/" className="text-white text-2xl font-bold">
              Greatkhanjoy
            </Link>
          </div>
          <div>
            <p className="text-white">
              {" "}
              &copy; 2023 Greatkhanjoy. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/princeimrankhanjoy"
              className="text-white text-2xl font-bold"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCAo7oLGOCTttDsESAAHdFwg"
              className="text-white text-2xl font-bold"
            >
              <BsYoutube />
            </a>
            <a
              href="https://github.com/greatkhanjoy"
              className="text-white text-2xl font-bold"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
