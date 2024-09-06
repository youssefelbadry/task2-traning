import logo from './logo.svg';
import './App.css';
import Bar from './componant/Bar';
import GetJobs from './componant/GetJobs';
import ApplyJob from './componant/ApplyJob';
import {Routes, Route,useNavigate } from "react-router-dom";
import { Fragment } from 'react';
import SubmitJob from './componant/SubmitJob';
import Profile from './componant/Profile';
import EditProfile from './componant/EditProfile';
import Exam from './componant/Exam';

function App() {
  return (
    <Fragment>
    <Bar/>
    <Routes>
      <Route path="/" element={<GetJobs />} />
      <Route path="/apply-job" element={<ApplyJob />} />
      <Route path="/submit-job" element={<SubmitJob/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/edit-profile" element={<EditProfile/>} />
      <Route path="/exam" element={<Exam/>} />
    </Routes>
    </Fragment>
  );
}

export default App;
