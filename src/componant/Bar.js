import React from 'react'

function Bar() {
  return (
    <div>
    <div className="barrrrr">
      <nav className="navbar navbar-expand-lg navbar-custom bar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
          >
            <span className="navbar-toggler-icon" id="icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bbaarr"
            id="basic-navbar-nav"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <ul className="navbar-nav aaa admin">
              <li className="nav-item">
                <a className="nav-link" href="#articles">
                  STUDENT PORTAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#jobs">
                  EXAMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#userstudent">
                  PROFILE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cjob">
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Bar