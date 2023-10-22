import React, { useEffect, useState } from 'react'
import { listDepartments, removeDepartment } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => { getAllDepartments() }, []);

    function getAllDepartments() {
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function deleteDepartment(id, departmentName) {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure you want to delete ${departmentName}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        removeDepartment(id)
                            .then(() => getAllDepartments())
                            .catch(error => console.error(error));
                        navigator('/departments');
                    }
                },
                {
                    label: 'No',
                    onClick: () => { navigator('/departments'); }
                }
            ]
        });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Departments</h2>
            <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                    <Link to={`/edit-department/${department.id}`} className='btn btn-info'>Update</Link>
                                    <Link to='/departments' className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => deleteDepartment(department.id, department.departmentName)}>Delete</Link>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDepartmentComponent