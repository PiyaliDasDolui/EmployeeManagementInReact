import React,{useContext} from "react";
import './styles.css';
import { useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeContext";

export default function EmployeeDetails(){
    const {empId} = useParams();
    const employees =useContext(EmployeeContext);
    const employee = employees.find((b) => b.id === parseInt(empId));

    return(
        <div>
            Employee details: 
            <br></br>
            <ul>
                <li>
                    {employee.title}
                </li>
                <li>{employee.gender}</li>
                <li>{employee.grade}</li>
            </ul>
        </div>
    )


}