import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./header.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import heroImg from "../../assets/heroImg.png";

const Header = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const head = (
    <>
      <div>
        <NavBar />
        <div className="container">
          <h1
            data-aos="fade-right"
            className={`${style.heroText} font-weight-bold mt-5`}
          >
            Save your data
            <br />
            storage here.
          </h1>
          <div className="row">
            <div className="col-md-3" data-aos="fade-right">
              <p className="text-muted" style={{ marginTop: "3.2rem" }}>
                Data Warehouse is a data storage area that has been tested for
                security, so you can stor your data here safely but not be
                afraid of being stolen by other.
              </p>
              <div className={style.heroBtn}>
                <button className={style.heroBtnLearn}>Learn more</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style.imgSec} data-aos="fade-left">
                <img
                  src={heroImg}
                  alt="man-and-woman-using-earphones"
                  className={`${style.heroImg}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return head;
};

export default Header;
