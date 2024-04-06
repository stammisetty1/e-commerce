import React from "react";
import { FaGithubSquare, FaLinkedin, FaSuitcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div>
          <p>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/siva-ashok-kumar-tammisetty/"
                target="_blank"
                rel="portfolio"
                className="developer-link"
              >
                <span>
                  <FaLinkedin
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </span>
              </a>
              <a
                href="https://github.com/stammisetty1"
                target="_blank"
                rel="portfolio"
                className="developer-link"
              >
                <span>
                  <FaGithubSquare
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </span>
              </a>
            </div>
          </p>
        </div>
        <div>
          <p className="developer">
            Developed by{" "}
            <a
              href="https://fantastic-pastelito-8258f7.netlify.app/"
              target="_blank"
              rel="portfolio"
              className="developer-link"
            >
              Siva Tammisetty
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
