import React, {useEffect, useState} from 'react';
import Technicians from '../mocks/technician.json';

const Technician = () => {
    const [technicians, setTechnicians] = useState ([]);
    
    useEffect(() => {
        setTechnicians(Technicians);
    }, []);

    return (
        <div >
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Full Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Boiler type</th>
                        <th scope='col'>Hour worked monthly</th>
                        <th scope='col'>Hour rate</th>
                        <th scope='col'>Actions</th>
                    </tr>    
                </thead>
                <tbody>
                    {technicians.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.full_name}</td>
                            <td>{item.email}</td>
                            <td>{item.boiler_type}</td>
                            <td>{item.hours_worked}</td>
                            <td>{item.hour_rate}</td>
                            <td>
                                <button style={btnStyle}>X</button>
                            </td>
                        </tr>   
                    ))}    
                </tbody>  
            </table>
        </div>
    );
}

const btnStyle = {
    backgroundColor: '#ff0000', 
    color: '#000', 
    border: 'none', 
    borderRadius: '45%', 
    padding: '3px 5px', 
    marginRight: '4px'
}

const tableStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default Technician;