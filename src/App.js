import logo from './logo.svg';
import './App.css';
import Bar from './componant/Bar';
import GetJobs from './componant/GetJobs';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Bar/>
    <GetJobs/>
    </Fragment>
  );
}

export default App;
