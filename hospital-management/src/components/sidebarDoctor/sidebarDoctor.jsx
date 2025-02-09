import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaSyringe } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import { MdEngineering } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import './sidebarDoctor.css';
import AuthContext from '../../AuthContext';

const SidebarDoctor = () => {
    const { pdashboardState, setPdashboardState } = React.useContext(AuthContext);
    let ele = useRef(null);
    let shouldSetEle = useRef(true);

    useEffect(() => {
        if (shouldSetEle.current) {
            shouldSetEle.current = false;
            if (pdashboardState === 0) {
                ele.current = document.getElementById('idprofile');
            } else if (pdashboardState === 1) {
                ele.current = document.getElementById('idapp');
            } else if (pdashboardState === 2) {
                ele.current = document.getElementById('idnewapp');
            } else if(pdashboardState === 3) {
                ele = document.getElementById('idapproves');
            } else if(pdashboardState === 4) {
                ele = document.getElementById('idsalary');
            } else if (pdashboardState === 5) {
                ele.current = document.getElementById('idsalary');
            } else if (pdashboardState === 6) {
                ele.current = document.getElementById('idhiremachine');
            }
            if (ele.current) {
                ele.current.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            }
        }
    }, [pdashboardState]);

    const handleClick = (num) => {
        if (ele.current) {
            ele.current.style.backgroundColor = 'rgb(0, 87, 97)';
            ele.current = null;
        }
        if (num === 0) ele.current = document.getElementById('idprofile');
        else if (num === 1) ele.current = document.getElementById('idapp');
        else if (num === 2) ele.current = document.getElementById('idnewapp');
        else if (num === 3) ele.current = document.getElementById('idapproves');
        else if (num === 4) ele.current = document.getElementById('idsalary');
        else if (num === 5) ele.current = document.getElementById('idhistory');
        else if (num === 6) ele.current = document.getElementById('idhiremachine'); // Machine Hiring

        if (ele.current) {
            ele.current.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
        setPdashboardState(num);
    };

    return (
        <div className="sidebar">
            <h2 className="text-light mb-4">Doctor Dashboard</h2>
                <Link to={'/'}>
                    <FaHome /> Home
                </Link>
                <a onClick={() => {handleClick(0)}} id='idprofile'>
                    <CgProfile /> Profile
                </a>
                <a onClick={() => {handleClick(1)}} id='idapp'>
                    <FaCalendarAlt /> Appointments
                </a>
                <a onClick={() => {handleClick(2)}} id='idnewapp'>
                    <FaSyringe /> Surgery
                </a>
                <a onClick={() => {handleClick(3)}} id='idapproves'>
                    <MdPending /> Approve Bills
                </a>
                <a onClick={() => {handleClick(4)}} id='idsalary'>
                    <MdPending /> Salary 
                </a>
                <a onClick={() => {handleClick(5)}} id='idhistory'>
                    <MdPending /> History 
                </a>
                <a onClick={() => handleClick(6)} id='idhiremachine'>
                <MdEngineering /> Hire Machine
                </a>
        </div>
    );
};

export default SidebarDoctor;
