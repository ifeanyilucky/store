import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <div className="row">
            <div className="col-md-3">
              <div className={style.footerBrand}>
                <svg
                  width="49"
                  height="35"
                  viewBox="0 0 49 35"
                  fill="none"
                  w
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
                  <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
                </svg>

                <span> Data Ware House</span>
              </div>
              <div className="mt-5">
                <p>
                  Warehouse Society, 234
                  <br />
                  Bahagia Ave Street PRBW 29281
                </p>
              </div>
              <div className="mt-4">
                <p>info@Warehouse.project</p>
                <p>09071499826 (Main)</p>
              </div>
            </div>
            <div className="col-sm-3">
              <h5 className="mb-5">About</h5>
              <ul className="list-unstyled">
                <li>Profile</li>
                <li>Features</li>
                <li>Careers</li>
                <li>DW news</li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};
export default Footer;
