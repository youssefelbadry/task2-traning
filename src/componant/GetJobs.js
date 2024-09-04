// import GetJobsData from "../Data/GetJobsData";
import React, { useState } from "react";
import logo from "../image/seff_logo_transparent.png";
import Header from "./HeaderPages";
import Gethobdata from "../Data/GetJobsData";
import {useNavigate,} from "react-router-dom";

function GetJobs() {
  const navigate = useNavigate();

  function movetoCreatejop(e) {
    e.preventDefault();
    navigate("/apply-job"); // Navigate to the JobForm page
  }
  
  const JobItem = Gethobdata.map((item) => {
    return (
      <div>
        <div className="tob-cont">
          <div className="tob-cont-1">
            <div>
              <span>
                {" "}
                <i
                  class="fas fa-sliders-h"
                  style={{ fontSize: "40px", color: "red", fontWeight: "bold" }}
                >
                  {" "}
                  IT{" "}
                </i>
              </span>
              <h3> {item.title}</h3>

              <p>{item.detTitle}</p>
            </div>
            <div className="price-course">
              <p>{item.p1}</p>
              <p>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "#bf9b30", fontSize: "20px" }}
                ></i>{" "}
                {item.p2}
              </p>
            </div>
          </div>

          <div className="tob-cont-2 mt-4">
            <div>{item.conP2}</div>
            <div className="tob-cont-button mt-4">
              <button className="btn btn-outline-warning">React JS</button>{" "}
              <button className="btn btn-outline-warning">Development</button>
            </div>
          </div>

          <div className="tob-cont-1 mt-4">
            <div>
              <span>
                <i className="far fa-clock" style={{ fontSize: "20px" }}></i>{" "}
                {item.time}
              </span>
            </div>
            <div>
              <button className="btn btn-warning" onClick={movetoCreatejop}>
                VIEW DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // ===============================================
  const [location, setLocation] = useState("Cairo");
  const [jobType, setJobType] = useState({
    fullTime: false,
    partTime: true,
    remote: false,
  });
  const [level, setLevel] = useState({
    entryLevel: false,
    intermediate: true,
    expert: false,
  });
  const [salaryRange, setSalaryRange] = useState({
    under4000: false,
    between400010000: true,
    moreThan10000: false,
  });

  const handleJobTypeChange = (e) => {
    setJobType({ ...jobType, [e.target.name]: e.target.checked });
  };

  const handleLevelChange = (e) => {
    setLevel({ ...level, [e.target.name]: e.target.checked });
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange({ ...salaryRange, [e.target.name]: e.target.checked });
  };

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
          <div className="hheader container">
            <div className="line-hight">
              <h1>Look for a job ?</h1>
              <p>
                Here you can find your bestmatch <br />
                between 1000s of updated and available positions.
              </p>
              <div className="line"></div>
            </div>
            <div className="search">
              <div controlId="floatingInputGrid" className=" form-floating">
                <div className="search-container">
                  <input
                    className="form form-control"
                    type="text"
                    placeholder="Search for a job"
                  />
                  <i class="fas fa-search search-icon"></i>
                </div>
              </div>

              <div className="btn-admin">
                <button className="btn" style={{ backgroundColor: "#bf9b30" }}>
                  SEARCH
                </button>
              </div>
            </div>
          </div>
          {/* =========================================================================== */}
          <div className="container contact-body">
            <div className="row">
              <div className="col-lg-4 left-cont-body">
                <div className="filter-container">
                  <div className="filter-header">
                    <h5>Filters</h5>
                    <h5 style={{ color: "#bf9b30" }}>Clear All</h5>
                  </div>
                  <div className="filter-group">
                    <label>Location</label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="filter-select"
                    >
                      <option value="Cairo">Cairo</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Job Type</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="fullTime"
                        checked={jobType.fullTime}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Full Time</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="partTime"
                        checked={jobType.partTime}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Part Time</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="remote"
                        checked={jobType.remote}
                        onChange={handleJobTypeChange}
                      />
                      <label className="filter-label">Remote</label>
                    </div>
                  </div>
                  <div className="filter-group">
                    <label>Level</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="entryLevel"
                        checked={level.entryLevel}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Entry Level</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="intermediate"
                        checked={level.intermediate}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Intermediate</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="expert"
                        checked={level.expert}
                        onChange={handleLevelChange}
                      />
                      <label className="filter-label">Expert</label>
                    </div>
                  </div>
                  <div className="filter-group">
                    <label>Salary Range</label>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="under4000"
                        checked={salaryRange.under4000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">Under 4000 EGP</label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="between400010000"
                        checked={salaryRange.between400010000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">
                        Between 4000 & 10000 EGP
                      </label>
                    </div>
                    <div className="pb-1">
                      <input
                        type="checkbox"
                        name="moreThan10000"
                        checked={salaryRange.moreThan10000}
                        onChange={handleSalaryRangeChange}
                      />
                      <label className="filter-label">
                        More Than 10000 EGP
                      </label>
                    </div>
                  </div>
                </div>
                <button className="create-cv-button mt-3">
                  CREATE YOUR CV
                </button>
              </div>

              <div className="col-lg-8 right-cont-body">{JobItem}</div>
            </div>
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

export default GetJobs;
