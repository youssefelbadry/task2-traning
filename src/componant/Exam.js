import React, { useState } from "react";
import logo from "../image/seff_logo_transparent.png";
import Header from "./HeaderPages";
import ExamData from "../Data/ExamData";
import { useNavigate } from "react-router-dom";

function Exam() {
  const ExamItem = ExamData.map((item) => {
    return (
      <div className="content" style={{ marginTop: "15px" }}>
        <div className="letter-1">
          <p>
            <i
              className="far fa-calendar-alt mx-1"
              style={{ color: "#bf9b30" }}
            ></i>
            {item.letter1p1}
          </p>
          <p>
            <i className="far fa-clock mx-1" style={{ color: "#bf9b30" }}></i>
            {item.letter1p2}
          </p>
        </div>

        <div className="letter-2">
          <h4>{item.letter2h4}</h4>
          <span>
            Instructor: <span className="text-light">{item.letter2span}</span>
          </span>
        </div>

        <div
          className="letter-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <h2>{item.letter3h2}</h2>
          <h4>{item.letter3h4}</h4>
        </div>

        <div className="letter-5">
          <a href="home.html">
            <button className="btn btn-secondary">JOIN EXAM</button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="all-project">
        <div className="opicity">
          <Header />
          {/* ================================================================= */}
          {/* SECTION2 */}
          <div className="admin-banel container">
            <div>
              <span>Admin Panel</span>
              <div className="line"></div>
              <span>6th June 2023</span>
            </div>
          </div>

          {/* =========================================================================== */}
          <div className="container exam-contact-body">
            <div className="row">
              <div className="col-lg-12 tob-cont-body">
                <div>
                  <h2>Upcoming Exams</h2>
                </div>

                <div className="content" style={{ marginTop: "15px" }}>
                  <div className="letter-1">
                    <p>
                      <i
                        className="far fa-calendar-alt mx-1"
                        style={{ color: "#bf9b30" }}
                      ></i>
                      Wednesday, June 7th
                    </p>
                    <p>
                      <i
                        className="far fa-clock mx-1"
                        style={{ color: "#bf9b30" }}
                      ></i>
                      12:30
                    </p>
                  </div>

                  <div className="letter-2">
                    <h4>
                      Introduction to <br />
                      Data Analysis
                    </h4>
                    <span>
                      Instructor:
                      <span className="text-light"> Mohamed Nour</span>
                    </span>
                  </div>

                  <div className="letter--3">
                    <h2>LEV.1</h2>
                  </div>

                  <div className="letter-4">
                    <h4>NA</h4>
                  </div>

                  <div className="letter--5">
                    <a href="home.html">
                      <button className="btn btn-secondary">JOIN EXAM</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 botton-cont-body mt-5">
                <div>
                  <h2>Presvious Exams</h2>
                </div>
                {ExamItem}
              </div>
            </div>
          </div>
          <div className="next container">
            <ul
              className="pagination next1"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "none",
              }}
            >
              <li className="page-item">
                <a className="page-link" href="#">
                  Last
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <span className="page-link">...</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  10
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="foot-logo">
              <img
                src={logo}
                title="logo"
                height="150px"
                width="130px"
                alt="Logo"
              ></img>
            </div>
            <div className="words-footer container">
              <div className="word-right ">
                <h2>SOFTWARE ENGINEERING FOR FUTURE</h2>
                <ul>
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>TECH</li>
                  <li>BUSINESS</li>
                  <li>SECURITY</li>
                </ul>
                <ul>
                  <li>MEDICAL</li>
                  <li>STARTUPS</li>
                  <li>APPS</li>
                  <li>COURSES</li>
                  <li>CONTACT US</li>
                  <li>SPORTS</li>
                </ul>
              </div>
              <div className="left-footer">
                <p>
                  sefffuture@gmail.com{" "}
                  <i class="fas fa-envelope" style={{ color: "#bf9b30" }} />{" "}
                </p>
                <p>
                  {" "}
                  +20 109 8481 288{" "}
                  <i class="fa fa-phone" style={{ color: "#bf9b30" }}></i>
                </p>
                <p> +20155 5177 645 </p>
              </div>
            </div>
            <hr />
            <div className="after-footer container">
              <div>
                <span>@2023 EGYPT,ALL RIGHTS RESERVED</span>
              </div>
              <div>
                <ul>
                  <li>
                    <i
                      class="fab fa-facebook"
                      style={{ fontSize: "35px", color: "white" }}
                    ></i>
                  </li>
                  <li>
                    <i class="fab fa-twitter" style={{ fontSize: "35px" }}></i>
                  </li>
                  <li>
                    <i
                      class="fab fa-instagram"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </li>
                  <li>
                    <i class="fab fa-linkedin" style={{ fontSize: "35px" }}></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
