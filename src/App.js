import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import EmployeeGrid from "./components/EmployeeGrid";
import { EmployeeProvider } from './EmployeeContext';
import EmployeeDetails from './EmployeeDetails';
import FileUploader from './components/FileUploader';



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
        <FileUploader></FileUploader>
        
        <EmployeeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<EmployeeGrid employees={employees}/>}></Route>
            <Route path="/details/:empId" element={<EmployeeDetails></EmployeeDetails>}></Route>
          </Routes>
        </Router>
        </EmployeeProvider>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
