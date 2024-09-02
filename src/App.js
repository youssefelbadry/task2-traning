import logo from './logo.svg';
import './App.css';
import Bar from './componant/Bar';
import GetJobs from './componant/GetJobs';
import ApplyJob from './componant/ApplyJob';
import {Routes, Route,useNavigate } from "react-router-dom";

import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Bar/>
    <Routes>
      <Route path="/" element={<GetJobs />} />
      <Route path="/apply-job" element={<ApplyJob />} />
    </Routes>
    </Fragment>
  );
}

export default App;
