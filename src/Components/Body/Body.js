import React, { useEffect } from "react";
import style from "./body.module.css";
import { Container } from "reactstrap";
import dataImg from "../../assets/high-level.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img.png";
import img3 from "../../assets/img6.png";
import img4 from "../../assets/image4.png";
import { FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const content = (
    <>
      <div>
        <section>
          <Container>
            <div className={`${style.box} row mx-auto`}>
              <div className="col-xl-10">
                <div className={style.rect}>
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={dataImg}
                        alt="High-level"
                        className={style.dataImg}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className={style.dataText}>
                        <h1 style={{ color: "#212353" }}>
                          We are a high level data storage
                        </h1>
                        <p class="text-muted">
                          The place to store various data that you can access at
                          any time through the internet and where you carry it.
                          this very flexible storage area has a high level of
                          security. To enter your own data you must enter teh
                          password that you created when you registered in this
                          Data Warehouse.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="text-center">
              <h1>Features</h1>
              <p className="text-muted">
                Some of the features and advantages that we provide for those of
                you <br />
                who store data in this Data Warehouse.
              </p>
            </div>
            <div className="row ml-5">
              <div className="col-sm-6">
                <div className="mt-5">
                  <img src={img1} alt="img-5" className={style.iconImg} />
                  <svg
                    width="434"
                    height="358"
                    viewBox="0 0 434 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
                      fill="#68C9BA"
                    />
                  </svg>
                  <div className={style.semSvg}>
                    <svg
                      width="231"
                      height="232"
                      viewBox="0 0 231 232"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.014 126.03C234.738 155.207 204.363 183.381 150.903 184.141C44.6159 177.137 20.6314 83.0074 28.6641 61.9028C36.6967 40.7982 60.6151 40.2221 96.054 83.2151C131.493 126.208 176.858 89.5572 209.014 126.03Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className={style.svgText}>
                    <h5>Search Data</h5>
                    <p className={` text-muted`}>
                      Don't worry if your data is very large, the Data Warehouse
                      provides a search engine which is useful for making it
                      easier to find a data effectively saving time
                    </p>
                    <p className="mt-3">
                      Learn more <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mt-5">
                  <img src={img4} alt="img-5" className={style.iconImg} />
                  <svg
                    width="434"
                    height="358"
                    viewBox="0 0 434 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
                      fill="#68C9BA"
                    />
                  </svg>
                  <div className={style.semSvg}>
                    <svg
                      width="231"
                      height="232"
                      viewBox="0 0 231 232"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.014 126.03C234.738 155.207 204.363 183.381 150.903 184.141C44.6159 177.137 20.6314 83.0074 28.6641 61.9028C36.6967 40.7982 60.6151 40.2221 96.054 83.2151C131.493 126.208 176.858 89.5572 209.014 126.03Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className={style.svgText}>
                    <h5>Search Data</h5>
                    <p className={` text-muted`}>
                      Don't worry if your data is very large, the Data Warehouse
                      provides a search engine which is useful for making it
                      easier to find a data effectively saving time
                    </p>
                    <p className="mt-3">
                      Learn more <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mt-5">
                  <img src={img2} alt="img-5" className={style.iconImg} />
                  <svg
                    width="434"
                    height="358"
                    viewBox="0 0 434 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
                      fill="#68C9BA"
                    />
                  </svg>
                  <div className={style.semSvg}>
                    <svg
                      width="231"
                      height="232"
                      viewBox="0 0 231 232"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.014 126.03C234.738 155.207 204.363 183.381 150.903 184.141C44.6159 177.137 20.6314 83.0074 28.6641 61.9028C36.6967 40.7982 60.6151 40.2221 96.054 83.2151C131.493 126.208 176.858 89.5572 209.014 126.03Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className={style.svgText}>
                    <h5>Search Data</h5>
                    <p className={` text-muted`}>
                      Don't worry if your data is very large, the Data Warehouse
                      provides a search engine which is useful for making it
                      easier to find a data effectively saving time
                    </p>
                    <p className="mt-3">
                      Learn more <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mt-5">
                  <img src={img3} alt="img-5" className={style.iconImg} />
                  <svg
                    width="434"
                    height="358"
                    viewBox="0 0 434 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
                      fill="#68C9BA"
                    />
                  </svg>
                  <div className={style.semSvg}>
                    <svg
                      width="231"
                      height="232"
                      viewBox="0 0 231 232"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M209.014 126.03C234.738 155.207 204.363 183.381 150.903 184.141C44.6159 177.137 20.6314 83.0074 28.6641 61.9028C36.6967 40.7982 60.6151 40.2221 96.054 83.2151C131.493 126.208 176.858 89.5572 209.014 126.03Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className={style.svgText}>
                    <h5>Search Data</h5>
                    <p className={` text-muted`}>
                      Don't worry if your data is very large, the Data Warehouse
                      provides a search engine which is useful for making it
                      easier to find a data effectively saving time
                    </p>
                    <p className="mt-3">
                      Learn more <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
  return content;
};

export default Body;
