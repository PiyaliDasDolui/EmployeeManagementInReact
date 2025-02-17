import React from "react";
import "../styles.css";
import EmployeeCard from "./EmployeeCard";


export default function EmployeeGrid({employees}){
    return(
        <div className="movies-grid">
            {
                employees.map((employee) => (
                    <EmployeeCard employee={employee}></EmployeeCard>
                ))
            }
        </div>
    )
}