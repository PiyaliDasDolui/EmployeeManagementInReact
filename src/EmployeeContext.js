import React, { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();
export const EmployeeProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        fetch("/employee.json")
        .then((response) => response.json())
        .then((data) => setEmployees(data))
        .catch((err) => console.log(err));
    },[]);

    return <EmployeeContext value={employees}>{children}</EmployeeContext>

}