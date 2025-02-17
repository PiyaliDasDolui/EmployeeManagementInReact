import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import EmployeeGrid from "./components/EmployeeGrid";



function App() {
  const [employees, setEmployes] = useState([]);

  useEffect(() =>{
    const fetchEmployees = async() =>{
      const response = await fetch("employee.json");
      const employee = await response.json();
      setEmployes(employee);
    };
    fetchEmployees();
  },[])
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<EmployeeGrid employees={employees}/>}></Route>
          </Routes>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
