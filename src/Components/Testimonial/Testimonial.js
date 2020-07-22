import React from "react";
import style from "./testimonial.module.css";

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <div className={style.testimonialBox}>
          <h1>Testimonial</h1>
          <div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-sm-3">
                    <div
                      className="w-100 rounded-circle"
                      style={{ border: "4px solid red" }}
                    ></div>
                    <div className="col-sm-9">
                      <h6>Ifeanyi Lucky</h6>
                      <span>www.ifeanyi.com</span>
                      <p>
                        lorem ispsum dolof dufon aid not for today's protetions
                        please re read what i just sent to u biko.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
