import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="ps-5 ">
        <h5 className="text-center">Copyright & Disclaimer</h5>
        <table>
          <tr>
            {" "}
            <td>
              <th>Contact Information</th>
            </td>
            <td>
              <th> Quick Links</th>
            </td>
            <td>
              <th>Social Media Links</th>
            </td>
          </tr>
          <tr>
            <td>📞 Phone : +91 8688113655</td>
            <td>
              {" "}
              🏠 <Link to="/">Home</Link>
            </td>
            <td>
              🔗 GitHub:{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Prasadkalavalapalli
              </a>
            </td>
          </tr>
          <tr>
            <td>
              📧 Email :{" "}
              <a href="mailto:prasadkalavapalli70@gmail.com">
                prasadkalavapalli70@gmail.com
              </a>
            </td>
            <td>
              👨‍💻 <Link to="/about">About Me</Link>
            </td>
            <td>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/prasadkalavalapalli"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/prasadkalavalapalli
              </a>
            </td>
          </tr>
          <tr>
            <td>📍 Location: India</td>
            <td>
              <Link to="/projects">📂 Projects</Link>
            </td>
            <td>🐦 Twitter: twitter.com/your-profile</td>
          </tr>
        </table>
      </div>
      <div className=" text-center">
        © 2025 Kalavalapalli Appala Durga Prasad. All rights reserved.
        <br />
        Designed & Developed by Kalavalapalli Appala Durga Prasad.
        <br />
        This website is for showcasing my portfolio and projects.
      </div>
    </div>
  );
}

export default Footer;
