import React from "react";
import "../styles.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function EmployeeCard({employee}){
    const handleError = (e) =>{
        e.target.src = "images/default.jpg";
    }
    return(
        <div key={employee.id} className="movie-card">
            <img src={`images/${employee.image}`} alt={employee.title} onError={handleError}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">
                    {employee.title}
                </h3>
                <p className="movie-card-genre">{employee.genre}</p>
                <p className="movie-card-rating">{employee.grade}</p>
            </div>
        </div>
    );
} 